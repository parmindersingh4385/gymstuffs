<script setup>
import GlovesView from "@/views/products/GlovesView.vue";
import RollersView from "@/views/products/RollersView.vue";
import ShakersView from "@/views/products/ShakersView.vue";
import SkippingRopesView from "@/views/products/SkippingRopesView.vue";
import WristBandsView from "@/views/products/WristBandsView.vue";
import { shallowRef } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const currentComponent = shallowRef(); // Default component

const componentViews = {
	shakers: ShakersView,
	rollers: RollersView,
	gloves: GlovesView,
	wristbands: WristBandsView,
	skippingropes: SkippingRopesView,
};

currentComponent.value = componentViews[route.params.category];

const breadCrumbObj = {
	shakers: {
		title: "Shakers",
		disabled: true,
		to: "/products/shakers",
	},
	rollers: {
		title: "Rollers",
		disabled: true,
		to: "/products/rollers",
	},
	gloves: {
		title: "Gloves",
		disabled: true,
		to: "/products/gloves",
	},
	wristbands: {
		title: "Wrist bands",
		disabled: true,
		to: "/products/wristbands",
	},
	skippingropes: {
		title: "Skipping ropes",
		disabled: true,
		to: "/products/skippingropes",
	},
};

const breadCrumbItems = [
	{
		title: "Home",
		disabled: false,
		to: "/",
	},
];

breadCrumbItems.push(breadCrumbObj[route.params.category]);
</script>

<template>
	<v-container fluid class="py-0">
		<VBreadcrumbs :items="breadCrumbItems" class="pb-1 px-0" />
	</v-container>
	<component :is="currentComponent" />
</template>
