export interface CookieChoice {
	label: string;
	description: string;
	value: boolean;
}

export interface CookieChoices {
	necessary: CookieChoice;
	tracking: CookieChoice;
	analytics: CookieChoice;
	marketing: CookieChoice;
	[key: string]: CookieChoice;
}

export interface CookieConfig {
	path?: string;
	domain?: string;
	sameSite?: 'strict' | 'lax' | 'none';
	expires?: Date;
}