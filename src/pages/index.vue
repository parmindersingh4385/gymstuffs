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
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Lifelong",
        store_id: "lifelong",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/5250941.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13241587.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13470152.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13241587.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13470152.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13241587.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13470152.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13241587.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/13470152.jpg",
        name: "HomeGalley",
        store_id: "homegalley",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/140/13854691.jpg",
        name: "Boldfit",
        store_id: "boldfit",
    },
    {
        src: "https://pricespy-75b8.kxcdn.com/product/standard/280/5250941.jpg",
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
    <div class="px-0 px-md-15">
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
                            <div class="p-0 m-0 imageArea" >
                                <v-img
                                    src="https://buykaro.com/cdn/shop/files/Mask_group_5_d77775c1-7ea8-4781-bdd9-67f7e8c6a93e_large.png?v=1731920247"
                                    alt="Profile"
                                    height="130"
                                    rounded="circle"
                                    cover
                                />
                            </div>
                            <p class="text-subtitle-1 font-weight-bold">{{ product.title }}</p>
                        </v-sheet>
                    </v-slide-group-item>
                </v-slide-group>
            </v-sheet>
        </v-container>

        <v-container fluid class="px-3 px-md-5">
            <v-row>
                <v-col cols="12" class="pb-0">
                    <p class="text-h6 font-weight-bold">Popular stores</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    class="position-relative custom-col"
                    v-for="(store, index) in storeUrls"
                    :key="index"
                    cols="12"
                    sm="6"
                    md="3"
                    @click="goToStore(store.store_id)"
                >
                    <v-card class="pa-0 h-100 elevation-0">
                        <div class="productImg">
                            <v-img :src="store.src" class="mx-auto"/>
                        </div>
                        <div class="px-4 py-2 productInfo">
                            <p class="proName text-grey"><!-- {{ store.name }} --> Bombay Shaving Company</p>
                            <p class="proName">Charcoal Shaving Foam - (266ml x 2)</p>
                            <p class="mb-2">
                                <span class="text-subtitle-1 text-decoration-line-through text-grey">₹177</span>
                                <span class="text-h6 d-inline-block ms-3 font-weight-bold">₹209</span>
                            </p>
                            <v-btn  variant="flat" class="elevation-0 mb-2 font-weight-bold  rounded-pill border-0 bg-yellow-darken-1"
                                >Buy now</v-btn
                            >
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
