<script>
  import "../style.css";
  import "$lib/component/gdpr/banner.css"
  import Footer from "$lib/component/Footer.svelte";
  import GDPR from "$lib/component/gdpr/Gdpr.svelte";
	import { onMount } from "svelte";
	import Nav from "$lib/component/Nav.svelte";
	import { cookieStore } from "$lib/component/stores/cookieStore";

	let showBanner = false;

	// Koncovky nekončily na konci řádku
	onMount(() => {
		// Kontrola, zda má uživatel uložený souhlas s cookies
		showBanner = !cookieStore.hasConsent();

		function preventWidows(selector) {
			const elements = document.querySelectorAll(selector);

			elements.forEach(element => {
				element.innerHTML = element.innerHTML.replace(/\b(a|i|o|u|s|k|v|z) /gi, "$1&nbsp;");
			});
		}
		preventWidows("p");
	});
</script>

<Nav />
<slot />
<Footer />
<GDPR
	cookieName="stastne_srdce_cookies"
	visible={showBanner}
	showEditIcon={true}
	on:show={() => {}}
	on:accept-all={() => {
		cookieStore.acceptAll();
		showBanner = false;
	}}
	on:reject-all={() => {
		cookieStore.rejectAll();
		showBanner = false;
	}}
	on:accept-selection={() => {
		cookieStore.saveSelection();
		showBanner = false;
	}}
	class="fixed bottom-4 left-4 z-50"
/>

<style lang="scss">
	@use "$lib/styles/_mixins.scss";
  @use "$lib/styles/_variables.scss";
</style>