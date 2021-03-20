<template>
  <div class="w-full">
    <div class="md:w-5/6 mx-auto px-2 md:px-0">
      <div
        class="md:w-10/12 mt-8 bg-gray-50 p-1 md:p-2 m-auto rounded-2xl flex flex-col md:flex-row shadow-md"
      >
        <div class="xs:w-full md:w-2/5 h-auto md:h-96 py-3 bg-purple-800 rounded-lg shadow-lg">
          <!--left-div-->
          <h2 class="text-gray-50 text-xl font-medium p-2 text-center">
            Contact Information
          </h2>
          <div class="h-1/4 w-full flex justify-evenly py-2 md:pt-8 px-4">
            <!--left-mid-div-->
            <svg
              :width="38"
              :height="38"
              :aria-labelledby="iconName"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="facebook"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="white"
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              ></path>
            </svg>
            <svg
              :width="40"
              :height="40"
              :aria-labelledby="iconName"
              aria-hidden="true"
              focusable="false"
              data-prefix="fab"
              data-icon="instagram"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              data-fa-i2svg=""
            >
              <path
                fill="white"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              ></path>
            </svg>
            <svg
              :width="40"
              :height="40"
              :aria-labelledby="iconName"
              aria-hidden="true"
              focusable="false"
              data-prefix="fal"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              data-fa-i2svg=""
            >
              <path
                fill="white"
                d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
              ></path>
            </svg>
          </div>
          <div class=""> <!--left-bottom-div-->

          </div>
        </div>
        <div class="w-full md:w-3/5 bg-gray-50">
          <!--right-div-->
          <div class="py-4 px-0 md:px-2 flex md:flex-wrap md:flex-row flex-col justify-evenly h-1/2 items-center">
            <!--Right-upper-div-->
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">First Name</h5>
              <input
                type="text"
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full"
                placeholder="Sonu"
              />
            </div>
            <div class="text-gray-700  md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Last Name</h5>
              <input
                type="text"
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full"
                placeholder="Lodha"
              />
            </div>
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Mail</h5>
              <input
                type="email"
                name=""
                id=""
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full"
                placeholder="Enter Email"
              />
            </div>
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Phone</h5>
              <input
                type="number"
                name=""
                id=""
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full"
                placeholder="Enter Phone Number"
              />
            </div>
          </div>
          <div class="px-8 m-auto">
            <div class="md:py-4 md:px-2">
              <h5 class="mb-1 font-medium">Message</h5>
              <textarea
                name=""
                id=""
                cols="53"
                rows="3"
                class="resize-none outline-none rounded-lg px-4 pt-2 pb-1 border-2 border-gray-400 focus:border-2 focus:border-gray-800 w-full md:w-auto"
                placeholder="Write Your Message here..."
              ></textarea>
            </div>
          </div>
          <!--right-lower-div-ends here-->
          <div class="flex justify-center md:justify-end px-16 py-1 md:py-0">
            <button
              type="submit"
              class="px-3 py-2 bg-purple-900 hover:bg-purple-700 text-gray-50 rounded-lg font-semibold focus:outline-none shadow-lg"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contact {
  @apply bg-blue-500;
}
</style>