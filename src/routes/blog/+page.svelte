<script>
	export let data;
</script>

<h1>Blog</h1>
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
				{post.meta.excerpt}
			</p>
		</a>
	{/each}
</section>
