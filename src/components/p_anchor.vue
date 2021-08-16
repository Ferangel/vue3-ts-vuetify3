<template>
  <div class="pAnchor">
    <a href="https://google.com/" target="_blank">Esto es un enlace</a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pAnchor',
  props: {
    a: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.pAnchor {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
