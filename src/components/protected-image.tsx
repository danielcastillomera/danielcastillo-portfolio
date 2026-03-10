'use client';

import Image from 'next/image';

interface ProtectedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

/**
 * Image component with multi-layer protection against:
 * - Right-click > Save As
 * - Drag and drop
 * - Copy/paste
 * - Long-press save on mobile
 * - Screenshot overlay (transparent shield)
 *
 * NOTE: No client-side method can fully prevent screenshots at the OS level.
 * These measures provide reasonable protection against casual copying.
 */
export default function ProtectedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
}: ProtectedImageProps) {
  return (
    <div
      className="protected-image-wrapper"
      onContextMenu={(e) => e.preventDefault()}
      onDragStart={(e) => e.preventDefault()}
      role="img"
      aria-label={alt}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`protected-image ${className}`}
        draggable={false}
        priority={priority}
        onContextMenu={(e) => e.preventDefault()}
        onDragStart={(e) => e.preventDefault()}
      />
    </div>
  );
}
