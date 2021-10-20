<template>
  <div class="container">
    <h1>This is the Add Activity page</h1>

    <form @submit.prevent="submitNewActivity">
      <div class="form-group">
        <label for="exampleFormControlInput1">Activity Name</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Activity Name"
          v-model="title"
        />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Activity Description</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Activity Description"
          v-model="description"
        ></textarea>
      </div>

      <div>
        <input
          type="submit"
          value="Submit Activity"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddActivity",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    submitNewActivity() {
      const payload = {
        title: this.title,
        description: this.description,
      };

      this.$store.dispatch("addActivity", payload);
    },
  },
};
</script>

<style></style>
