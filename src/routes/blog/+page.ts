export const load = async ({ fetch }) => {
	// Always fetch all posts and handle filtering client-side
	const response = await fetch('/api/posts');
	const allPosts = await response.json();

	// Get all unique tags for filter UI
	const allTags = Array.from(new Set(
		allPosts.flatMap((post: any) => post.meta.tags || [])
	)).sort();

	return {
		allPosts,
		allTags
	};
};