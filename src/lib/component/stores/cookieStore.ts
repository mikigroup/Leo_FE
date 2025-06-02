import { writable } from "svelte/store";
import type {
	CookieCategory,
	CookieCategoryConfig,
	CookieConsentConfig
} from "../services/cookieService";

// Výchozí kategorie cookies
const defaultCookieCategories: CookieConsentConfig = {
	necessary: {
		id: "necessary",
		label: "Nezbytné",
		description: "Nezbytné pro správné fungování webu Leo.cz",
		value: true,
		required: true
	},
	preferences: {
		id: "preferences",
		label: "Funkční",
		description: "Zlepšují váš zážitek z používání webu",
		value: false,
		required: false
	},
	statistics: {
		id: "statistics",
		label: "Analytické",
		description: "Pomáhají nám rozumět tomu, jak web používáte",
		value: false,
		required: false
	},
	marketing: {
		id: "marketing",
		label: "Marketingové",
		description: "Umožňují zobrazování relevantních reklam",
		value: false,
		required: false
	}
};

// Funkce pro načtení cookie z prohlížeče
function loadCookieConsent(
	cookieName: string = "gdpr_consent"
): Record<string, boolean> | null {
	if (typeof document === "undefined") return null; // Pro SSR

	try {
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith(`${cookieName}=`));

		if (cookie) {
			return JSON.parse(decodeURIComponent(cookie.split("=")[1]));
		}
	} catch (error) {
		console.error("Chyba při načítání cookie souhlasu:", error);
	}

	return null;
}

// Inicializace stavu na základě cookie
function initCookieState(
	cookieName: string,
	initialCategories: CookieConsentConfig
): CookieConsentConfig {
	const savedConsent = loadCookieConsent(cookieName);

	if (!savedConsent) return initialCategories;

	// Aplikace souhlasu na kategorie
	const updatedCategories = { ...initialCategories };

	for (const [key, value] of Object.entries(savedConsent)) {
		if (updatedCategories[key]) {
			updatedCategories[key] = {
				...updatedCategories[key],
				value: key === "necessary" ? true : value // Nutné cookies vždy povoleny
			};
		}
	}

	return updatedCategories;
}

// Vytvoření store pro cookie kategorie
export function createCookieStore(
	cookieName: string = "gdpr_consent",
	initialCategories: CookieConsentConfig = defaultCookieCategories
) {
	// Inicializace z existujícího cookie souhlasu
	const initialState = initCookieState(cookieName, initialCategories);
	const { subscribe, set, update } =
		writable<CookieConsentConfig>(initialState);

	// Uložení cookie souhlasu
	function saveConsent(categories: CookieConsentConfig): void {
		const consent: Record<string, boolean> = {};

		// Převod konfigurací na hodnoty true/false
		for (const [key, category] of Object.entries(categories)) {
			consent[key] = category.value;
		}

		// Uložení do cookie
		const expires = new Date();
		expires.setFullYear(expires.getFullYear() + 1); // Platnost 1 rok

		document.cookie = `${cookieName}=${encodeURIComponent(JSON.stringify(consent))};expires=${expires.toUTCString()};path=/;SameSite=Strict`;

		// Dispatch eventů pro jednotlivé kategorie
		for (const [key, value] of Object.entries(consent)) {
			if (value) {
				window.dispatchEvent(new CustomEvent(`consent:${key}`));
			}
		}
	}

	return {
		subscribe,

		// Akceptace všech cookies
		acceptAll: () => {
			update((categories) => {
				const updatedCategories = { ...categories };

				for (const key in updatedCategories) {
					updatedCategories[key] = {
						...updatedCategories[key],
						value: true
					};
				}

				saveConsent(updatedCategories);
				return updatedCategories;
			});
		},

		// Odmítnutí volitelných cookies
		rejectAll: () => {
			update((categories) => {
				const updatedCategories = { ...categories };

				for (const key in updatedCategories) {
					updatedCategories[key] = {
						...updatedCategories[key],
						value: updatedCategories[key].required // Ponechat pouze vyžadované cookies (necessary)
					};
				}

				saveConsent(updatedCategories);
				return updatedCategories;
			});
		},

		// Uložení aktuálního výběru
		saveSelection: () => {
			update((categories) => {
				saveConsent(categories);
				return categories;
			});
		},

		// Aktualizace jedné kategorie
		updateCategory: (categoryId: CookieCategory, value: boolean) => {
			update((categories) => {
				if (!categories[categoryId]) return categories;

				// Nutné cookies nelze vypnout
				if (categoryId === "necessary" && !value) return categories;

				const updatedCategories = {
					...categories,
					[categoryId]: {
						...categories[categoryId],
						value
					}
				};

				return updatedCategories;
			});
		},

		// Kontrola, zda je kategorie přijata
		isCategoryAccepted: (categoryId: CookieCategory): boolean => {
			let isAccepted = false;

			// Jednorázově získáme hodnotu ze store bez subscribu
			subscribe((categories) => {
				isAccepted = categories[categoryId]?.value ?? false;
			})();

			return isAccepted;
		},

		// Kontrola, zda existuje souhlas s cookies
		hasConsent: (): boolean => {
			return loadCookieConsent(cookieName) !== null;
		},

		// Reset na výchozí hodnoty (inicializace z cookie)
		reset: () => {
			const resetState = initCookieState(cookieName, initialCategories);
			set(resetState);
		}
	};
}

// Vytvoření hlavního cookie store pro Leo.cz
export const cookieStore = createCookieStore("leo_cookies");
