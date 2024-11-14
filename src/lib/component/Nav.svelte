<script>
import { slide } from "svelte/transition";
import { ArrowLongRight } from "svelte-heros-v2";

let menuVisible = false;
let scrolled = false;
</script>

<nav class="bg-white w-full px-10 pb-5 pt-3">
    <div class="flex flex-row">
      <div class="basis-1/3">
        <div class="flex md:justify-start">
          <a href="/" class="flex logo">
            <img class="w-10 md:w-64" src="/maly_leo_logo.svg" alt="Malý Leo"/>
          </a>
        </div>
      </div>
      <div class="flex-col hidden w-full text-2xl font-bold text-center pt-10 md:flex basis-1/3 ">
        <div>info@malyleo.cz</div>
        <div>+420 733 362 418</div>
      </div>
      <div class="flex justify-end basis-1/3 items-center">
        <ul class="flex gap-4">
        	<li> TEST</li>
        	<li>TEST</li>
        	<li>Napište nám</li>
        </ul>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" on:click={() => (menuVisible = !menuVisible)} class="block w-6 h-6 mr-5 cursor-pointer md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>
    </div>
    {#if menuVisible}
      <div id="menu" class="w-full mt-5 md:flex md:items-center md:w-auto" transition:slide>
        <ul class="p-10 pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
          <li>
            <a class="block py-2 md:p-4 hover:text-blue-500" href="#">O nás</a>
          </li>
          <li>
            <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Služby</a>
          </li>
          <li>
            <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Nevim</a>
          </li>
          <li>
            <a class="block py-2 md:p-4 hover:text-blue-500" href="#">Nevim</a>
          </li>
        </ul>
      </div>
    {/if}
  </nav>