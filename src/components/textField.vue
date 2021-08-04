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
  /*   .textField {
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
    } */
  .v-theme--light {
    --v-theme-background: pink;
    --v-theme-background-overlay-multiplier: 1;
    --v-theme-surface: 255,255,255;
    --v-theme-surface-overlay-multiplier: 1;
    --v-theme-primary: 98,0,238;
    --v-theme-primary-overlay-multiplier: 2;
    --v-theme-primary-darken-1: 55,0,179;
    --v-theme-primary-darken-1-overlay-multiplier: 2;
    --v-theme-secondary: 3,218,198;
    --v-theme-secondary-overlay-multiplier: 1;
    --v-theme-secondary-darken-1: 1,135,134;
    --v-theme-secondary-darken-1-overlay-multiplier: 1;
    --v-theme-error: 176,0,32;
    --v-theme-error-overlay-multiplier: 2;
    --v-theme-info: 33,150,243;
    --v-theme-info-overlay-multiplier: 1;
    --v-theme-success: 76,175,80;
    --v-theme-success-overlay-multiplier: 1;
    --v-theme-warning: 251,140,0;
    --v-theme-warning-overlay-multiplier: 1;
    --v-theme-on-background: 0,0,0;
    --v-theme-on-surface: 0,0,0;
    --v-theme-on-primary: 255,255,255;
    --v-theme-on-primary-darken-1: 255,255,255;
    --v-theme-on-secondary: 0,0,0;
    --v-theme-on-secondary-darken-1: 0,0,0;
    --v-theme-on-error: 255,255,255;
    --v-theme-on-info: 0,0,0;
    --v-theme-on-success: 0,0,0;
    --v-theme-on-warning: 0,0,0;
    --v-border-color: 0, 0, 0;
    --v-border-opacity: 0.12;
    --v-high-emphasis-opacity: 0.87;
    --v-medium-emphasis-opacity: 0.6;
    --v-disabled-opacity: 0.38;
    --v-kbd-background-color: 33, 37, 41;
    --v-kbd-color: 255, 255, 255;
    --v-code-background-color: 194, 194, 194;
}
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
