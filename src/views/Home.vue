<template>
  <div class="home container">
    <h1>This is the Home page</h1>
    <div>
      <b-table striped hover :items="records"></b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  computed: {
    activities() {
      return this.$store.state.activities;
    },
    records() {
      // return this.$store.state.records;

      const records = this.$store.state.records.map((records, index) => {
        if (records.status !== "hidden") {
          return {
            Number: index + 1,
            recordsName: records.Activity.title,
            recordsDescription: records.Activity.description,
            recordsStatus: records.status,
          };
        }
        else {
          return ""
        }
      });

      return records;
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
