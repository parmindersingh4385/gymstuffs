<script setup>
import { useGlovesStore } from "@/stores/GlovesStore";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const goToProductDetail = (product) => {
	router.push(route.fullPath + "/" + product._id);
};
/* const products = [
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
]; */

const glovesStore = useGlovesStore();

onMounted(async () => {
	if (!glovesStore.isLoaded) {
		await glovesStore.fetchProducts();
	}
});
</script>

<template>
	<div class="px-0 px-md-15">
		<v-container fluid class="px-3 px-md-5">
			<!-- <v-row>
				<v-col class="innerBanner">
					<v-img
						class="rounded"
						src="https://buykaro.com/cdn/shop/collections/Audio.jpg?v=1730706001"
						alt="Profile"
						cover
					/>
				</v-col>
			</v-row> -->
			<v-row>
				<v-col
					class="position-relative custom-col"
					v-for="(product, index) in glovesStore.gloves"
					:key="index"
					cols="12"
					sm="6"
					md="3"
					@click="goToProductDetail(product)"
				>
					<v-card class="pa-0 h-100 elevation-0">
						<div class="productImg">
							<v-img
								:src="product.image_urls[0]"
								class="mx-auto"
							/>
						</div>
						<div class="px-4 py-2 productInfo">
							<p class="proName text-grey">{{ product.brand }}</p>
							<p class="proName">
								{{ product.title }}
							</p>
							<p class="mb-2">
								<span
									class="oldPirce text-decoration-line-through"
									>₹{{ product.price.max_price }}</span
								>
								<span
									class="price d-inline-block ms-3 font-weight-bold"
									>₹{{ product.price.flipkart }}</span
								>
							</p>
							<v-btn
								variant="flat"
								class="elevation-0 mb-2 font-weight-bold rounded-pill border-0 bg-yellow-darken-1"
								>Buy now</v-btn
							>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<!-- <template>
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
</template> -->
