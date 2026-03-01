export default function DomNode({ node }) {
  return (
    <div className="relative pl-6 mt-3">

      {/* Vertical Line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gray-400"></div>

      {/* Node Label */}
      <div className="relative inline-flex items-center gap-2">

        {/* Horizontal Line */}
        <div className="absolute -left-4 top-1/2 w-4 h-px bg-gray-400"></div>

        <div className="px-2 py-1 bg-red-500 text-white text-xs font-mono rounded shadow">
          {node.tag.toUpperCase()}
        </div>

        {/* Child Count */}
        <span className="text-xs text-gray-600">
          ({node.children.length})
        </span>
      </div>

      {/* Children */}
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