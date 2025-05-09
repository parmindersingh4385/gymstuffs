<script setup>
import { useGlovesStore } from "@/stores/GlovesStore";
import { useRollersStore } from "@/stores/RollersStore";
import { useShakersStore } from "@/stores/ShakersStore";
import { useSkippingRopesStore } from "@/stores/SkippingRopesStore";
import { useWristBandsStore } from "@/stores/WristBandsStore";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { VImg } from "vuetify/components";

const route = useRoute();

//stores references
const shakersStore = useShakersStore();
const rollersStore = useRollersStore();
const glovesStore = useGlovesStore();
const wristBandsStore = useWristBandsStore();
const skippingRopesStore = useSkippingRopesStore();

const storesObj = {
	shakers: { store: shakersStore, state: shakersStore.shakers },
	rollers: { store: rollersStore, state: rollersStore.rollers },
	gloves: { store: glovesStore, state: glovesStore.gloves },
	wristbands: { store: wristBandsStore, state: wristBandsStore.wristbands },
	skippingropes: {
		store: skippingRopesStore,
		state: skippingRopesStore.skippingRopes,
	},
};

const categoryId = route.params.category,
	productId = route.params.productId,
	storeRef = storesObj[categoryId].store;

//let storeState = storesObj[categoryId].state;

const productRecord = ref(null);

const breadCrumbItems = ref([]);

onMounted(async () => {
	if (!storeRef.isLoaded) {
		await storeRef.fetchProducts();
	}

	let storeState = null;

	console.log(storeRef.$id);

	if (storeRef.$id == "wristbands") {
		storeState = wristBandsStore.wristbands;
	} else if (storeRef.$id == "gloves") {
		storeState = glovesStore.gloves;
	} else if (storeRef.$id == "shakers") {
		storeState = shakersStore.shakers;
	} else if (storeRef.$id == "rollers") {
		storeState = rollersStore.rollers;
	} else if (storeRef.$id == "skippingRopes") {
		storeState = skippingRopesStore.skippingRopes;
	}

	productRecord.value = storeState.find(
		(product) => product._id === productId,
	);

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

	breadCrumbItems.value.push({
		title: "Home",
		disabled: false,
		to: "/",
	});

	breadCrumbItems.value.push(breadCrumbObj[categoryId]);

	if (productRecord.value) {
		breadCrumbItems.value.push({
			title: productRecord?.value.title,
			disabled: true,
			to: "",
		});
	}
});

const goToAffilateUrl = (affilateUrl) => {
	window.open(affilateUrl);
};
</script>

<template>
	<v-container v-if="productRecord" fluid class="px-3 px-md-5 pt-0">
		<VBreadcrumbs :items="breadCrumbItems" class="text-truncate px-0" />
		<v-row>
			<v-col cols="12" md="5">
				<div class="border pa-4 rounded-lg">
					<v-img
						:src="productRecord?.image_urls[2]"
						alt="Profile"
						class="responsive-img mx-auto"
					/>
				</div>
			</v-col>
			<v-col cols="12" md="7">
				<div class="mb-5">{{ productRecord?.title }}</div>
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
									>₹{{ productRecord.price.flipkart }}
								</span>
							</div>
							<VBtn
								variant="flat"
								color="primary"
								class="rounded-lg"
								@click="
									goToAffilateUrl(
										productRecord.affilate_url.flipkart,
									)
								"
								>Grab Deal</VBtn
							>
						</div>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</v-container>
</template>
