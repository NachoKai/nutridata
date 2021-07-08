import axios from "axios";
import Papa from "papaparse";

export default {
	list: async () =>
		axios
			.get(
				"https://docs.google.com/spreadsheets/d/e/2PACX-1vTV5aSq-cWy0pV-Xjhr67n_6tahaJ_xxY32DjNt89WaRgl2ECz7_1pS9cLDhaeeY_r7C46tiXSxd0Hi/pub?output=csv",
				{
					responseType: "blob",
				}
			)
			.then(
				response =>
					new Promise((resolve, reject) => {
						Papa.parse(response.data, {
							header: true,
							complete: results =>
								resolve(
									results.data.map(product => ({
										...product,
									}))
								),
							error: err => reject(err.message),
						});
					})
			),
};
