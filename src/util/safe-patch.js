import { onDestroy } from 'svelte';

export function setSafeTimeout(cb, time) {
  const timeout = setTimeout(cb, time);

  onDestroy(() => {
    clearTimeout(timeout);
  });

  return timeout;
}

export function setSafeInterval(cb, time, runImmediately = false) {
  const interval = setInterval(cb, time);

  onDestroy(() => {
    clearInterval(interval);
  });

  if (runImmediately) {
    cb();
  }

  return interval;
}
