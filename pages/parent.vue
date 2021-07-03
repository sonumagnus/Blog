<template>
  <div class="bg-indigo-300 p-40">
    <child
      userName="Udit Narayan"
      :rollNo="54689456"
      :Books="['physics', 'chemistry', 'computerScience']"
    />
    <br>
    <child
      userName="Kumar Sanu"
      :rollNo="963587455"
      :Books="['Hindi', 'English', 'Tamil']"
    />
  </div>
</template>

<script>
import child from "~/components/child.vue";
export default {
  components: { child },
};
</script>

<style>
</style>