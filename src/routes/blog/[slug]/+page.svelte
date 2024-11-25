<script>
	export let data;
	const { title, date, Content, excerpt } = data;
	import { setContext } from 'svelte';
	import Footnotes from '$lib/components/Footnotes.svelte';

	setContext('article', { footnotes: [] });
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p class="metadata">{date}</p>
	<p class="subtitle">{excerpt}</p>
	<Content />
	<hr />
	<Footnotes />
</article>
