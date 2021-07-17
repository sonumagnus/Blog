<template>
  <transition name="search">
    <div
      class="fixed z-20 inset-0 justify-evenly items-start bg-gray-50 h-screen"
      v-show="show"
    >
      <span @click="close">
        <icon-close
          width="35"
          height="35"
          iconName="times"
          class="absolute right-5 top-3.5 text-gray-600"
        />
      </span>
      <div class="input-wrapper relative mx-6">
        <input
          v-model="searchQuery"
          type="search"
          autocomplete="off"
          placeholder="Search Articles"
          class="
            block
            mt-20
            py-2
            truncate
            leading-5
            bg-gray-50
            placeholder-gray-500
            text-gray-700
            focus:outline-none
            w-full
            h-12
            border-b border-gray-300
            text-center
          "
        />
      </div>
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
            :to="`/article/blog/${article.slug}`"
            class="
              flex
              px-9
              py-4
              items-center
              leading-5
              transition
              ease-in-out
              duration-150
              text-gray-800
              hover:text-black
              bg-gray-50
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
      this.articles = await this.$content("article", "blog")
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
  transform: scale(0, 1);
  @apply h-px w-full absolute;
}
.input-wrapper:focus-within::after {
  content: "";
  transform: scale(1, 1);
  @apply bg-blue-800 duration-300 ease-in-out;
}
</style>
