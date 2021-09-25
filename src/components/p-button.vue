<template>
  <div class="p-button">
    <button>{{label}}</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'p-button',
  props: {
    label: {
      type: String,
      default: 'Texto por defecto',
    },
  },
});
</script>

<style lang="scss" scoped>
.p-button {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
button {
  background-color: #f8f9fa;
  border: 1.5px solid #f8f9fa;
  border-radius: 4px;
  color: #3c4043;
  margin: 20px;
  padding: 0 16px;
  line-height: 27px;
  height: 36px;
  min-width: 80px;
}
}
</style>
