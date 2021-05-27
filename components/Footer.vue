<template>
  <div>
    <!-- top-footer div -->
    <div class="bg-gray-800 md:h-36 h-80">
      <div class="w-5/6 m-auto py-7 flex flex-col md:flex-row justify-between">
        <!-- left-about-us-div -->
        <div class="flex flex-col md:flex-row items-center w-full md:w-1/2">
          <div
            class="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden mr-2 md:my-4 md:mr-4"
          >
            <img src="/resources/logo.png" alt="" />
          </div>
          <div class="text-center md:text-left my-4 md:my-0">
            <p class="text-gray-300 font-bold py-2 md:py-0">ABOUT US</p>
            <p class="text-gray-300 md:py-2 md:p-0">
              BlogTag is the place where you will find Latest News and Blogs
              related to Gadgets and Tech Products
            </p>
          </div>
        </div>
        <!-- right-social-icons-div -->
        <div class="w-full md:w-1/6 md:text-left text-center mt-1.5 md:mt-0">
          <p class="text-gray-300 font-bold mb-2 md:mb-4">FOLLOW US</p>
          <div
            class="flex text-gray-200 md:justify-start justify-center mt-2 md:mt-0 justify-self-center"
          >
            <nuxt-link
              to="#"
              class="h-8 w-8 bg-gray-900 flex justify-center items-center mr-1 rounded"
            >
              <icon-facebook
                width="16"
                height="16"
                iconName="facebook"
                class="my-2 mr-2"
              >
              </icon-facebook>
            </nuxt-link>
            <nuxt-link
              to="#"
              class="h-8 w-8 bg-gray-900 flex justify-center items-center mx-2 rounded"
            >
              <icon-insta
                width="17"
                height="17"
                iconName="instagram"
                class="m-2"
              ></icon-insta>
            </nuxt-link>
            <nuxt-link
              to="#"
              class="h-8 w-8 bg-gray-900 flex justify-center items-center mx-2 rounded"
            >
              <icon-envelope
                width="18"
                height="18"
                iconName="Envelope"
                class="m-2"
              ></icon-envelope>
            </nuxt-link>
            <nuxt-link
              to="#"
              class="h-8 w-8 bg-gray-900 flex justify-center items-center mx-1 rounded"
            >
              <icon-twitter
                width="18"
                height="18"
                iconName="twitter"
              ></icon-twitter>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- bottom-footer-div -->
    <div class="bg-gray-900 h-32 md:h-14 text-center">
      <div class="py-4 w-5/6 m-auto flex flex-col md:flex-row justify-between">
        <span class="text-gray-50 my-2 md:my-0"
          >Copyright © 2021 BlogTag All Rights Reserved</span
        >
        <span class="text-gray-50 mt-2 md:mt-0">
          <nuxt-link to="/" class="mx-2 hover:text-red-500">Home</nuxt-link>
          <!-- <nuxt-link to="/" class="mx-2 hover:text-red-500"
            >Terms & Conditions</nuxt-link
          > -->
          <nuxt-link to="/privacy" class="mx-2 hover:text-red-500"
            >Privacy Policy</nuxt-link
          >
          <nuxt-link to="/contact" class="mx-2 hover:text-red-500"
            >Contact Us</nuxt-link
          >
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconInsta from "~/components/icons/contact/IconInsta";
import IconEnvelope from "~/components/icons/contact/IconEnvelope";
import IconTwitter from "~/components/icons/contact/IconTwitter";
export default {
  components: {
    IconFacebook,
    IconInsta,
    IconEnvelope,
    IconTwitter,
  },
};
</script>

<style>
</style>