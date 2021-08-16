<template>
  <div class="textField">
    <label>{{label}}</label>
    <input name="Usuario" type="text">
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'textField',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
});
</script>
<style lang="scss" scoped>
.textField {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  input {
    margin: 0 auto;
    width: 230px;
    height: 28px;
    text-align: center;
    background-color: rgb(255, 206, 206);
    border: 1px solid blue;
  }
  label{
    width: 17%;
  }
}
</style>
