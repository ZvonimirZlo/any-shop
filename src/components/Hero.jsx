import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgImage from "../media/1409-147170113.webm";
import mobilePoster from "../media/girl1-Photoroom.webp";
import { useNavigate } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

const Hero = ({ setSelectedCategory, scrollToProducts }) => {
    const navigate = useNavigate();
    const [isDesktop, setIsDesktop] = useState(false);

    // Check screen size to prevent video loading on mobile
useEffect(() => {
    let timeoutId = null;

    const checkScreen = () => {
        // Clear the previous timer
        clearTimeout(timeoutId);

        // Set a new timer to run the logic after 150ms of "silence"
        timeoutId = setTimeout(() => {
            setIsDesktop(window.innerWidth >= 768);
        }, 150);
    };

    checkScreen(); // Run once on mount
    window.addEventListener('resize', checkScreen);

    return () => {
        window.removeEventListener('resize', checkScreen);
        clearTimeout(timeoutId); // Clean up the timer too!
    };
}, []);

    const handleShopAction = (category = "all") => {
        setSelectedCategory(category);
        navigate("/");
        setTimeout(() => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth"
            });
        }, 100);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden z-10">
            {/* 1. Conditional Background Logic */}
            {isDesktop ? (
                <LazyLoadComponent threshold={300}>
                    <motion.video
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={mobilePoster}
                        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
                    >
                        <source src={bgImage} type="video/webm" />
                        <source src='src/media/1409-147170113.mp4' type="video/mp4" />
                    </motion.video>
                </LazyLoadComponent>
            ) : (
                // Static Background Image for Mobile
                <div 
                    className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center -z-10"
                    style={{ backgroundImage: `url(${mobilePoster})` }}
                />
            )}

            {/* 2. Dark gradient overlay */}
            <div className="fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-black/40 via-black/50 to-black/80 -z-10"></div>

            {/* 3. Content container */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    className="text-white text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-2xl mb-8"
                >
                    Be <span className="text-blue-400"><i>ANY</i></span>thing you want
                    <br />
                    <span className="text-3xl md:text-5xl font-light opacity-90">Explore the collection</span>
                </motion.h1>

                <motion.button
                    onClick={() => handleShopAction("all")}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group px-10 py-4 font-bold text-white bg-black/60 backdrop-blur-xl border border-white/20 rounded-full shadow-2xl transition-colors hover:bg-blue-400"
                >
                    Shop Now
                </motion.button>
                
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 flex flex-wrap justify-center gap-3 max-w-xl"
                >
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => {
                                setSelectedCategory(cat);
                                scrollToProducts();
                            }}
                            className="px-4 py-1.5 bg-white/5 text-xs font-medium text-white/80 hover:text-white transition-all capitalize rounded-tl-lg rounded-br-lg border border-white/10"
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;