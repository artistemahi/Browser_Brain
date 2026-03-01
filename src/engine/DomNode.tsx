export default function DomNode({ node }:any) {
  return (
    <div className="ml-6 mt-3">

      <div className="px-2 py-1 bg-red-500 text-white font-mono rounded inline-block">
        {node.tag.toUpperCase()}
      </div>

      {node.children.length > 0 && (
        <div className="flex gap-6 mt-2">
          {node.children.map((child, i) => (
            <DomNode key={i} node={child} />
          ))}
        </div>
      )}

    </div>
  );
}