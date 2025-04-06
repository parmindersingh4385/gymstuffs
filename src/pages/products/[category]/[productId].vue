<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { VImg } from "vuetify/components";

const route = useRoute();

const categoryId = route.params.category;

const productInfo = {
	shakers:
		"https://m.media-amazon.com/images/I/31cHRGL5BdL._SX300_SY300_QL70_FMwebp_.jpg",
	rollers:
		"https://m.media-amazon.com/images/I/41ASLBZg93L._SX300_SY300_QL70_FMwebp_.jpg",
	gloves: "https://m.media-amazon.com/images/I/51rdG3tKnUL._SX300_SY300_QL70_FMwebp_.jpg",
	wristbands: "https://m.media-amazon.com/images/I/71aQ+1SzYTL._SX569_.jpg",
	skippingropes:
		"https://m.media-amazon.com/images/I/61msg8qvOGL._SX569_.jpg",
};

const productImage = productInfo[categoryId];

const breadCrumbObj = {
	shakers: {
		title: "Shakers",
		disabled: false,
		to: "/products/shakers",
	},
	rollers: {
		title: "Rollers",
		disabled: false,
		to: "/products/rollers",
	},
	gloves: {
		title: "Gloves",
		disabled: false,
		to: "/products/gloves",
	},
	wristbands: {
		title: "Wrist bands",
		disabled: false,
		to: "/products/wristbands",
	},
	skippingropes: {
		title: "Skipping ropes",
		disabled: false,
		to: "/products/skippingropes",
	},
};

const breadCrumbItems = [
	{
		title: "Home",
		disabled: false,
		to: "/",
	},
	/* {
		title: "Shakers",
		disabled: false,
		to: "/products/shakers",
	},
	{
		title: "MuscleBlaze Biozyme Performance Whey, Labdoor USA Certified, Chocolate Hazelnut",
		disabled: true,
		to: "",
	}, */
];

breadCrumbItems.push(breadCrumbObj[categoryId]);

breadCrumbItems.push({
	title: "MuscleBlaze Biozyme Performance Whey, Labdoor USA Certified, Chocolate Hazelnut",
	disabled: true,
	to: "",
});
</script>

<template>
	<v-container fluid class="px-3 px-md-5 pt-0">
		<VBreadcrumbs :items="breadCrumbItems" class="text-truncate px-0" />
		<v-row>
			<v-col cols="12" md="5">
				<div class="border pa-4 rounded-lg">
					<v-img
						:src="productImage"
						alt="Profile"
						class="responsive-img mx-auto"
					/>
				</div>
			</v-col>
			<v-col cols="12" md="7">
				<div class="mb-5">
					MuscleBlaze Biozyme Performance Whey, Labdoor USA Certified,
					Chocolate Hazelnut
				</div>
				<v-row>
					<v-col cols="12" md="6">
						<div class="border pa-4 rounded-lg bg-grey-lighten-5">
							<v-img
								style="width: 150px"
								src="https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg"
							/>
							<div class="font-weight-bold mb-3">
								Discounted Price
								<span class="text-h5 font-weight-bold"
									>₹2,701
								</span>
							</div>
							<VBtn
								variant="flat"
								color="primary"
								class="rounded-lg"
								>Grab Deal</VBtn
							>
						</div>
					</v-col>
					<v-col cols="12" md="6">
						<div class="border pa-4 rounded-lg bg-grey-lighten-5">
							<v-img
								style="width: 150px"
								src="https://asset20.ckassets.com/resources/image/stores/flipkart.png"
							/>
							<div class="font-weight-bold mb-3">
								Discounted Price
								<span class="text-h5 font-weight-bold"
									>₹2,701
								</span>
							</div>
							<VBtn
								variant="flat"
								color="primary"
								class="rounded-lg"
								>Grab Deal</VBtn
							>
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
