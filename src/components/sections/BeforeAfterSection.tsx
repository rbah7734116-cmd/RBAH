import { useEffect } from 'react';

export default function BeforeAfterSection() {
    useEffect(() => {
        const container = document.querySelector('.custom-before_after') as HTMLElement;
        const slider = container?.querySelector('.custom-ba-slider') as HTMLInputElement;
        const beforeImage = container?.querySelector('.custom-before_img') as HTMLElement;

        if (slider && beforeImage) {
            slider.addEventListener('input', () => {
                beforeImage.style.width = `${slider.value}%`;
                container.style.setProperty('--position', `${slider.value}%`);
            });
        }
    }, []);

    return (
        <main className="custom-ba_main bg-black py-10 px-4 text-center">
            <h2 className="text-white text-[25px] font-extrabold mb-2">The Results Speak For Themselves!</h2>
            <p className="text-white text-sm mb-6">
                This brand tripled their business in 3 months, Same ad spend, different website!
            </p>
            <div
                className="custom-containers custom-before_after relative max-w-4xl mx-auto"
                style={{ ['--position' as any]: '50%' }}
            >
                <div className="custom-image-containers relative">
                    <div className="custom-before_img absolute top-0 left-0 w-1/2 h-full overflow-hidden transition-all duration-300">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0914/3228/8605/files/Untitled_design_82.png?v=1737226160"
                            className="w-full h-auto"
                            alt="Before"
                        />
                        <span className="absolute top-2 left-2 bg-black text-white px-2 text-sm">Before</span>
                    </div>
                    <div className="custom-after_img">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0914/3228/8605/files/Untitled_design_84.png?v=1737227934"
                            className="w-full h-auto"
                            alt="After"
                        />
                        <span className="absolute top-2 right-2 bg-black text-white px-2 text-sm">After</span>
                    </div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    defaultValue={50}
                    className="custom-ba-slider absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4"
                />
            </div>
        </main>
    );
}
