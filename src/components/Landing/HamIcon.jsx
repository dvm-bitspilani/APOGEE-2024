import * as ham from "@styles/Ham.module.scss";
import { useSnapshot } from "valtio";
import state from "@components/state";


export function HamIcon() {
  const snap = useSnapshot(state);

  const l1 = document.querySelector(`.${ham.hamIconLine1}`);
  const l2 = document.querySelector(`.${ham.hamIconLine2}`);
  const l3 = document.querySelector(`.${ham.hamIconLine3}`);

  if (snap.isHamOpen) {
    l1?.classList.add(ham.active);
    l2?.classList.add(ham.active);
    l3?.classList.add(ham.active);
  } else {
    l1?.classList.remove(ham.active);
    l2?.classList.remove(ham.active);
    l3?.classList.remove(ham.active);
  }

  return (
    <div className={ham.hamIcon}>
      <div className={ham.hamIconLine1}></div>
      <div className={ham.hamIconLine2}></div>
      <div className={ham.hamIconLine3}></div>
    </div>
  );
}
