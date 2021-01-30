<script>
  import './setup-responsive';

  import { Router, Route } from 'svelte-routing';
  import Content from './Content.svelte';

  export let url = '';
</script>

<div class="content">
  <Router {url}>
    <h1>Kyle's go-bag</h1>

    <main>
      <Route path="/" component={Content} />

      <Route>
        <p>PAGE NOT FOUND</p>
      </Route>
    </main>
  </Router>
</div>

<style>
  .content {
    padding: 24px;
  }
</style>
