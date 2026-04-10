<script>
  export let title;
  export let body;
  export let ctas = [];
</script>

<div class="bg-base-200 px-10 py-14 md:py-20">
  <div class="max-w-2xl">
    <h2 class="text-2xl md:text-3xl font-light text-base-content mb-4">{title}</h2>
    <p class="text-sm font-light text-base-content/70 leading-relaxed mb-8">{body}</p>
    {#if ctas.length}
      <div class="flex flex-wrap gap-3">
        {#each ctas as cta}
          <a
            href={cta.href}
            class="inline-block border border-base-content px-5 py-2 text-[0.72rem] uppercase text-base-content no-underline hover:bg-base-content hover:text-base-100 transition-colors duration-150"
          >
            {cta.label}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>
