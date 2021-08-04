<template>
    <div>
      <h1 style="text-align: center">Iniciar sesión</h1>
      <br>
      <br>
        <text-field
        :class="flagRed ? 'red' : 'black'"
        @click="cambiarColor"
        label="Usuario nuevo:">
        </text-field>
        <br>
        <text-field label="Contraseña:"></text-field>
    </div>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import textField from '@/components/textField.vue';

export default defineComponent({
  name: 'FERLogin',
  components: { textField },
  data() {
    return {
      flagRed: false,
    };
  },
  methods: {
    cambiarColor() {
      this.flagRed = !this.flagRed;
    },
  },
});
</script>
<style lang="scss" scoped>

.red {
  color: red;
}
.black {
  color: black;
}
</style>
