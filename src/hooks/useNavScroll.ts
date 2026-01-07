
import { useState, useEffect } from 'react';

export const useNavScroll = ({ max }: { max: number }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        // Umbral de 20px para activar el cambio
        setIsScrolled(window.scrollY > max);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [max]);

    // Retornamos solo lo que la UI necesita saber
    return {
        isScrolled,
        isHovered,
        setIsHovered, // Exportamos esto para usarlo en onMouseEnter/Leave
    };
};