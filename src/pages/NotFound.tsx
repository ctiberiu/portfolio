import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-display font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link
          to="/"
          className="px-6 py-3 bg-primary text-primary-foreground font-display font-bold brutal-border hover-lift transition-all"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
