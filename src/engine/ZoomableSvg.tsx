import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import { zoom, zoomIdentity } from "d3-zoom";

const ZoomableSvg = ({ children }: any) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const svg = select(ref.current);
    const g = svg.select("g");

    const zoomBehavior = zoom().on("zoom", (event) => {
      g.attr("transform", event.transform);
    });

    svg.call(zoomBehavior);

    // initial center position
    svg.call(
      zoomBehavior.transform,
      zoomIdentity.translate(400, 40)
    );
  }, []);

  return (
    <svg ref={ref} width="100%" height="600">
      <g>{children}</g>
    </svg>
  );
};

export default ZoomableSvg;
