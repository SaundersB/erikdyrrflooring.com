<template>
  <div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Erik Dyrr Flooring</div>
      <p class="text-gray-700 text-base m-2">
        High Desert flooring installation and repair.
      </p>
      <p class="text-gray-700 text-base m-2">
        Porcelain and Ceramic Tile.
      </p>
      <p class="text-gray-700 text-base m-2">
        Carpet and Laminate Flooring.
      </p>
      <div class="flex flex-row justify-center">
        <p class="text-gray-700 text-base mr-1">
          Call
        </p>
        <a class="text-blue-400 mr-1" href="tel:+17604047532">760-404-7532</a>
        <p class="text-gray-700 text-base mr-1">
          or email
        </p>
        <a class="text-blue-400 mr-1" href="mailto:erikdyrr@live.com">erikdyrr@live.com</a>
      </div>
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

export default {
  name: "home",
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
