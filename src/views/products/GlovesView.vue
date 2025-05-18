<script setup>
import { useGlovesStore } from "@/stores/GlovesStore";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const goToProductDetail = (product) => {
	router.push(route.fullPath + "/" + product._id);
};

const glovesStore = useGlovesStore();

onMounted(async () => {
	if (!glovesStore.isLoaded) {
		await glovesStore.fetchProducts();
	}
});
</script>

<template>
	<div class="px-0 px-md-15">
		<div
			v-if="glovesStore.gloves.length == 0"
			class="d-flex justify-center align-center"
			style="height: 70vh"
		>
			<v-progress-circular indeterminate color="primary" size="48" />
		</div>
		<v-container
			v-if="glovesStore.gloves.length > 0"
			fluid
			class="px-3 px-md-5"
		>
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
