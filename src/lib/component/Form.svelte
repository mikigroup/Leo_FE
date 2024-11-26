<script lang="ts">
	import { page } from "$app/stores";
	import { superForm } from "sveltekit-superforms";
	import SuperDebug from "sveltekit-superforms";
	import { schema } from "./schemaForm";
	import { zod } from "sveltekit-superforms/adapters";
	import CheckBox from "$lib/component/CheckBox.svelte";
	import { onMount } from "svelte";
	export let data;


	$: options.validators = zod(schema);
	onMount(() => {
		$form.telephone = "+420";
		$form.email ="@"
	});

	const { form, errors, message, enhance, delayed, options, constraints } = superForm(
		data.form,
		{
			resetForm: true,
			validators: zod(schema),
			dataType: "json",
		}
	);


	function formatPhoneNumber(value="+420") {
		// Odstranit mezery a nečíselné znaky kromě +
		const numbers = value.replace(/[^\d+]/g, "");
		// Omezit na prvních 9 číslic (ale zachovat +420)
		const truncated = numbers.slice(0, 13); // +420 + 9 číslic
		// Rozdělit po třech
		return truncated.replace(/(\d{3})(?=\d)/g, "$1 ").trim();
	}

	function handlePhoneInput(e) {
		const formatted = formatPhoneNumber(e.target.value);
		e.target.value = formatted;
		// Uložit do formuláře bez mezer
		$form.telephone = formatted.replace(/\s/g, "");
	}
</script>

<section class="max-w-screen-2xl md:mx-auto scroll-mt-16 lg:scroll-mt-32 xl:scroll-mt-56">
	<form class="p-4 mt-10 flex px-4" method="POST" id="form" use:enhance>
		<div class="flex flex-col space-y-6">
			<h2 class="font-bold pb-10 text-4xl">Zeptejte se</h2>
			<div class="flex">
				<div class="flex flex-col lg:flex-row">
					<div class="">
						<div class="flex flex-col md:flex-row mb-6 mx-3 gap-6">
							<div class="w-full mb-6 md:w-1/2 md:mb-0">
								<label class="block mb-2 text-xs" for="first_name">Jméno {#if $errors.first_name}
									<span class="text-xs italic text-red-500">{$errors.first_name}</span>{/if}</label>
								<input
									class="block w-full px-4 py-3"
									id="first_name"
									type="text"
									name="first_name"
									placeholder=""
									aria-invalid={$errors.first_name ? "true" : undefined}
									bind:value={$form.first_name}
									{...$constraints.first_name} />
							</div>
							<div class="w-full md:w-1/2">
								<label class="block mb-2 text-xs" for="last_name">Příjmení	{#if $errors.last_name}
									<span class="text-xs italic text-red-500">{$errors.last_name}</span>
								{/if}</label>
								<input
									class="block w-full px-4 py-3"
									id="last_name"
									type="text"
									name="last_name"
									placeholder=""
									aria-invalid={$errors.last_name ? "true" : undefined}
									bind:value={$form.last_name}
									{...$constraints.last_name} />
							</div>
						</div>

						<div class="flex flex-col md:flex-row mb-6 mx-3 gap-6">
							<div class="w-full mb-6 md:w-1/2 md:mb-0 mt-5">
								<label class="block mb-2 text-xs" for="email">Email	{#if $errors.email}
									<span class="text-xs italic text-red-500">{$errors.email}</span>
								{/if}</label>
								<input
									class="block w-full px-4 py-3"
									id="email"
									type="text"
									name="email"
									maxlength="40"
									placeholder=""
									bind:value={$form.email}
									aria-invalid={$errors.email ? "true" : undefined}
									{...$constraints.email} />
							</div>
							<div class="w-full md:w-1/2 mt-5">
								<label class="block mb-2 text-xs" for="telephone">Telefon 	{#if $errors.telephone}
									<span class="text-xs italic text-red-500">{$errors.telephone}</span>
								{/if}</label>
								<input
									class="block w-full px-4 py-3"
									id="telephone"
									type="text"
									name="telephone"
									inputmode="numeric"
									placeholder="+420 123 456 789"
									aria-invalid={$errors.telephone ? "true" : undefined}
									value={formatPhoneNumber($form.telephone)}
									on:input={handlePhoneInput}
									{...$constraints.telephone} />
							</div>
						</div>
					</div>
					<div>
						<div class="w-full px-3">
							<label class="block mb-2 text-xs" for="text">Zpráva{#if $errors.text}
								<span class="text-xs italic text-red-500">{$errors.text}</span>
							{/if}</label>
							<textarea
								class="block w-full px-4 py-3"
								id="text"
								name="text"
								cols="90"
								rows="6"
								maxlength="250"
								placeholder=""
								aria-invalid={$errors.text ? "true" : undefined}
								bind:value={$form.text}
								{...$constraints.text}></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col lg:flex-row justify-between items-center mb-6 mx-3 w-full ml-1 px-4">
				<div class="flex flex-row gap-10 py-5">
					<span><CheckBox {form} {errors} {constraints} /></span>
					<span class="">Zaškrtněte pole pro odebírání newsletteru.</span>
				</div>
				<div class="flex">
					<button
						class="hover:bg-gray-800 text-2xl font-bold transform transition-transform hover:scale-110 w-52"
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
				</div>
			</div>
		</div>
	</form>
	<div><SuperDebug data={$form} /></div>
</section>

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
		text-underline-offset: 5px; // vzdálenost od textu
		text-decoration-thickness: 1px; // tloušťka čáry
		text-decoration-color: currentColor; // barva čáry (stejná jako text)
		text-decoration-style: solid;
	}
</style>
