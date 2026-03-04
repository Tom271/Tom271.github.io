export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, excerpt=''} = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		excerpt
	};
}

