<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      background="#B0BEC5"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div id="slidediv">
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide
          caption="네이버 검색어 순위"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        >
          <template v-slot:img>
            <img
              class="d-block w-100"
              width="100vh"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <b-carousel-slide
          caption="다음 검색어 순위"
          text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        >
          <template v-slot:img>
            <img
              class="d-block w-100"
              width="100vh"
              src="https://picsum.photos/1024/480/?image=55"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

<style scoped>
div {
  height: 76.5vh;
  vertical-align: middle;
}
img {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  opacity: 70%;
}
</style>
