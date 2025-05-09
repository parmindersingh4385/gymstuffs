import { defineStore } from "pinia";
import axios from "axios";

export const useWristBandsStore = defineStore("wristbands", {
	state: () => ({
		wristbands: [],
		isLoaded: false,
	}),

	actions: {
		async fetchProducts() {
			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/wristbands",
				);

				this.wristbands = response.data.data;

				this.isLoaded = true;
			} catch (err) {
				this.isLoaded = true;
			}
		},
	},
});
