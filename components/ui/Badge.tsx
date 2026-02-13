import { LucideIcon } from "lucide-react";
import clsx from "clsx";

type BadgeProps = {
  text: string;
  icon?: LucideIcon;
  className?: string;
};

const Badge = ({ text, icon: Icon, className }: BadgeProps) => {
  return (
    <div
      className={clsx(
        "items-center gap-2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-tertiary text-white text-sm font-medium shadow-md select-none w-fit",
        className,
      )}
    >
      {Icon && (
        <span className="inline-block animate-pulse text-white">
          <Icon className="w-4 h-4" />
        </span>
      )}
      {text}
    </div>
  );
};

export default Badge;
