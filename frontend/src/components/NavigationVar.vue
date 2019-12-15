<template>
  <div id="maindiv">
    <b-navbar variant="light">
      <b-navbar-brand class="mr-auto">imgs</b-navbar-brand>
      <b-navbar-brand class="ml-auto mr-auto">떳?</b-navbar-brand>
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
      toastCount: 0
    };
  },
  methods: {
    makeToast(append = false) {
      this.$bvToast.toast(`This is toast number <br/> ${this.toastCount}`, {
        title: "BootstrapVue Toast",
        appendToast: append
      });
    }
  }
};
</script>

<style scoped>
#maindiv {
  height: 5.5vh;
}
span {
  padding-left: 5px;
}
</style>
