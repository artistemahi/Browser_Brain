import { useMemo } from "react";
import DomNode from "./DomNode";

type DomTreeNode = {
  tag: string;
  children: DomTreeNode[];
};

// Converts an HTML string into a simple tree we can render recursively.
function htmlToTree(html: string): DomTreeNode {
  const parser = new DOMParser(); // built-in browser API
  const doc = parser.parseFromString(html, "text/html");

  function walk(node: Element | null): DomTreeNode | null {
    if (!node || node.nodeType !== 1) return null; // only element nodes (skip text/comments)

    return {
      tag: node.tagName.toLowerCase(),
      children: Array.from(node.children)
        .map(walk)
        .filter(Boolean) as DomTreeNode[],
    };
  }

  return {
    tag: "html",
    children: [walk(doc.head), walk(doc.body)].filter(
      (node): node is DomTreeNode => node !== null,
    ),
  };
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
