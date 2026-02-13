"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { DashboardNavbar } from "@/components/dashboard/navbar"
import { PromptArea } from "@/components/dashboard/PromptArea"

export default function DashboardPage() {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push("/auth")
        }
    }, [user, loading, router])

    if (loading || !user) {
        return (
            <div
                className="min-h-screen flex items-center justify-center"
                style={{ backgroundColor: "#181818" }}
            >
                <div className="w-5 h-5 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
            </div>
        )
    }

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: "#181818" }}>
            {/* Checkered grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            <DashboardNavbar />
            <PromptArea />
        </div>
    )
}
