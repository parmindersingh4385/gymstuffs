import { defineStore } from "pinia";
import axios from "axios";

export const useShakersStore = defineStore("shakers", {
	state: () => ({
		shakers: [],
		isLoaded: false,
	}),

	actions: {
		async fetchProducts() {
			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/shakers",
				);

				this.shakers = response.data.data;
				this.isLoaded = true;
			} catch (err) {
				this.isLoaded = true;
			}
		},
	},
});
