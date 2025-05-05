import { defineStore } from "pinia";
import axios from "axios";

export const useSkippingRopesStore = defineStore("skippingRopes", {
	state: () => ({
		skippingRopes: [],
		loaded: false,
	}),

	actions: {
		async fetchSkippingRopes() {
			this.loading = true;

			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/skippingropes",
				);

				this.skippingRopes = response.data.data;
			} catch (err) {
				this.loaded = true;
			}
		},
	},
});
