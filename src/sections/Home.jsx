// sections/Home.jsx
import { motion } from "framer-motion";
import FloatingElements from "../components/FloatingElements";
import profileImage from "../assets/images/francis.jpeg";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Preload critical assets
    const preloadAssets = () => {
      const image = new Image();
      image.src = profileImage;
      
      if (videoRef.current) {
        videoRef.current.preload = "auto";
      }
    };

    // Fallback timer in case video doesn't load
    const fallbackTimer = setTimeout(() => {
      if (!videoLoaded) setShowFallback(true);
    }, 2000); // Reduced from 3000ms

    preloadAssets();

    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(fallbackTimer);
    };
  }, [videoLoaded]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  // Simplified Particle component for better performance
  const Particle = ({ color, size, delay, position }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
          x: [0, position?.x || 0, (position?.x || 0) * 1.5],
          y: [0, position?.y || 0, (position?.y || 0) * 1.5],
        }}
        transition={{
          duration: 2 + Math.random(), // Reduced duration
          delay: delay,
          repeat: Infinity,
          repeatDelay: 0.5 + Math.random(), // Reduced delay
        }}
        className={`absolute rounded-full ${color}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          filter: "blur(1px)",
          left: "50%",
          top: "50%",
        }}
      />
    );
  };

  // Optimized TypingText with faster typing speed
  const TypingText = ({ text }) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentIndex]);
          setCurrentIndex((prev) => prev + 1);
        }, 50 + Math.random() * 30); // Faster typing speed

        return () => clearTimeout(timeout);
      } else {
        setTypingComplete(true);
      }
    }, [currentIndex, text]);

    return (
      <span className="relative">
        {displayText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="absolute -right-2 w-1 h-8 bg-white"
        />
      </span>
    );
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-12 md:pt-0">
      {/* Optimized Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoLoaded && showFallback && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-purple-900 z-10 flex items-center justify-center">
            <div className="text-white text-lg">Loading...</div>
          </div>
        )}

        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted={false}
          playsInline
          preload="auto"
          className={`w-full h-full object-cover opacity-60 brightness-110 transition-opacity duration-500 ${
            videoLoaded ? "opacity-70" : "opacity-0"
          }`}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          onLoadedData={() => {
            setVideoLoaded(true);
            // Force play with error handling
            videoRef.current?.play().catch(e => {
              console.log("Autoplay prevented, trying muted play");
              videoRef.current.muted = true;
              videoRef.current.play();
            });
          }}
          onError={() => setShowFallback(true)}
        >
          <source src="/videos/frank_simple.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>

        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-purple-900/30 to-blue-900/30"></div>
      </div>

      {/* Conditional FloatingElements to reduce initial load */}
      {videoLoaded && <FloatingElements />}

      {/* Reduced Particle Effects */}
      {!isMobile && videoLoaded && (
        <>
          <div className="absolute top-1/4 left-1/4 w-full h-full">
            {[...Array(6)].map((_, i) => ( // Reduced from 12
              <Particle
                key={`firework1-${i}`}
                color={i % 3 === 0 ? "bg-purple-400" : i % 3 === 1 ? "bg-blue-400" : "bg-pink-400"}
                size={Math.random() * 6 + 3} // Reduced size
                delay={i * 0.1} // Faster appearance
                position={{
                  x: Math.random() * 80 - 40, // Reduced movement range
                  y: Math.random() * 80 - 40,
                }}
              />
            ))}
          </div>

          <div className="absolute top-3/4 right-1/4 w-full h-full">
            {[...Array(6)].map((_, i) => ( // Reduced from 12
              <Particle
                key={`firework2-${i}`}
                color={i % 2 === 0 ? "bg-purple-400" : "bg-blue-400"} // Simplified colors
                size={Math.random() * 6 + 3}
                delay={i * 0.1 + 0.2}
                position={{
                  x: Math.random() * 80 - 40,
                  y: Math.random() * 80 - 40,
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Responsive Glow Effects */}
      <div className="absolute top-1/4 -left-20 w-48 h-48 md:w-96 md:h-96 bg-purple-600 rounded-full filter blur-[80px] md:blur-[150px] opacity-20 md:opacity-25"></div>
      <div className="absolute bottom-1/4 -right-20 w-48 h-48 md:w-96 md:h-96 bg-blue-600 rounded-full filter blur-[80px] md:blur-[150px] opacity-20 md:opacity-25"></div>

      {/* Content with priority loading */}
      <div className="relative z-10 w-full px-4 md:px-8 mx-auto max-w-7xl">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center"
        >
          {/* Text Content - Loads first */}
          <div className="overflow-hidden order-2 lg:order-1 text-center md:text-left">
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6"
            >
              <TypingText text="Franklin Mwirigi Murianki" />
            </motion.h1>

            <motion.div
              variants={item}
              className="mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-purple-400 font-medium inline-flex items-center gap-2 justify-center md:justify-start">
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }} // Faster animation
                  className="inline-block w-2 h-2 md:w-3 md:h-3 rounded-full bg-purple-400"
                ></motion.span>
                Peacebuilder & Tech Innovator
              </span>
            </motion.div>

            <motion.h2
              variants={item}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 mb-4 md:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1.3 }} // Reduced delay
            >
              Bridging Technology & Peacebuilding
            </motion.h2>

            <motion.p
              variants={item}
              className="text-gray-300 max-w-2xl text-base sm:text-lg mb-6 md:mb-10 leading-relaxed mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1.6 }} // Reduced delay
            >
              Founder & CEO of SCHaiR | UN Peacekeeping Expert | AI & VR
              Innovator | International Relations Lecturer | Technology
              Entrepreneur
            </motion.p>

            <motion.div
              variants={item}
              className="flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: typingComplete ? 1 : 0 }}
              transition={{ delay: 1.9 }} // Reduced delay
            >
              <motion.button
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-medium transition-all shadow-lg shadow-purple-500/30 hover:shadow-xl hover:from-purple-500 hover:to-blue-500 text-sm md:text-base"
                onClick={() => (window.location.href = "/blog")}
              >
                <span className="flex items-center gap-2">
                  Visit My Blog
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }} // Faster animation
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Profile Image - Loads after text */}
          <motion.div
            variants={item}
            className="relative flex justify-center mt-0 md:mt-8 lg:mt-0 order-1 lg:order-2 mb-8 md:mb-0"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {!isMobile && (
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                  className="absolute inset-0 border-4 border-transparent border-t-purple-500 border-r-blue-500 border-b-pink-500 border-l-indigo-500 rounded-full"
                ></motion.div>
              )}

              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-2 md:inset-4 lg:inset-6 border border-purple-400/30 rounded-full"
              ></motion.div>

              <motion.div
                whileHover={{ scale: isMobile ? 1 : 1.03 }}
                animate={{
                  boxShadow: typingComplete && !isMobile
                    ? [
                        "0 0 0 0 rgba(124, 58, 237, 0.4)",
                        "0 0 20px 10px rgba(124, 58, 237, 0.2)",
                        "0 0 0 0 rgba(124, 58, 237, 0)",
                      ]
                    : "none",
                }}
                transition={{
                  duration: 3,
                  repeat: typingComplete && !isMobile ? Infinity : 0,
                  repeatDelay: 3,
                }}
                className="absolute inset-2 md:inset-4 lg:inset-6 rounded-full overflow-hidden border-2 md:border-4 border-white/10 shadow-lg md:shadow-2xl backdrop-blur-sm"
              >
                <img
                  src={profileImage}
                  alt="Franklin M. Murianki"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchpriority="high" // Prioritize image loading
                />
              </motion.div>

              {!isMobile && typingComplete && (
                <>
                  <motion.div
                    animate={{
                      y: [0, -15, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                    className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-gray-800/80 p-2 md:p-3 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm"
                  >
                    <div className="text-purple-400 font-bold text-xs md:text-sm">
                      CEO & Founder
                    </div>
                    <div className="text-white font-medium text-xs md:text-sm">
                      SCHaiR
                    </div>
                  </motion.div>

                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                    className="absolute -top-4 -right-4 md:-top-6 md:-right-6 bg-gray-800/80 p-2 md:p-3 rounded-xl shadow-lg border border-gray-700/50 backdrop-blur-sm"
                  >
                    <div className="text-blue-400 font-bold text-xs md:text-sm">
                      UN Expert
                    </div>
                    <div className="text-white font-medium text-xs md:text-sm">
                      Peacekeeping
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 md:opacity-40"></div>
      </div>
    </div>
  );
}