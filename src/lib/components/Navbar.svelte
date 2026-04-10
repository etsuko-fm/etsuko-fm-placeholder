<script>
  import { Home, Heart, Box } from 'lucide-svelte';
  let menuOpen = false;

  const products = [
    { label: "Eterna", href: "/eterna" },
  ];

  const contentLinks = [
    { label: "Latest", href: "/#news" },
    { label: "Made with", href: "/#made-with" },
    { label: "YouTube", href: "https://www.youtube.com/@etsuko-fm", target: "_blank" },
    { label: "Instagram", href: "https://www.instagram.com/etsuko.fm", target: "_blank" },
  ];

  const support = [
    { label: "Docs", href: "https://docs.etsuko.fm", target: "_blank" },
    { label: "GitHub", href: "https://github.com/etsuko-fm", target: "_blank" },
  ];
</script>

<style>
  @import url('https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400&display=swap');
  nav { font-family: 'Switzer', sans-serif; }
</style>

<nav class="relative z-10 w-full h-[100px] bg-transparent">

  <!-- Desktop navbar -->
  <div class="hidden md:grid grid-cols-[180px_1fr_1fr_1fr] gap-8 px-10 h-full items-start pt-7">

    <!-- Brand -->
    <a href="/" class="flex items-center gap-1.5 text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity duration-200 leading-snug">
      <Home size={13} />etsuko.fm
    </a>

    <!-- Products -->
    <div class="flex flex-col gap-2">
      <p class="flex items-center gap-1.5 text-base font-light text-black/40 mb-1"><svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor" aria-hidden="true">
          <rect x="0" y="0" width="6" height="6" />
          <rect x="7" y="0" width="6" height="6" />
          <rect x="0" y="7" width="6" height="6" />
          <rect x="7" y="7" width="6" height="6" />
        </svg>products</p>
      {#each products as item}
        <a href={item.href} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity duration-200">
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Content -->
    <div class="flex flex-col gap-2">
      <p class="flex items-center gap-1.5 text-base font-light text-black/40 mb-1"><Heart size={13} />content</p>
      {#each contentLinks as item}
        <a href={item.href} target={item.target ?? '_self'} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity duration-200">
          {item.label}
        </a>
      {/each}
    </div>

    <!-- Support -->
    <div class="flex flex-col gap-2">
      <p class="flex items-center gap-1.5 text-base font-light text-black/40 mb-1"><Box size={13} />support</p>
      {#each support as item}
        <a href={item.href} target={item.target ?? '_self'} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity duration-200">
          {item.label}
        </a>
      {/each}
    </div>

  </div>

  <!-- Mobile: brand + hamburger -->
  <div class="md:hidden flex items-center justify-between px-8 h-full">
    <a href="/" class="text-[0.72rem] font-light uppercase text-black no-underline">
      etsuko.fm
    </a>
    <button
      class="btn btn-ghost btn-sm px-1"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Toggle menu"
    >
      <div class="flex flex-col gap-[5px]">
        <span class="block w-[22px] h-px bg-black transition-all duration-300 {menuOpen ? 'rotate-45 translate-y-[6px]' : ''}"></span>
        <span class="block w-[22px] h-px bg-black transition-all duration-300 {menuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-[22px] h-px bg-black transition-all duration-300 {menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}"></span>
      </div>
    </button>
  </div>

  <!-- Mobile dropdown -->
  {#if menuOpen}
    <div class="border-b border-black/10 px-8 py-8 flex flex-col gap-8 md:hidden">

      <div>
        <p class="text-[0.6rem] uppercase text-black/40 mb-3">Products</p>
        <div class="flex flex-col gap-3">
          {#each products as item}
            <a href={item.href} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity" on:click={() => menuOpen = false}>{item.label}</a>
          {/each}
        </div>
      </div>

      <div class="divider my-0"></div>

      <div>
        <p class="text-[0.6rem] uppercase text-black/40 mb-3">Content</p>
        <div class="flex flex-col gap-3">
          {#each contentLinks as item}
            <a href={item.href} target={item.target ?? '_self'} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity" on:click={() => menuOpen = false}>{item.label}</a>
          {/each}
        </div>
      </div>

      <div class="divider my-0"></div>

      <div>
        <p class="text-[0.6rem] uppercase text-black/40 mb-3">Support</p>
        <div class="flex flex-col gap-3">
          {#each support as item}
            <a href={item.href} target={item.target ?? '_self'} class="text-[0.72rem] font-light uppercase text-black no-underline hover:opacity-50 transition-opacity" on:click={() => menuOpen = false}>{item.label}</a>
          {/each}
        </div>
      </div>

    </div>
  {/if}

</nav>
