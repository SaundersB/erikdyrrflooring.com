<template>
  <div>
    <carousel :autoplay="true">
      <slide v-for="image in images" v-bind:key="image.name">
        <div class="container">
          <img :src="resolve_img_url(image.name)" />
        </div>
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
      images: [
        { name: "carpet_one.jpg" },
        { name: "carpet_two.jpg" },
        { name: "carpet_three.jpg" },
        { name: "carpet_four.jpg" },
        { name: "tile_one.jpg" },
        { name: "tile_two.jpg" },
        { name: "tile_three.jpg" },
        { name: "tile_four.jpg" },
        { name: "tile_five.jpg" },
        { name: "tile_six.jpg" },
        { name: "tile_seven.jpg" }
      ]
    };
  },
  components: {
    Carousel,
    Slide
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("@/assets/img/", false, /\.png$|\.jpg$/);
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
}
</style>
