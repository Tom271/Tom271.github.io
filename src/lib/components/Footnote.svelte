<!-- src/components/Footnote.svelte -->
<script>
	import { getContext } from 'svelte';
  
	export let note;
  
	// Get the article context
	let articleContext = getContext('article');
  
	// Ensure footnotes array exists
	if (!articleContext.footnotes) {
	  articleContext.footnotes = [];
	}
  
	// Assign a unique ID to the footnote
	let id = articleContext.footnotes.length + 1;
  
	// Create unique IDs for reference and definition
	let refId = `fnref-${id}`;
	let noteId = `fn-${id}`;
  
	// Add footnote data to the context
	articleContext.footnotes.push({
	  id,
	  refId,
	  noteId,
	  note
	});
  </script>
  
  
  <slot></slot><a href="#{noteId}" id="{refId}" class="footnote-ref"><sup>{id}</sup>
  </a>