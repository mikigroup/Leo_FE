<script>
  import { page } from '$app/stores';
</script>
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 md:m-5">
  <div class="w-full max-w-screen-xl md:mx-auto p-4 md:py-8">
    <div class="flex md:justify-end">
      <ul class="flex flex-col md:flex-row items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 text-center w-full md:w-auto">
        <li>
          <a href="#" class=" hover:underline md:mr-6">O LEOvi</a>
        </li>
        <li>
          <a href="podminky" class=" hover:underline md:mr-6" aria-current={$page.url.pathname === "/podminky"}>Zasedající podmínky</a>
        </li>
        <li>
          <a href="/ver" class="hover:underline md:mr-6" aria-current={$page.url.pathname === "/ver"}>Verze</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Kontaktis</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 text-center">© 2023 <a href="https://mikigroup.cz" target="_blank" class="hover:underline">Mikigroup <i class="fa fa-regular fa-hand-spock"></i></a>. Všechny práva vyhrazena - <a href="/ver" class="hover:underline">Ver 0.2.0</a></span>    
  </div>
</footer>

<!-- <footer class="">
  <div class="grid p-4 mt-40 text-gray-500 border-2 rounded-lg md:grid-cols-5 md:mx-4">    
    <div class="grid col-span-2 text-sm">
			<p><a class="items-center mt-3 text-sm sm:mt-0" target="_blank" href="https://www.mikigroup.cz/">Vytvořeno <i class="fa fa-regular fa-hand-spock"></i> Mikigroup™</a></p>                 
    </div>    
    <div class="grid justify-end col-span-3 text-sm">
			<p>Šťastné srdce 2022-2023 ver_1.03. Stránka načtena za {loadTime} seconds</p>			   
  </div>
</footer>
 -->