import { useState, useEffect } from 'react';
import blimp from "../assets/blimp loading.gif";

function SplashPage({ duration = 3000 }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-sky-100 z-50 flex items-center justify-center">
            {/* Blimp container with animation */}
            <div className="absolute top-1/8 w-full h-1/2 overflow-hidden">
                <div className="animate-blimp absolute -left-40">
                    {/* Blimp SVG */}
                    <img src={blimp}/>
                </div>
            </div>

            {/* Loading text */}
            <div className="absolute bottom-1/3 text-blue-900 font-bold text-xl animate-pulse">
                Notes on the fly...
            </div>
        </div>
    );
};

export default SplashPage;