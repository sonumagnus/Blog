<template>
  <div class="w-full shadow-lg">
    <div class="w-5/6 h-auto m-auto">
      <div class="h-13 w-full flex justify-between border-gray-600">         <!--main-Navbar-div-->
        <div class="px-4 py-2">          <!--Navbar-Left-Div{Contains: heading}-->
          <h1 class="text-2xl font-extrabold">BlogTag</h1>
        </div>
        <div class="w-2/5 hidden md:flex justify-between px-3 py-3 md:visible">  <!--Navbar-Right-Div{Contains: Menu, Contact-btn}-->
          <div>
            <ul class="flex">
              <li>
               <nuxt-link to="/" class="text-lg font-bold px-4 py-2 text-gray-700 hover:text-pink-50 hover:bg-gray-700 hover: rounded">
                  Home
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/about" class="text-lg font-bold px-4 py-2 text-gray-700 hover:text-pink-50 hover:bg-gray-700 hover: rounded">
                  About Us
                </nuxt-link>
              </li>
              <li>
                <nuxt-link to="/icons" class="text-lg font-bold px-4 py-2 text-gray-700  hover:text-pink-50 hover:bg-gray-700 hover: rounded">
                  More
                </nuxt-link>
              </li>
            </ul>
          </div>
          <div> <!--Contact-button-Container-div-->
            <nuxt-link to="/contact" class="px-4 py-2 bg-purple-900 text-pink-50 hover:bg-purple-600 rounded">
              Contact
            </nuxt-link> <!--Contact-button-->
          </div>
        </div>
      </div>
      <!-- Navbar-Finish -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>