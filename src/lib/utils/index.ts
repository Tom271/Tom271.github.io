import { dev } from '$app/environment';

export interface PostMeta {
	title: string;
	date: string;
	excerpt?: string;
	shorttitle?: string;
	tags?: string[];
	[key: string]: any; // Allow other frontmatter properties
}

export interface Post {
	meta: PostMeta;
	path: string;
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
	const allPostFiles = import.meta.glob('/src/routes/projects/*.md');
	const draftFiles = import.meta.glob('/src/routes/projects/drafts/*.md');

	let iterablePostFiles = Object.entries(allPostFiles);

	if (dev) {
		iterablePostFiles = [...iterablePostFiles, ...Object.entries(draftFiles)];
	}

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

export const fetchWeeknotes = async () => {
	const allWeeknoteFiles = import.meta.glob('/src/routes/weeknotes/*.md');
	const draftFiles = import.meta.glob('/src/routes/weeknotes/drafts/*.md');

	let iterableFiles = Object.entries(allWeeknoteFiles);

	if (dev) {
		iterableFiles = [...iterableFiles, ...Object.entries(draftFiles)];
	}

	const allWeeknotes = await Promise.all(
		iterableFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver() as MarkdownModule;
			const postPath = path.slice(11, -3);
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

	return allWeeknotes;
};