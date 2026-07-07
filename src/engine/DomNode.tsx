interface DomTreeNode {
  tag: string;
  children: DomTreeNode[];
}

interface DomNodeProps {
  node: DomTreeNode;
}

export default function DomNode({ node }: DomNodeProps) {
  return (
    <div className="relative mt-3 pl-6">
      {/* Vertical connector line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-red-600/30" />

      <div className="relative inline-flex items-center gap-2">
        {/* Horizontal connector line */}
        <div className="absolute -left-4 top-1/2 h-px w-4 bg-red-600/30" />

        <div className="rounded bg-red-600 px-2 py-1 font-mono text-xs text-white shadow">
          {node.tag.toUpperCase()}
        </div>

        <span className="text-xs text-slate-500">
          ({node.children.length})
        </span>
      </div>

      {node.children.length > 0 && (
        <div className="mt-2">
          {node.children.map((child, i) => (
            <DomNode key={i} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
