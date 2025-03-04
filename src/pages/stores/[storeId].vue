<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const storeName = ref(route.params.storeId);

const affiliateUrls = {
    lifelong: "https://amzn.to/43kuWCi",
    homegalley: "https://amzn.to/4im1gZU",
    boldfit: "https://amzn.to/4hUxeg1",
};

const goToAmazon = () => {
    window.open(affiliateUrls[storeName.value]);
};
</script>

<template>
    <VBtn @click="goToAmazon"> Visit {{ storeName }} </VBtn>
</template>
