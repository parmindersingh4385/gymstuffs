<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route.params.category);
console.log(route.params.productId);
</script>

<template>Product detail.....................</template>
