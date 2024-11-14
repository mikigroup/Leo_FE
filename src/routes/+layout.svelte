<script>
  import "../style.css";
  import "$lib/component/gdpr/banner.css"
  import Header from "$lib/component/Header.svelte";
  import Footer from "$lib/component/Footer.svelte";
  import Banner from "$lib/component/gdpr/Banner.svelte";
	import { onMount } from "svelte";
	import Nav from "$lib/component/Nav.svelte";

	// Koncovky nekonči na konci řádku
	onMount(() => {
	function preventWidows(selector) {
		const elements = document.querySelectorAll(selector);

		elements.forEach(element => {
			element.innerHTML = element.innerHTML.replace(/\b(a|i|o|u|s|k|v|z) /gi, "$1&nbsp;");
		});
	}
	preventWidows("p");
	}
)
</script>

<Nav />
<Header />
<slot />
<Footer />
<Banner cookieName="gdpr" />
<!-- <GdprBanner bind:this={gdprBanner} cookieName="props.beyonk_gdpr" {...props} on:analytics={initAnalytics} /> -->

<style lang="scss">
	@use "$lib/styles/_mixins.scss";
  @use "$lib/styles/_variables.scss";
</style>