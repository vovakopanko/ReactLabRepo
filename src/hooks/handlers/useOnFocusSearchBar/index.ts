import { useCallback, useEffect } from "react";
import { useState } from "react";

type Props = {
  ref: React.RefObject<HTMLDivElement>;
};

const useOnFocusElement = ({ ref }: Props) => {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    if (isFocus) {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }
  }, [isFocus]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (!event.target) {
      return;
    }
    if (ref.current && !ref.current?.contains(event.target as Node)) {
      setIsFocus((prev) => !prev);
    }
  }, []);

  const onFocus = useCallback(() => setIsFocus(true), []);

  return {
    onFocus,
    isFocus,
    setIsFocus,
  };
};

export default useOnFocusElement;
