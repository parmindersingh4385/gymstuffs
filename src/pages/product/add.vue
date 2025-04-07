<script setup>
import { reactive, ref } from "vue";
import axios from "axios";

const isLoading = ref(false);
const formRef = ref(null);
const productInfo = ref(null);

// form Data
const formData = reactive({
	productId: null,
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

	const productId = formData.productId;

	axios
		.get(
			`https://gymstuffsapi-production.up.railway.app/product/${productId}`,
		)
		.then((res) => {
			formData.productId = null;
			productInfo.value = res.data.productBaseInfoV1;
			isLoading.value = false;
		})
		.catch((err) => {
			console.error("Error:", err.response?.data || err);
			isLoading.value = false;
		});
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
				<VRow>
					<VCol cols="12">
						<VTextField
							v-model="formData.productId"
							label="Product ID"
							type="input"
							:rules="[requiredValidator]"
						></VTextField>
					</VCol>
				</VRow>
				<!-- Update and Cancel Button -->
				<VCardActions class="pt-4">
					<VSpacer></VSpacer>
					<!-- <VBtn
						variant="tonal"
						color="secondary"
						@click="closeWindow"
						size="small"
						>Cancel</VBtn
					> -->
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
			<!-- shows products detail -->
			<v-table>
				<thead>
					<tr>
						<th class="text-left">Product information</th>
						<th class="text-left">Value</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Product id</td>
						<td>{{ productInfo?.productId }}</td>
					</tr>
					<!-- <tr>
						<td>Title</td>
						<td>{{ productInfo?.title }}</td>
					</tr>
					<tr>
						<td>Image</td>
						<td>
							<VImg
								class="py-4 px-4"
								width="200"
								height="200"
								:src="productInfo?.imageUrls['200x200']"
							></VImg>
						</td>
					</tr>
					<tr>
						<td>Affilate url</td>
						<td>
							<a
								:href="productInfo?.productUrl"
								target="_blank"
								rel="noopener"
								>Go to product</a
							>
						</td>
					</tr> -->
				</tbody>
			</v-table>
		</v-card>
	</v-container>
</template>
