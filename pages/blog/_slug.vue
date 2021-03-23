<template>
  <article class="blog-part w-10/12 md:w-3/4 mx-auto container">
        <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('blog', params.slug)
      .fetch()
      return {
        article
      }
    }
  }
</script>

<style>
  .blog-part h1 {
      @apply text-gray-700 font-black text-5xl my-4 md:mx-12 text-center font-serif
  }

  .blog-part h2{
        @apply text-gray-600 font-semibold text-3xl border-b-2 border-gray-600 inline-block md:px-32 font-sans
  }
  .blog-part p{
        @apply text-gray-900 text-xl font-normal md:px-32 lg:px-32 md:font-serif py-8 font-serif
  }
</style>