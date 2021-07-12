<template>
  <div>
    <Navbar />
    <Newsfeed />
    <seemore category="blog" class="m-6 lg:mx-20" />
    <blog-listing :articles="articles" />
    <Category />
    <author />
  </div>
</template>

<script>
import author from "~/components/author";
import Newsfeed from "~/components/news/Newsfeed.vue";
import Seemore from "~/components/seemore";
export default {
  components: { Seemore, author, Newsfeed },
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