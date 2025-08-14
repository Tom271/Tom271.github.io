<!-- src/routes/+page.svelte -->
<script lang="ts">
	// export let recentPosts: import('$lib/utils/index').Post[];
	export let data;
</script>

<h1 style="font-size:5rem;font-weight:400">The Thin End of the Hedge</h1>
<h2 class="sans" style="font-style:normal;font-weight:200;margin-bottom:0.75rem">
	Tom is a programmer, mathematician, and hopeful ecologist.
</h2>
<h2 class="sans" style="font-style:normal;font-weight:200;margin-top:0rem">
	Currently developing metrics for biodiversity at <a href="https://www.creditnature.com"
		>CreditNature</a
	>.
</h2>

<h2 style="font-style:normal; margin-top:8rem">Recent Projects</h2>
<section class="posts-grid">
	{#each data.posts as post}
		<a href={post.path} class="post-tile">
			<h3>
				{post.meta.shorttitle}
			</h3>
			<div class="post-date">
				{post.meta.date}
			</div>
			<p class="subtitle" style="font-weight:200;font-size:1.5rem">
				{@html post.meta.excerpt}
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
