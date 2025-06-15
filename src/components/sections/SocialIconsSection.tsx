import {
    FaFacebookF,
    FaInstagram,
    FaTelegramPlane,
    FaWhatsapp,
    FaYoutube
} from 'react-icons/fa';
const icons = [
    {
        icon: <FaWhatsapp />,
        href: 'https://wa.me/966509324662',
        bg: 'bg-green-500'
    },
    {
        icon: <FaTelegramPlane />,
        href: 'https://web.telegram.org/k/#@Toptoall',
        bg: 'bg-blue-400'
    },
    {
        icon: <FaYoutube />,
        href: 'https://www.youtube.com/',
        bg: 'bg-red-600'
    },
    {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/futer7788?igsh=ZGUzMzM3NWJiOQ==',
        bg: 'bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500'
    },
    {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/profile.php?id=61576701425912',
        bg: 'bg-blue-700'
    }
];

const SocialIconsSection = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-2xl text-center text-white font-semibold mb-6">
                📱 Follow me on platforms
            </h2>
            <div className="flex justify-center gap-4">
                {icons.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-white text-xl w-12 h-12 rounded-full flex items-center justify-center ${item.bg} hover:opacity-80 transition`}
                    >
                        {item.icon}
                    </a>
                ))}
            </div>
        </section>
    );
};

export default SocialIconsSection;
