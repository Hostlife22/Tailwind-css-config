import { useState } from "react";
import styles from "./App.module.scss";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={styles.parent}>
      <h1 className={styles.heading}>Hello Simaga</h1>
      <div>
        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          className={styles.button}
          onClick={() => setIsOpen((prev) => !isOpen)}
        >
          Login
        </button>
        {isOpen && <button className={"animate-fade"}>Hello</button>}
      </div>
    </div>
  );
}

export default App;
