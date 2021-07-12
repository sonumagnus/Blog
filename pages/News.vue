<template>
  <div>
    <Navbar />
    <CategoryTitle category="news" class="m-6 lg:mx-20" />
    <blog-listing :articles="articles" section="news" />
  </div>
</template>

<script>
import CategoryTitle from "~/components/CategoryTitle";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, CategoryTitle },
  async asyncData({ $content, params }) {
    const articles = await $content("article/news", params.slug)
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
      .fetch();
    return {
      articles,
    };
  },
};
</script>

<style>
</style>