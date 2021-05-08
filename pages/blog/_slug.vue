<template>
  <article class="container m-auto md:px-44">
    <nuxt-content :document="article" class="w-full" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return {
      article,
    };
  },
};
</script>

<style>
.nuxt-content h1 {
  @apply text-gray-800 font-bold text-3xl font-sans py-2 px-3;
}
.nuxt-content h2 {
  @apply text-gray-600 text-2xl md:text-4xl pb-2 font-semibold px-3;
}
.nuxt-content p {
  @apply text-xl py-1 leading-8 px-3;
}
.nuxt-content img{
  @apply w-full
}
@media (min-width: 1024px) {
  .nuxt-content h1 {
    font-size: 2.75rem;
    line-height: 1.2;
  }
}
@media (min-width: 1024px) {
  .nuxt-content h2 {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
}
@media (min-width: 1024px) {
  .nuxt-content p {
 @apply font-serif
  }
}
</style>