<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { VCol } from "vuetify/components";

const isLoading = ref(false);
const formRef = ref(null);
const requestMessage = ref("");
const requestMessageCls = ref("");

const items = [
	{
		title: "Shakers",
		value: "shakers",
	},
	{
		title: "Rollers",
		value: "rollers",
	},
	{
		title: "Gloves",
		value: "gloves",
	},
	{
		title: "Wrist bands",
		value: "wristbands",
	},
	{
		title: "Skipping ropes",
		value: "skippingropes",
	},
];

// form Data
const formData = reactive({
	productUrl: null,
	productType: null,
});

// 👉 Required Validator
const requiredValidator = (value) => {
	if (value === false || value === null) return "This field is required";

	return !!String(value).trim().length || "This field is required";
};

const handleSubmit = async () => {
	const validateForm = await formRef.value.validate();
	const isFormValid = validateForm ? validateForm.valid : false;

	if (isFormValid == false) {
		return false;
	}

	isLoading.value = true;

	const productId = getProductIdFromUrl(formData.productUrl),
		productType = formData.productType;

	axios
		.post(`https://gymstuffsapi-production.up.railway.app/api/products`, {
			id: productId,
			type: productType,
		})
		.then((res) => {
			formData.productUrl = null;
			formData.productType = null;
			isLoading.value = false;

			const retData = res.data;

			if (retData?.message) {
				requestMessage.value = retData?.message;
				requestMessageCls.value = "error-message";
			} else {
				requestMessage.value = "Product added successfully";
				requestMessageCls.value = "success-message";
			}

			setTimeout(() => {
				requestMessage.value = "";
			}, 3000);
		})
		.catch((err) => {
			console.error("Error:", err.response?.data || err);
			isLoading.value = false;
		});
};

const getProductIdFromUrl = (productUrl) => {
	return productUrl.split("?")[1].split("&")[0].split("=")[1];
};

const closeWindow = () => {};
</script>

<template>
	<v-container
		class="d-flex justify-center align-center py-0"
		style="height: 100vh"
	>
		<v-card class="pa-4" width="400">
			<VForm @submit.prevent="handleSubmit" ref="formRef">
				<p :class="requestMessageCls">{{ requestMessage }}</p>
				<VRow>
					<VCol cols="12">
						<VTextField
							v-model="formData.productUrl"
							label="Enter product url"
							type="input"
							:rules="[requiredValidator]"
						></VTextField>
					</VCol>
					<VCol cols="12">
						<VSelect
							:items="items"
							v-model="formData.productType"
							item-title="title"
							item-value="value"
							placeholder="Select an option"
						>
						</VSelect>
					</VCol>
				</VRow>
				<!-- Update and Cancel Button -->
				<VCardActions class="pt-4">
					<VSpacer></VSpacer>
					<VBtn
						:loading="isLoading"
						type="submit"
						variant="flat"
						color="primary"
						size="small"
						>Add product</VBtn
					>
				</VCardActions>
			</VForm>
		</v-card>
	</v-container>
</template>

<style scoped>
.success-message {
	color: green;
	font-weight: bold;
}

.error-message {
	color: red;
	font-weight: bold;
}
</style>
