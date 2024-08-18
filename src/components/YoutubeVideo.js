import React from "react"
import styles from "./YoutubeVideo.module.css"

export default function YoutubeVideo({ url }) {
  return (
    <div className={styles.video}>
      <iframe
        src={`https://www.youtube.com/embed/${url}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen=""
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}
