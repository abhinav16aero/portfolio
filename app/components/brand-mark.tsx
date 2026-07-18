/**
 * BrandMark — displays the logo image from public/images/logo.svg
 * Crisp at any size, matches favicon / OG image across all touchpoints.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/images/logo.svg"
      alt="Brand Logo"
      className={className}
      aria-hidden="true"
    />
  );
}
