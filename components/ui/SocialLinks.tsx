import { IContactLink, ISocialLinksProps } from "@/lib/contact";

export const SocialLinks = ({ links }: ISocialLinksProps) => (
  <nav aria-label="Social media" className={`flex gap-4`}>
    {links.map(({ icon: Icon, href, label }: IContactLink) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-background
        bg-gradient-to-br from-primary/20 via-transparent to-tertiary/30 shadow-md border border-tertiary/40"
      >
        <Icon
          aria-hidden="true"
          focusable="false"
          className="h-5 w-5 text-tertiary/60"
        />
      </a>
    ))}
  </nav>
);
