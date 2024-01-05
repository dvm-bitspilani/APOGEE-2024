import React from 'react'
import * as styles from "@styles/HUD.module.scss"

export function Hud() {
  return (
    <div className={styles.wrapper}>
      <img className={styles.lefthelm} src="/images/Left helm.png" alt="left helm" />
      <img className={styles.righthelm} src="/images/Right helm.png" alt="right helm" />
    </div>
  )
}
