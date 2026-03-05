<!-- ProductText.svelte
     Typography block for use inside ProductSection slots.
     Props:
       eyebrow   — tiny label above heading (e.g. "Feature 01")
       heading   — section heading
       body      — paragraph text (supports basic newlines via white-space)
       cta       — optional CTA link label
       ctaHref   — optional CTA href
       align     — "left" (default) | "center" | "right"
-->
<script>
  export let heading  = "";
  export let body     = "";
  export let align    = "left";

  const alignClass = { left: "text-left", center: "text-center mx-auto", right: "text-right ml-auto" }[align] ?? "text-left";
</script>

<style>
  @import url('https://fonts.cdnfonts.com/css/uncut-sans');
  .section-heading {
    font-family: 'Uncut Sans', serif;
    font-size: clamp(1.8rem, 4vw, 3.2rem);
    line-height: 1.05;
    letter-spacing: -0.02em;
    font-weight: 400;
  }
</style>

<div class="flex flex-col gap-5 max-w-lg {alignClass}">


  <!-- Heading -->
  {#if heading}
    <h2 class="section-heading text-base-content">{heading}</h2>
  {/if}

  <!-- Body -->
  {#if body}
    <p class="text-sm font-light leading-relaxed text-base-content/70 whitespace-pre-line">{body}</p>
  {/if}

</div>