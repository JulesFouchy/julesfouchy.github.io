import React from "react"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

export default function Image({ image_src }) {
  const { siteConfig } = useDocusaurusContext()

  return <img src={`${siteConfig.baseUrl}${image_src}`}></img>
}
