<template>
  <div>
    <carousel :autoplay="true" :perPageCustom="[[400, 1] ,[652, 2], [768, 2], [1024, 4]]">
      <slide v-for="image in images" v-bind:key="image.name">
        <span class="container">
          <img :src="resolve_img_url(image.name)" alt=""/>
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
      images: [
        { name: "carpet_one.png" },
        { name: "carpet_two.png" },
        { name: "carpet_three.png" },
        { name: "carpet_four.png" },
        { name: "carpet_five.png" },
        { name: "fireplace.png" },
        { name: "tile_one.png" },
        { name: "tile_two.png" },
        { name: "tile_three.png" },
        { name: "tile_four.png" },
        { name: "tile_five.png" },
        { name: "tile_six.png" },
        { name: "tile_eight.png" },
        { name: "tile_nine.png" },
        { name: "laminate_one.png" },
        { name: "laminate_two.png" },
        { name: "laminate_three.png" },
        { name: "laminate_four.png" },
        { name: "laminate_five.png" },
      ]
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

.label {

}
</style>
