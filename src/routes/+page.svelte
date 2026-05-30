<script lang="ts">
  let mx = $state(-9999);
  let my = $state(-9999);
</script>

<svelte:window on:mousemove={(e) => { mx = e.clientX; my = e.clientY; }} />

<div class="scene">
  <div
    class="reveal"
    style="--mx: {mx}px; --my: {my}px"
  >
    <img src="/etsuko-black-round.png" alt="Etsuko" class="logo" />
  </div>
</div>

<style>
  .scene {
    position: fixed;
    inset: 0;
    background: rgb(29, 29, 29);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    width: min(30vw, 30vh);
    height: auto;
    display: block;
  }

  .reveal {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    mask-image: radial-gradient(circle 1200px at var(--mx) var(--my),
      rgba(0,0,0,1.00)  0%,
      rgba(0,0,0,0.98)  4%,
      rgba(0,0,0,0.94)  8%,
      rgba(0,0,0,0.88) 12%,
      rgba(0,0,0,0.80) 17%,
      rgba(0,0,0,0.71) 22%,
      rgba(0,0,0,0.61) 28%,
      rgba(0,0,0,0.51) 34%,
      rgba(0,0,0,0.41) 41%,
      rgba(0,0,0,0.31) 48%,
      rgba(0,0,0,0.22) 56%,
      rgba(0,0,0,0.14) 64%,
      rgba(0,0,0,0.07) 73%,
      rgba(0,0,0,0.02) 83%,
      rgba(0,0,0,0.00) 100%);
    -webkit-mask-image: radial-gradient(circle 1200px at var(--mx) var(--my),
      rgba(0,0,0,1.00)  0%,
      rgba(0,0,0,0.98)  4%,
      rgba(0,0,0,0.94)  8%,
      rgba(0,0,0,0.88) 12%,
      rgba(0,0,0,0.80) 17%,
      rgba(0,0,0,0.71) 22%,
      rgba(0,0,0,0.61) 28%,
      rgba(0,0,0,0.51) 34%,
      rgba(0,0,0,0.41) 41%,
      rgba(0,0,0,0.31) 48%,
      rgba(0,0,0,0.22) 56%,
      rgba(0,0,0,0.14) 64%,
      rgba(0,0,0,0.07) 73%,
      rgba(0,0,0,0.02) 83%,
      rgba(0,0,0,0.00) 100%);
  }
</style>
