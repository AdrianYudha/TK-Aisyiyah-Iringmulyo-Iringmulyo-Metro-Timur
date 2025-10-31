"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")
  const [email, setEmail] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccess("")
    setLoading(true)

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.message || "Gagal mengirim link reset password")
        setLoading(false)
        return
      }

      setSuccess(data.message)
      setEmail("")
    } catch (err) {
      setError("Terjadi kesalahan. Silakan coba lagi.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 max-w-md">
          <h1 className="text-3xl font-bold mb-8 text-center text-primary">Lupa Password?</h1>

          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Reset Password</CardTitle>
            </CardHeader>
            <CardContent>
              {error && <div className="mb-4 p-4 bg-destructive/10 text-destructive rounded-lg text-sm">{error}</div>}
              {success && <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg text-sm">{success}</div>}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={loading}>
                  {loading ? "Mengirim..." : "Kirim Link Reset"}
                </Button>
              </form>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Ingat password Anda?{" "}
                <Link href="/login" className="text-primary font-semibold hover:underline">
                  Masuk di sini
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
