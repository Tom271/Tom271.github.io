<!-- src/components/Footnote.svelte -->
<script>
	import { getContext } from 'svelte';
  
	export let note;
  
	// Get the article context
	let articleContext = getContext('article');
  
	// Ensure sidenotes array exists
	if (!articleContext.sidenotes) {
	  articleContext.sidenotes = [];
	}
  
	// Assign a unique ID to the sidenote
	let id = articleContext.sidenotes.length + 1;
  
	// Create unique IDs for reference and sidenote
	let refId = `sidenote-${id}`;
  
	// Add sidenote data to the context (for cleanup if needed)
	articleContext.sidenotes.push({
	  id,
	  refId,
	  note
	});
</script>

<span class="sidenote-wrapper">
	<label class="sidenote-number" for="{refId}"></label>
	<input type="checkbox" id="{refId}" class="margin-toggle sidenote-toggle" />
	<span class="sidenote">{@html note}</span>
</span>