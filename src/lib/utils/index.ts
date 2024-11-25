
export interface Post {
	title: string;
	date: string;
	excerpt?: string;
	slug: string;
	shorttitle?: string;
  }
  
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(11, -3);
			// Set default values for metadata properties
			const metaWithDefaults = {
				...metadata,
				shorttitle: metadata.shorttitle ?? metadata.title,
				excerpt: metadata.excerpt ?? "",
			  };
			return {
				meta: metaWithDefaults,
				path: postPath
			};
		})
	);

	return allPosts;
};