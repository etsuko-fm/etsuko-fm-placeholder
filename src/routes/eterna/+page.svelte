<!-- /eterna product page
     Assembles ProductHero + ProductSection blocks with Eterna-specific content.
     To adapt this for a new product: duplicate this file into a new route,
     swap out the content props, and adjust the section order as needed.
-->
<script>
    import ProductLayout from "$lib/components/product/ProductLayout.svelte";
    import ProductHero from "$lib/components/product/ProductHero.svelte";
    import ProductSection from "$lib/components/product/ProductSection.svelte";
    import ProductMedia from "$lib/components/product/ProductMedia.svelte";
    import ProductText from "$lib/components/product/ProductText.svelte";
</script>

<ProductLayout>
    <!-- ── Hero ──────────────────────────────────────────────────────────────── -->
    <ProductHero
        title="ETERNA"
        tagline="6-voice sampler and sequencer for monome norns"
        imageSrc="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1400&q=80"
        imageAlt="Eterna instrument overview"
    />

    <!-- ── Full-width statement image ────────────────────────────────────────── -->
    <ProductSection layout="single">
        <ProductMedia
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
            alt="Eterna in a performance environment"
            aspect="aspect-[21/9]"
        />
    </ProductSection>

    <!-- ── Feature 01: image left, text right ───────────────────────────────── -->
    <ProductSection layout="image-text" gap="lg">
        <svelte:fragment slot="left">
            <ProductMedia
                src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&q=80"
                alt="Spatial field mapping interface"
                aspect="aspect-[4/3]"
            />
        </svelte:fragment>
        <svelte:fragment slot="right">
            <ProductText
                heading="Spatial field mapping"
                body="Eterna's spatial engine maps sound to a three-dimensional field in real time. Define zones, assign timbres, and let the room become the instrument.

    Each field is modular — stack, overlap, or isolate them across a 360° canvas."
            />
        </svelte:fragment>
    </ProductSection>

    <!-- ── Feature 02: text left, image right ───────────────────────────────── -->
    <ProductSection layout="text-image" gap="lg">
        <svelte:fragment slot="left">
            <ProductText
                heading="Gesture input"
                body="Map physical motion to any parameter — filter cutoff, reverb depth, spatial position. Eterna reads from MIDI controllers, OSC streams, or its own IR sensor array.

    No scripting required. Assign gestures visually, hear changes immediately."
            />
        </svelte:fragment>
        <svelte:fragment slot="right">
            <ProductMedia
                src="https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf?w=900&q=80"
                alt="Gesture mapping hardware"
                aspect="aspect-[4/3]"
            />
        </svelte:fragment>
    </ProductSection>

    <!-- ── Feature 03: dual image columns ───────────────────────────────────── -->
    <ProductSection layout="image-image" gap="md">
        <svelte:fragment slot="left">
            <ProductMedia
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80"
                alt="Eterna modular interface"
                aspect="aspect-square"
            />
        </svelte:fragment>
        <svelte:fragment slot="right">
            <ProductMedia
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80"
                alt="Eterna hardware detail"
                aspect="aspect-square"
            />
        </svelte:fragment>
    </ProductSection>

    <!-- ── Specs ─────────────────────────────────────────────────────────────── -->
  <ProductSection layout="single">
    <div class="w-full border-t border-base-300 pt-12">
      <p class="text-[0.58rem] tracking-[0.25em] uppercase text-base-content/40 mb-10">Details</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8">
        {#each [
          { label: "community discussion",         value: "llllllll.co/library/eterna" },
          { label: "docs", value: "etsuko.fm/docs/eterna" },
          { label: "source code",         value: "github.com/etsuko-fm/eterna" },
          { label: "license",             value: "GPL v3" },


] as spec}
          <div class="flex flex-col gap-1">
            <p class="text-[0.58rem] tracking-[0.2em] uppercase text-base-content/40">{spec.label}</p>
            <p class="text-sm font-light text-base-content">{spec.value}</p>
          </div>
        {/each}
      </div>
    </div>
  </ProductSection>
</ProductLayout>
<!-- ── Footer padding ────────────────────────────────────────────────────── -->
<div class="pb-32" />
