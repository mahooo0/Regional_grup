import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Languege } from '../Atom';

type LangTextProps = {
    azText: string;
    enText: string;
    ruText: string;
};

export default function LangText({ azText, enText, ruText }: LangTextProps) {
    const Language = useRecoilValue(Languege);
    const [result, setResult] = useState('');

    useEffect(() => {
        const language = localStorage.getItem('Accept-Language');

        switch (language) {
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
    }, [Language, azText, enText, ruText]);

    return <>{result}</>;
}
// export function langText({ azText, enText, ruText }: LangTextProps) {
//     const Language = useRecoilValue(Languege);
//     const [result, setResult] = useState('');

//     useEffect(() => {
//         const language = localStorage.getItem('Accept-Language');

//         switch (language) {
//             case 'az':
//                 setResult(azText);
//                 break;
//             case 'en':
//                 setResult(enText);
//                 break;
//             case 'ru':
//                 setResult(ruText);
//                 break;
//         }
//     }, [Language, azText, enText, ruText]);

//     return result;
// }
