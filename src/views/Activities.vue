<template>
  <div>
    <h1>This is the Activities page</h1>

    <!-- <div class="container">
      <b-table striped hover :items="activities"></b-table>
    </div> -->

    <div class="container">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th>Activity Name</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <RowActivity
            v-for="activity in activities"
            :key="activity.number"
            :activity="activity"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import RowActivity from "../components/RowActivity.vue";
export default {
  components: { RowActivity },
  name: "Activities",
  computed: {
    activities() {
      // return this.$store.state.activities;

      return this.$store.state.activities.map((activity, index) => {
        return {
          id: activity.id,
          number: index + 1,
          name: activity.title,
          description: activity.description,
        };
      });
    },
  },
  methods: {
    fetchActivities() {
      this.$store.dispatch("fetchActivities");
    },
  },
  created() {
    this.fetchActivities();
  },
};
</script>

<style></style>
