import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="py-8 bg-secondary border-t border-border">
      <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Rajal Realty. All rights reserved.</p>
        <p>Your Trusted Partner in Real Estate.</p>
        {/* Add social media links or other footer content here if needed */}
      </div>
    </footer>
  );
};
