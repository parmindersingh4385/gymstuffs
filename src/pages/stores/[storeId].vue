<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const storeName = ref(route.params.storeId);
</script>

<template>{{ storeName }}</template>
