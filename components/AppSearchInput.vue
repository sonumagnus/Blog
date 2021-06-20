<template>
  <transition name="search">
    <div
      class="relative inset-0 h-screen w-full flex items-start"
      v-show="show"
    >
      <input
        v-model="searchQuery"
        type="search"
        autocomplete="off"
        placeholder="Search Articles"
        class="
          block
          w-full
          pl-4
          py-2
          mt-2
          truncate
          leading-5
          placeholder-gray-500
          border border-gray-500
          text-gray-700
          focus:border-gray-300
          rounded-md
          focus:outline-none
          bg-white
        "
      />
      <span @click="close">
        <icon-close width="30" height="30" iconName="times" class="my-3 ml-2" />
      </span>
      <ul
        v-if="articles.length"
        class="
          z-10
          absolute
          w-auto
          flex-1
          bg-white
          dark:bg-gray-900
          rounded-md
          border border-gray-300
          overflow-hidden
          mt-12
        "
      >
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="
              flex
              px-4
              py-2
              items-center
              leading-5
              transition
              ease-in-out
              duration-150
              text-green-700
              hover:text-black
              border-b
            "
          >
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
import IconClose from "./icons/ui/IconClose.vue";
export default {
  components: { IconClose },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content("blog")
        .limit(6)
        .search(searchQuery)
        .fetch();
    },
  },
  methods: {
    close() {
      this.$emit("disable");
    },
  },
};
</script>
<style scoped>
.search-enter,
.search-leave-to {
  transform: translate(100%, 0);
}
.search-enter-active,
.search-leave-active {
  transition: all 0.3s ease;
}
</style>
