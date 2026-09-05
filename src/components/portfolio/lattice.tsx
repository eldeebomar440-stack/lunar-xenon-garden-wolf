export function Lattice({ className = "" }: { className?: string }) {
  const nodes = [
    [40, 30],
    [110, 22],
    [180, 48],
    [250, 28],
    [70, 90],
    [150, 110],
    [230, 86],
    [40, 160],
    [120, 170],
    [200, 150],
    [270, 180],
    [90, 220],
    [170, 230],
    [250, 240],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [0, 4],
    [1, 4],
    [1, 5],
    [2, 5],
    [2, 6],
    [3, 6],
    [4, 7],
    [4, 5],
    [5, 8],
    [5, 6],
    [6, 9],
    [6, 10],
    [7, 8],
    [8, 9],
    [9, 10],
    [7, 11],
    [8, 11],
    [8, 12],
    [9, 12],
    [10, 13],
    [11, 12],
    [12, 13],
  ];

  return (
    <svg
      viewBox="0 0 320 280"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {edges.map(([a, b], i) => (
        <line
          key={`e-${i}`}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          strokeOpacity="0.7"
          strokeWidth="1.25"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={`n-${i}`}
          cx={x}
          cy={y}
          r={i === 5 || i === 8 ? 4.2 : 2.6}
          fill="currentColor"
          fillOpacity={i === 5 || i === 8 ? 1 : 0.8}
        />
      ))}
    </svg>
  );
}

export function CornerFrame({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute top-0 left-0 h-3 w-3 border-t border-l border-silver/50" />
      <span className="absolute top-0 right-0 h-3 w-3 border-t border-r border-silver/50" />
      <span className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-silver/50" />
      <span className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-silver/50" />
    </span>
  );
}
