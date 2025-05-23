import { useEffect } from 'react';

export default function FeatureSliderSection() {
    useEffect(() => {
        const slides = document.querySelectorAll(".slidev8");
        slides.forEach((slide) => {
            const playButton = slide.querySelector(".play-buttonv8");
            const pauseButton = slide.querySelector(".pause-buttonv8");
            const video = slide.querySelector("video");

            let hidePauseButtonTimeout;

            const showPauseButton = () => {
                pauseButton.classList.remove("hiddenv8");
                clearTimeout(hidePauseButtonTimeout);
                hidePauseButtonTimeout = setTimeout(() => {
                    pauseButton.classList.add("hiddenv8");
                }, 1000);
            };

            playButton.addEventListener("click", () => {
                document.querySelectorAll("video").forEach((v) => {
                    if (v !== video) {
                        v.pause();
                        v.classList.remove("playingv8");
                    }
                });
                video.play();
                video.classList.add("playingv8");
                playButton.style.display = "none";
                pauseButton.style.display = "flex";
                showPauseButton();
            });

            pauseButton.addEventListener("click", () => {
                video.pause();
                video.classList.remove("playingv8");
                playButton.style.display = "flex";
                pauseButton.style.display = "none";
            });

            video.addEventListener("mousemove", showPauseButton);
            video.addEventListener("click", showPauseButton);
        });
    }, []);

    return (
        <div className="bg-[#bde6ff] py-6">
            <h2 className="text-center text-[22px] font-extrabold px-4 text-black mb-6">تخيل الميزات المذهلة التي يمكن أن يحتويها متجرك!</h2>
            <div className="overflow-x-auto max-w-6xl mx-auto px-4">
                <div className="flex gap-4">
                    {videos.map((vid, index) => (
                        <div key={index} className="flex flex-col items-center flex-shrink-0" style={{ width: '250px' }}>
                            <div className="relative rounded-lg bg-[#174059] p-1">
                                <video className="rounded-lg w-full aspect-[9/18]" loop muted playsInline>
                                    <source src={vid.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                            <h4 className="text-black text-center mt-2 font-bold">{vid.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

const videos = [
    {
        src: "https://cdn.shopify.com/videos/c/o/v/6480d204e80f48fea9da313469a69d4e.mov",
        title: "Product Gifts"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/b013ba33a53a4adebb5cb97e839c223e.mov",
        title: "Upsells"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/6b6688b641354501b568f655ae3a0a9c.mov",
        title: "Volume Discounts"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/85a6a81bf0e7493fa08b341175ecceb6.mov",
        title: "TikTok Videos"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/c75cb891a7264e7c82e69b6428b38f6c.mov",
        title: "Add to Cart"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/fd48522192fd4be3b4980b4f78c1c67f.mov",
        title: "Reviews"
    },
    {
        src: "https://cdn.shopify.com/videos/c/o/v/9946f5833b4749309965b3cfbcf71efe.mov",
        title: "Description Tabs"
    }
];
