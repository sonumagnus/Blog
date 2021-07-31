<template>
  <div>
    <Navbar />
    <Newsfeed />
    <seemore category="blog" />
    <blog-listing :articles="articles" />
    <Category />
  </div>
</template>

<script>
import Newsfeed from "~/components/news/Newsfeed.vue";
import Seemore from "~/components/seemore";
export default {
  components: { Seemore, Newsfeed },
  async asyncData({ $content, params }) {
    const articles = await $content("article/blog", params.slug)
      .only([
        "title",
        "img",
        "description",
        "createdAt",
        "path",
        "categories",
        "body",
        "authors",
      ])
      .sortBy("createdAt", "asc")
      .limit(6)
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
</style>