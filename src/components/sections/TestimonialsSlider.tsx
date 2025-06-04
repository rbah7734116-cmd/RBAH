"use client";

import { useEffect } from "react";

const testimonials = [
    {
        name: "Sarah",
        time: "2h ago",
        avatar: "https://randomuser.me/api/portraits/women/12.jpg",
        text: "Since adding these Shopify code snippets, my store loads faster, looks cleaner, and I was able to customize everything myself without hiring a developer. Absolutely love it!",
        likes: "1.8k",
        comments: 8,
        shares: 18,
    },
    {
        name: "Ahmed",
        time: "5h ago",
        avatar: "https://randomuser.me/api/portraits/men/14.jpg",
        text: "The results were immediate! Easy to install, mobile-ready, and the modern designs boosted customer trust and conversions within the first week. Highly recommended!",
        likes: "2.1k",
        comments: 12,
        shares: 21,
    },
    {
        name: "Lina",
        time: "1h ago",
        avatar: "https://randomuser.me/api/portraits/women/20.jpg",
        text: "What I love most is how polished and lightweight the designs are. I didn’t need any coding skills and the flexibility let me match the style of my brand perfectly.",
        likes: "980",
        comments: 5,
        shares: 11,
    },
    {
        name: "Omar",
        time: "7h ago",
        avatar: "https://randomuser.me/api/portraits/men/22.jpg",
        text: "Excellent documentation and support. The snippets are easy to plug in and make a real difference in store performance, both visually and functionally.",
        likes: "1.2k",
        comments: 6,
        shares: 9,
    },
    {
        name: "Dina",
        time: "3h ago",
        avatar: "https://randomuser.me/api/portraits/women/25.jpg",
        text: "This bundle saved me hours of dev time. Everything is clean, organized, and ready to go. Great value and works beautifully across all devices. Best investment this year.",
        likes: "2k",
        comments: 10,
        shares: 14,
    },
    {
        name: "Zaid",
        time: "4h ago",
        avatar: "https://randomuser.me/api/portraits/men/33.jpg",
        text: "Incredible value. The snippets improved my loading speed and gave my store a premium feel. Everything is responsive, clean, and optimized for conversions.",
        likes: "1.1k",
        comments: 7,
        shares: 13,
    },
    {
        name: "Mona",
        time: "6h ago",
        avatar: "https://randomuser.me/api/portraits/women/31.jpg",
        text: "My mobile conversion rate jumped after using these snippets. The designs are slick, load fast, and give off a very professional look. It’s everything I needed.",
        likes: "1.4k",
        comments: 4,
        shares: 10,
    },
    {
        name: "Nour",
        time: "9h ago",
        avatar: "https://randomuser.me/api/portraits/women/41.jpg",
        text: "These are exactly the tools I was searching for. My site feels premium now, and I didn’t need to install heavy apps. Super clean code and easy to personalize.",
        likes: "1.7k",
        comments: 11,
        shares: 12,
    },
    {
        name: "Tariq",
        time: "10h ago",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        text: "The snippets are well-crafted and modular. I was able to build new sections quickly, and everything adapts perfectly to both desktop and mobile. Big fan!",
        likes: "800",
        comments: 3,
        shares: 5,
    },
    {
        name: "Layla",
        time: "8h ago",
        avatar: "https://randomuser.me/api/portraits/women/48.jpg",
        text: "Installation was super simple—copy, paste, done! No issues at all, and the designs instantly elevated my store’s appearance. Perfect for non-tech users like me.",
        likes: "1.5k",
        comments: 6,
        shares: 8,
    },
];

