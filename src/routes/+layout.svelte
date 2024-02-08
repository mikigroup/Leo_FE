<script>
  import "../style.css";
  import '../lib/component/gdpr/banner.css'
  import Header from "../lib/component/Header.svelte";
  import Footer from "../lib/component/Footer.svelte";
  import Banner from "../lib/component/gdpr/Banner.svelte";
  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit"
  injectSpeedInsights();
</script>

<Header />
<slot />
<Footer />
<Banner cookieName="test_gdpr" />
<!-- <GdprBanner bind:this={gdprBanner} cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} /> -->
