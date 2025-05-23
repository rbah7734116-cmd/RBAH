import { useEffect } from 'react';

const BeforeAfterSection = () => {
    useEffect(() => {
        const sliders = document.querySelectorAll('.custom-ba-slider') as NodeListOf<HTMLInputElement>;
        sliders.forEach(slider => {
            const container = slider.closest('.custom-before_after') as HTMLElement;
            const beforeImg = container.querySelector('.custom-before_img') as HTMLElement;
            const line = container.querySelector('.custom-slider-line') as HTMLElement;

            const updateSlider = () => {
                const val = slider.value + '%';
                beforeImg.style.width = val;
                line.style.left = val;
            };

            slider.addEventListener('input', updateSlider);
            updateSlider();
        });
    }, []);

    return (
        <section className="bg-black py-12 px-4">
            <h2 className="text-white text-center font-extrabold text-xl mb-2">The Results Speak For Themselves!</h2>
            <p className="text-white text-center text-sm mb-6">
                This brand tripled their business in 3 months, Same ad spend, different website!
            </p>

            <div className="relative max-w-3xl mx-auto custom-before_after" style={{ ['--position' as any]: '46%' }}>
                <div className="relative w-full h-auto custom-image-containers">
                    <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden custom-before_img">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0914/3228/8605/files/Untitled_design_82.png?v=1737226160"
                            alt="Before"
                            className="w-full h-auto custom-slider-image"
                        />
                        <span className="absolute top-2 left-2 text-xs text-white bg-black px-2 py-1 rounded before_badge">Before</span>
                    </div>
                    <div className="w-full h-auto custom-after_img">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0914/3228/8605/files/Untitled_design_84.png?v=1737227934"
                            alt="After"
                            className="w-full h-auto custom-slider-image"
                        />
                        <span className="absolute top-2 right-2 text-xs text-white bg-black px-2 py-1 rounded after_badge">After</span>
                    </div>
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue="50"
                    className="absolute top-1/2 left-0 w-full custom-ba-slider opacity-0 z-10"
                    aria-label="Percentage of before photo shown"
                />
                <div className="absolute top-0 bottom-0 w-1 bg-white custom-slider-line" style={{ left: '50%' }}></div>
            </div>
        </section>
    );
};

export default BeforeAfterSection;
