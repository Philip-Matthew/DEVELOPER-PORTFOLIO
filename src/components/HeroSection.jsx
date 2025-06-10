import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6 flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Profile Image */}
          <div className="w-42 h-42 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary flex-shrink-0">
            <img
              src="/passportImg.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I&apos;m</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Philip
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Matthew
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I create
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                full-stack web applications{" "}
              </span>
              with modern technologies. Specializing in both front-end and
              back-end development, I build interfaces that are both beautiful
              and functional.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
