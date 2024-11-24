<script>
	export let data;
</script>

<h1>Blog</h1>

<div class="posts-grid">
{#each data.posts as post}
<div class="post-tile">

		<h3>
			<a href={post.path}>
			{post.meta.shorttitle}
			</a>
		</h3>
		<div class="post-date"> {post.meta.date}</div>
		<em> {post.snippet}</em>
</div>
{/each}
</div>



