<template>
  <div class="pButton">
    <button>Puedes clicarme porque soy un botón molón</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'pButton',
  props: {
    button: {
      type: String,
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