const SocialProofSection = () => {
    useEffect(() => {
        const container = document.getElementById("scroll-container");
        if (!container) return;

        const scrollSpeed = 1;
        const resetAfter = container.scrollWidth / 2;

        const interval = setInterval(() => {
            if (container.scrollLeft >= resetAfter) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += scrollSpeed;
            }
        }, 20);

        // 👇 دعم السحب بالماوس / اللمس
        let isDown = false;
        let startX: number;
        let scrollLeft: number;

        const handleMouseDown = (e: MouseEvent | TouchEvent) => {
            isDown = true;
            startX = "touches" in e ? e.touches[0].pageX : e.pageX;
            scrollLeft = container.scrollLeft;
        };

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            if (!isDown) return;
            e.preventDefault();
            const x = "touches" in e ? e.touches[0].pageX : e.pageX;
            const walk = x - startX;
            container.scrollLeft = scrollLeft - walk;
        };

        const handleMouseUp = () => {
            isDown = false;
        };

        // 📱 دعم اللمس والموبايل + الماوس
        container.addEventListener("mousedown", handleMouseDown as any);
        container.addEventListener("touchstart", handleMouseDown as any);
        container.addEventListener("mousemove", handleMouseMove as any);
        container.addEventListener("touchmove", handleMouseMove as any);
        container.addEventListener("mouseup", handleMouseUp);
        container.addEventListener("mouseleave", handleMouseUp);
        container.addEventListener("touchend", handleMouseUp);

        return () => {
            clearInterval(interval);
            container.removeEventListener("mousedown", handleMouseDown as any);
            container.removeEventListener("touchstart", handleMouseDown as any);
            container.removeEventListener("mousemove", handleMouseMove as any);
            container.removeEventListener("touchmove", handleMouseMove as any);
            container.removeEventListener("mouseup", handleMouseUp);
            container.removeEventListener("mouseleave", handleMouseUp);
            container.removeEventListener("touchend", handleMouseUp);
        };
    }, []);



    return (
        <section className="py-0 px-0 bg-[#F3F4F6] flex justify-center">
            <div className="w-full max-w-6xl bg-gray-100 p-4 rounded-lg shadow-md">

                <h3 className="text-center text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wider">
                    Real Feedback From Real Users
                </h3>

                <div
                    id="scroll-container"
                    className="overflow-x-auto whitespace-nowrap"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                    }}
                >
                    <style jsx>{`
  #scroll-container::-webkit-scrollbar {
    display: none;
  }

  p {
    white-space: normal !important;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`}</style>


                    <div className="flex gap-4 w-max">
                        {[...testimonials, ...testimonials].map((item, index) => (
                            <div
                                key={index}
                                className="w-[280px] h-[280px] bg-[#FFEFD5] border border-black rounded-lg shadow p-4 flex-shrink-0 flex flex-col justify-between"
                            >
                                {/* Header */}
                                <div className="flex gap-3 items-center mb-2">
                                    <img
                                        src={item.avatar}
                                        alt={item.name}
                                        className="w-10 h-10 rounded-full object-cover border border-black"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800 text-sm">{item.name}</p>
                                        <p className="text-xs text-gray-400">{item.time}</p>
                                    </div>
                                </div>

                                {/* Text */}
                                <p className="text-sm text-gray-700 leading-snug break-words flex-1">
                                    {item.text}
                                </p>




                                {/* Footer */}
                                <div>
                                    <div className="text-xs text-gray-500 flex items-center justify-between mt-2">
                                        <div className="flex items-center gap-1">
                                            <img
                                                src="https://cdn.shopify.com/s/files/1/0798/4267/2987/files/thumbs_up_facebook.jpg?v=1733340667"
                                                className="w-4 h-4"
                                                alt="like"
                                            />
                                            <span>{item.likes}</span>
                                        </div>
                                        <span>
                                            {item.comments} comments • {item.shares} shares
                                        </span>
                                    </div>

                                    <div className="flex justify-around border-t pt-2 mt-2 text-sm text-gray-600">
                                        <button className="hover:text-blue-600">Like</button>
                                        <button className="hover:text-blue-600">Comment</button>
                                        <button className="hover:text-blue-600">Share</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProofSection;
