<script>
   import { page } from "$app/stores";
  import { superForm } from "sveltekit-superforms";
  import SuperDebug from "sveltekit-superforms";
  import { schemaStep1, schemaStep2, schemaStep3, schemaStep4 } from "./schemaFormular";
  import { zod } from "sveltekit-superforms/adapters";
  export let data;

</script>

<form class="w-full max-w-lg p-10 my-10">
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-first-name">
        Jméno
      </label>
      <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-red-500 rounded appearance-none focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jana">
      <p class="text-xs italic text-red-500">Vyplň prosím</p>
    </div>
    <div class="w-full px-3 md:w-1/2">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-last-name">
        Příjmení
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
    </div>
  </div>
  <div class="flex flex-wrap mb-6 -mx-3">
    <div class="w-full px-3">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-password">
        Heslo
      </label>
      <input class="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************">
      <p class="text-xs italic text-gray-600">Dlouhé</p>
    </div>
  </div>
  <div class="flex flex-wrap mb-2 -mx-3">
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-city">
        City
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque">
    </div>
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block w-full px-4 py-3 pr-8 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Mexiko</option>
          <option>Jeseník</option>
          <option>Brno</option>
        </select>
        <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
          <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full px-3 mb-6 md:w-1/3 md:mb-0">
      <label class="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase" for="grid-zip">
        Zip
      </label>
      <input class="block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210">
    </div>
  </div>
</form>