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
        <a href="/ranktitle/naver">
          <b-carousel-slide caption="네이버 검색어 순위">
            <template v-slot:img>
              <img
                class="d-block w-100"
                width="100vh"
                src="@/assets/naver_site.png"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </a>

        <a href="/ranktitle/daum">
          <b-carousel-slide caption="다음 검색어 순위">
            <template v-slot:img>
              <img class="d-block w-100" width="100%" src="@/assets/daum_site.png" alt="image slot" />
            </template>
          </b-carousel-slide>
        </a>

        <a href="/ranktitle/nate">
          <b-carousel-slide caption="네이트 검색어 순위">
            <template v-slot:img>
              <img class="d-block w-100" width="100%" src="@/assets/daum_site.png" alt="image slot" />
            </template>
          </b-carousel-slide>
        </a>

        <a href="/ranktitle/zum">
          <b-carousel-slide caption="줌 검색어 순위">
            <template v-slot:img>
              <img class="d-block w-100" width="100%" src="@/assets/daum_site.png" alt="image slot" />
            </template>
          </b-carousel-slide>
        </a>
      </div>
    </b-carousel>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.state.page = "/";
  },
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
  filter: blur(3px);
  -webkit-filter: blur(3px);
  -moz-filter: blur(3px);
  -o-filter: blur(3px);
  -ms-filter: blur(3px);
}
</style>
