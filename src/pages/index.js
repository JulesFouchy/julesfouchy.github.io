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
          Hi! 👋 I am a software engineer, teacher and curious mind.
          <br />
          <br />
          <b>Currently:</b>
          <ul>
            <li>
              👩‍💻 Developing a{" "}
              <a href="https://coollibs.github.io/" target="_blank">
                C++ framework
              </a>{" "}
              for computer graphics software
            </li>
            <li>
              ✏️ Writing a{" "}
              <a
                href="https://julesfouchy.github.io/Learn--Clean-Code-With-Cpp/"
                target="_blank"
              >
                C++ course
              </a>{" "}
              with an emphasis on clean code
            </li>
            <li>
              👀 Looking for projects to contribute to or help get started
            </li>
            <li>
              🎬 Starting a{" "}
              <a
                href="https://www.youtube.com/channel/UCpeT3Q6j8TAGRjW71vMZGYw"
                target="_blank"
              >
                Youtube channel
              </a>
            </li>
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
