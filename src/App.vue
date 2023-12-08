<script setup>
import {RouterView} from 'vue-router'
import MyHeader from "@/components/MyHeader.vue";
</script>

<template>
  <my-header></my-header>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<style>
  body {
    background-color: #9b003e;
  }
</style>