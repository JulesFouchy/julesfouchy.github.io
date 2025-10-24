import React from "react"
import styles from "./IFrame.module.css"

export default function IFrame({ url, style }) {
  return (
    <div className={styles.content} style={style}>
      <iframe src={url} title="Some IFrame"></iframe>
    </div>
  )
}
