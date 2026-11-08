import type { CSSProperties } from "react";

// Light that runs around the edge of its (positioned, rounded) parent card.
// `offset` staggers cards so their lights don't move in lockstep.
export default function Trace({ offset = 0 }: { offset?: number }) {
  return <span className="trace" aria-hidden="true" style={{ "--td": offset } as CSSProperties} />;
}
