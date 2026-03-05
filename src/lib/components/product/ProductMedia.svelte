<!-- ProductMedia.svelte
     Consistent image/video wrapper with aspect ratio, and subtle hover.
     Props:
       src       — image URL
       alt       — alt text
       aspect    — tailwind aspect ratio string: "aspect-square" | "aspect-video" | "aspect-[4/3]" etc.
       fit       — object-fit: "cover" (default) | "contain"
-->
<script>
  export let src     = "";
  export let alt     = "";
  export let aspect  = "aspect-[4/3]";
  export let fit     = "cover";
</script>

<figure class="w-full flex flex-col gap-3">

  <!-- Image container -->
  <div class="w-full overflow-hidden bg-base-200 {aspect}">
    {#if src}
      <img
        {src}
        {alt}
        class="w-full h-full transition-transform duration-700 ease-out hover:scale-[1.03]"
        style="object-fit: {fit};"
      />
    {:else}
      <!-- Empty state if no src passed -->
      <div class="w-full h-full flex items-center justify-center bg-base-300">
        <span class="text-[0.6rem] tracking-[0.2em] uppercase text-base-content/30">Image</span>
      </div>
    {/if}
  </div>
</figure>