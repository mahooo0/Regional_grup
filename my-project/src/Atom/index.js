import { atom } from 'recoil';

export const Languege = atom({
    key: 'LanguegeState', // unique ID (with respect to other atoms/selectors)
    default: 'az', // default value (aka initial value)
});
export const CurrentServiceState = atom({
    key: 'CurrentServiceState', // unique ID (with respect to other atoms/selectors)
    default: null, // default value (aka initial value)
});
