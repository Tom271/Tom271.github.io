<!-- src/routes/+page.svelte -->
<script lang="ts">
    // export let recentPosts: import('$lib/utils/index').Post[];
    export let data;
</script>
  
  <div class="hero"><strong>Tom</strong> writes about programming, rewilding, and maths</div>
  <h2 class="sans" style="font-style:normal;font-weight:200">
    Programmer, mathematician, and hopeful ecologist. <br />
    Currently developing metrics for biodiversity at
    <a href="https://www.creditnature.com">CreditNature</a>.
  </h2>

  <div style="margin-top:8rem">
  <h1>Recent Posts</h1>
  </div>
  <div class="posts-grid">
    {#each data.posts as post}
      <a href={post.path} class="post-tile">
        <h3>
          {post.meta.shorttitle}
        </h3>
        <div class="post-date">
          {post.meta.date}
        </div>
        {post.meta.excerpt}
      </a>
    {/each}
    <!-- </ul> -->
    <!-- {#each recentPosts as post}
      
        <h3><a href={ `/blog/${post.slug}`}>{post.title}</a></h3>
        <p>{post.excerpt}</p>
        <small>{new Date(post.date).toLocaleDateString()}</small>
    {/each} -->
  </div>
  