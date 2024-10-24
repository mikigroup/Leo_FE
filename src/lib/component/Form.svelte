<script>
  import { page } from "$app/stores";
  import { superForm } from "sveltekit-superforms";
  import SuperDebug from "sveltekit-superforms";
  import { schema } from "./schemaForm";
  import { zod } from "sveltekit-superforms/adapters";
  export let data;

  const { form, errors, message, enhance, delayed, options } = superForm(data.form, {     
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
  });

  $: options.validators = zod(schema);
</script>

<form class="w-full max-w-lg p-10 my-10 border rounded-xl" method="POST">
  <div class="p-5">
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="first_name"> Jméno </label>
      <input
        class={`block w-full px-4 py-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white ${$errors.first_name ? "bg-red-100 border-red-500" : "bg-gray-200 border-gray-200"}`}
        id="first_name"
        type="text"
        placeholder=""
        aria-invalid={$errors.first_name ? "true" : "false"}
        bind:value={$form.first_name} />
      {#if $errors.first_name}
        <p class="text-xs italic text-red-500">{$errors.first_name}</p>
      {/if}
    </div>
 <div class="w-full px-3 md:w-1/2">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="last_name"> Příjmení </label>
      <input
        class={`block w-full px-4 py-3 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:bg-white ${$errors.last_name ? 'bg-red-100 border-red-500' : 'bg-gray-200 border-gray-200'}`}
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

  
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="email"> Email </label>
      <input
        class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        id="email"
        type="text"
        placeholder=""
        aria-invalid={$errors.email ? "true" : "false"}
        bind:value={$form.email} />
         {#if $errors.email}
        <p class="text-xs italic text-red-500">{$errors.email}</p>
        {/if}
    </div>
    <div class="w-full px-3 md:w-1/2">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="telephone"> Telefon </label>
      <input
        class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        id="telephone"
        type="text"
        placeholder=""
        aria-invalid={$errors.telephone ? "true" : "false"}
        bind:value={$form.telephone} />
    </div>
  </div>
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="text"> Zpráva </label>
      <textarea
        class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
        cols="43"
        rows="10"
        id="text"
        type="text"
        placeholder=""
        aria-invalid={$errors.text ? "true" : "false"}
        bind:value={$form.text}></textarea>
    </div>

    <button class="p-2 mx-2 mt-10 border btn btn-primary rounded-xl hover:bg-slate-100 w-full" type="submit">Odeslat
    </button>
    {#if $delayed}<div class="loading loading-dots loading-xs"></div>{/if}

    {#if $message}
      <div class="status" class:error={$page.status >= 400} class:success={$page.status == 200}>
        {$message}
      </div>
    {/if}

    {#if form.error}
      <div role="alert" class="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 stroke-current shrink-0" fill="none" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Chyba! Požadavek se nepovedl.</span>
      </div>
    {/if}

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
