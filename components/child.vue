<template>
  <div class="bg-red-400">
    <p>This is the child components</p>
    <p>{{userName}} </p>
    <p>{{rollNo}} </p>
    <p>{{Books}} </p>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "enter the student name",
    },
    rollNo: {
      type: Number,
      default: 1234567890,
    },
    Books: {
      type: Array,
      default: ["Book1", "Book2", "Book3", "Book4"],
    },
  },
};
</script>

<style>
</style>