import { useEffect, useRef } from "react";
import { select } from "d3-selection";
import { zoom, zoomIdentity } from "d3-zoom";

interface ZoomableSvgProps {
  children: React.ReactNode;
}

const ZoomableSvg = ({ children }: ZoomableSvgProps) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    
    const svg = select<SVGSVGElement, unknown>(ref.current);

    const g = svg.select<SVGGElement>("g");

    
    const zoomBehavior = zoom<SVGSVGElement, unknown>()
      .on("zoom", (event) => {
        g.attr("transform", event.transform.toString());
      });

    svg.call(zoomBehavior);

    
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