<script>
  import { setSafeInterval } from './safe-patch';

  export let seed = '...';
  export let stepLength = 200;
  export let fontSize = 30;

  $: style = `font-size: ${fontSize}px;`;

  let counter = 0;
  $: loadStr = seed.slice(0, counter % (seed.length + 1));

  setSafeInterval(() => {
    counter += 1;
  }, stepLength);
</script>

<span {style}>{loadStr}</span>
