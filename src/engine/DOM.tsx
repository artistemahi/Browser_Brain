import { useMemo } from "react";
import DomNode from "./DomNode";

function htmlToTree(html: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  console.log(doc.body);

  type DomTreeNode = {
    tag: string;
    children: DomTreeNode[];
  };

  function walk(node: Element): DomTreeNode | null {
    if (node.nodeType !== 1) return null; // element only

    return {
      tag: node.tagName.toLowerCase(),
      children: (Array.from(node.children)
        .map(walk)
        .filter(Boolean) as DomTreeNode[]),
    };
  }

  return walk(doc.body as Element);
}

export default function DomTree({ html }: { html: string }) {
  const tree = useMemo(() => {
    try {
      return htmlToTree(html);
    } catch {
      return null;
    }
  }, [html]);

  if (!tree) return null;

  return <DomNode node={tree} />;
}
