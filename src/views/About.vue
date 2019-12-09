<template>
  <div class="h-screen m-auto p-10">
    <div
      class="flex flex-row w-full justify-center lg:max-w-full lg:flex md:flex flex flex-wrap"
    >
      <div
        class="lg:w-1/2 md:w-1/2 sm:w-1/2 sm:h-auto border-r border-b border-l border-gray-400 border-l-0 border-t border-gray-400 bg-white rounded-b
         rounded p-4 flex flex-col justify-between leading-normal"
      >
        <div class="mb-8">
          <div class="text-gray-900 font-bold text-xl mb-2">
            Over 20 Years of Service
          </div>
          <p class="text-gray-700 text-base">
            Since 1972, Erik Dyrr has been providing flooring services in the
            High Desert region. From carpet, laminate, to tile we handle it all!
            We've been servicing the Hesperia, Victorville, Apple Valley, Pinon
            Hills, and all other Greater Mojave cities!
          </p>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex flex-row items-center">
            <img
              class="w-10 h-10 rounded-full mr-4"
              src="../assets/img/erik.png"
              alt="Avatar of Erik Dyrr"
            />
            <div class="text-sm">
              <p class="text-gray-900 leading-none">Erik Dyrr</p>
            </div>
          </div>
          <div class="p-3">
            <communication-card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as constants from "../core/constants";
import CommunicationCard from "../components/CommunicationCard";

export default {
  components: { CommunicationCard },
  metaInfo: {
    title: "Erik Dyrr Flooring",
    titleTemplate: "%s | About",
    htmlAttrs: {
      lang: "en",
      amp: true
    },
    link: [{ rel: "canonical", href: constants.WWW_WEBSITE_URL }],
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: constants.SITE_DESCRIPTION },
      // OpenGraph data (Most widely used)
      { property: "og:title", content: "About" },
      { property: "og:site_name", content: constants.SITE_NAME },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: constants.WWW_WEBSITE_URL + "/about"
      },

      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: constants.SITE_DESCRIPTION
      },
      // Google / Schema.org markup:
      { itemprop: "name", content: constants.SITE_NAME },
      { itemprop: "description", content: constants.SITE_DESCRIPTION }
    ]
  }
};
</script>
