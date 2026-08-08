"use client";

import { useEffect, useState } from "react";
import styles from "./IlluminationToggle.module.css";

type Illumination = "light" | "dark";

export function IlluminationToggle() {
  const [mode, setMode] = useState<Illumination>("light");

  useEffect(() => {
    setMode(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function apply(next: Illumination) {
    try {
      localStorage.setItem("illumination", next);
    } catch {
      // Theme selection still works when storage is unavailable.
    }

    document.documentElement.dataset.theme = next;
    setMode(next);
  }

  return (
    <div className={styles.group} role="group" aria-label="Illumination mode">
      <button
        type="button"
        aria-pressed={mode === "light"}
        onClick={() => apply("light")}
      >
        <span aria-hidden="true">○</span>
        <span className={styles.label}>Brightfield</span>
      </button>
      <button
        type="button"
        aria-pressed={mode === "dark"}
        onClick={() => apply("dark")}
      >
        <span aria-hidden="true">●</span>
        <span className={styles.label}>Darkfield</span>
      </button>
    </div>
  );
}
