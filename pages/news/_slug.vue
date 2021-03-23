<template>
  <article class="blog-section w-10/12 md:w-3/4 mx-auto">
        <nuxt-content :document='doc' />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const doc = await $content('news', params.slug).fetch()
      return {
        doc
      }
    }
  }
</script>

<style>
  .blog-section h1 {
      @apply text-gray-700 font-black text-5xl my-4 md:mx-12 text-center font-serif
  }

  .blog-section h2{
        @apply text-gray-600 font-semibold text-3xl border-b-2 border-gray-600 inline-block md:mx-32 font-sans
  }
  .blog-section p{
        @apply text-gray-900 text-xl font-normal md:px-32 md:font-serif py-8
  }
</style>