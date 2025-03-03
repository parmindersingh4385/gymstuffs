<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const productUrls = ref([
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
]);

const images = ref([
    {
        src: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/5/AmazonStores/A21TJRUUN4KGV/e7eafc3586fcac05386e9e6bc68f03ca.w400.h400._CR0%2C0%2C400%2C400_SX200_.png",
        name: "Image 1",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "Image 2",
    },
    {
        src: "https://m.media-amazon.com/images/S/abs-image-upload-na/2/AmazonStores/A21TJRUUN4KGV/de38eafdf060ca3038560226f7b1f4f7.w1738.h1440._CR138%2C0%2C1440%2C1440_SX200_.png",
        name: "Image 3",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 4",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 5",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 6",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 7",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 8",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 9",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 10",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 11",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 12",
    },
]);

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
    <h2>Popular stores</h2>
    <v-container>
        <v-row>
            <v-col v-for="(image, index) in images" :key="index" cols="3">
                <v-card>
                    <v-img
                        :src="image.src"
                        aspect-ratio="1"
                        cover
                        style="width: 270px; height: 120px"
                    ></v-img>
                    <v-card-title>{{ image.name }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
