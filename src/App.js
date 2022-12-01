import "./styles.css";
import Search from "./Components/Search";
import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState();
   useEffect(() => {
    let num = 3;
    let timer = setInterval(() => {
      num -= 1;
      if (num === 0) {
        setState(<Search />);
        clearInterval(timer);
      }
    }, 200);
  }, []);
  return <>{state}</>;
}