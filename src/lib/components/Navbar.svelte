<script>
  import { ExternalLink } from 'lucide-svelte';

  let menuOpen = false;

  const navLeft = [
    { label: "Eterna", href: "/eterna" },
  ];

  const navRight = [
    { label: "Documentation", href: "https://etsuko-fm.github.io/etsuko-fm-docs/docs/eterna/", target: "_blank" },
  ];
  const socials = [
    {
      label: "GitHub",
      href: "https://www.github.com/etsuko-fm",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@etsuko-fm",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/etsuko.fm",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
    },
  ];


</script>

<style>
  @import url('https://api.fontshare.com/v2/css?f[]=switzer@100,200,300,400&display=swap');
  nav { font-family: 'Switzer', sans-serif; }
</style>

<nav>
  <!-- Desktop navbar -->
  <div class="fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-sm border-b border-base-300 grid grid-cols-[1fr_auto_1fr] items-center px-10 h-[52px]">

    <!-- Left: project links -->
    <div class="hidden md:flex items-center gap-8">
      {#each navLeft as item}
        <a
          href={item.href}
          target={item.target ?? '_self'}
          class="text-[0.62rem] font-light tracking-[0.18em] uppercase text-base-content no-underline
                 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                 after:bg-base-content after:transition-all after:duration-300
                 hover:opacity-50 hover:after:w-full transition-opacity duration-200"
        >
          {item.label}
          {#if item.target === '_blank'}
            <ExternalLink size={10} aria-hidden="true" class="inline-block" />
          {/if}
        </a>
      {/each}
    </div>

    <!-- Center: logo -->
    <a href="/" class="logo text-[0.62rem] font-normal tracking-[0.28em] uppercase text-base-content no-underline select-none">
      etsuko.fm
    </a>

    <!-- Right: service links + social icons -->
    <div class="hidden md:flex items-center justify-end gap-8">
      {#each navRight as item}
        <a
          href={item.href}
          target={item.target ?? '_self'}
          class="text-[0.62rem] font-light tracking-[0.18em] uppercase text-base-content no-underline
                 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px
                 after:bg-base-content after:transition-all after:duration-300
                 hover:opacity-50 hover:after:w-full transition-opacity duration-200"
        >
          {item.label}
          {#if item.target === '_blank'}
            <ExternalLink size={8} aria-hidden="true" class="inline-block" />
          {/if}
        </a>
      {/each}

      <!-- Divider -->
      <span class="w-px h-3 bg-base-content/20"></span>

      <!-- Social icons -->
      {#each socials as social}
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          class="text-base-content hover:opacity-50 transition-opacity duration-200"
        >
          {@html social.icon}
        </a>
      {/each}
    </div>
    <!-- ─── End desktop navbar ────────────────────────────────────────────── -->
    <!-- Mobile: hamburger toggle -->
    <button
      class="md:hidden btn btn-ghost btn-sm px-1 col-start-3 justify-self-end"
      on:click={() => menuOpen = !menuOpen}
      aria-label="Toggle menu"
    >
      <div class="flex flex-col gap-[5px]">
        <span class="block w-[22px] h-px bg-base-content transition-all duration-300 {menuOpen ? 'rotate-45 translate-y-[6px]' : ''}"></span>
        <span class="block w-[22px] h-px bg-base-content transition-all duration-300 {menuOpen ? 'opacity-0' : ''}"></span>
        <span class="block w-[22px] h-px bg-base-content transition-all duration-300 {menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}"></span>
      </div>
    </button>


  <!-- ─── Mobile dropdown menu ──────────────────────────────────────────── -->
  {#if menuOpen}
    <div class="fixed top-[52px] left-0 right-0 z-40 bg-base-100 border-b border-base-300 px-8 py-8 flex flex-col gap-6 md:hidden">

      <!-- Projects section -->
      <div>
        <p class="text-[0.52rem] tracking-[0.2em] uppercase text-base-content/40 mb-3">Projects</p>
        <div class="flex flex-col gap-4">
          {#each navLeft as item}
            <a
              href={item.href}
              class="text-[0.68rem] font-light tracking-[0.15em] uppercase text-base-content no-underline hover:opacity-50 transition-opacity"
              on:click={() => menuOpen = false}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>

      <div class="divider my-0"></div>

      <!-- Services section -->
      <div>
        <p class="text-[0.52rem] tracking-[0.2em] uppercase text-base-content/40 mb-3">Services</p>
        <div class="flex flex-col gap-4">
          {#each navRight as item}
            <a
              href={item.href}
              class="text-[0.68rem] font-light tracking-[0.15em] uppercase text-base-content no-underline hover:opacity-50 transition-opacity"
              on:click={() => menuOpen = false}
            >
              {item.label}
            </a>
          {/each}
        </div>
      </div>

      <div class="divider my-0"></div>

      <!-- Follow / social icons section -->
      <div>
        <p class="text-[0.52rem] tracking-[0.2em] uppercase text-base-content/40 mb-3">Follow</p>
        <div class="flex items-center gap-5">
          {#each socials as social}
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              class="text-base-content hover:opacity-50 transition-opacity duration-200"
              on:click={() => menuOpen = false}
            >
              {@html social.icon}
            </a>
          {/each}
        </div>
      </div>

    </div>
  {/if}
  <!-- ─── End mobile dropdown ───────────────────────────────────────────── -->
</nav>