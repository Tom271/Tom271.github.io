<script>
	export let data;
	const { title, date, Content, excerpt } = data;
	import { setContext } from 'svelte';

	setContext('article', { sidenotes: [] });
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
</article>
