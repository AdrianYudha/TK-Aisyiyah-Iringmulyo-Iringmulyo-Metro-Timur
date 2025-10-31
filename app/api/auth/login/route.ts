import { type NextRequest, NextResponse } from "next/server"

// Mock user data - in real implementation, this would come from a database or config
const mockUsers = [
  {
    id: "1",
    email: "admin@tkaisyiyah.ac.id",
    full_name: "Administrator TK Aisyiyah",
    role: "admin",
    password: "admin123" // In real implementation, this would be a hashed password
  },
  {
    id: "2",
    email: "admin2@tkaisyiyah.ac.id",
    full_name: "Administrator 2 TK Aisyiyah",
    role: "admin",
    password: "admin456" // Alternative admin account
  },
  {
    id: "3",
    email: "user@example.com", 
    full_name: "John Doe",
    role: "registrant",
    password: "user123" // In real implementation, this would be a hashed password
  },
  {
    id: "4",
    email: "parent@example.com", 
    full_name: "Parent Example",
    role: "registrant",
    password: "parent123" // Example parent account
  }
]

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json({ message: "Email dan password harus diisi" }, { status: 400 })
    }

    // Find user by email
    const user = mockUsers.find(u => u.email === email)

    if (!user) {
      console.log(`Login failed: User with email ${email} not found`)
      return NextResponse.json({ message: "Email atau password salah" }, { status: 401 })
    }

    // Check password (in real implementation, this would involve password hashing comparison)
    if (user.password !== password) {
      console.log(`Login failed: Incorrect password for user ${email}`)
      return NextResponse.json({ message: "Email atau password salah" }, { status: 401 })
    }

    console.log(`Login successful: User ${email} logged in with role ${user.role}`)

    // Generate a simple token (in real implementation, this would be a JWT)
    const token = `token_${Date.now()}_${user.id}`

    return NextResponse.json(
      {
        message: "Login berhasil",
        token: token,
        user: {
          id: user.id,
          email: user.email,
          full_name: user.full_name,
          role: user.role
        }
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("[v0] Login error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}
