<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const storeId = route.params.storeId;

const affiliateUrls = {
	lifelong: "https://amzn.to/43kuWCi",
	homegalley: "https://amzn.to/4im1gZU",
	boldfit: "https://amzn.to/4hUxeg1",
};

const storeImages = {
	lifelong:
		"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX500_.png",
	boldfit:
		"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/d518465c-8662-45e8-890c-13d5598b06b3._CR0%2C0%2C3334%2C3334_SX500_.png",
	homegalley:
		"https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/f5a7f109-839e-4e9a-a2da-3f9beff0cf6c._CR0%2C0%2C3001%2C3001_SX400_.jpg",
};

const imageUrl = storeImages[storeId];

const goToAmazon = () => {
	window.open(affiliateUrls[storeId]);
};
</script>

<template>
	<v-container fluid class="px-3 px-md-5 pt-0">
		<v-row>
			<v-col cols="12" md="5">
				<div class="border pa-4 rounded-lg">
					<v-img
						:src="imageUrl"
						alt="Profile"
						class="responsive-img mx-auto"
					/>
				</div>
			</v-col>
			<v-col cols="12" md="7">
				<div class="mb-5">
					<VBtn @click="goToAmazon"> Visit {{ storeId }} </VBtn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>
