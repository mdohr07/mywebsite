import { useState } from "preact/hooks";

export default function Quote({ quotes }) {
  const randomQuote = () =>
    quotes[Math.floor(Math.random() * quotes.length)];

  const [quote] = useState(randomQuote);

  return (
    <figure class="random-quote">
      <blockquote>
        “{quote.text}”
      </blockquote>
      {quote.author && <figcaption>— {quote.author}</figcaption>}
    </figure>
  );
}
