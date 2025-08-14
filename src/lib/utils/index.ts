
export interface Post {
	title: string;
	date: string;
	excerpt?: string;
	slug: string;
	shorttitle?: string;
	tags?: string[];
  }

// Define what we expect from markdown modules
interface MarkdownModule {
  metadata: {
    title: string;
    date: string;
    excerpt?: string;
    shorttitle?: string;
    tags?: string[];
    [key: string]: any; // Allow other frontmatter properties
  };
}
  
export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/routes/blog/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as MarkdownModule;
			const postPath = path.slice(11, -3);
			// Set default values for metadata properties
			const metaWithDefaults = {
				...metadata,
				shorttitle: metadata.shorttitle ?? metadata.title,
				excerpt: metadata.excerpt ?? "",
				tags: metadata.tags ?? [],
			  };
			return {
				meta: metaWithDefaults,
				path: postPath
			};
		})
	);

	return allPosts;
};