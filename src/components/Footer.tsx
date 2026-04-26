export function Footer() {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-rule py-8 text-sm text-muted">
      <span>&copy; {new Date().getFullYear()} Zarak Shah</span>
      <div className="flex items-center gap-5">
        <a
          href="https://github.com/Zarak-Shah-ji"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zarak-shah-69340b30a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://medium.com/@zarak-shah"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
      </div>
    </footer>
  );
}
