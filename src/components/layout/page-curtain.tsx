/**
 * Moss curtain with the LR monogram that lifts on every page load and
 * navigation. Pure CSS, so it never blocks rendering or needs JavaScript.
 */
export const PageCurtain = () => (
  <div className="page-curtain" aria-hidden>
    <span className="font-display">
      LR<span className="text-paper">.</span>
    </span>
  </div>
);
