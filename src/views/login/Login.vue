<template>
  <div>
    <h1>Aquí empezamos a meter los componentes de login</h1>
    <text-field label="Aquí empezamos a meter los componentes de login"></text-field>
    <textfer></textfer>
    <v-btn
    block
    @click="lanzaPeticion()"
    >
      lanza peticion
    </v-btn>

  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

import textfer from '@/components/textfer.vue';
import ServiceTest from '@/middleware/services/serviceTest';
import TextField from '@/components/textField.vue';

export default defineComponent({
  name: 'FERLogin',
  components: { textfer, TextField },
  methods: {
    lanzaPeticion() {
      ServiceTest.createUser();
    },
  },
});
</script>
<style lang="scss" scoped>
.textField {
  font-weight: 10px;
  font-size: 1cm;
  margin-top: 10cm;
}
</style>
