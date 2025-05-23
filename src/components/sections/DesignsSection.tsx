import React, { useEffect, useState } from 'react';

const videoLinks = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
];

const buttonLabels = [
    "تصميم 1", "تصميم 2", "تصميم 3", "تصميم 4",
    "تصميم 5", "تصميم 6", "تصميم 7", "تصميم 8",
    "تصميم 9", "تصميم 10", "تصميم 11", "تصميم 12",
    "تصميم 13"
];

const DesignsSection: React.FC = () => {
    const [activeButton, setActiveButton] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [videoWidth, setVideoWidth] = useState<string>('80%');

    useEffect(() => {
        const checkScreenSize = () => {
            const width = window.innerWidth;
            setIsMobile(width <= 768);

            if (width > 1200) {
                setVideoWidth('100%');
            } else if (width > 992) {
                setVideoWidth('50%');
            } else if (width > 768) {
                setVideoWidth('50%');
            } else {
                setVideoWidth('100%');
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const handleButtonClick = (index: number) => {
        setActiveButton(index);
    };

    const handleGetCode = () => {
        window.open("https://www.youtube.com/watch?v=cyKI6nZVGQQ", "_blank");
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '5px',
                width: '100%',
                height: '100vh',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '5px',
                    width: isMobile ? '100%' : '385px',
                    maxHeight: '80vh',
                    overflowY: 'auto',
                    position: isMobile ? 'static' : 'sticky',
                    left: '0',
                    top: '0',
                    backgroundColor: 'rgba(0, 0, 0, 0.2)',
                    padding: '10px',
                    borderRight: '2px solid #fff',
                }}
            >
                {videoLinks.map((videoLink, index) => (
                    <div key={index} style={{ marginBottom: '5px', width: '100%' }}>
                        <button
                            onClick={() => handleButtonClick(index)}
                            style={{
                                padding: '10px',
                                margin: '2px 0',
                                backgroundColor: activeButton === index ? '#ff7f50' : 'transparent',
                                color: '#fff',
                                border: '2px solid #fff',
                                borderRadius: '8px',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                width: '100%',
                                maxWidth: '380px',
                                textAlign: 'center',
                            }}
                        >
                            {buttonLabels[index]}
                        </button>

                        {activeButton === index && isMobile && (
                            <div style={{ marginTop: '5px', width: '100%' }}>
                                <video key={videoLink} width="100%" controls autoPlay style={{ borderRadius: '8px' }}>
                                    <source src={videoLink} type="video/mp4" />
                                    المتصفح لا يدعم عرض الفيديو.
                                </video>
                                <button
                                    onClick={handleGetCode}
                                    style={{
                                        marginTop: '5px',
                                        padding: '8px 16px',
                                        backgroundColor: '#ff7f50',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        width: '100%',
                                    }}
                                >
                                    اضغط للحصول على الأكواد
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {!isMobile && (
                <div style={{ flex: 1, textAlign: 'center', marginLeft: '10px', marginTop: '10px' }}>
                    <video
                        key={videoLinks[activeButton]}
                        width={videoWidth}
                        height="auto"
                        controls
                        autoPlay
                        muted
                        playsInline
                        style={{ borderRadius: '8px', marginBottom: '10px' }}
                    >
                        <source src={videoLinks[activeButton]} type="video/mp4" />
                        المتصفح لا يدعم عرض الفيديو.
                    </video>
                    <button
                        onClick={handleGetCode}
                        style={{
                            marginTop: '5px',
                            padding: '8px 16px',
                            backgroundColor: '#ff7f50',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '5px',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                            width: '60%',
                        }}
                    >
                        اضغط للحصول على الأكواد
                    </button>
                </div>
            )}
        </div>
    );
};

export default DesignsSection;
