<template>
  <div>
    <ul>
      <li
        v-for="(article, index) in articles"
        :key="index"
        class="
          my-3
          md:my-5
          w-full
          p-1.5
          rounded-md
          border border-transparent
          hover:border-gray-200
          hover:shadow
        "
      >
        <nuxt-link :to="`${article.path}`">
          <div class="flex justify-between">
            <div class="pr-4">
              <span class="flex mb-2 text-sm font-medium">
                <img
                  :src="`/resources/${authorLink(article.authors)}.jpg`"
                  alt="author's pic"
                  class="w-5 h-5 rounded-full object-cover mr-2"
                />
                <p class="capitalize">{{ article.categories[0] }}</p>
                <p class="mx-0.5 text-gray-600">in</p>
                <p>Blogs</p>
              </span>
              <p
                class="
                  font-bold
                  line-clamp-2
                  leading-5
                  md:text-xl
                  md:leading-7
                  capitalize
                "
              >
                {{ article.title }}
              </p>
              <p
                class="
                  hidden
                  md:block
                  md:line-clamp-2
                  text-gray-500
                  md:leading-5
                  md:mt-1
                "
              >
                {{ article.description }}
              </p>
              <span class="flex text-sm text-gray-600 opacity-80 mt-1.5">
                <p>
                  {{ formatDate(article.createdAt) }}
                </p>
                <p class="px-1.5 font-semibold">·</p>
                <ReadingTime :content="article.body" />
                <icon-star
                  width="15"
                  height="15"
                  iconName="star"
                  class="mx-1 self-center opacity-70"
                ></icon-star>
              </span>
            </div>
            <img
              :src="`/resources/${article.img}`"
              alt=""
              class="
                w-[6.25rem]
                h-[6.25rem]
                sm:w-auto
                sm:max-w-[9.5rem]
                md:max-w-[12.1rem]
                md:h-32
                lg:h-[8.375rem]
                lg:max-w-[12.7rem]
                object-cover
                md:self-center
                rounded
              "
            />
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import IconStar from "./icons/ui/IconStar.vue";
export default {
  components: { IconStar },
  props: {
    articles: {
      type: Array,
      default: [],
    },
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    authorLink(author) {
      if (author == "sonu lodha") {
        return "sonu_lodha";
      } else if (author == "dypanshu sharma") {
        return "dypanshu_sharma";
      }
    },
  },
};
</script>

<style>
</style>