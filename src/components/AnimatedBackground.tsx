const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-bg" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 -left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
      <div className="absolute -bottom-1/4 left-1/2 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "4s" }} />
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-50 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
      
      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;