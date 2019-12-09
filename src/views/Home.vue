<template>
  <div>
    <div class="px-6 py-4">
      <p class="text-gray-700 text-base m-2">
        High Desert flooring installation and repair.
      </p>
      <p class="text-gray-700 text-base m-2">
        Porcelain and Ceramic Tile.
      </p>
      <p class="text-gray-700 text-base m-2">
        Carpet and Laminate Flooring.
      </p>
      <communication-card />
    </div>
    <carousel
      :autoplay="true"
      :perPageCustom="[
        [400, 1],
        [652, 2],
        [768, 2],
        [1024, 4]
      ]"
    >
      <slide v-for="image in tileImages" v-bind:key="image.name">
        <span class="container">
          <img class="w-full" :src="resolve_img_url(image.name)" alt="" />
        </span>
      </slide>
      <slide v-for="image in fireplaceImages" v-bind:key="image.name">
        <span class="container">
          <img class="w-full" :src="resolve_img_url(image.name)" alt="" />
        </span>
      </slide>
      <slide v-for="image in carpetImages" v-bind:key="image.name">
        <span class="container">
          <img class="w-full" :src="resolve_img_url(image.name)" alt="" />
        </span>
      </slide>
      <slide v-for="image in laminateImages" v-bind:key="image.name">
        <span class="container">
          <img class="w-full" :src="resolve_img_url(image.name)" alt="" />
        </span>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import * as constants from "@/core/constants";
import CommunicationCard from "@/components/CommunicationCard";

export default {
  name: "home",
  metaInfo: {
    title: "Erik Dyrr Flooring",
    titleTemplate: "%s | Home",
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
      { property: "og:title", content: "Home" },
      { property: "og:site_name", content: constants.SITE_NAME },
      // The list of types is available here: http://ogp.me/#types
      { property: "og:type", content: "website" },
      // Should the the same as your canonical link, see below.
      {
        property: "og:url",
        content: constants.WWW_WEBSITE_URL + "/"
      },
      // Often the same as your meta description, but not always.
      {
        property: "og:description",
        content: constants.SITE_DESCRIPTION
      },
      // Google / Schema.org markup:
      { itemprop: "name", content: constants.SITE_NAME },
      { itemprop: "description", content: constants.SITE_DESCRIPTION },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/carpet_one.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/carpet_two.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/carpet_three.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/carpet_four.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/carpet_five.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_one.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_two.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_three.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_four.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_five.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_six.png"
      },
      {
        property: "image",
        content: constants.WWW_WEBSITE_URL + "/tile_seven.png"
      }
    ]
  },
  data() {
    return {
      carpetImages: [
        { name: "carpet_one.png" },
        { name: "carpet_two.png" },
        { name: "carpet_three.png" },
        { name: "carpet_four.png" },
        { name: "carpet_five.png" }
      ],
      tileImages: [
        { name: "tile_one.png" },
        { name: "tile_two.png" },
        { name: "tile_three.png" },
        { name: "tile_four.png" },
        { name: "tile_five.png" },
        { name: "tile_six.png" },
        { name: "tile_eight.png" },
        { name: "tile_nine.png" }
      ],
      laminateImages: [
        { name: "laminate_one.png" },
        { name: "laminate_two.png" },
        { name: "laminate_three.png" },
        { name: "laminate_four.png" },
        { name: "laminate_five.png" }
      ],
      fireplaceImages: [{ name: "fireplace.png" }]
    };
  },
  components: {
    CommunicationCard,
    Carousel,
    Slide
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("@/assets/img/", false, /\.png$/);
      return images("./" + path);
    }
  }
};
</script>
<style scoped>
.rotate {
  -ms-transform: rotate(90deg); /* IE 9 */
  -webkit-transform: rotate(90deg); /* Chrome, Safari, Opera */
  transform: rotate(90deg);
  margin-top: 88px;
}
.container {
  margin: 0 auto;
}
.container img {
  width: 100%;
  height: auto;
  max-height: 100%;
  image-orientation: from-image;
}

.image {
  image-orientation: from-image;
}

.VueCarousel-slide {
  position: relative;
  color: #fff;
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  min-height: 100px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
