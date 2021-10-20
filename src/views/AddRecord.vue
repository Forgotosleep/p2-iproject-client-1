<template>
  <div class="container">
    <h1>This is the Add Record page</h1>
    <form @submit.prevent="submitNewRecord">
      <div class="form-group">
        <label for="exampleFormControlSelect1">Activities: </label>
        <select class="form-control" id="exampleFormControlSelect1" v-model="ActivityId">
          <option value="0" disabled selected>-- Select an activity -- </option>
          <option
            v-for="activity in activities"
            :key="activity.id"
            :value="activity.id"
          >
            {{ activity.title }}
          </option>

        </select>
      </div>

      <div>
        <input type="submit" value="Add new Record" />
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "AddRecord",
  data() {
    return {
      ActivityId: 0,
    };
  },
  components: {
  },
  computed: {
    activities() {
      return this.$store.state.activities;
    },
  },
  methods: {
    submitNewRecord() {
      const payload = {
        ActivityId: this.ActivityId
      };
      this.$store.dispatch("addRecord", payload);
    },
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
