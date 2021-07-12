<template>
  <div>
    <Navbar />
    <div class="w-full md:w-11/12 m-auto">
      <div
        class="w-full md:w-2/3 m-auto md:mt-3 bg-NavyBlue h-auto flex flex-col md:flex-row box-content md:p-11 md:rounded-xl"
      >
        <!-- left-div-contains-quote-and icons-starts-here -->
        <div class="w-full md:w-[55%] h-80 md:h-[26rem] flex flex-col md:justify-between md:pl-8 md:pr-32">
          <!-- left-top-div-starts-here -->
          <div class="m-5 md:m-0">
            <p class="text-2xl font-semibold mb-2 text-white">Contact Info</p>
            <p class="text-gray-400">
              Fill up the form and our team will be get back to you within 24
              hours
            </p>
          </div>
          <!-- left-mid-div-starts-here -->
          <div class="w-48">
            <span
              class="flex items-center px-4 py-3 hover:ring-2 hover:ring-blue-700 rounded-md"
            >
              <icon-phone
                width="14"
                height="14"
                iconName="phone-alt"
                class="mr-3 text-indigo-400"
              ></icon-phone>
              <p class="text-xs text-gray-300">+0123 4567 8910</p>
            </span>
            <span
              class="flex items-center px-4 py-3 md:my-1 hover:ring-2 hover:ring-blue-700 rounded-md"
            >
              <icon-envelope
                width="15"
                height="15"
                iconName="envelope"
                class="mr-3 text-indigo-400"
              ></icon-envelope>
              <p class="text-sm text-gray-300">hello@example.com</p>
            </span>
            <span
              class="flex items-center px-4 py-3 hover:ring-2 hover:ring-blue-700 rounded-md"
            >
              <icon-location
                width="15"
                height="15"
                iconName="map-marker-alt"
                class="mr-3 text-indigo-400"
              ></icon-location>
              <p class="text-sm text-gray-300">121 street 414 don</p>
            </span>
          </div>
          <!-- left-bottom-div-starts-here -->
          <div class="flex m-2 ml-4 md:ml-1.5">
            <nuxt-link
              to="#"
              class="p-2 items-start md:p-3 mr-2.5 rounded-full md:hover:bg-blue-500 hover:text-white"
              ><icon-facebook
                width="16"
                height="16"
                iconName="facebook-f"
                class="text-white"
              ></icon-facebook
            ></nuxt-link>
            <nuxt-link
              to="#"
              class="p-2 md:p-3 mx-2 rounded-full md:hover:bg-blue-500 hover:text-gray-100"
              ><icon-twitter
                width="16"
                height="16"
                iconName="twitter"
                class="text-gray-100"
              ></icon-twitter
            ></nuxt-link>
            <nuxt-link
              to="#"
              class="p-2 md:p-3 ml-2.5 rounded-full md:hover:bg-blue-500 hover:text-gray-100"
              ><icon-insta
                width="16"
                height="16"
                iconName="instagram"
                class="text-white"
              ></icon-insta
            ></nuxt-link>
          </div>
        </div>
        <!-- Right-form-div-starts-here -->
        <div class="w-full md:w-[45%] bg-white h-[26rem] rounded-xl p-7">
          <div>
            <div class="mb-3">
              <label for="name" class="ml-0.5 text-sm">Your Name</label>
              <span
                class="flex p-1.5 border focus-within:border-opacity-0 border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 rounded"
              >
                <icon-user
                  width="15"
                  height="15"
                  iconName="user"
                  class="self-center text-gray-400"
                ></icon-user>
                <input
                  type="text"
                  class="focus:outline-none w-full px-2" id="name"
                  placeholder=""
                />
              </span>
            </div>
            <div class="mb-3">
              <label class="ml-0.5 text-sm" for="email">Mail</label>
              <span
                class="flex p-1.5 border focus-within:border-opacity-0 border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 rounded"
              >
                <icon-envelope
                  width="15"
                  height="15"
                  iconName="envelope"
                  class="self-center text-gray-500"
                ></icon-envelope>
                <input
                  type="email"
                  id="email"
                  class="focus:outline-none w-full px-2 focus:bg-white"
                  placeholder=""
                />
              </span>
            </div>
            <div class="mb-3">
              <label class="ml-0.5 text-sm" for="message">Message</label>
              <span
                class="flex p-1.5 border focus-within:border-opacity-0 border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 rounded"
              >
                <textarea
                  name=""
                  id="message"
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  class="w-full resize-none focus:outline-none placeholder-opacity-60"
                ></textarea>
              </span>
            </div>
            <span>
              <button
                type="summit"
                class="px-6 py-2.5 bg-blue-500 text-white text-sm rounded-md focus:outline-none focus:ring-2 float-right"
              >
                Send Messages
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconPhone from "~/components/icons/contact/IconPhone";
import IconLocation from "~/components/icons/contact/IconLocation";
import IconInsta from "~/components/icons/contact/IconInsta";
import IconTwitter from "~/components/icons/contact/IconTwitter";
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconEnvelope from "~/components/icons/contact/IconEnvelope";
import IconUser from "~/components/icons/ui/IconUser";
export default {
  components: {
    IconInsta,
    IconFacebook,
    IconEnvelope,
    IconPhone,
    IconLocation,
    IconTwitter,
    IconUser,
  },
};
</script>

<style>
</style>