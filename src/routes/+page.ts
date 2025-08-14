export const load = async ({ fetch }) => {
	// Fetch all posts and filter for projects on homepage
	const response = await fetch('/api/posts');
	const allPosts = await response.json();
	
	// Filter for project posts only
	const projectPosts = allPosts.filter((post: any) => 
		post.meta.tags && post.meta.tags.includes('project')
	);

	return {
		posts: projectPosts
	};
};