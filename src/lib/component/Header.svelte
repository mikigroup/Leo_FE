<script>
  import { page } from "$app/stores";
  /* import { Icon, FaceSmile } from "svelte-hero-icons"; */
  import { ArrowLongRight } from "svelte-heros-v2";
  import logo from "../logo_leo_fe.svg";
</script>

<header>
  <nav class="">
    <div class="flex flex-row items-center">
      <div class="flex w-full">
        <div class="flex md:justify-start">
          <a href="/" class="flex logo">
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Malý LEO</span>
            <img class="ml-2 rounded-full" src={logo} alt="Malý Leo" />
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <button class="flex items-center w-64 gap-5 p-4 m-2 transition-transform transform bg-black poptavka hover:text-black rounded-3xl hover:bg-slate-400 hover:scale-105">
          <span>Objednat poptávku</span>
          <span class="ml-2"><ArrowLongRight class="" /></span>
        </button>
      </div>
    </div>
  </nav>
<section>
<div class="headerBanner">
  <div class="headerBanner01">
    <h1>Malý Leo - 1st.</h1>
    <p>Získejte konkurenční výhodu s naším eshopovým řešením, které se škáluje od drobných řemeslníků až po menší podniky. Postavený na nejnovějších technologiích, náš systém vyniká jednoduchým designem a flexibilitou.</p>
  </div>
</div>
</section>
</header>
