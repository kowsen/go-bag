import './styles/scale.scss';
import './styles/scroll.scss';

new ResizeObserver(([event]) => {
  document.documentElement.style.setProperty(
    '--page-width',
    event.contentRect.width
  );
}).observe(document.documentElement);
