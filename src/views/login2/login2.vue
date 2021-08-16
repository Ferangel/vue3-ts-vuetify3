<template>
    <div class="FERLogin">
      <pTitle></pTitle>
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
        <br>
        <pButton></pButton>
        <br>
        <pAnchor></pAnchor>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import textField from '@/components/textField.vue';
import pAnchor from '@/components/p_anchor.vue';
import pTitle from '@/components/p_title.vue';
import pButton from '@/components/p_button.vue';

export default defineComponent({
  name: 'FERLogin',
  components: {
    textField,
    pAnchor,
    pTitle,
    pButton,
  },

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
.FERLogin {
  height: 100%;
  width: 100%;
  background-color: aqua;
}
.red {
  color: red;
}
.black {
  color: black;
}
</style>
