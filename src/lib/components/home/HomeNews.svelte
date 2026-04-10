<script>
  export let items = [];
</script>

<section class="px-10 py-16 md:py-20">
  <h2 class="text-2xl md:text-3xl font-light text-base-content mb-10">Recent news</h2>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
    {#each items as item}
      <div class="flex flex-col">
        {#if item.src}
          <div class="aspect-[4/3] overflow-hidden mb-6">
            <img src={item.src} alt={item.alt ?? ""} class="w-full h-full object-cover" />
          </div>
        {/if}
        <h3 class="text-base font-light text-base-content mb-2">{item.title}</h3>
        <p class="text-sm font-light text-base-content/60 leading-relaxed mb-5">{item.body}</p>
        {#if item.cta}
          <a
            href={item.cta.href}
            class="self-start border border-base-content px-5 py-2 text-[0.72rem] uppercase text-base-content no-underline hover:bg-base-content hover:text-base-100 transition-colors duration-150 mt-auto"
          >
            {item.cta.label}
          </a>
        {/if}
      </div>
    {/each}
  </div>
</section>
