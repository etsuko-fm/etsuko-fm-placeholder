<!-- ProductLayout.svelte
     Single wrapper that constrains all product page content to a max width
     and centers it. Wrap the entire +page.svelte body in this once.
-->
<div class="w-full max-w-screen-2xl mx-auto">
  <slot />
</div>