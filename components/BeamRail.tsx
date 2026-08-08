"use client";

import { useEffect, useRef } from "react";
import styles from "./BeamRail.module.css";

const stations = [
  { x: 0, label: "Source" },
  { x: 373, label: "Sample" },
  { x: 747, label: "Objective" },
  { x: 1120, label: "Detector" },
];

export function BeamRail() {
  const beamRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) return;

    let frame = 0;

    function updateBeam() {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      const x = Math.min(Math.max(progress, 0), 1) * 1120;
      beamRef.current?.setAttribute("x2", String(x));
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(updateBeam);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    updateBeam();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className={styles.rail} aria-hidden="true">
      <div className={`wrap ${styles.inner}`}>
        <svg
          className={styles.svg}
          viewBox="0 0 1120 24"
          preserveAspectRatio="none"
          focusable="false"
        >
          <line x1="0" y1="12" x2="1120" y2="12" className={styles.rule} />
          <line
            ref={beamRef}
            x1="0"
            y1="12"
            x2="0"
            y2="12"
            className={styles.beam}
          />
          {stations.map((station) => (
            <circle
              key={station.label}
              cx={station.x}
              cy="12"
              r="4"
              className={styles.node}
            />
          ))}
        </svg>
        <div className={styles.labels}>
          {stations.map((station) => (
            <span key={station.label}>{station.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
