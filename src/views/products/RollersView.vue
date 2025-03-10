<script setup>
const products = [
    { name: "Lifelong Ab Wheel Roller 1", price: "$10" },
    { name: "Lifelong Ab Wheel Roller 2", price: "$20" },
    { name: "Lifelong Ab Wheel Roller 3", price: "$30" },
    { name: "Lifelong Ab Wheel Roller 4", price: "$40" },
    { name: "Lifelong Ab Wheel Roller 5", price: "$50" },
    { name: "Lifelong Ab Wheel Roller 6", price: "$60" },
    { name: "Lifelong Ab Wheel Roller 7", price: "$10" },
    { name: "Lifelong Ab Wheel Roller 8", price: "$20" },
    { name: "Lifelong Ab Wheel Roller 9", price: "$30" },
    { name: "Lifelong Ab Wheel Roller 10", price: "$40" },
    { name: "Lifelong Ab Wheel Roller 11", price: "$50" },
    { name: "Lifelong Ab Wheel Roller 12", price: "$60" },
    { name: "Lifelong Ab Wheel Roller 13", price: "$10" },
    { name: "Lifelong Ab Wheel Roller 14", price: "$20" },
    { name: "Lifelong Ab Wheel Roller 15", price: "$30" },
    { name: "Lifelong Ab Wheel Roller 16", price: "$40" },
    { name: "Lifelong Ab Wheel Roller 17", price: "$50" },
    { name: "Lifelong Ab Wheel Roller 18", price: "$60" },
    { name: "Lifelong Ab Wheel Roller 19", price: "$10" },
    { name: "Lifelong Ab Wheel Roller 20", price: "$20" },
    { name: "Lifelong Ab Wheel Roller 21", price: "$30" },
    { name: "Lifelong Ab Wheel Roller 22", price: "$40" },
    { name: "Lifelong Ab Wheel Roller 23", price: "$50" },
    { name: "Lifelong Ab Wheel Roller 24", price: "$60" },
    { name: "Lifelong Ab Wheel Roller 25", price: "$60" },
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
                        src="https://m.media-amazon.com/images/I/41ASLBZg93L._SX300_SY300_QL70_FMwebp_.jpg"
                        class="w-100 h-100"
                    />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
