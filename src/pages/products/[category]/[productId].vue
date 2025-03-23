<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

/* console.log(route.params.category);
console.log(route.params.productId); */
</script>

<template>
	<v-container>
		<v-sheet style="cursor: pointer">
			<div style="width: 270px; height: 270px">
				<v-img
					src="https://asset20.ckassets.com/resources/image/ckseller/CKS-Health-Supplements-000293_1-1691578247.jpg"
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
