<script>
	import { page } from "$app/stores";
	import { superForm } from "sveltekit-superforms";
	import SuperDebug from "sveltekit-superforms";
	import { schema } from "./schemaForm";
	import { zod } from "sveltekit-superforms/adapters";
	import CheckBox from "$lib/component/CheckBox.svelte";
	export let data;

	const { form, errors, message, enhance, delayed, options } = superForm(
		data.form,
		{
			resetForm: true,
			validators: zod(schema),
			dataType: "json",
			/*    async onSubmit({ cancel }) {
      const result = await validateForm({ update: true });
      if (result.valid) {
      } else {
      }
    },
    async onUpdated({ form }) {}, */
		}
	);
	$: options.validators = zod(schema);

	function formatPhoneNumber(value) {
		// Odstranit mezery a nečíselné znaky
		const numbers = value.replace(/\D/g, '');
		// Omezit na prvních 9 číslic
		const truncated = numbers.slice(0, 9);
		// Rozdělit po třech
		return truncated.replace(/(\d{3})(?=\d)/g, '$1 ').trim();
	}

	function handlePhoneInput(e) {
		const formatted = formatPhoneNumber(e.target.value);
		e.target.value = formatted;
		// Uložit do formuláře bez mezer
		$form.telephone = formatted.replace(/\s/g, '');
	}


	function handleEmailInput(e) {
		let value = e.target.value;
		// Zajistíme @ na začátku
		if (!value.startsWith('@')) {
			value = '@' + value.replace('@', '');
		}
		// Omezíme délku na 50 znaků
		value = value.slice(0, 50);
		// Aktualizujeme hodnotu
		$form.email = value;
	}
</script>

<form class="w-full p-4 mt-10 flex justify-center shadow-xl px-4 scroll-mt-16 lg:scroll-mt-32 xl:scroll-mt-56" method="POST" id="form">
	<div class="flex flex-col space-y-6 px-3">
		<h2 class="font-bold pb-10 text-4xl">Zeptejte se</h2>
		<div class="flex">
			<div class="flex flex-col lg:flex-row">
				<div class="">
					<div class="flex flex-col md:flex-row mb-6 mx-3 gap-6">
						<div class="w-full mb-6 md:w-1/2 md:mb-0">
							<label class="block mb-2 text-xs" for="first_name"> Jméno </label>
							<input
								class="block w-full px-4 py-3"
								id="first_name"
								type="text"
								placeholder=""
								aria-invalid={$errors.first_name ? "true" : "false"}
								bind:value={$form.first_name} />
							{#if $errors.first_name}
								<p class="text-xs italic text-red-500">{$errors.first_name}</p>
							{/if}
						</div>
						<div class="w-full md:w-1/2">
							<label class="block mb-2 text-xs" for="last_name">
								Příjmení
							</label>
							<input
								class="block w-full px-4 py-3"
								id="last_name"
								type="text"
								placeholder=""
								aria-invalid={$errors.last_name ? "true" : "false"}
								bind:value={$form.last_name} />
							{#if $errors.last_name}
								<p class="text-xs italic text-red-500">{$errors.last_name}</p>
							{/if}
						</div>
					</div>

					<div class="flex flex-col md:flex-row mb-6 mx-3 gap-6">
						<div class="w-full mb-6 md:w-1/2 md:mb-0 mt-5">
							<label class="block mb-2 text-xs" for="email"> Email </label>
							<input
								class="block w-full px-4 py-3"
								id="email"
								type="text"
								maxlength="40"
								placeholder=""
								value="@"
								aria-invalid={$errors.email ? "true" : "false"}
							/>
							{#if $errors.email}
								<p class="text-xs italic text-red-500">{$errors.email}</p>
							{/if}
						</div>
						<div class="w-full md:w-1/2 mt-5">
							<label class="block mb-2 text-xs" for="telephone">
								Telefon
							</label>
							<input
								class="block w-full px-4 py-3"
								id="telephone"
								type="text"
								inputmode="numeric"
							pattern="\d*"
							placeholder="123 456 789"
							aria-invalid={$errors.telephone ? "true" : "false"}
							value={formatPhoneNumber($form.telephone)}
							on:input={handlePhoneInput}
							/>
						</div>
					</div>
				</div>
				<div>
					<div class="w-full px-3">
						<label class="block mb-2 text-xs" for="text"> Zpráva </label>
						<textarea
							class="block w-full px-4 py-3"
							cols="70"
							rows="6"
							maxlength="250"
							id="text"
							type="text"
							placeholder=""
							aria-invalid={$errors.text ? "true" : "false"}
							bind:value={$form.text}></textarea>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col lg:flex-row justify-between items-center mb-6 mx-3 w-full ml-1 px-4">
			<div class="flex flex-row gap-10 py-5">
				<span>
				<CheckBox /></span> <span class="">Zaškrtněte pole pro odebírání newsletteru.</span>
			</div>
			<div class="flex">
				<button
					class=" hover:bg-gray-800 text-2xl font-bold mr-4 transform transition-transform hover:scale-110 w-52"
					type="submit"
				>ODESLAT
				</button>
			</div>
		</div>


		<div>
			<div>
				{#if $delayed}<div class="loading loading-dots loading-xs"></div>{/if}

				{#if $message}
					<div
						class="status"
						class:error={$page.status >= 400}
						class:success={$page.status == 200}>
						{$message}
					</div>
				{/if}

				{#if form.error}
					<div role="alert" class="alert alert-error">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6 stroke-current shrink-0"
							fill="none"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>Chyba! Požadavek se nepovedl.</span>
					</div>
				{/if}
			</div>
			<!-- Errors -->
			<div class="py-4 text-sm text-red-700 rounded-lg" role="alert">
				{#if $errors.first_name}<p>{$errors.first_name}</p>{/if}
				{#if $errors.last_name}<p>{$errors.last_name}</p>{/if}
				{#if $errors.email}<p>{$errors.email}</p>{/if}
				{#if $errors.telephone}<p>{$errors.telephone}</p>{/if}
				{#if $errors.text}<p>{$errors.text}</p>{/if}
			</div>
		</div>
	</div>
	<!--  <SuperDebug data={$form} /> -->
</form>

<style lang="scss">
	@use "$lib/styles/variables" as vars;
  @use "$lib/styles/mixins" as mixs;

	form {
		color: vars.$font-main-color;
	}

	input,
	textarea {
		padding: 1rem 1rem 1rem 1rem;
		border: 1px solid white;
		border-radius: 1.2rem;
		background-color: vars.$form-bg-color;
		min-width: 20rem;
	}

	label {
		font-size: larger;
	}

  button {
    padding: 1rem 3rem 1.1rem 3rem;
    background-color: vars.$button-bg-main;
    color: white;
    border: 1px solid white;
    border-radius: 1rem;

    text-decoration: underline;
    text-underline-offset: 5px;           // vzdálenost od textu
    text-decoration-thickness: 1px;        // tloušťka čáry
    text-decoration-color: currentColor;   // barva čáry (stejná jako text)
    text-decoration-style: solid;
  }
</style>
