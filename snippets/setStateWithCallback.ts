import { useState, useRef, useEffect } from 'react';

export const useStateWithCallbackLazy = (initialValue: any) => {
    const callbackRef = useRef<Function | null>(null);

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        if (callbackRef.current) {
            callbackRef.current(value);
            callbackRef.current = null;
        }
    }, [value]);

    const setValueWithCallback = (newValue: any, callback: Function) => {
        callbackRef.current = callback;
        return setValue(newValue);
    };

    return [value, setValueWithCallback];
};

//使用
const [val, setVal] = useStateWithCallbackLazy('默认值');
const handleActions = (values: any) => {
    setVal(value, () => {
        //console.log(value);
    });
};
