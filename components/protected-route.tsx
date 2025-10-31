"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface ProtectedRouteProps {
  children: React.ReactNode
  requiredRole?: "admin" | "registrant"
}

export function ProtectedRoute({ children, requiredRole }: ProtectedRouteProps) {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = () => {
      const userStr = requiredRole === "admin" ? localStorage.getItem("adminUser") : localStorage.getItem("user")

      if (!userStr) {
        router.push(requiredRole === "admin" ? "/admin/login" : "/login")
        return
      }

      const user = JSON.parse(userStr)

      if (requiredRole && user.role !== requiredRole) {
        router.push("/")
        return
      }

      setIsAuthorized(true)
      setLoading(false)
    }

    checkAuth()
  }, [router, requiredRole])

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Memuat...</div>
  }

  if (!isAuthorized) {
    return null
  }

  return <>{children}</>
}
