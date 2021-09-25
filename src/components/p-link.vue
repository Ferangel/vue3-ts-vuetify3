<template>
  <div class="p-link">
    <a>{{label}}</a>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'p-link',
  props: {
    label: {
      type: String,
      default: 'Esto es un enlace',
    },
  },
});
</script>

<style lang="scss" scoped>
.p-link {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
a {
  color: blue;
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}
}
</style>
