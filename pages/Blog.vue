<template>
  <div>
    <Navbar />
    <category class="" />
    <CategoryTitle category="blog" />
    <blog-listing :articles="articles" />
  </div>
</template>

<script>
import BlogListing from "~/components/blogListing.vue";
import Category from "~/components/category";
import CategoryTitle from "~/components/CategoryTitle";
export default {
  components: { Category, CategoryTitle, BlogListing },
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
        "authors"
      ])
      .sortBy("createdAt", "asc")
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
</style>