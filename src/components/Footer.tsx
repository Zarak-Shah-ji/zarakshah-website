import { Divider } from "@/components/Divider";

const links = [
  { label: "GitHub", href: "https://github.com/Zarak-Shah-ji" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zarak-shah-69340b30a/",
  },
  { label: "Medium", href: "https://medium.com/@zarak-shah" },
];

export function Footer() {
  return (
    <div className="row mt-24">
      <Divider />
      <footer className="flex items-center justify-between py-7 text-sm text-muted">
        <span>&copy; {new Date().getFullYear()} Zarak Shah</span>
        <div className="flex items-center gap-5">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep transition-colors duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
