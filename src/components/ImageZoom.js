import React, { useState, useEffect } from "react"

function disableScrolling() {
  const x = window.scrollX
  const y = window.scrollY
  window.onscroll = () => {
    window.scrollTo(x, y)
  }
}

function enableScrolling() {
  window.onscroll = () => {}
}

export default function ({ src, alt, style, ...props }) {
  const [isOpen, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  const open = () => setIsOpen(true)

  const close = () => {
    setVisible(false)
    setTimeout(() => {
      setIsOpen(false)
    }, 300)
  }

  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setVisible(true))
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === "Escape") close()
    }

    document.addEventListener("keydown", handleKeyDown)
    disableScrolling()

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      enableScrolling()
    }
  }, [isOpen])

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: "zoom-in", ...style }}
        onClick={open}
        {...props}
      />

      {isOpen && (
        <div
          onClick={close}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            cursor: visible && "zoom-out",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <img
            src={src}
            alt={alt}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              boxShadow: "0 0 20px rgba(0,0,0,0.5)",
              transform: visible ? "scale(1)" : "scale(0.95)",
              transition: "transform 0.3s ease, opacity 0.3s ease",
            }}
          />
        </div>
      )}
    </>
  )
}
