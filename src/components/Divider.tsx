export function Divider() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex-1" style={{ borderTop: "1px solid var(--rule)" }} />
      <span
        data-show="work"
        style={{ color: "var(--accent)", fontSize: "0.6rem", lineHeight: 1 }}
      >
        ✦
      </span>
      <span
        data-show="life"
        style={{ color: "var(--accent)", fontSize: "1.1rem", lineHeight: 1 }}
      >
        ·
      </span>
      <span className="flex-1" style={{ borderTop: "1px solid var(--rule)" }} />
    </div>
  );
}
