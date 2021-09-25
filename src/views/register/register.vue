<template>
    <div class="register">
      <p-title label="Regístrate"></p-title>
      <br>
        <text-field2 label="Usuario nuevo:">
        </text-field2>
        <br>
        <text-field2 label="Contraseña:"></text-field2>
        <br>
        <text-field2 label="Repite la contraseña:"></text-field2>
        <br>
        <text-field2 label="Fecha de nacimiento:" type="date"></text-field2>
        <br>
        <p-button label="Registrarme"></p-button>
        <br>
        <p-link
        href="/login2/login2.vue"
        target="_self"
        label="Volver a la página principal">
        </p-link>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import textField2 from '@/components/textField2.vue';
import pLink from '@/components/p-link.vue';
import pTitle from '@/components/p-title.vue';
import pButton from '@/components/p-button.vue';

export default defineComponent({
  name: 'register',
  components: {
    textField2,
    pTitle,
    pButton,
    pLink,
  },
});
</script>
<style lang="scss" scoped>
.register {
  height: 100%;
  width: 100%;
  background-color: rgb(251, 151, 181);
}
</style>
