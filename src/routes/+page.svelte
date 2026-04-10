<script>
  import HomeHero from "$lib/components/home/HomeHero.svelte";
  import HomeFeatured from "$lib/components/home/HomeFeatured.svelte";
  import HomeNews from "$lib/components/home/HomeNews.svelte";
  import content from "../content/home.json";
</script>

<HomeHero src={content.hero.src} alt={content.hero.alt} />
<HomeFeatured title={content.featured.title} body={content.featured.body} ctas={content.featured.ctas ?? []} />
<HomeNews items={content.news} />
