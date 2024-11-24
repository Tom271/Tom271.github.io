<!-- At the bottom of your article component -->
<script>
    import { getContext } from 'svelte';
    let articleContext = getContext('article');
  </script>
  
  {#if articleContext.footnotes && articleContext.footnotes.length > 0}
    <ol class="footnotes-list">
      {#each articleContext.footnotes as footnote}
        <li id="{footnote.noteId}">
          {footnote.note}
          <a href="#{footnote.refId}" class="footnote-backref">↩</a>
        </li>
      {/each}
    </ol>
  {/if}