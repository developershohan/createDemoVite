export const checkPath = (path, route) => {
	const pathArr = path.split("/");
	return pathArr.includes(route);
};

export const getSlug = (string) => {
	// Lowercase the string and replace spaces with hyphens
	const slug = string.toLowerCase().replace(/\s+/g, "-");
	// Remove special characters and non-alphanumeric characters
	return slug;
};
