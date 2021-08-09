<template>
  <transition name="search">
    <div
      v-show="show"
      @click="close"
      class="fixed inset-0 bg-gray-500 bg-opacity-40 z-20"
    >
      <div
        class="
          absolute
          right-0
          w-full
          lg:w-1/3
          justify-evenly
          items-start
          bg-gray-50
          h-screen
          search-div
          ring ring-gray-50
        "
        @click.stop
      >
        <span @click="close">
          <icon-close
            width="35"
            height="35"
            iconName="times"
            class="absolute right-5 top-3.5 text-gray-600"
          />
        </span>
        <div class="input-wrapper relative mx-6 md:mx-24 lg:mx-6">
          <input
            v-model="searchQuery"
            type="search"
            ref="input"
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
              text-gray-500 text-semibold text-xl
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
            mt-6
          "
        >
          <li v-for="article of articles" :key="article.slug">
            <NuxtLink
              :to="`/article/blog/${article.slug}`"
              class="
                flex
                px-6
                py-3
                items-center
                leading-5
                transition
                ease-in-out
                duration-150
                bg-gray-50
                border-b
              "
            >
              <img
                :src="`/resources/${article.img}`"
                alt="img"
                class="w-28 h-20 object-cover mr-4 rounded"
              />
              <div class="h-20 flex flex-col justify-between">
                <h3 class="text-MediumTitle font-semibold hover:text-gray-600">
                  {{ article.title }}
                </h3>
                <p class="text-[13px]">{{ formatDate(article.createdAt) }}</p>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
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
        .only(["img", "title", "createdAt", "slug"])
        .limit(5)
        .search(searchQuery)
        .fetch();
    },
  },
  methods: {
    close() {
      this.$emit("disable");
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
  updated() {
    this.$refs.input.focus();
  },
};
</script>
<style scoped>
.search-enter .search-div,
.search-leave-to .search-div {
  transform: translate(100%, 0);
}
.search-enter-active,
.search-leave-active,
.search-enter-active .search-div,
.search-leave-active .search-div {
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
  transition-duration: 0.8s;
  @apply bg-blue-800 ease-in-out;
}
</style>
