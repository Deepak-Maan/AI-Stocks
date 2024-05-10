import React, { useEffect, useState } from "react";
import { BacktotopArrow } from "./Icons";

const Backtotop = () => {
        const [isVisible, setIsVisible] = useState(false);

        useEffect(() => {
                const toggleVisible = () => {
                        if (typeof window !== "undefined" && window.pageYOffset > 300) {
                                setIsVisible(true);
                        } else {
                                setIsVisible(false);
                        }
                };

                if (typeof window !== "undefined") {
                        window.addEventListener("scroll", toggleVisible);

                        return () => {
                                window.removeEventListener("scroll", toggleVisible);
                        };
                }
        }, []);
        const scrollToTop = () => {
                if (typeof window !== "undefined") {
                        window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                        });
                }
        };
        return (
                <div>
                        <button className="  group border flex justify-center animate-bounce items-center w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] rounded-full bg-gradient-to-b from-skyBlue to-lightBlue  right-[6px] fixed sm:right-[1%] bottom-[6px] sm:bottom-[1%] z-50 animate-back "
                                onClick={scrollToTop}
                                style={{
                                        display: isVisible ? "flex " : "none",
                                }}
                        >
                                <BacktotopArrow />
                        </button>

                </div>
        )
}

export default Backtotop