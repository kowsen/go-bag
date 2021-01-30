<script>
  import { onDestroy } from 'svelte';

  export let seed = '...';
  export let stepLength = 200;
  export let fontSize = 30;

  $: style = `font-size: ${fontSize}px;`;

  let counter = 0;
  $: loadStr = seed.slice(0, counter % (seed.length + 1));

  const counterInterval = setInterval(() => {
    counter += 1;
  }, stepLength);

  onDestroy(() => {
    clearInterval(counterInterval);
  });
</script>

<span {style}>{loadStr}</span>
