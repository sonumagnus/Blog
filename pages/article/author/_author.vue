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
        <ul>
          <li
            v-for="(article, index) in articles"
            :key="index"
            class="
              my-3
              md:my-5
              p-1.5
              rounded-md
              border border-transparent
              hover:border-gray-200
              hover:shadow
              w-full
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
                    <p class="capitalize">{{ article.authors }}</p>
                    <p class="mx-0.5 text-gray-600">in</p>
                    <p>{{ article.categories[0] }}</p>
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
    </div>
  </div>
</template>

<script>
import IconLeftArrow from "~/components/icons/ui/IconLeftArrow";
import IconStar from "~/components/icons/ui/IconStar";
export default {
  components: { IconStar, IconLeftArrow },
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