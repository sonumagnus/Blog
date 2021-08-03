<template>
  <div>
    <Navbar />
    <div
      class="flex lg:h-screen w-screen lg:overflow-hidden flex-col lg:flex-row"
    >
      <!-- Left-SVG-div-starts-here -->
      <div class="relative w-full lg:w-2/5">
        <img
          :src="`/resources/${author.img}`"
          alt=""
          class="h-72 lg:h-auto w-full object-cover"
        />
        <div class="bg-gray-900 bg-opacity-60 absolute inset-0"></div>
        <div class="absolute inset-10 lg:inset-20 text-white">
          <p class="text-5xl capitalize font-medium text-gray-200">
            {{ author.name }}
          </p>
          <p class="mt-5 text-lg capitalize">{{ author.bio }}</p>
        </div>
      </div>
      <!-- Left-image-div-ends-here -->
      <!-- Right-blog-list-div-starts-here -->
      <div
        class="relative mx-6 lg:p-4 lg:w-3/5 xs:w-full h-full overflow-y-scroll"
      >
        <NuxtLink to="/">
          <span class="flex text-green-400 mb-2">
            <icon-left-arrow
              width="15"
              height="15"
              iconName="long-left-arrow"
              class="self-center mr-1"
            ></icon-left-arrow>
            <p class="hover:underline">Back to All Blogs</p>
          </span>
        </NuxtLink>
        <p class="font-bold text-2xl capitalize text-gray-400">
          Articles By {{ author.name }}:
        </p>
        <cat-auth-blog-listing :articles="articles" />
      </div>
    </div>
  </div>
</template>

<script>
import CatAuthBlogListing from "~/components/catAuthBlogListing.vue";
import IconLeftArrow from "~/components/icons/ui/IconLeftArrow";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, IconLeftArrow, CatAuthBlogListing },
  async asyncData({ $content, params }) {
    const authors = await $content("authors")
      .where({ slug: { $contains: params.author } })
      .limit(1)
      .fetch();

    const author = authors.length > 0 ? authors[0] : {};
    const articles = await $content("article/blog", params.slug)
      .where({ authors: { $contains: author.name } })
      .sortBy("createdAt", "asc")
      .fetch();

    return {
      articles,
      author,
    };
  },
};
</script>

<style>
</style>