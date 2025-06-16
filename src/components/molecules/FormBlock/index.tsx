import classNames from 'classnames';
import { useRef, useState } from 'react';

import { Annotated } from '@/components/Annotated';
import { DynamicComponent } from '@/components/components-registry';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';

export default function FormBlock(props) {
    const { elementId, className, fields = [], submitLabel, styles = {} } = props;
    const formRef = useRef(null);
    const [status, setStatus] = useState('');

    if (fields.length === 0) {
        return null;
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const form = formRef.current;
        const formData = new FormData(form);

        const res = await fetch('https://formspree.io/f/xnnvvglk', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        });

        if (res.ok) {
            form.reset();
            setStatus('تم الإرسال بنجاح ✅');
        } else {
            setStatus('حدث خطأ أثناء الإرسال ❌');
        }
    }

    return (
        <Annotated content={props}>
            <form
                className={className}
                name={elementId}
                id={elementId}
                ref={formRef}
                onSubmit={handleSubmit}
            >
                <div className="grid gap-6 sm:grid-cols-2">
                    {fields.map((field, index) => (
                        <DynamicComponent key={index} {...field} />
                    ))}
                </div>
                <div className={classNames('mt-8', mapStyles({ textAlign: styles.self?.textAlign ?? 'left' }))}>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center px-5 py-4 text-lg transition border-2 border-current hover:bottom-shadow-6 hover:-translate-y-1.5"
                    >
                        {submitLabel}
                    </button>
                    {status && <p className="mt-4 text-green-400">{status}</p>}
                </div>
            </form>
        </Annotated>
    );
}
