<template>
  <div class="pAnchor">
    <a href="/login2" target="_self">Volver a la <b>página principal</b></a>
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
