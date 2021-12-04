import React from 'react'
import styles from './IFrame.module.css'

export default function IFrame({url}) {
  return (
    <div className={styles.content}>
        <iframe
            src={url}
            title="Some IFrame"
        >
        </iframe>
    </div>
  );
}
