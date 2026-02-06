export default function DomNode({ node }) {
  return (
    <div style={{ marginLeft: "24px", marginTop: "12px" }}>
      <div
        style={{
          display: "inline-block",
          padding: "6px 10px",
          borderRadius: "6px",
          border: "1px solid #333",
          background: "#e9d5ff",
          fontFamily: "monospace",
        }}
      >
        {node.tag.toUpperCase()}
      </div>

      {node.children.length > 0 && (
        <div style={{ display: "flex", gap: "20px" }}>
          {node.children.map((child, i) => (
            <DomNode key={i} node={child} />
          ))}
        </div>
      )}
    </div>
  );
}
