import { defineStore } from "pinia";
import axios from "axios";

export const useShakersStore = defineStore("shakers", {
	state: () => ({
		shakers: [],
		loaded: false,
	}),

	actions: {
		async fetchShakers() {
			this.loading = true;

			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/shakers",
				);

				this.shakers = response.data.data;
			} catch (err) {
				this.loaded = true;
			}
		},
	},
});
