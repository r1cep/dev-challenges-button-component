import { clsx } from "clsx";
import { useState } from "react";

import styles from "./App.module.scss";
import reactLogo from "./assets/react.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className={styles["logo"]} alt="Vite logo" width="96" height="96" decoding="async" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={clsx(styles["logo"], styles["react"])}
            alt="React logo"
            width="96"
            height="96"
            decoding="async"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={styles["card"]}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles["readTheDocs"]}>Click on the Vite and React logos to learn more</p>
    </div>
  );
};
