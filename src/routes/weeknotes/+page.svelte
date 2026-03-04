<script lang="ts">
	import type { Post } from '$lib/utils';
	export let data: { weeknotes: Post[] };
</script>

<h1>Weeknotes</h1>

<ul class="weeknotes-list">
	{#each data.weeknotes as weeknote}
		<li>
			<a href={weeknote.path}>{weeknote.meta.title}</a>
			<span class="date">{weeknote.meta.date}</span>
			{#if weeknote.meta.excerpt}
				<span class="excerpt"> — {weeknote.meta.excerpt}</span>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.weeknotes-list {
		list-style: none;
		padding: 0;
	}

	.weeknotes-list li {
		margin-bottom: 1rem;
	}

	.date {
		color: #888;
		font-size: 0.9rem;
		margin-left: 0.5rem;
	}

	.excerpt {
		color: #666;
		font-size: 0.9rem;
	}
</style>
