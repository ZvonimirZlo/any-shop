import { motion } from "framer-motion";
import bgImage from "../media/1409-147170113.webm"
const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* 1. Background Video with Fade-in */}
            <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                autoPlay
                muted
                loop
                playsInline
                className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
            >
             <source src={bgImage} type="video/mp4" />
            </motion.video>

            {/* 2. Dark Gradient Overlay */}
            <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-black/40 via-black/50 to-black/80 -z-10"></div>

            {/* 3. Content Container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-8"
                >
                    Be <span className="text-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"><i>ANY</i></span>thing you want
                    <br />
                    <span className="text-3xl md:text-5xl font-light opacity-90">Start Exploring</span>
                </motion.h1>


                <motion.button
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-4 font-bold text-white bg-black/60 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl transition-colors hover:bg-blue-400"
                >
                    Start Shopping
                </motion.button>

            </div>
        </div>
    );
}

export default Hero;