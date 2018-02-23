import {
    tween,
    easing,
} from 'popmotion';

export const debounce = (callback, wait) => {
    let timeout = null;
    let callbackArguments = null;

    const later = () => callback.apply(this, callbackArguments);

    return () => {
        callbackArguments = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

export const throttle = (callback, wait) => {
    let timeout = null;
    let callbackArguments = null;

    const later = () => {
        callback.apply(this, callbackArguments);
        timeout = null;
    };

    return () => {
        if (!timeout) {
            callbackArguments = arguments;
            timeout = setTimeout(later, wait);
        }
    };
};

export const smoothScrollTo = (element) => {
    const {
        top,
    } = element.getBoundingClientRect();

    const from = window.scrollY;
    const to = top + window.scrollY;

    const animation = tween({
        from,
        to,
        duration: 500,
        ease: easing.backOut,
    });
    animation.start((value) => { window.scrollTo(0, value); });
};
