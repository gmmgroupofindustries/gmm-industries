import React from "react";

export const SacredGeometryRosette: React.FC<{
  className?: string;
  size?: number | string;
}> = ({ className = "text-gmm-flame/30" }) => {
  return (
    <svg
      className={`geometry transition-transform duration-1000 select-none pointer-events-none w-full h-full max-w-full max-h-full object-contain ${className}`}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="0.8">
        <polygon points="300,30 435,66.17314097820156 533.8268590217984,165 570,300 533.8268590217984,434.99999999999994 435,533.8268590217984 300,570 165.00000000000006,533.8268590217984 66.17314097820162,435.0000000000001 30,300.00000000000006 66.17314097820159,164.99999999999997 164.9999999999999,66.17314097820162" />
        <g>
          <path d="M300,30L435,533.8268590217984L66.17314097820162,435.0000000000001" />
          <path d="M300,30L300,300" />
        </g>
        <g>
          <path d="M435,66.17314097820156L300,570L30,300.00000000000006" />
          <path d="M435,66.17314097820156L300,300" />
        </g>
        <g>
          <path d="M533.8268590217984,165L165.00000000000006,533.8268590217984L66.17314097820159,164.99999999999997" />
          <path d="M533.8268590217984,165L300,300" />
        </g>
        <g>
          <path d="M570,300L66.17314097820162,435.0000000000001L164.9999999999999,66.17314097820162" />
          <path d="M570,300L300,300" />
        </g>
        <g>
          <path d="M533.8268590217984,434.99999999999994L30,300.00000000000006L300,30" />
          <path d="M533.8268590217984,434.99999999999994L300,300" />
        </g>
        <g>
          <path d="M435,533.8268590217984L66.17314097820159,164.99999999999997L435,66.17314097820156" />
          <path d="M435,533.8268590217984L300,300" />
        </g>
        <g>
          <path d="M300,570L164.9999999999999,66.17314097820162L533.8268590217984,165" />
          <path d="M300,570L300,300" />
        </g>
        <g>
          <path d="M165.00000000000006,533.8268590217984L300,30L570,300" />
          <path d="M165.00000000000006,533.8268590217984L300,300" />
        </g>
        <g>
          <path d="M66.17314097820162,435.0000000000001L435,66.17314097820156L533.8268590217984,434.99999999999994" />
          <path d="M66.17314097820162,435.0000000000001L300,300" />
        </g>
        <g>
          <path d="M30,300.00000000000006L533.8268590217984,165L435,533.8268590217984" />
          <path d="M30,300.00000000000006L300,300" />
        </g>
        <g>
          <path d="M66.17314097820159,164.99999999999997L570,300L300,570" />
          <path d="M66.17314097820159,164.99999999999997L300,300" />
        </g>
        <g>
          <path d="M164.9999999999999,66.17314097820162L533.8268590217984,434.99999999999994L165.00000000000006,533.8268590217984" />
          <path d="M164.9999999999999,66.17314097820162L300,300" />
        </g>
        <circle cx="300" cy="300" r="200" />
        <circle cx="300" cy="300" r="270" />
      </g>
    </svg>
  );
};

export const AsteriskIcon: React.FC<{ className?: string; size?: number }> = ({
  className = "text-gmm-rust",
  size = 18,
}) => {
  return (
    <svg
      className={`inline-block ${className}`}
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="10"
      aria-hidden="true"
    >
      <path d="M50 0v100M6.7 25l86.6 50M6.7 75l86.6-50" />
    </svg>
  );
};

export const ArtCross: React.FC<{ className?: string; size?: number }> = ({
  className = "text-slate/40",
  size = 16,
}) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M12 4v16M4 12h16" />
    </svg>
  );
};

export const SocialIcons = {
  Facebook: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M14 21v-8h3l.5-4H14V7c0-1.2.4-2 2-2h2V1.4A25 25 0 0 0 15 1c-3 0-5 1.8-5 5v3H7v4h3v8z" />
    </svg>
  ),
  Instagram: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.5" r="1.2" />
    </svg>
  ),
  LinkedIn: ({ className = "w-4 h-4" }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M5 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 9h4v12H3V9Zm6 0h4v1.6c.7-1.2 1.8-1.9 3.5-1.9 3.2 0 4.5 2 4.5 5.4V21h-4v-6.1c0-1.7-.5-2.6-1.8-2.6-1.5 0-2.2 1-2.2 2.6V21H9V9Z" />
    </svg>
  ),
};
