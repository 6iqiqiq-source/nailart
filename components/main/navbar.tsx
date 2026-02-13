"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: "transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.5rem",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Left — Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.08" />
            <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" strokeOpacity="0.15" />
            <path
              d="M12 30V10L28 30V10"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              color: "white",
              letterSpacing: "0.03em",
              fontFamily: "'SUITE Variable', system-ui, sans-serif",
            }}
          >
            Nailart AI
          </span>
        </Link>

        {/* Center — Nav links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2.2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {["Features", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  fontFamily: "'SUITE Variable', system-ui, sans-serif",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA */}
        <Link
          href="#"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "0.55rem 1.35rem",
            background: "white",
            color: "black",
            borderRadius: "8px",
            fontSize: "0.875rem",
            fontWeight: 700,
            letterSpacing: "0.01em",
            textDecoration: "none",
            fontFamily: "'SUITE Variable', system-ui, sans-serif",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Get Started
        </Link>
      </nav>
    </header>
  )
}
