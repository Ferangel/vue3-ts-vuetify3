<template>
  <div class="pButton">
    <button>Esto debería ser un botón</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pButton',
  props: {
    button: {
      type: HTMLButtonElement,
      default: '',
    },
  },
});
</script>

<style lang="scss" scoped>
.pButton {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>
