import { useEffect } from "react";

const creds = require("../config/brmayes-portfolio-8189ec5571da.json");
const { GoogleSpreadsheet } = require("google-spreadsheet");

export const _getGoogleSheet = () => {
	const doc = new GoogleSpreadsheet(
		"1WmUQ64pib0bU65PGk7ejYZNKCn-MRBMCiGUPUjxWQfI"
	);

	doc.useServiceAccountAuth(creds);

	doc.loadInfo();
	// console.log(doc.title);

	return null;
};
