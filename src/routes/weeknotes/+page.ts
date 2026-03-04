export const load = async ({ fetch }) => {
	const response = await fetch('/api/weeknotes');
	const weeknotes = await response.json();

	return {
		weeknotes
	};
};
