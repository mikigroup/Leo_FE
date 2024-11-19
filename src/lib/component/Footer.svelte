<script>
  import { page } from '$app/stores';
</script>

<footer class="relative overflow-hidden">
  <div class="wave-container">
    <div class="wave"></div>
    <div class="wave"></div>
  </div>
  <div class="w-full max-w-screen-xl md:mx-auto md:py-8 relative">
    <div class="flex md:justify-end">
      <ul class="flex flex-col items-center w-full text-sm font-medium text-center text-white md:flex-row sm:mb-0 md:w-auto">
        <li>
          <a href="#" class="hover:underline md:mr-6">O LEOvi</a>
        </li>
        <li>
          <a href="podminky" class="hover:underline md:mr-6" aria-current={$page.url.pathname === "/podminky"}>Zasedající podmínky</a>
        </li>
        <li>
          <a href="/ver" class="hover:underline md:mr-6" aria-current={$page.url.pathname === "/ver"}>Verze</a>
        </li>
        <li>
          <a href="#" class="hover:underline">Kontaktis</a>
        </li>
      </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
    <span class="block text-sm text-center text-white sm:text-center dark:text-gray-400">© 2024 <a href="https://mikigroup.cz" target="_blank" class="hover:underline">Mikigroup <i class="fa fa-regular fa-hand-spock"></i></a>. Všechny práva vyhrazena - <a href="/#" class="hover:underline">Ver 0.9a</a></span>
  </div>
</footer>

<style lang="scss">
  @use "$lib/styles/variables" as vars;
  @use "$lib/styles/mixins" as mixs;

  footer {
    padding-top: 30px;
    background-color: vars.$button-bg-main;
  }

  .wave-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 6400px;
    top: 0;
    left: 0;
    height: 100%;
    transform: translate3d(0, 0, 0);
    animation: wave 24s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1600' height='198'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='50%25' x2='50%25' y1='-10.959%25' y2='100%25'%3E%3Cstop stop-color='%2357BBC1' stop-opacity='.25' offset='0%25'/%3E%3Cstop stop-color='%23015871' offset='100%25'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23a)' fill-rule='evenodd' d='M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z' transform='matrix(-1 0 0 1 1600 0)'/%3E%3C/svg%3E");
    background-repeat: repeat-x;
  }

  .wave:nth-of-type(2) {
    top: 15px;
    animation: wave 24s cubic-bezier(0.36, 0.45, 0.63, 0.53) -.125s infinite, swell 7s ease -1.25s infinite;
    opacity: 0.5;
  }

  @keyframes wave {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1600px);
    }
  }

  @keyframes swell {
    0%, 100% {
      transform: translate3d(0, -25px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
  }
</style>