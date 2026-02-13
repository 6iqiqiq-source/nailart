"use client"

import { useAuth } from "@/contexts/AuthContext"

export default function AuthPage() {
  const { signInWithGoogle, loading } = useAuth()

  return (
    <main className="relative min-h-screen bg-black overflow-hidden flex items-center justify-center px-6">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-[420px] rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl px-10 py-12 flex flex-col items-center text-center"
        style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset" }}
      >
        {/* Heading */}
        <h1 className="text-[1.75rem] font-extrabold leading-[1.2] tracking-[-0.03em] text-white mb-3">
          Get started
        </h1>
        <p className="text-[0.9rem] text-white/45 leading-[1.7] mb-10 max-w-[300px]">
          Sign in to generate AI-powered YouTube thumbnails that actually get clicks.
        </p>

        {/* Google Sign-in Button */}
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 py-[0.85rem] px-6 rounded-lg bg-white text-black text-[0.925rem] font-bold tracking-[0.01em] cursor-pointer transition-opacity duration-150 hover:opacity-85 active:opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Google Icon */}
          <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8055.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5836-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2822-1.71V4.9582H.9574C.3477 6.1731 0 7.5477 0 9s.3477 2.8268.9574 4.0418L3.964 10.71z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9574 4.9582L3.964 7.29C4.6718 5.1631 6.656 3.5795 9 3.5795z"
              fill="#EA4335"
            />
          </svg>
          Continue with Google
        </button>

        {/* Terms */}
        <p className="mt-8 text-[0.78rem] text-white/25 leading-[1.6]">
          By continuing, you agree to our{" "}
          <span className="text-white/45 underline underline-offset-2 cursor-pointer">Terms of Service</span>
          {" "}and{" "}
          <span className="text-white/45 underline underline-offset-2 cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </main>
  )
}
