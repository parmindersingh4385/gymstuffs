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

const storeUrls = ref([
    {
        src: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/5/AmazonStores/A21TJRUUN4KGV/e7eafc3586fcac05386e9e6bc68f03ca.w400.h400._CR0%2C0%2C400%2C400_SX200_.png",
        name: "Lifelong",
        store_id: "lifelong",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX200_.png",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX200_.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
]);

const router = useRouter();

const goToProduct = (productUrl) => {
    router.push(productUrl);
};

const goToStore = (storeId) => {
    router.push("/stores/" + storeId);
};
</script>

<template>
    <v-container fluid class="d-flex justify-center px-0">
        <v-sheet class="mx-auto text-center py-5" max-width="100%">
            <v-slide-group show-arrows>
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
                                src="https://buykaro.com/cdn/shop/files/Mask_group_5_d77775c1-7ea8-4781-bdd9-67f7e8c6a93e_large.png?v=1731920247"
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

    <v-container fluid class="px-3 px-md-5">
        <v-row>
            <v-col cols="12">
                <p class="text-h5 font-weight-light">Popular stores</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                class="position-relative"
                v-for="(store, index) in storeUrls"
                :key="index"
                cols="12"
                sm="6"
                md="3"
                @click="goToStore(store.store_id)"
            >
                <v-card class="pa-4 h-100">
                    <div class="d-flex align-center justify-center">
                        <v-img :src="store.src" class="w-100 h-100" />
                    </div>
                    <v-btn
                        color="primary"
                        variant="plan"
                        class="px-0 d-block text-none text-wrap py-2 fs-subtitle-1"
                        >{{ store.name }}
                    </v-btn>
                    <v-btn color="primary" cl block size="large"
                        >Upto 15% cashback</v-btn
                    >
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
