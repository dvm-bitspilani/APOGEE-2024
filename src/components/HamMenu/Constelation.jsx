import { Constelation_SVG } from "./Constelation_SVG";

import * as styles from "@styles/Constelation.module.scss";
import * as hamStyles from "@styles/HamMenu.module.scss";

export default function Constelation() {
  return (
    <div className={`${styles.constelationWrapper} ${hamStyles.menu}`}>
      <Constelation_SVG />
    </div>
  );
}
