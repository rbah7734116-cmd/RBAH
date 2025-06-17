import { useEffect, useRef } from 'react';

export default function BeforeAfterSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const afterRef = useRef<HTMLImageElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const comparisonContainer = containerRef.current;
        const afterImage = afterRef.current;
        const slider = sliderRef.current;

        if (!comparisonContainer || !afterImage || !slider) return;

        let isDragging = false;

        const updateSlider = (x: number) => {
            const containerRect = comparisonContainer.getBoundingClientRect();
            let position = x - containerRect.left;
            position = Math.max(0, Math.min(position, containerRect.width));
            slider.style.left = position + 'px';
            afterImage.style.clipPath = `inset(0 ${containerRect.width - position}px 0 0)`;
        };

        const onMouseMove = (e: MouseEvent) => {
            if (isDragging) updateSlider(e.clientX);
        };

        const onTouchMove = (e: TouchEvent) => {
            if (isDragging) updateSlider(e.touches[0].clientX);
        };

        slider.addEventListener('mousedown', () => {
            isDragging = true;
            window.addEventListener('mousemove', onMouseMove);
        });

        window.addEventListener('mouseup', () => {
            isDragging = false;
            window.removeEventListener('mousemove', onMouseMove);
        });

        slider.addEventListener('touchstart', () => {
            isDragging = true;
            window.addEventListener('touchmove', onTouchMove);
        });

        window.addEventListener('touchend', () => {
            isDragging = false;
            window.removeEventListener('touchmove', onTouchMove);
        });

        // Auto animate
        let position = 0;
        let direction = 1;
        const moveDistance = 0.5;

        const interval = setInterval(() => {
            const containerRect = comparisonContainer.getBoundingClientRect();
            const maxPosition = containerRect.width * moveDistance;

            position += direction * 5;
            if (position >= maxPosition || position <= 0) {
                direction *= -1;
            }

            updateSlider(containerRect.left + position);
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-[#EEF6FD] text-black text-right px-6 py-12">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-4">
                    Results speak for themselves!
                </h2>
                <p className="text-center text-sm mb-10">
                    This brand tripled its business in just three months with the same ad spend, just a different website!
                </p>
                <div
                    className="relative w-full max-w-[550px] aspect-[4/3] mx-auto overflow-hidden rounded-lg"
                    ref={containerRef}
                >
                    <img
                        src="/images/555777.webp"
                        alt="Before"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <img
                        src="/images/555666.webp"
                        alt="After"
                        className="absolute top-0 left-0 w-full h-full object-cover after"
                        ref={afterRef}
                        style={{ clipPath: 'inset(0 50% 0 0)' }}
                    />
                    <div
                        ref={sliderRef}
                        className="absolute top-0 left-1/2 w-[3px] h-full bg-white z-10 cursor-ew-resize opacity-50"
                        style={{ transform: 'translateX(-50%)' }}
                    ></div>
                </div>
            </div>
        </section>
    );
}
