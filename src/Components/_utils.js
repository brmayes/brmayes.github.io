/**
 * Takes a string and makes it a slug.
 *
 * @param {string} str - the string to be slugified
 * @returns {string} string like 'world' or 'world-of-dogs' or 'world-and-dogs'
 */
export const slugify = (str) => {
	return str
		.replace(/[,.]/g, "")
		.replace(/&/g, "and")
		.replace(/\//g, "")
		.replace(/\s/g, "-")
		.toLowerCase();
};
