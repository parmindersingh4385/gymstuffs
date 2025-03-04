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
    { id: 11, title: "Shakers", product_url: "/products/shakers" },
    { id: 12, title: "Rollers", product_url: "/products/rollers" },
    { id: 13, title: "Gloves", product_url: "/products/gloves" },
    { id: 14, title: "Wrist bands", product_url: "/products/wristbands" },
    { id: 15, title: "Skipping ropes", product_url: "/products/skippingropes" },
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
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 13",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 14",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 15",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 16",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 17",
    },
    {
        src: "https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg",
        name: "Image 18",
    },
]);

const router = useRouter();

const goToProduct = (productUrl) => {
    router.push(productUrl);
};
</script>

<template>
    <v-container fluid  class="d-flex justify-center">
        <v-sheet
            class="mx-auto text-center py-5"
            max-width="100%"
        >
            <v-slide-group show-arrows >
                <v-slide-group-item
                    v-for="(product, index) in productUrls"
                    :key="index"
                    class="pa-4 align-center"
                >
                    <v-sheet
                        class="p-3 d-flex flex-column justify-center align-center mx-2"
                        @click="goToProduct(product.product_url)"
                    >
                        <v-icon class="p-0 m-0" size="117">
                            <v-img
                                src="https://asset20.ckassets.com/resources/image/category/fashion-offers-4199-1674024044.png"
                                alt="Profile"
                                height="130"
                                rounded="circle"
                                cover
                            />
                        </v-icon>
                        <p class="text-body-2">{{ product.title }}</p>
                    </v-sheet>
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </v-container>
    
    <div class="px-5">
        <v-container fluid >
            <v-row>
                <v-col cols="12">
                    <p class="text-h5 font-weight-light">Popular stores</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="position-relative" v-for="(image, index) in images" :key="index" cols="12" sm="6" md="4" lg="2">
                    <v-card class="pa-4 h-100">
                        <div class="w-50 mx-auto imgHeight d-flex align-center justify-center">
                            <v-img
                                :src="image.src"            
                            />
                        </div>
                        <v-card-title>{{ image.name }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

