 <script> 
  import "../style.css";
  import Header from "../lib/component/Header.svelte";
  import Footer from "../lib/component/Footer.svelte";
  import '@beyonk/gdpr-cookie-consent-banner/banner.css'; // optional, you can also define your own styles
  import GdprBanner from '@beyonk/gdpr-cookie-consent-banner';
  /* import 'animate.css'; */
  /* import 'wow.js'; */
    function initAnalytics () {
    // marketingové analytiky
  }
  const props = {
  cookieName: 'beyonk_gdpr',
  visible: true,
  cookieConfig: {
    domain: 'malyleo.cz',
    path: '/'
  },
  heading: 'GDPR Oznámení',
  description: 'Abychom poskytli co nejlepší služby, používáme k ukládání a/nebo přístupu k informacím o zařízení, technologie jako jsou soubory cookies. Souhlas s těmito technologiemi nám umožní zpracovávat údaje, jako je chování při procházení nebo jedinečná ID na tomto webu. Nesouhlas nebo odvolání souhlasu může nepříznivě ovlivnit určité vlastnosti a funkce. Zde jsou  <a href="/gdpr">zásady použítí</a>.',

  /**
   * All the button labels and aria-label content.
   **/
  acceptLabel: 'Confirm all',
  rejectLabel: 'Reject all',
  settingsLabel: 'Preferences',
  closeLabel: 'Zavři okno',
  editLabel: 'Edit settings',

  /**
   * These are the default opt-ins and their descriptions.
   * When value is set to true, the option will automatically be checked on load.
   *
   * If you want to hide a category, simply set it to false, e.g. 'marketing: false'
   **/
  choices: {
      necessary: {
          label: "Nutné",
          description: "Used for cookie control. Can't be turned off.",
          value: true
      },
      tracking: {
          label: "Tracking cookies",
          description: "Used for advertising purposes.",
          value: true
      },
      analytics: {
          label: "Analytics cookies",
          description: "Used to control Google Analytics, a 3rd party tool offered by Google to track user behavior.",
          value: true
      },
      marketing: {
          label: "Marketing cookies",
          description: "Used for marketing data.",
          value: true
      }
  },
  showEditIcon: true
}
 </script>
<Header />
<slot />
<Footer />
<GdprBanner cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} />
