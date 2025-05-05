import { defineStore } from "pinia";
import axios from "axios";

export const useWristBandsStore = defineStore("wristbands", {
	state: () => ({
		wristbands: [],
		loaded: false,
	}),

	actions: {
		async fetchWristBands() {
			this.loading = true;

			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/wristbands",
				);

				this.wristbands = response.data.data;
			} catch (err) {
				this.loaded = true;
			}
		},
	},
});
