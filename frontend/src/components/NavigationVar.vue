<template>
  <div id="maindiv">
    <b-navbar variant="light">
      <b-navbar-brand class="mr-auto" @click="goCarousel()">
        imgs
      </b-navbar-brand>
      <b-navbar-brand class="ml-auto mr-auto" @click="goCarousel()">
        <span>떳??</span>
      </b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <span>
          <img
            src="@/assets/menu.png"
            alt="menu"
            width="40px"
            @click="makeToast()"
          />
        </span>
        <span><b-button pill variant="outline-secondary">Login</b-button></span>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "navigationVar",
  created() {},
  data() {
    return {
      toastCount: 1
    };
  },
  methods: {
    makeToast(append = false) {
      this.$bvToast.toast(`This is toast number <br/> ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        appendToast: append
      });
    },
    goCarousel() {
      if (this.$store.state.page != "/") this.$router.push("/");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Do+Hyeon|Gugi&display=swap");
#maindiv {
  height: 5.5vh;
  font-family: "Gugi", cursive;
}
span {
  font-size: 19px;
  padding-left: 5px;
}
</style>
