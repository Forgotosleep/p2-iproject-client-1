<template>
  <div class="container">
    <form @submit.prevent="submitEditActivity">
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
          value="Edit Activity"
        />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "EditActivity",
  data() {
    return {
      id: 0,
      title: "",
      description: "",
    };
  },
  props: ["activity"], 
  methods: {
    submitEditActivity() {
      const payload = {
        id: this.id,
        title: this.title,
        description: this.description,
      };

      this.$store.dispatch("editActivity", payload);
    },
  },
  created() {
    this.id = this.$store.state.activity.id
    this.title = this.$store.state.activity.name
    this.description = this.$store.state.activity.description
  }

};
</script>

<style></style>
