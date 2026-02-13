"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"

export function Navbar() {
  const pathname = usePathname()
  const isAuth = pathname === "/auth"
  const isDashboard = pathname === "/dashboard"
  const { user, signOut, loading } = useAuth()

  if (isDashboard) return null

  if (isAuth) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-[1200px] mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
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
            <span className="text-base font-semibold text-white tracking-[0.03em]">
              Nailart AI
            </span>
          </Link>
        </nav>
      </header>
    )
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <nav className="max-w-[1200px] mx-auto px-6 h-16 grid grid-cols-3 items-center">
        {/* Left — Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
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
          <span className="text-base font-semibold text-white tracking-[0.03em]">
            Nailart AI
          </span>
        </Link>

        {/* Center — Nav links */}
        <ul className="flex items-center justify-center gap-[2.2rem] list-none m-0 p-0">
          {["Features", "Pricing", "Contact"].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-[0.9rem] font-medium text-white/60 no-underline tracking-[0.01em] transition-colors duration-150 hover:text-white"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right — CTA */}
        <div className={`flex justify-end ${loading ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {user ? (
            <button
              onClick={signOut}
              className="inline-flex items-center py-[0.55rem] px-[1.35rem] bg-white/10 text-white border border-white/20 rounded-lg text-sm font-bold tracking-[0.01em] transition-opacity duration-150 hover:opacity-85 cursor-pointer"
            >
              Log out
            </button>
          ) : (
            <Link
              href="/auth"
              className="inline-flex items-center py-[0.55rem] px-[1.35rem] bg-white text-black rounded-lg text-sm font-bold tracking-[0.01em] no-underline transition-opacity duration-150 hover:opacity-85"
            >
              Get Started
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
