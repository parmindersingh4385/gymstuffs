import { defineStore } from "pinia";
import axios from "axios";

export const useRollersStore = defineStore("rollers", {
	state: () => ({
		rollers: [],
		isLoaded: false,
	}),

	actions: {
		async fetchProducts() {
			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/rollers",
				);

				this.rollers = response.data.data;
				this.isLoaded = true;
			} catch (err) {
				this.isLoaded = true;
			}
		},
	},
});
