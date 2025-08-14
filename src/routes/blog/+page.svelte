<script lang="ts">
	import type { Post } from '$lib/utils';
	import PostGrid from '$lib/components/PostGrid.svelte';
	export let data: { allPosts: Post[], allTags: string[] };
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	
	let currentTag: string | null = null;
	let filteredPosts: Post[] = data.allPosts;
	
	// Get current tag from URL params (only in browser)
	$: if (browser) {
		currentTag = $page.url.searchParams.get('tag');
		filteredPosts = currentTag 
			? data.allPosts.filter((post: Post) => post.meta.tags && post.meta.tags.includes(currentTag as string))
			: data.allPosts;
	}
	
	function filterByTag(tag: string | null): void {
		if (tag) {
			goto(`/blog?tag=${encodeURIComponent(tag)}`);
		} else {
			goto('/blog');
		}
	}
</script>

<h1>Blog</h1>

<!-- Tag Filter UI -->
<div class="tag-filter">
	<button 
		class="tag-button {!currentTag ? 'active' : ''}" 
		on:click={() => filterByTag(null)}
	>
		All Posts
	</button>
	{#each data.allTags as tag}
		<button 
			class="tag-button {currentTag === tag ? 'active' : ''}" 
			on:click={() => filterByTag(tag)}
		>
			{tag}
		</button>
	{/each}
</div>

<PostGrid posts={filteredPosts} />

<style>
	.tag-filter {
		margin-bottom: 2rem;
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag-button {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		background: transparent;
		border-radius: 4px;
		cursor: pointer;
		font-family: inherit;
		font-size: 0.9rem;
		transition: all 0.2s ease;
	}

	.tag-button:hover {
		background: #f5f5f5;
	}

	.tag-button.active {
		background: #333;
		color: white;
		border-color: #333;
	}

</style>
