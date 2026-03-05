<!-- ProductSection.svelte
     Reusable content block. Handles all layout variants.

     Props:
       layout — "single" | "image-text" | "text-image" | "text-text" | "image-image"
       gap    — column gap: "md" (default) | "lg" | "xl"

     Slots:
       "left"  / "right"  — used in dual-column layouts
       default            — used in single-column layout

     Usage examples:
       Single column:
         <ProductSection layout="single">
           <p>Some content</p>
         </ProductSection>

       Image left, text right:
         <ProductSection layout="image-text">
           <svelte:fragment slot="left"><ProductMedia ... /></svelte:fragment>
           <svelte:fragment slot="right"><ProductText ... /></svelte:fragment>
         </ProductSection>
-->
<script>
  export let layout = "single";  // "single" | "image-text" | "text-image" | "text-text" | "image-image"
  export let gap    = "md";      // "md" | "lg" | "xl"

  // Gap between columns
  const gapClass = { md: "gap-8 md:gap-12", lg: "gap-12 md:gap-20", xl: "gap-16 md:gap-28" }[gap] ?? "gap-8 md:gap-12";

  const isDual = layout !== "single";
</script>

<section class="w-full px-6 md:px-16 py-16 md:py-24">

  {#if !isDual}
    <!-- ── Single column ── -->
    <div class="w-full">
      <slot />
    </div>

  {:else}
    <!-- ── Dual column ── -->
    <!-- Column sizing: image cols are slightly wider than text cols by default -->
    <div class="grid grid-cols-1 md:grid-cols-2 {gapClass} items-center">

      <!-- Left column -->
      <div class="
        {layout === 'text-image' ? 'order-1' : ''}
        {layout === 'image-text' ? 'order-1' : ''}
        {layout === 'text-text'  ? 'order-1' : ''}
        {layout === 'image-image' ? 'order-1' : ''}
      ">
        <slot name="left" />
      </div>

      <!-- Right column -->
      <div class="
        {layout === 'text-image' ? 'order-2' : ''}
        {layout === 'image-text' ? 'order-2' : ''}
        {layout === 'text-text'  ? 'order-2' : ''}
        {layout === 'image-image' ? 'order-2' : ''}
      ">
        <slot name="right" />
      </div>

    </div>
  {/if}

</section>