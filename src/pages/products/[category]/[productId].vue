<script setup>
import { useRoute } from "vue-router";

/* const route = useRoute();

console.log(route.params.category);
console.log(route.params.productId); */
</script>

<template>
	<v-container>
		<v-sheet style="cursor: pointer">
			<div style="width: 400px; height: 400px">
				<v-img
					src="https://m.media-amazon.com/images/I/41ASLBZg93L._SX300_SY300_QL70_FMwebp_.jpg"
					alt="Profile"
				/>
			</div>
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
		</v-sheet>
	</v-container>
</template>
