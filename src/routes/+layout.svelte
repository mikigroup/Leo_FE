<script>
  import "../style.css";
  import '../lib/component/gdpr/banner.css'
  import Header from "../lib/component/Header.svelte";
  import Footer from "../lib/component/Footer.svelte";
  import Banner from "../lib/component/gdpr/Banner.svelte";
	import { onMount } from "svelte";

	onMount(() => {

	function preventWidows(selector) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(element => {
			element.innerHTML = element.innerHTML.replace(/\b(a|i|o|u|s|k|v|z) /gi, '$1&nbsp;');
		});
	}

	preventWidows('p');
	}
)

</script>

<Header />
<slot />
<Footer />
<Banner cookieName="gdpr" />
<!-- <GdprBanner bind:this={gdprBanner} cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} /> -->
