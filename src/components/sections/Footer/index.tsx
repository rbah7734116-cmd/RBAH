import { Action } from '@/components/atoms';
import classNames from 'classnames';

export default function Footer(props) {
    const { primaryLinks = [], styles = {} } = props;
    const footerWidth = styles.self?.width ?? 'narrow';

    return (
        <footer className={classNames('relative', styles.self?.padding ?? 'py-16 px-4')}>
            <div
                className={classNames('border-t-2 border-current pt-8', {
                    'max-w-7xl mx-auto': footerWidth === 'narrow',
                    'max-w-8xl mx-auto': footerWidth === 'wide'
                })}
            >
                <div className="flex flex-col md:flex-row md:justify-between">
                    {primaryLinks.length > 0 && (
                        <div className="w-full">
                            <ul className="flex flex-wrap max-w-5xl text-lg gap-x-8 gap-y-2">
                                {primaryLinks.map((link, index) => (
                                    <li key={index}>
                                        <Action {...link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
}
