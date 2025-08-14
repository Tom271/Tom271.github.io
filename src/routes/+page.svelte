<!-- src/routes/+page.svelte -->
<script lang="ts">
	import PostGrid from '$lib/components/PostGrid.svelte';
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
<PostGrid posts={data.posts} />

