<script setup>
import { useRouter } from "vue-router";

const productUrls = [
    { id: 1, title: "Shakers", product_url: "/products/shakers" },
    { id: 2, title: "Rollers", product_url: "/products/rollers" },
    { id: 3, title: "Gloves", product_url: "/products/gloves" },
    { id: 4, title: "Wrist bands", product_url: "/products/wristbands" },
    { id: 5, title: "Skipping ropes", product_url: "/products/skippingropes" },
    { id: 6, title: "Shakers", product_url: "/products/shakers" },
    { id: 7, title: "Rollers", product_url: "/products/rollers" },
    { id: 8, title: "Gloves", product_url: "/products/gloves" },
    { id: 9, title: "Wrist bands", product_url: "/products/wristbands" },
    { id: 10, title: "Skipping ropes", product_url: "/products/skippingropes" },
];

const router = useRouter();

const goToProduct = (productUrl) => {
    router.push(productUrl);
};
</script>

<template>
    <v-slide-group show-arrows>
        <v-slide-group-item
            v-for="(product, index) in productUrls"
            :key="index"
        >
            <v-sheet
                class="circle-layout d-flex flex-column justify-center align-center"
                @click="goToProduct(product.product_url)"
            >
                <v-icon size="130">
                    <v-img
                        src="https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-1674024044.png"
                        alt="Profile"
                        width="100"
                        height="100"
                        rounded="circle"
                    />
                </v-icon>
                {{ product.title }}
            </v-sheet>
        </v-slide-group-item>
    </v-slide-group>
</template>
