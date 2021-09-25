<template>
  <div class="p-title">
    <h1>{{label}}</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'p-title',
  props: {
    label: {
      type: String,
      default: 'Esto es un h1',
    },
  },
});
</script>

<style lang="scss" scoped>
.p-title {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
