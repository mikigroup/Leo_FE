<script>
  import { page } from "$app/stores";
  import { Icon, FaceSmile } from "svelte-hero-icons";  
  import logo from "../logo_leo_fe.svg";  
</script>
<header>  
<nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
  <div class="flex flex-col items-center md:flex-row">
    <div class="flex w-full">
      
      <div class="flex justify-end w-full md:justify-start">
        <a href="/" class="flex mr-4">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Malý LEO</span>
          <img class="ml-5 rounded-full" src="{logo}" alt="Malý Leo" />          
        </a>
      </div>
    </div>
    <div class="flex flex-col items-center justify-center w-full border rounded-lg md:flex-row flex-1/2 md:border-none">
      <div class="flex justify-center m-5 text-lg md:w-full">              
          Vítej cizinče                
      </div>

      <div class="flex flex-row justify-center w-full p-2 m-5 border rounded-lg text-md xl:text-lg">
        
      </div>
      <div class="flex justify-end mb-5 md:w-full md:mb-0">
      </div>
    </div>
  </div>
</nav>
</header>