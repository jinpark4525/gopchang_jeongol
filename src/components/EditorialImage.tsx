import { useState } from 'react';
import { Utensils } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  figureNumber: string;
  caption: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  figureNumber,
  caption,
  className = '',
  imgClassName = 'aspect-[4/3] w-full object-cover',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`flex flex-col ${className}`}>
      <div className="relative overflow-hidden rounded-lg border border-stone-200 bg-stone-100">
        {hasError ? (
          <div
            className="flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200/70 p-8 text-center"
            role="img"
            aria-label={alt}
          >
            <Utensils className="h-7 w-7 text-stone-400" strokeWidth={1.5} />
            <p className="font-editorial text-base font-medium text-stone-700">
              {alt}
            </p>
            <span className="text-xs text-stone-500">{figureNumber}</span>
          </div>
        ) : (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'lazy'}
            onError={() => setHasError(true)}
            className={imgClassName}
          />
        )}
      </div>
      <figcaption className="mt-2.5 flex items-baseline gap-2 text-xs leading-relaxed text-stone-500">
        <span className="font-data shrink-0 font-medium text-stone-700">
          {figureNumber}
        </span>
        <span aria-hidden="true">·</span>
        <span>{caption}</span>
      </figcaption>
    </figure>
  );
}
