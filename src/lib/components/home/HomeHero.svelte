<script>
  export let src;
  export let alt = "";
  export let products = [];
</script>

<div class="relative w-full h-[calc(100dvh+100px)] -mt-[100px]">

  <!-- Background image -->
  <img {src} {alt} class="w-full h-full object-cover object-center" />

  <!-- Product cards overlaid on hero -->
  {#if products.length}
    <div class="absolute inset-x-0 bottom-0 flex gap-4 px-10 pb-10" style="top: 35%">
      {#each products as product}
        <a href={product.href} class="relative flex-1 overflow-hidden no-underline group">

          <img
            src={product.src}
            alt={product.title}
            class="w-full h-full object-cover object-center"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>

          <div class="absolute bottom-0 left-0 right-0 p-8">
            <p class="text-[0.65rem] font-light text-white/60 mb-3">[ {product.type} ]</p>
            <p class="text-2xl font-light text-white leading-snug">{product.title}</p>
          </div>

        </a>
      {/each}
    </div>
  {/if}

</div>
