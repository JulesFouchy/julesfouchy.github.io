import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">
          {siteConfig.tagline} <br />
        </p>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout title="" description="">
      <HomepageHeader />
      <main>
        <div className={styles.centered}>
          Hi! 👋 I am a software engineer, teacher and curious mind
          <br />
          <br />
          <b>Currently:</b>
          <ul>
            <li>
              👩‍💻 Developing Coollab, a node-based software to create visual
              effects and generative-art, similar to TouchDesigner
              <br />
              <a href="https://youtu.be/jsjkjCQCPno">Check out the trailer !</a>
            </li>
            <li>🤖 Learning Godot</li>
          </ul>
          <b>Interested in:</b>
          <ul>
            <li>🖼️ Computer graphics</li>
            <li>🎨 Generative art</li>
            <li>📐 Mathematics</li>
            <li>🔨 Software architecture</li>
          </ul>
          <b>I love:</b>
          <ul>
            <li>💖 Open Source</li>
            <li>🎁 Sharing knowledge</li>
            <li>🤗 Making people happy</li>
            <li>💃 Dancing</li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}
