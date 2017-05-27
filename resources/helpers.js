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
