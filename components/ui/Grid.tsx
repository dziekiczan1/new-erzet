import { useId } from "react";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  variant?: "top-right" | "bottom-right";
  [key: string]: unknown;
}

const VARIANTS = {
  "top-right":
    "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] fill-gray-400/30 stroke-gray-400/30",
  "bottom-right":
    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] fill-gray-300/20 stroke-gray-300/20",
};

export function GridPattern({
  width = 10,
  height = 10,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  variant = "top-right",
  ...props
}: GridPatternProps) {
  const id = "grid-pattern";
  const variantClass = VARIANTS[variant] ?? VARIANTS["top-right"];

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${variantClass}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width - 1}
              height={height - 1}
              x={x * width + 1}
              y={y * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default GridPattern;
