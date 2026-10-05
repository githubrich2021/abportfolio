"use client";

import { useEffect, useState } from 'react';

type Segment = { text: string; className?: string };

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_FULL_MS = 2500;
const HOLD_EMPTY_MS = 500;

function renderUpTo(segments: Segment[], count: number) {
  let remaining = count;
  return segments.map((seg, i) => {
    const shown = seg.text.slice(0, Math.max(0, remaining));
    remaining -= seg.text.length;
    return shown ? (
      <span key={i} className={seg.className}>
        {shown}
      </span>
    ) : null;
  });
}

// Types the headline out, deletes it and retypes on a loop.
// Starts fully written (good for SEO / first paint) and stays static for reduced-motion users.
export default function TypingHeadline({ segments }: { segments: Segment[] }) {
  const total = segments.reduce((n, s) => n + s.text.length, 0);
  const fullText = segments.map((s) => s.text).join('');
  const [count, setCount] = useState(total);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let current = total;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      if (deleting) {
        current -= 1;
        setCount(current);
        if (current <= 0) {
          deleting = false;
          timer = setTimeout(step, HOLD_EMPTY_MS);
          return;
        }
        timer = setTimeout(step, DELETE_MS);
      } else {
        current += 1;
        setCount(current);
        if (current >= total) {
          deleting = true;
          timer = setTimeout(step, HOLD_FULL_MS);
          return;
        }
        timer = setTimeout(step, TYPE_MS);
      }
    };

    timer = setTimeout(step, HOLD_FULL_MS);
    return () => clearTimeout(timer);
  }, [total]);

  return (
    <>
      <span className="sr-only">{fullText}</span>
      {/* Both layers share one grid cell: the invisible full text reserves the height so nothing below jumps. */}
      <span className="grid" aria-hidden="true">
        <span className="invisible col-start-1 row-start-1">{renderUpTo(segments, total)}</span>
        <span className="col-start-1 row-start-1">
          {renderUpTo(segments, count)}
          <span className="typing-caret" />
        </span>
      </span>
    </>
  );
}
