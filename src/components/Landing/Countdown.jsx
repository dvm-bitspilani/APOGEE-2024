import React, { useEffect, useRef, useState } from "react";
import * as styles from "@styles/Countdown.module.scss";

const Countdown = () => {
  let count = useRef(null);

  const APOGEE = new Date("April 04, 2024 18:59:59").getTime(),
    [curr, setCurr] = useState(new Date().getTime());

  const [prevDay, setPrevDay] = useState(0),
    [days, setDays] = useState(0);

  const [hrs, setHrs] = useState(
    Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24
  ),
    [prevHr, setPrevHr] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24
    );

  const [prevMin, setPrevMin] = useState(
    Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
  ),
    [mins, setMins] = useState(
      Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
    );

  useEffect(() => {
    setInterval(() => {
      if (days < 0) {
        setDays("00");
        setHrs("00");
        setMins("00");
      } else {
        setCurr(new Date().getTime());
        setDays(Math.floor((APOGEE - curr) / (1000 * 60 * 60 * 24)));
      }
    }, 1000);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [APOGEE]);

  useEffect(() => {
    if (days > 37 || mins > 65 || hrs > 30 || mins < 0) {
      count.style.display = "flex";
    } else {
      count.style.display = "flex";
    }

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days, hrs, mins]);

  useEffect(() => {
    setHrs(Math.floor((APOGEE - curr) / (1000 * 60 * 60)) - days * 24);

    setMins(
      Math.floor((APOGEE - curr) / (1000 * 60)) - days * 24 * 60 - hrs * 60
    );

    hrs < 10 && setHrs((prevHrs) => "0" + prevHrs);
    mins < 10 && setMins((prevMins) => "0" + prevMins);
    days < 10 && setDays((prevDays) => "0" + prevDays);
    document.getElementById("days").style.animation =
      prevDay !== days ? "card-flip 0.6s" : "none";
    document.getElementById("hours").style.animation =
      prevHr !== hrs ? "card-flip 0.6s" : "none";
    document.getElementById("min").style.animation =
      prevMin !== mins ? "card-flip 0.6s" : "none";

    setPrevDay(days);
    setPrevHr(hrs);
    setPrevMin(mins);

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curr, mins , APOGEE]);

  return (
    <div ref={(el) => (count = el)} className={styles.countdown}>
      <div id="days" className={styles.label}>
        <div className={styles.numbers}>{days}</div>
        <div className={styles.labels}>DAYS</div>
      </div>
      <div id="hours" className={styles.label}>
        <div className={styles.numbers}>{hrs}</div>
        <div className={styles.labels}>HOURS</div>
      </div>
      <div id="min" className={styles.label}>
        <div className={styles.numbers}>{mins}</div>
        <div className={styles.labels}>MINS</div>
      </div>
    </div>
  );
}

export default Countdown;