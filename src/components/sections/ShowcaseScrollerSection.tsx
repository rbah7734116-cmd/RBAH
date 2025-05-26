
export default function ShowcaseScrollerSection() {
    const images = [
        'https://cdn.shopify.com/s/files/1/0914/3228/8605/files/cleanwithrevive.co.uk_products_thepatchbrand_E2_84_A2-energy-patch_iPhone_XR_3.png?v=1736818551',
        'https://cdn.shopify.com/s/files/1/0914/3228/8605/files/www.morelabs.com_products_morning-recovery_srsltid_AfmBOopYx2LXyk-MRx3TmgV9H2r2skyZL3yDIGxu0WbBy-9ulU6RoaAe_iPhone_XR.png?v=1736826407',
        'https://cdn.shopify.com/s/files/1/0914/3228/8605/files/duradry.com_products_duradry-am_iPhone_XR.png?v=1736826333',
        'https://cdn.shopify.com/s/files/1/0914/3228/8605/files/cleanwithrevive.co.uk_products_laundry-detergent-eco-sheets_selling_plan_690928877915_variant_47501187973467_iPhone_XR_1.png?v=1736817136'
    ];

    return (
        <section className="px-4 py-10 max-w-screen-xl mx-auto">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
                Imagine what your website could look like
            </h2>

            <div className="overflow-x-auto slider-container">
                <div className="flex gap-4 slider">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="min-w-[90%] md:min-w-[30%] max-w-[400px] mx-auto popup bg-white rounded-lg overflow-hidden"
                        >
                            <div className="header-web bg-white border-b border-gray-300 p-2 text-center font-bold text-[#174059] text-sm">
                                Scroll Down To Navigate
                            </div>
                            <div className="iframe-container">
                                <iframe
                                    srcDoc={`<!DOCTYPE html>
                                        <html lang='en'>
                                        <head>
                                            <meta charset='UTF-8'>
                                            <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                                            <style>
                                                body { margin: 0; background: white; color: white; font-family: sans-serif; }
                                                .scroll-container { display: flex; flex-direction: column; align-items: center; width: 100%; }
                                                .image { width: 100%; height: auto; }
                                            </style>
                                        </head>
                                        <body>
                                            <div class='scroll-container'>
                                                <img class='image' src='${src}' alt='Slide image' />
                                            </div>
                                        </body>
                                        </html>`}
                                    className="w-full h-[600px] border-none"
                                    scrolling="yes"
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
