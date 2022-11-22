import { useEffect } from "react";

function ComponentWillUnmount() {
  useEffect(() => {
    return () => {
      // WillUnmount
    };
  }, []);

  return <div></div>;
}

export default ComponentWillUnmount;
