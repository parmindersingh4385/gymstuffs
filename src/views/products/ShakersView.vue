<script setup>
const products = [
	{ name: "Boldfit Plastic Gym Typhoon Shaker 1", price: "$10" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 2", price: "$20" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 3", price: "$30" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 4", price: "$40" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 5", price: "$50" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 6", price: "$60" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 7", price: "$10" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 8", price: "$20" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 9", price: "$30" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 10", price: "$40" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 11", price: "$50" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 12", price: "$60" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 13", price: "$10" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 14", price: "$20" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 15", price: "$30" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 16", price: "$40" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 17", price: "$50" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 18", price: "$60" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 19", price: "$10" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 20", price: "$20" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 21", price: "$30" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 22", price: "$40" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 23", price: "$50" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 24", price: "$60" },
	{ name: "Boldfit Plastic Gym Typhoon Shaker 25", price: "$60" },
];
</script>

<template>
	<div class="px-0 px-md-15">
		<v-container fluid class="px-3 px-md-5">
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
					class="position-relative custom-col"
					v-for="(store, index) in products"
					:key="index"
					cols="12"
					sm="6"
					md="3"
					@click="goToStore(store.store_id)"
				>
					<v-card class="pa-0 h-100 elevation-0">
						<div class="productImg">
							<v-img
								src="https://m.media-amazon.com/images/I/31cHRGL5BdL._SX300_SY300_QL70_FMwebp_.jpg"
								class="mx-auto"
							/>
						</div>
						<div class="px-4 py-2 productInfo">
							<p class="proName text-grey">Lifelong</p>
							<p class="proName">
								Ninja Woodfire Electric BBQ Grill & Smoker
								OG701UK
							</p>
							<p class="mb-2">
								<span
									class="oldPirce text-decoration-line-through"
									>₹177</span
								>
								<span
									class="price d-inline-block ms-3 font-weight-bold"
									>₹209</span
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
                        src="https://m.media-amazon.com/images/I/31cHRGL5BdL._SX300_SY300_QL70_FMwebp_.jpg"
                        class="w-100 h-100"
                    />
                    <v-card-title>{{ product.name }}</v-card-title>
                    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template> -->
