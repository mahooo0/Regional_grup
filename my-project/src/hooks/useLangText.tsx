import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom';
import { useEffect, useState } from 'react';

type LangTextProps = {
    azText: string;
    enText: string;
    ruText: string;
};

export function useLangText({ azText, enText, ruText }: LangTextProps) {
    const language = useRecoilValue(Languege);
    const [result, setResult] = useState('');

    useEffect(() => {
        const localLanguage = localStorage.getItem('Accept-Language');

        switch (localLanguage) {
            case 'az':
                setResult(azText);
                break;
            case 'en':
                setResult(enText);
                break;
            case 'ru':
                setResult(ruText);
                break;
        }
    }, [language, azText, enText, ruText]);

    return result;
}
