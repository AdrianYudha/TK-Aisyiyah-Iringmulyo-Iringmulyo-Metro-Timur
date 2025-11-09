import { type NextRequest, NextResponse } from "next/server"

// Mock admin user data - in real implementation, this would come from a database or config
const mockAdminUsers = [
  {
    id: "admin_1",
    email: "admin@tk.ac.id",
    full_name: "Administrator TK Aisyiyah",
    role: "admin",
    password: "admin" // In real implementation, this would be a hashed password
  },
  {
    id: "admin_2",
    email: "admin@tkaisyiyah.ac.id",
    full_name: "Administrator TK Aisyiyah",
    role: "admin",
    password: "admin123" // In real implementation, this would be a hashed password
  },
  {
    id: "admin_3",
    email: "admin2@tkaisyiyah.ac.id",
    full_name: "Administrator 2 TK Aisyiyah",
    role: "admin",
    password: "admin456" // Alternative admin account
  }
]

export async function GET(request: NextRequest) {
  try {
    console.log("Debug: Available admin users:", mockAdminUsers.map(u => ({ 
      email: u.email, 
      password: u.password,
      role: u.role 
    })))
    return NextResponse.json({
      message: "Debug: Available admin users",
      users: mockAdminUsers.map(u => ({ 
        email: u.email, 
        role: u.role 
      }))
    })
  } catch (error) {
    console.error("[v0] Debug endpoint error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    console.log("Debug: Received login request with email:", email)
    console.log("Debug: mockAdminUsers:", mockAdminUsers.map(u => ({ email: u.email, role: u.role })))

    if (!email || !password) {
      console.log("Debug: Missing email or password")
      return NextResponse.json({ message: "Email dan password harus diisi" }, { status: 400 })
    }

    // Find admin user by email
    const user = mockAdminUsers.find(u => u.email === email)

    if (!user) {
      console.log(`Debug: No user found with email ${email}`)
      console.log("Available emails:", mockAdminUsers.map(u => u.email))
      return NextResponse.json({ message: "Email atau password salah" }, { status: 401 })
    }

    console.log("Debug: Found user:", { email: user.email, role: user.role })

    if (user.role !== "admin") {
      console.log(`Debug: User with email ${email} is not an admin, role: ${user.role}`)
      return NextResponse.json({ message: "Akses ditolak. Anda bukan admin." }, { status: 403 })
    }

    // Check password (in real implementation, this would involve password hashing comparison)
    if (user.password !== password) {
      console.log(`Debug: Password mismatch for user ${email}`)
      console.log(`Expected: ${user.password}, Received: ${password}`)
      return NextResponse.json({ message: "Email atau password salah" }, { status: 401 })
    }

    console.log(`Debug: Login successful for user ${email}`)

    // Generate a simple token (in real implementation, this would be a JWT)
    const token = `admin_token_${Date.now()}_${user.id}`

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
    console.error("[v0] Admin login error:", error)
    return NextResponse.json({ message: "Terjadi kesalahan server" }, { status: 500 })
  }
}