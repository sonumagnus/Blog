<template>
  <transition name="search">
    <div
      class="
        fixed
        z-20
        inset-0
        flex
        justify-evenly
        items-start
        bg-gray-800
        opacity-[98%]
        pt-12
      "
      v-show="show"
    >
      <span class="input-wrapper relative mx-10 w-full">
        <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="Search Articles"
          class="
            block
            pl-4
            py-2
            truncate
            leading-5
            bg-gray-800
            placeholder-gray-500
            text-gray-200
            focus:outline-none
          "
      /></span>
      <span @click="close">
        <icon-close
          width="26"
          height="26"
          iconName="times"
          class="my-3 ml-2 text-gray-400 mr-6"
        />
      </span>
      <ul
        v-if="articles.length"
        class="
          z-10
          absolute
          w-auto
          flex-1
          bg-white
          rounded-md
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
              py-4
              items-center
              leading-5
              transition
              ease-in-out
              duration-150
              text-gray-200
              hover:text-black
              bg-gray-800
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
.input-wrapper::after {
  content: "";
  @apply h-px w-full bg-gray-400 left-0 bottom-0 absolute;
}
.input-wrapper:focus-within::after {
  content: "";
  @apply h-px w-full bg-gray-100 left-0 bottom-0 absolute duration-1000 ease-in-out;
}
</style>
