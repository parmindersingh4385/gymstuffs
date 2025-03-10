<script setup>
const products = [
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 1",
        price: "$10",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 2",
        price: "$20",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 3",
        price: "$30",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 4",
        price: "$40",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 5",
        price: "$50",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 6",
        price: "$60",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 7",
        price: "$10",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 8",
        price: "$20",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 9",
        price: "$30",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 10",
        price: "$40",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 11",
        price: "$50",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 12",
        price: "$60",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 13",
        price: "$10",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 14",
        price: "$20",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 15",
        price: "$30",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 16",
        price: "$40",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 17",
        price: "$50",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 18",
        price: "$60",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 19",
        price: "$10",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 20",
        price: "$20",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 21",
        price: "$30",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 22",
        price: "$40",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 23",
        price: "$50",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 24",
        price: "$60",
    },
    {
        name: "Boldfit Gym Gloves for Men & Women with Wrist Support 25",
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
                        src="https://m.media-amazon.com/images/I/51rdG3tKnUL._SX300_SY300_QL70_FMwebp_.jpg"
                        class="w-100 h-100"
                    />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
