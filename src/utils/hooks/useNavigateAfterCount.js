import { useState, useEffect, useRef } from "react";

import { useNavigate } from "react-router-dom";

export function useNavigateAfterCount(startCount, redirectLink) {
  const [counter, setCounter] = useState(startCount);
  const cleanUpHandler = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (counter === 0) {
      clearInterval(cleanUpHandler.current);
      navigate(redirectLink);
    }
  }, [counter]);

  useEffect(() => {
    cleanUpHandler.current = setInterval(() => {
      setCounter((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(cleanUpHandler.current);
    };
  }, []);

  return counter;
}
