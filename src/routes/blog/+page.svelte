<script>
	export let data;
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	
	let currentTag = null;
	let filteredPosts = data.allPosts;
	
	// Get current tag from URL params (only in browser)
	$: if (browser) {
		currentTag = $page.url.searchParams.get('tag');
		filteredPosts = currentTag 
			? data.allPosts.filter(post => post.meta.tags && post.meta.tags.includes(currentTag))
			: data.allPosts;
	}
	
	function filterByTag(tag) {
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

<section class="posts-grid">
	{#each filteredPosts as post}
		<a href={post.path} class="post-tile">
			<h3>
				{post.meta.shorttitle}
			</h3>
			<div class="post-date">
				{post.meta.date}
			</div>
			<p class="subtitle" style="font-weight:200;font-size:1.5rem">
				{post.meta.excerpt}
			</p>
			{#if post.meta.tags && post.meta.tags.length > 0}
				<div class="post-tags">
					{#each post.meta.tags as tag}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			{/if}
		</a>
	{/each}
</section>

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

	.post-tags {
		margin-top: 0.5rem;
		display: flex;
		gap: 0.25rem;
		flex-wrap: wrap;
	}

	.tag {
		background: #e0e0e0;
		padding: 0.2rem 0.5rem;
		border-radius: 3px;
		font-size: 0.8rem;
		color: #666;
	}
</style>
