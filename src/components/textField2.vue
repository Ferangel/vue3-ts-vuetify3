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
    position: absolute;
    left: 36%;
    margin: 50px auto;
    background-color: rgb(149, 251, 136);
    input {
    margin: 0 auto;
    width: 230px;
    height: 28px;
    text-align: center;
    background-color: rgb(255, 206, 206);
    border: 1px solid blue;
    }
    label{
    display: inline-block;
    width: 150px;
    }
    }
</style>
