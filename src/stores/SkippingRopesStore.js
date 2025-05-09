import { defineStore } from "pinia";
import axios from "axios";

export const useSkippingRopesStore = defineStore("skippingRopes", {
	state: () => ({
		skippingRopes: [],
		isLoaded: false,
	}),

	actions: {
		async fetchProducts() {
			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/skippingropes",
				);

				this.skippingRopes = response.data.data;

				this.isLoaded = true;
			} catch (err) {
				this.isLoaded = true;
			}
		},
	},
});
