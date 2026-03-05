<!-- ProductHero.svelte
     Full-width hero block: product name, tagline, and a dominant image.
     Props:
       title      — product name (large display text)
       tagline    — one-line descriptor beneath the title
       label      — small eyebrow label above the title (e.g. "Etsuko / Audio")
       imageSrc   — hero image URL
       imageAlt   — alt text for the hero image
-->
<script>
  export let title   = "Product";
  export let tagline = "";
  export let imageSrc = "";
  export let imageAlt = "";
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/sf-pro-display');


  .hero-title {
    font-family: 'SF Pro Display', serif;
    font-size: clamp(1.5rem, 10vw, 3rem);
    line-height: 0.95;
    letter-spacing: 0.0em;
    font-weight: 400;
  }
</style>

<section class="w-full pt-32 pb-16 px-6 md:px-16">

  <!-- Title + tagline row -->
  <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
    <h1 class="hero-title text-base-content">{title}</h1>
    {#if tagline}
      <p class="text-sm font-light tracking-wide text-base-content/60 max-w-s md:text-right md:pb-3 leading-relaxed">
        {tagline}
      </p>
    {/if}
  </div>

  <!-- Hero image -->
  {#if imageSrc}
    <div class="w-full aspect-[16/9] overflow-hidden bg-base-200">
      <img
        src={imageSrc}
        alt={imageAlt}
        class="w-full h-full object-cover"
      />
    </div>
  {/if}

</section>