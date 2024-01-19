<script>
  import { page } from "$app/stores";
  import { readable } from "svelte/store";  
  import { Icon, FaceSmile } from "svelte-hero-icons";
  
  let loading = false;
  const weekdays = ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"];

  const formatterDate = new Intl.DateTimeFormat("cs", {
    month: "short",
    day: "numeric",
  });

  const formatterTime = new Intl.DateTimeFormat("cs", {
    hour12: false,
    hour: "numeric",
    minute: "2-digit",
  });

  const currentDate = readable(new Date(), function start(set) {
    const interval = setInterval(() => {
      set(new Date());
    }, 1000);

    return function stop() {
      clearInterval(interval);
    };
  });

  let day = "";
  $: {
    if ($currentDate) {
      const dayIndex = $currentDate.getDay();
      day = weekdays[dayIndex];
    }
  }

  let isMenuOpen = false;
  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    console.log("Menu opened");
  }

  async function signOut() {
    try {
      loading = true;
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      window.location.href = "/";
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      loading = false;
    }
  }
</script>

<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
  <div class="flex flex-col md:flex-row items-center">
    <div class="flex w-full">
      <div class="w-16 flex">
        <button type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation" class="text-gray-600 cursor-pointer sm:inline hover:text-gray-900 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
          <svg class="hover:bg-slate-200 rounded-lg w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
            ><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <div class="w-full justify-end md:justify-start flex">
        <a href="/" class="flex mr-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Malý LEO</span>
          <img class="ml-5 rounded-full" src="/favicon.ico" alt="Malý Leo" />
        </a>
      </div>
    </div>
    <div class="flex justify-center items-center w-full flex-col md:flex-row flex-1/2 border rounded-lg md:border-none">
      <div class="md:w-full m-5 text-lg justify-center flex">        
          {#if $page.data.profile}
            Vítej {$page.data.profile.username} <span class="pr-2">&nbsp;</span><Icon src="{FaceSmile}" size="26" />                              
        {:else}
          Vítej cizinče          
        {/if}
      </div>

      <div class="w-full m-5 text-md xl:text-lg flex-row flex justify-center rounded-lg border p-2">
        <time>{day}<span class="pr-2">&nbsp;</span>{formatterDate.format($currentDate)}</time>
        <span class="pr-2">&nbsp;</span>
        <time class="" >{formatterTime.format($currentDate)}</time>
      </div>
      <div class="md:w-full justify-end flex mb-5 md:mb-0">
        {#if $page.data.session}
          <div class="hidden md:block">
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
              on:click={toggleMenu}
              >Nastavení<svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>
          </div>
          <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <!-- <li>
              <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li> -->
              <li>
                <a href="/settings" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-sveltekit-preload-data="off" aria-current={$page.url.pathname === "/settings"}>Nastavení účtu</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-sveltekit-preload-data="off" on:click={signOut} disabled={loading}>Odhlásit se</a>
              </li>
            </ul>
          </div>
        {:else}
          <a href="/signin" aria-current={$page.url.pathname === "/signin"}>
            <button
              type="button"
              class="text-white bg-blue-700 mr-2 hover:bg-blue-800 rounded-lg px-5 py-2.5 text-center"
              >Přihlásit</button
            ></a>
          <a href="/signup" aria-current={$page.url.pathname === "/signup"}
            ><button type="button" class="text-white bg-blue-700 mr-2 hover:bg-blue-800 rounded-lg px-5 py-2.5 text-center"
              >Registrovat</button
            ></a>
        {/if}
      </div>
    </div>
  </div>
</nav>
