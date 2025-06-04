'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const testimonials = [
    {
        name: 'Ryan H',
        text: 'my website looks and works like a premium store now. The extra features have made a noticeable difference in customer experience and revenue.',
        stars: 5,
    },
    {
        name: 'Alan',
        text: 'Best investment I’ve made for my store. Results were immediate—customers are staying on my site longer, and checkout rates have improved.',
        stars: 4,
    },
    {
        name: 'Morris G',
        text: "The ease of use and results are unmatched. Within days, my store 's bounce rate dropped, and I saw more repeat purchases. Highly recommend ecomplybook!",
        stars: 5,
    },
    {
        name: 'Carlos',
        text: 'The countdown timer for flash sales created urgency and drove a 40% increase in purchases. Brilliant tool!',
        stars: 5,
    },
    {
        name: 'Leon',
        text: 'Customer feedback has been amazing since I added the testimonial slider code. Trust levels and sales are up!',
        stars: 4,
    },
];

export default function TestimonialSwiperSection() {
    return (
        <section id="testimonial-section" className="pt-24 pb-12 px-4 bg-[#FFEFD5] text-center overflow-visible">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8">
                What our customers say about us!
            </h2>

            <Swiper

                slidesPerView={1}
                spaceBetween={20}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Pagination, Navigation]}
                className="max-w-6xl mx-auto overflow-visible pt-10" // ✅ أضفنا pt-10 هنا
            >


                {testimonials.map((t, i) => (
                    <SwiperSlide key={i} className="overflow-visible">
                        <div className={`testimonial-box ${i % 2 === 0 ? 'float-up' : 'float-down'}`}>


                            <div>
                                <div className="text-yellow-400 text-lg mb-2">
                                    {'★'.repeat(t.stars) + '☆'.repeat(5 - t.stars)}
                                </div>
                                <p className="text-gray-700 text-sm">{t.text}</p>
                            </div>
                            <div className="mt-4 font-bold text-gray-900 flex items-center justify-center gap-1">
                                {t.name}
                                <img
                                    src="https://cdn3.emoji.gg/emojis/9796-verified.png"
                                    width={16}
                                    height={16}
                                    alt="Verified"
                                />
                                <span className="text-xs font-normal text-gray-500">Verified</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-8 flex justify-center">
                <button
                    onClick={() => {
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    }}
                    className="px-6 py-3 bg-[#174059] text-white font-bold rounded-md hover:opacity-90 transition"
                >
                    Get Your Codebook Now
                </button>

            </div>

            <style jsx>{`
.testimonial-box {
  border: 1px solid #000;
  border-radius: 12px;
  padding: 24px;
  background: white;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  min-height: 270px; /* ✅ بدلاً من height: 280px */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}


        }

        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes floatDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }

        .float-up {
          animation: floatUp 4s ease-in-out infinite;
        }

        .float-down {
          animation: floatDown 4s ease-in-out infinite;
        }
        :global(.swiper-pagination) {
          margin-top: 10px !important;
          position: relative !important;
        }
      `}</style>
        </section>
    );
}
