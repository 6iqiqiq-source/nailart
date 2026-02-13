"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"

export function DashboardNavbar() {
  const { user, signOut } = useAuth()
  const [popoverOpen, setPopoverOpen] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const displayName = user?.user_metadata?.full_name ?? user?.email ?? ""
  const email = user?.email ?? ""
  const avatarUrl = user?.user_metadata?.avatar_url as string | undefined

  function handleMouseEnter() {
    if (hideTimer.current) clearTimeout(hideTimer.current)
    setPopoverOpen(true)
  }

  function handleMouseLeave() {
    hideTimer.current = setTimeout(() => setPopoverOpen(false), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo — floating button */}
        <Link
          href="/dashboard"
          className="pointer-events-auto flex items-center gap-2.5 no-underline px-3 py-2 rounded-xl backdrop-blur-md border border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.4)]"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <svg width="26" height="26" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="40" height="40" rx="10" fill="white" fillOpacity="0.08" />
            <rect x="0.5" y="0.5" width="39" height="39" rx="9.5" stroke="white" strokeOpacity="0.15" />
            <path d="M12 30V10L28 30V10" stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold text-white/80 tracking-[0.03em]">Nailart AI</span>
        </Link>

        {/* Profile popover — floating button */}
        <div
          className="pointer-events-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Avatar trigger */}
          <button
            className="flex items-center justify-center w-9 h-9 rounded-xl backdrop-blur-md border border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer transition-opacity duration-150 hover:opacity-85"
            style={{ background: "rgba(255,255,255,0.04)" }}
            aria-label="Profile"
          >
            {avatarUrl ? (
              <img src={avatarUrl} alt={displayName} className="w-full h-full object-cover" />
            ) : (
              <span className="text-sm font-semibold text-white/70">
                {(displayName[0] ?? "U").toUpperCase()}
              </span>
            )}
          </button>

          {/* Hover popover */}
          {popoverOpen && (
            <div
              className="absolute top-[calc(100%+8px)] right-0 min-w-[192px] rounded-2xl border border-white/[0.08] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden"
              style={{ background: "rgba(30,30,30,0.92)" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* User info */}
              <div className="flex items-center gap-2.5 px-3.5 py-3 border-b border-white/[0.06]">
                {avatarUrl ? (
                  <img src={avatarUrl} alt={displayName} className="w-7 h-7 rounded-full flex-shrink-0" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-semibold text-white/70">
                      {(displayName[0] ?? "U").toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="min-w-0">
                  {displayName && (
                    <p className="text-[0.8rem] font-semibold text-white/80 truncate leading-tight">
                      {displayName}
                    </p>
                  )}
                  {email && (
                    <p className="text-[0.72rem] text-white/35 truncate leading-tight mt-0.5">{email}</p>
                  )}
                </div>
              </div>

              {/* Sign out */}
              <button
                onClick={signOut}
                className="w-full flex items-center gap-2 px-3.5 py-2.5 text-[0.82rem] text-white/50 hover:text-white/80 hover:bg-white/[0.04] transition-colors duration-100 cursor-pointer"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                </svg>
                Sign out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
