import {useState} from 'react';

const useDebounce = (func, wait, callImmediate) => {
  const [timoutId, set] = useState(null);

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      set(timoutId);
      if (!callImmediate) func.apply(context, args);
    };
    const callNow = callImmediate && !timoutId;
    clearTimeout(timoutId);
    set(setTimeout(later, wait));
    if (callNow) func.apply(context, args);
  };
};

export default useDebounce;
