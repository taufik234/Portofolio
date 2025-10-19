import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">© 2025 All rights reserved.</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
            <span>in Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
