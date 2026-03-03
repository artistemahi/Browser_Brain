import { useMemo } from "react";
import DomNode from "./DomNode";
// converting html to tree
function htmlToTree(html: string) {
  const parser = new DOMParser(); // DOMParser is built in class of browser
  const doc = parser.parseFromString(html, "text/html");  // parseFromString(string , tell browser to how treat string as text/html) ye ek method h jo string leta h and usko node me convert kr deta h 
  console.log(doc);

  type DomTreeNode = {
    tag: string;
    children: DomTreeNode[];
  };

  function walk(node: Element): DomTreeNode | null {
    if (node.nodeType !== 1) return null; // element only <div> vale inlcluded h. text , comment ignored h. every node have nodeType(in numerics) 

    return {
      tag: node.tagName.toLowerCase(), // converting tagName to lower case
      children: (Array.from(node.children)  // making array from  children
        .map(walk)   // recursion wapis walk function call 
        .filter(Boolean) as DomTreeNode[]), // removing null values 
    };
  }
 return {
  tag: "html",
  children: [walk(doc.head), walk(doc.body)]
    .filter((node): node is DomTreeNode => node !== null),  // this tell After filtering, this array contains only DomTreeNode.
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
