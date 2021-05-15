<template>
  <div>
    <Navbar />
    <div class="w-full md:w-11/12 m-auto">
      <div
        class="w-full md:w-2/3 m-auto md:mt-6 bg-indigo-900 h-auto flex flex-col md:flex-row box-content md:p-11 md:rounded-xl"
      >
        <!-- left-div-contains-quote-and icons-starts-here -->
        <div class="w-full md:w-[55%] h-80 md:h-[26rem] flex flex-col md:justify-between md:pl-8 md:pr-32">
          <!-- left-top-div-starts-here -->
          <div class="m-5 md:m-0">
            <p class="text-2xl font-semibold mb-2 text-white">Contact Info</p>
            <p class="text-gray-300">
              Fill up the form and out team will be get back to you within 24
              hours
            </p>
          </div>
          <!-- left-mid-div-starts-here -->
          <div>
            <span
              class="flex items-center px-4 py-3 md:hover:border-2 hover:border-blue-700 rounded-md"
            >
              <icon-phone
                width="14"
                height="14"
                iconName="phone-alt"
                class="mr-3 text-indigo-400"
              ></icon-phone>
              <p class="text-xs text-gray-200">+0123 4567 8910</p>
            </span>
            <span
              class="flex items-center px-4 py-3 md:hover:border-2 hover:border-blue-700 rounded-md"
            >
              <icon-envelope
                width="15"
                height="15"
                iconName="envelope"
                class="mr-3 text-indigo-400"
              ></icon-envelope>
              <p class="text-sm text-gray-200">hello@example.com</p>
            </span>
            <span
              class="flex items-center px-4 py-3 md:hover:border-2 hover:border-blue-700 rounded-md"
            >
              <icon-location
                width="15"
                height="15"
                iconName="map-marker-alt"
                class="mr-3 text-indigo-400"
              ></icon-location>
              <p class="text-sm text-gray-200">121 street 414 don</p>
            </span>
          </div>
          <!-- left-bottom-div-starts-here -->
          <div class="flex m-2 ml-4 md:ml-0">
            <nuxt-link
              to="#"
              class="p-2 items-start md:p-4 border-t mr-2.5 rounded-full md:hover:bg-blue-500 hover:text-white"
              ><icon-facebook
                width="16"
                height="16"
                iconName="facebook-f"
                class="text-white"
              ></icon-facebook
            ></nuxt-link>
            <nuxt-link
              to="#"
              class="p-2 md:p-4 mx-2 rounded-full md:hover:bg-blue-500 hover:text-white border-t"
              ><icon-twitter
                width="16"
                height="16"
                iconName="twitter"
                class="text-white"
              ></icon-twitter
            ></nuxt-link>
            <nuxt-link
              to="#"
              class="p-2 md:p-4 ml-2.5 rounded-full md:hover:bg-blue-500 hover:text-white border-t"
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
        <div class="w-full md:w-[45%] bg-white h-[26rem] rounded-xl p-6">
          <div>
            <div class="mb-3">
              <p>Your Name</p>
              <span
                class="flex p-2 border focus-within:border-2 border-gray-300 focus-within:border-blue-500 rounded-md"
              >
                <icon-user
                  width="15"
                  height="15"
                  iconName="user"
                  class="self-center text-gray-500"
                ></icon-user>
                <input
                  type="text"
                  class="focus:outline-none w-full px-2 focus:bg-white"
                />
              </span>
            </div>
            <div class="mb-3">
              <p>Mail</p>
              <span
                class="flex p-2 border focus-w focus-within:border-2 border-gray-300 focus-within:border-blue-500 rounded-md"
              >
                <icon-envelope
                  width="15"
                  height="15"
                  iconName="envelope"
                  class="self-center text-gray-500"
                ></icon-envelope>
                <input
                  type="email"
                  class="focus:outline-none w-full px-2 focus:bg-white"
                />
              </span>
            </div>
            <div class="mb-3">
              <p>Message</p>
              <span
                class="flex p-2 border focus-within:border-2 border-gray-300 focus-within:border-blue-500 rounded-md"
              >
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Message"
                  class="w-full resize-none focus:outline-none"
                ></textarea>
              </span>
            </div>
            <span>
              <button
                type="submit"
                class="px-4 py-2 bg-blue-800 text-white rounded-md focus:outline-none float-right"
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