import { defineStore } from "pinia";
import axios from "axios";

export const useGlovesStore = defineStore("gloves", {
	state: () => ({
		gloves: [],
		isLoaded: false,
	}),

	actions: {
		async fetchProducts() {
			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/gloves",
				);

				this.gloves = response.data.data;
				this.isLoaded = true;
			} catch (err) {
				this.isLoaded = true;
			}
		},
	},
});
