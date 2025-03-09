<script setup>
const products = [
    {
        name: "Boldfit Cotton Wrist Band 1",
        price: "$10",
    },
    {
        name: "Boldfit Cotton Wrist Band 2",
        price: "$20",
    },
    {
        name: "Boldfit Cotton Wrist Band 3",
        price: "$30",
    },
    {
        name: "Boldfit Cotton Wrist Band 4",
        price: "$40",
    },
    {
        name: "Boldfit Cotton Wrist Band 5",
        price: "$50",
    },
    {
        name: "Boldfit Cotton Wrist Band 6",
        price: "$60",
    },
    {
        name: "Boldfit Cotton Wrist Band 7",
        price: "$10",
    },
    {
        name: "Boldfit Cotton Wrist Band 8",
        price: "$20",
    },
    {
        name: "Boldfit Cotton Wrist Band 9",
        price: "$30",
    },
    {
        name: "Boldfit Cotton Wrist Band 10",
        price: "$40",
    },
    {
        name: "Boldfit Cotton Wrist Band 11",
        price: "$50",
    },
    {
        name: "Boldfit Cotton Wrist Band 12",
        price: "$60",
    },
    {
        name: "Boldfit Cotton Wrist Band 13",
        price: "$10",
    },
    {
        name: "Boldfit Cotton Wrist Band 14",
        price: "$20",
    },
    {
        name: "Boldfit Cotton Wrist Band 15",
        price: "$30",
    },
    {
        name: "Boldfit Cotton Wrist Band 16",
        price: "$40",
    },
    {
        name: "Boldfit Cotton Wrist Band 17",
        price: "$50",
    },
    {
        name: "Boldfit Cotton Wrist Band 18",
        price: "$60",
    },
    {
        name: "Boldfit Cotton Wrist Band 19",
        price: "$10",
    },
    {
        name: "Boldfit Cotton Wrist Band 20",
        price: "$20",
    },
    {
        name: "Boldfit Cotton Wrist Band 21",
        price: "$30",
    },
    {
        name: "Boldfit Cotton Wrist Band 22",
        price: "$40",
    },
    {
        name: "Boldfit Cotton Wrist Band 23",
        price: "$50",
    },
    {
        name: "Boldfit Cotton Wrist Band 24",
        price: "$60",
    },
    {
        name: "Boldfit Cotton Wrist Band 25",
        price: "$60",
    },
];
</script>

<template>
    <v-sheet>
        <v-icon class="p-0 m-0" size="200">
            <v-img
                src="https://buykaro.com/cdn/shop/collections/Audio.jpg?v=1730706001"
                alt="Profile"
                height="130"
                cover
            />
        </v-icon>
    </v-sheet>
    <v-container>
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
                        src="https://m.media-amazon.com/images/I/71aQ+1SzYTL._SX569_.jpg"
                        class="w-100 h-100"
                    />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
