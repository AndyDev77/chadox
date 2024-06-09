"use client";

import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullColor, temporary]);

  const styles = {
    path: {
      stroke: "#111111",
    },
    trail: {
      stroke: "#eeeeee",
    },
    text: {
      fill: "#111111",
      fontSize: "24px",
    },
  };

  return (
    <section ref={ref} className="section font-primary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row justify-between items-center gap-y-12">
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullBody}
              styles={styles}
              text={`${fullBody}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">PowerDirector</div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={piercing}
              styles={styles}
              text={`${piercing}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">After Effects</div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={fullColor}
              styles={styles}
              text={`${fullColor}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">
              Adobe Premiere Pro
            </div>
          </div>
          <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
            <CircularProgressbar
              strokeWidth={1}
              value={temporary}
              styles={styles}
              text={`${temporary}%`}
            />
            <div className="uppercase font-light tracking-[1.2px] text-center">Canva</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
