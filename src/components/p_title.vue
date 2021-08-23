<template>
  <div class="pTitle">
    <h1>Regístrate</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pTitle',
  props: {
    h1: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.pTitle {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
