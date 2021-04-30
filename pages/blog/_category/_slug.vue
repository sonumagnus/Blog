<template>
  <article class="container m-auto">
    <nuxt-content
      :document="article"
      class="blog-part w-full md:px-14"
    />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog/Gadgets", params.slug).fetch();
    return {
      article,
    };
  },
};
</script>

<style>
.blog-part h1 {
  @apply text-gray-900 font-bold text-4xl md:text-5xl font-sans py-4 px-3;
}
.blog-part h2 {
  @apply text-gray-600 text-2xl md:text-4xl pb-2 font-semibold border-gray-800 inline-block font-sans px-3;
}
.blog-part p {
  @apply text-gray-900 text-xl font-normal md:font-serif py-2 leading-8 px-3;
}
.blog-part img{
  @apply w-full
}
</style>