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
</script>

<template>
	<v-container fluid class="px-3 px-md-5">
		<v-row>
			<v-col cols="12" md="2">
				<v-img :src="productImage" alt="Profile" class="responsive-img"/>
			</v-col>
			<v-col>
				<div>
					MuscleBlaze Biozyme Performance Whey, Labdoor USA Certified,
					Chocolate Hazelnut
				</div>
				<div style="width: 120px; height: 120px">
					<v-img
						style="width: 80px; height: 40px"
						src="https://asset20.ckassets.com/resources/image/stores/amazon-1735629515.jpg"
					/>
					<div>Discounted Price - ₹2,701</div>
					<VBtn>Grab Deal</VBtn>
				</div>
				<div style="width: 120px; height: 120px">
					<v-img
						style="width: 80px; height: 40px"
						src="https://asset20.ckassets.com/resources/image/stores/flipkart.png"
					/>
					<div>Discounted Price - ₹2,701</div>
					<VBtn>Grab Deal</VBtn>
				</div>
			</v-col>
		</v-row>	
	</v-container>
</template>
