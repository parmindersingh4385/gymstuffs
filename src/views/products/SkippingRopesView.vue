<script setup>
const products = [
    {
        name: "Boldfit Skipping Rope 1",
        price: "$10",
    },
    {
        name: "Boldfit Skipping Rope 2",
        price: "$20",
    },
    {
        name: "Boldfit Skipping Rope 3",
        price: "$30",
    },
    {
        name: "Boldfit Skipping Rope 4",
        price: "$40",
    },
    {
        name: "Boldfit Skipping Rope 5",
        price: "$50",
    },
    {
        name: "Boldfit Skipping Rope 6",
        price: "$60",
    },
    {
        name: "Boldfit Skipping Rope 7",
        price: "$10",
    },
    {
        name: "Boldfit Skipping Rope 8",
        price: "$20",
    },
    {
        name: "Boldfit Skipping Rope 9",
        price: "$30",
    },
    {
        name: "Boldfit Skipping Rope 10",
        price: "$40",
    },
    {
        name: "Boldfit Skipping Rope 11",
        price: "$50",
    },
    {
        name: "Boldfit Skipping Rope 12",
        price: "$60",
    },
    {
        name: "Boldfit Skipping Rope 13",
        price: "$10",
    },
    {
        name: "Boldfit Skipping Rope 14",
        price: "$20",
    },
    {
        name: "Boldfit Skipping Rope 15",
        price: "$30",
    },
    {
        name: "Boldfit Skipping Rope 16",
        price: "$40",
    },
    {
        name: "Boldfit Skipping Rope 17",
        price: "$50",
    },
    {
        name: "Boldfit Skipping Rope 18",
        price: "$60",
    },
    {
        name: "Boldfit Skipping Rope 19",
        price: "$10",
    },
    {
        name: "Boldfit Skipping Rope 20",
        price: "$20",
    },
    {
        name: "Boldfit Skipping Rope 21",
        price: "$30",
    },
    {
        name: "Boldfit Skipping Rope 22",
        price: "$40",
    },
    {
        name: "Boldfit Skipping Rope 23",
        price: "$50",
    },
    {
        name: "Boldfit Skipping Rope 24",
        price: "$60",
    },
    {
        name: "Boldfit Skipping Rope 25",
        price: "$60",
    },
];
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-img
                    class="rounded"
                    src="https://buykaro.com/cdn/shop/collections/Audio.jpg?v=1730706001"
                    alt="Profile"
                    cover
                />
            </v-col>
        </v-row>
        <v-row>
            <v-col
                v-for="(product, index) in products"
                :key="index"
                cols="12"
                sm="6"
                md="3"
            >
                <v-card class="pa-4 text-center">
                    <v-img
                        src="https://m.media-amazon.com/images/I/61msg8qvOGL._SX569_.jpg"
                        class="w-100 h-100"
                    />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
