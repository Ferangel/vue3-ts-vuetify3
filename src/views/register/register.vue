<template>
    <div class="register">
      <pTitle></pTitle>
      <br>
      <br>
        <text-field2 label="Usuario nuevo:">
        </text-field2>
        <br>
        <text-field2 label="Contraseña:"></text-field2>
        <br>
        <text-field2 label="Repite la contraseña:">
        </text-field2>
        <br>
        <text-field2 label="Edad:"></text-field2>
        <br>
        <br>
        <pButton></pButton>
        <br>
        <br>
        <br>
        <br>
        <br>
        <pAnchor></pAnchor>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import textField2 from '@/components/textField2.vue';
import pAnchor from '@/components/p_anchor.vue';
import pTitle from '@/components/p_title.vue';
import pButton from '@/components/p_button.vue';

export default defineComponent({
  name: 'register',
  components: {
    textField2,
    pAnchor,
    pTitle,
    pButton,
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
