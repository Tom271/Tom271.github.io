<script lang="ts">
	import type { Post } from '$lib/utils';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	export let posts: Post[];

	let postsWithPlaceholders: (Post | { placeholder: true; title: string })[] = [];
	let isDesktop = false;

	// Check if we're on desktop (3-column grid)
	function checkScreenSize() {
		if (browser) {
			isDesktop = window.innerWidth > 768;
		}
	}

	onMount(() => {
		checkScreenSize();
		if (browser) {
			window.addEventListener('resize', checkScreenSize);
			return () => {
				window.removeEventListener('resize', checkScreenSize);
			};
		}
	});

	// Add placeholder posts to make grid complete (multiple of 3) - only on desktop
	$: {
		if (isDesktop) {
			const remainder = posts.length % 3;
			const placeholdersNeeded = remainder === 0 ? 0 : 3 - remainder;

			postsWithPlaceholders = [...posts];
			for (let i = 0; i < placeholdersNeeded; i++) {
				postsWithPlaceholders.push({
					placeholder: true,
					title: 'On Aesthetics'
				});
			}
		} else {
			postsWithPlaceholders = [...posts];
		}
	}
</script>

<section class="posts-grid">
	{#each postsWithPlaceholders as item}
		{#if 'placeholder' in item}
			<div class="post-tile placeholder-tile">
				<h3>
					{item.title}
				</h3>
				<div class="post-date">Coming Soon...</div>
				<p class="subtitle" style="font-weight:200;font-size:1.5rem">
					Why mutliples of three are just better.
				</p>
			</div>
		{:else}
			<a href={item.path} class="post-tile">
				<h3>
					{item.meta.shorttitle}
				</h3>
				<div class="post-date">
					{item.meta.date}
				</div>
				<p class="subtitle" style="font-weight:200;font-size:1.5rem">
					{@html item.meta.excerpt}
				</p>
				{#if item.meta.tags && item.meta.tags.length > 0}
					<div class="post-tags">
						{#each item.meta.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				{/if}
			</a>
		{/if}
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

	.placeholder-tile {
		opacity: 0.6;
		background: #f9f9f9;
		border-style: dashed !important;
		cursor: default;
	}

	.placeholder-tile:hover {
		transform: none !important;
		box-shadow: none !important;
		border-color: #ccc !important;
		background: #f9f9f9 !important;
	}
</style>
