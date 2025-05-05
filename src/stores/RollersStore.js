import { defineStore } from "pinia";
import axios from "axios";

export const useRollersStore = defineStore("rollers", {
	state: () => ({
		rollers: [],
		loaded: false,
	}),

	actions: {
		async fetchRollers() {
			this.loading = true;

			try {
				const response = await axios.get(
					"https://gymstuffsapi-production.up.railway.app/api/products/rollers",
				);

				this.rollers = response.data.data;
			} catch (err) {
				this.loaded = true;
			}
		},
	},
});
