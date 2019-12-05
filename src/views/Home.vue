<template>
  <div class="home">
    <carousel :autoplay="true">
      <div v-for="image in images" v-bind:key="image.name">
        <slide>
          <img :src="resolve_img_url(image.name)" />
        </slide>
      </div>
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
        { name: "carpet_one.jpg"},
        { name: "carpet_two.jpg"},
        { name: "carpet_three.jpg"},
        { name: "carpet_four.jpg"},
        { name: "tile_one.jpg"},
        { name: "tile_two.jpg"},
        { name: "tile_three.jpg"},
        { name: "tile_four.jpg"},
        { name: "tile_five.jpg"},
        { name: "tile_six.jpg"},
        { name: "tile_seven.jpg"},


      ]
    };
  },
  components: {
    Carousel,
    Slide
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
  methods: {
    resolve_img_url: function(path) {
      let images = require.context("@/assets/img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    }
  }
};
</script>
