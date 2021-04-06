<template>
  <div class="container">
    <div class="md:w-5/6 mx-auto">
      <div
        class="w-[95%] md:w-10/12 pt-20 bg-gray-50 m-auto flex flex-col md:flex-row shadow-md overflow-hidden relative"
      >
        <div
          class="xs:w-full md:w-1/3 h-auto md:h-[26rem] py-3 bg-purple-800 shadow-lg relative z-10 rounded-xl"
        >
          <!--left-div-->
          <h2 class="text-gray-50 text-2xl font-medium p-2 text-center">
            Contact Information
          </h2>
          <div class="h-1/4 w-full flex justify-evenly py-2 md:pt-8 px-4 text-gray-100">
            <!--left-mid-div-->
            <icon-facebook
              width="34"
              height="34"
              icon-name="facebook"
            ></icon-facebook>
            <icon-insta
              width="35"
              height="35"
              icon-name="Instagram"
            ></icon-insta>
            <icon-envelope
              width="35"
              height="35"
              icon-name="Envelope"
            ></icon-envelope>
          </div>
        </div>
        <div class="relative z-20">
          <!--left-bottom-div-->
          <div
            class="h-20 w-20 bg-blue-500 absolute right-14 bottom-14 opacity-90 rounded-full z-20 hidden md:block"
          ></div>
          <div
            class="absolute h-32 w-32 bg-red-300 right-0 bottom-0 rounded-tl-full z-10 hidden md:block"
          ></div>
        </div>
        <div class="w-full md:w-3/5">
          <!--right-div-->
          <div
            class="py-4 px-0 md:px-2 flex md:flex-wrap md:flex-row flex-col justify-evenly h-1/2 items-center"
          >
            <!--Right-upper-div-->
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">First Name</h5>
              <input
                type="text"
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full bg-gray-50"
                placeholder="Sonu"
              />
            </div>
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Last Name</h5>
              <input
                type="text"
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full bg-gray-50"
                placeholder="Lodha"
              />
            </div>
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Mail</h5>
              <input
                type="email"
                name=""
                id=""
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full bg-gray-50"
                placeholder="Enter Email"
              />
            </div>
            <div class="text-gray-700 md:w-2/5 w-4/5 py-3 md:py-0">
              <h5 class="mb-1 font-medium">Phone</h5>
              <input
                type="number"
                name=""
                id=""
                class="pb-2 outline-none border-b-2 focus:border-b-2 focus:border-gray-800 border-gray-400 w-full bg-gray-50"
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
                cols="45"
                rows="3"
                class="resize-none outline-none rounded-lg px-4 pt-2 pb-1 border-2 border-gray-400 focus:border-2 focus:border-gray-800 w-full bg-gray-50"
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
import IconInsta from "~/components/icons/contact/IconInsta";
import IconFacebook from "~/components/icons/contact/IconFacebook";
import IconEnvelope from "~/components/icons/contact/IconEnvelope";
export default {
  components: {
    IconInsta,
    IconFacebook,
    IconEnvelope,
  },
};
</script>

<style>
</style>