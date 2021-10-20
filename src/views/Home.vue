<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    activities() {
      return this.$store.state.activities;
    },
    records() {
      return this.$store.state.records;
    },
  },
  methods: {
    fetchActivities() {
      this.$store.dispatch("fetchActivities");
    },
    fetchRecords() {
      this.$store.dispatch("fetchRecords");
    },
  },
  created() {
    this.fetchActivities();
    this.fetchRecords();
  },
};
</script>
