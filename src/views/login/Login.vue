<template>
  <div>
    <h1>Aquí empezamos a meter los componentes de login</h1>
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

export default defineComponent({
  name: 'FERLogin',
  components: { textfer },
  methods: {
    lanzaPeticion() {
      ServiceTest.createUser();
    },
  },
});
</script>
