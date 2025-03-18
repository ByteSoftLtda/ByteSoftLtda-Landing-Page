import { useState, useEffect } from "react";


export const RotatingText = (texts) => {
    const [index, setIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.texts.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <span>
                {texts.texts[index]}
        </span>
    );
}
