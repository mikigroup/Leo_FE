<script>
  import "../style.css";
  import Header from "../lib/component/Header.svelte";
  import Footer from "../lib/component/Footer.svelte";
  import "@beyonk/gdpr-cookie-consent-banner/banner.css"; // konfig designu
  import GdprBanner from "@beyonk/gdpr-cookie-consent-banner";
  import { onMount } from "svelte";
  /* import 'animate.css'; */
  /* import 'wow.js'; */

  function initAnalytics() {
    // marketingové analytiky
  }
  const props = {
    cookieName: "beyonk_gdpr",
    visible: true,
    cookieConfig: {
      domain: "malyleo.cz",
      path: "/",
    },
    heading: "GDPR Oznámení",
    description:
       'Abychom poskytli co nejlepší služby, používáme k ukládání a/nebo přístupu k informacím o zařízení, technologie jako jsou soubory cookies. Souhlas s těmito technologiemi nám umožní zpracovávat údaje, jako je chování při procházení nebo jedinečná ID na tomto webu. Nesouhlas nebo odvolání souhlasu může nepříznivě ovlivnit určité vlastnosti a funkce. Zde jsou  <a href="/gdpr">zásady použítí</a>. ',
     /* All the button labels and aria-label content. */
    acceptLabel: "Confirm all",
    rejectLabel: "Reject all",
    settingsLabel: "Preferences",
    closeLabel: "Zavři okno",
    editLabel: "Edit settings",
/*   * These are the default opt-ins and their descriptions.
     * When value is set to true, the option will automatically be checked on load.
     *
     * If you want to hide a category, simply set it to false, e.g. 'marketing: false' */
    choices: {
      necessary: {
        label: "Nutné",
        description: "Tyto šušenky jsou nutné pro základní fungování webu",
        value: true,
      },
      tracking: {
        label: "Sledovací",
        description: "Používá se pro reklamní systémy",
        value: true,
      },
      analytics: {
        label: "Analytické",
        description: "Google Analytics a další analytické nástroje 3.stran",
        value: true,
      },
      marketing: {
        label: "Marketingové",
        description: "Použítí pro marketingové data",
        value: true,
      },
    },
    showEditIcon: true,
  };



 /* onMount(() => {
    const userPreferencesGDPR = (preferences) => {
      document.cookie = `userPreferencesGDPR=${encodeURIComponent(JSON.stringify(preferences))};path=/;`;
    };

    document.addEventListener('consentChanged', (event) => {
      // Zde byste získali aktuální hodnoty volby uživatele
      // Například: const userPreferences = event.detail;
      userPreferencesGDPR(event.detail);
    });
     document.body.addEventListener('click', event => {
    if (event.target.matches('.cookieConsent__Button--Close')) {
      const userPreferencesGDPR = { //default hodnoty
        necessary: true,
        tracking: true,
        analytics: true,
        marketing: true,
      };
      document.cookie = `userPreferencesGDPR=${encodeURIComponent(JSON.stringify(userPreferencesGDPR))};path=/;`;
    }
  }); 

    // Alternativně, pokud GdprBanner neposkytuje události nebo callbacky,
    // možná budete muset přidat vlastní logiku pro získání volby uživatele
  });*/

  let gdprBanner;

  onMount(() => {
    // Funkce pro aktualizaci cookie s preferencemi uživatele
    const updatePreferences = (preferences) => {
      document.cookie = `userPreferencesGDPR=${encodeURIComponent(JSON.stringify(preferences))};path=/;`;
    };

    // Příklad pro zachycení události 'consentChanged' a aktualizaci preferencí
    document.addEventListener('consentChanged', (event) => {
      updatePreferences(event.detail);
    });

    // Příklad pro nastavení defaultních preferencí při kliknutí na tlačítko zavření
    document.body.addEventListener('click', event => {
      if (event.target.matches('.cookieConsent__Button--Close')) {
        const defaultPreferences = {
          necessary: true,
          tracking: true,
          analytics: true,
          marketing: true,
        };
        updatePreferences(defaultPreferences);
      }
    });
  });

</script>

<Header />
<slot />
<Footer />
<GdprBanner bind:this={gdprBanner} cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} />
