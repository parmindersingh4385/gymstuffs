import { defineStore } from "pinia";
import axios from "axios";

export const useGlovesStore = defineStore("gloves", {
	state: () => ({
		gloves: [],
		loaded: false,
	}),

	actions: {
		async fetchGloves() {
			this.loading = true;

			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/gloves",
				);

				this.gloves = response.data.data;
			} catch (err) {
				this.loaded = true;
			}
		},
	},
});
