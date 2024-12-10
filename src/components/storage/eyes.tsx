import React, { useEffect, useState } from 'react';

interface Eye {
    x: number;
    y: number;
    s: number;
    frequency: number;
}

const Eyes: React.FC = () => {
    // Définition des variables à l'intérieur du composant
    const numEyes = 100;
    const minEyeSize = 30;
    const maxEyeSize = 50;
    const minFrequency = 40;
    const maxFrequency = 60;
    const eyeOpenness = 0.4;
    const pupilMovement = 0.15;
    const pupilSize = 0.3;
    const minDistance = 100;

    const [eyes, setEyes] = useState<Eye[]>([]);
    const [time, setTime] = useState<number>(Date.now());

    useEffect(() => {
        const createEye = (): Eye => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            s: Math.random() * (maxEyeSize - minEyeSize) + minEyeSize,
            frequency: Math.random() * (maxFrequency - minFrequency) + minFrequency,
        });

        const isTooClose = (newEye: Eye, existingEyes: Eye[]): boolean => {
            return existingEyes.some(eye =>
                Math.sqrt(Math.pow(newEye.x - eye.x, 2) + Math.pow(newEye.y - eye.y, 2)) < minDistance
            );
        };

        const generateEyes = () => {
            const newEyes: Eye[] = [];
            for (let i = 0; i < numEyes; i++) {
                let newEye = createEye();
                let attempts = 0;
                const maxAttempts = 100;

                while (isTooClose(newEye, newEyes) && attempts < maxAttempts) {
                    newEye = createEye();
                    attempts++;
                }

                if (attempts < maxAttempts) {
                    newEyes.push(newEye);
                }
            }
            setEyes(newEyes);
        };

        generateEyes();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setEyes(eyes => eyes.map(eye => ({
                ...eye,
                x: eye.x * (window.innerWidth / document.documentElement.clientWidth),
                y: eye.y * (window.innerHeight / document.documentElement.clientHeight),
            })));
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation pour mettre à jour le temps et faire bouger les pupilles
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(Date.now());
        }, 100); // Met à jour toutes les 100 ms

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            {eyes.map((eye, index) => (
                <div key={index} style={{ position: 'absolute', left: eye.x, top: eye.y }}>
                    <svg width={eye.s} height={eye.s * eyeOpenness} viewBox={`0 0 ${eye.s} ${eye.s * eyeOpenness}`}>
                        <ellipse cx={eye.s / 2} cy={eye.s * eyeOpenness / 2} rx={eye.s / 2} ry={eye.s * eyeOpenness / 2} fill="white" stroke="black" strokeWidth="0.5" />
                        <circle
                            cx={eye.s / 2 + Math.sin(time / eye.frequency) * (eye.s * pupilMovement)}
                            cy={eye.s * eyeOpenness / 2}
                            r={eye.s * pupilSize / 2}
                            fill="black"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
};

export default Eyes;