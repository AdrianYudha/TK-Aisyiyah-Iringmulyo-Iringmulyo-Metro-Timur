"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ConfirmEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("Memproses konfirmasi email...")
  const [error, setError] = useState("")

  useEffect(() => {
    const confirmEmail = async () => {
      try {
        const token = searchParams.get("token")
        const type = searchParams.get("type")

        if (!token || type !== "email") {
          setError("Link konfirmasi tidak valid")
          setLoading(false)
          return
        }

        // Proses konfirmasi email
        // Redirect ke login setelah beberapa detik
        setMessage("Email Anda berhasil dikonfirmasi! Silakan login dengan akun Anda.")
        setTimeout(() => {
          router.push("/login")
        }, 3000)
      } catch (err) {
        setError("Terjadi kesalahan saat mengkonfirmasi email")
        setLoading(false)
      }
    }

    confirmEmail()
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4 max-w-md">
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-primary">Konfirmasi Email</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              {loading && (
                <div className="space-y-4">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="text-muted-foreground">{message}</p>
                </div>
              )}

              {error && (
                <div className="space-y-4">
                  <p className="text-destructive font-semibold">{error}</p>
                  <Button onClick={() => router.push("/login")} className="w-full">
                    Kembali ke Login
                  </Button>
                </div>
              )}

              {!loading && !error && (
                <div className="space-y-4">
                  <p className="text-green-600 font-semibold">{message}</p>
                  <p className="text-sm text-muted-foreground">Anda akan diarahkan ke halaman login...</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
