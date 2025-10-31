import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ProgramPendidikan() {
  const programs = [
    {
      title: "Pendidikan Agama Islam",
      description: "Mengenalkan dasar-dasar agama Islam melalui kegiatan sehari-hari dan pembiasaan ibadah sederhana",
      icon: "🌙",
      color: "primary"
    },
    {
      title: "Bahasa & Literasi",
      description: "Membangun dasar kemampuan membaca, menulis, dan berkomunikasi yang efektif",
      icon: "📚",
      color: "accent"
    },
    {
      title: "Matematika Dini",
      description: "Mengenalkan konsep angka, bentuk, dan pola melalui permainan edukatif",
      icon: "🔢",
      color: "primary"
    },
    {
      title: "Seni & Kreativitas",
      description: "Mengembangkan ekspresi kreatif melalui seni lukis, tari, dan musik",
      icon: "🎨",
      color: "accent"
    },
    {
      title: "Motorik Halus & Kasar",
      description: "Mengembangkan koordinasi gerak melalui permainan dan kegiatan fisik",
      icon: "🏃",
      color: "primary"
    },
    {
      title: "Sosial Emosional",
      description: "Membentuk karakter dan kemampuan sosial anak melalui interaksi sehari-hari",
      icon: "🤝",
      color: "accent"
    }
  ]

  const ageGroups = [
    {
      name: "Kelompok A",
      age: "4 - 5 Tahun",
      focus: "Pengenalan dasar, sosialisasi, dan pembentukan kebiasaan baik"
    },
    {
      name: "Kelompok B",
      age: "5 - 6 Tahun",
      focus: "Peningkatan kemandirian, persiapan masuk SD, dan pengembangan kemampuan dasar"
    }
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Program Pendidikan</h1>
          <p className="text-primary-foreground/80 mt-2">Kurikulum dan kegiatan pendidikan di TK Aisyiyah</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 flex-1">
        <div className="container mx-auto px-4">
          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Kurikulum Terpadu</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              Kami menggunakan pendekatan terpadu yang menggabungkan pendidikan agama, 
              kemandirian, dan pengembangan kemampuan dasar anak usia dini.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {programs.map((program, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-primary/10 flex flex-col h-full"
                >
                  <div className="relative w-full h-32 overflow-hidden">
                    <Image 
                      src={
                        program.title === "Pendidikan Agama Islam" ? "https://images.unsplash.com/photo-1558981041-61017c1357b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" :
                        program.title === "Bahasa & Literasi" ? "https://images.unsplash.com/photo-1559827260-43ab5575e46c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" :
                        program.title === "Matematika Dini" ? "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" :
                        program.title === "Seni & Kreativitas" ? "https://images.unsplash.com/photo-1579546929662-c1d7e92a4c78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" :
                        program.title === "Motorik Halus & Kasar" ? "https://images.unsplash.com/photo-1542744094-2d8062d9d836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" :
                        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80"
                      }
                      alt={program.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <CardHeader className={`p-0 ${program.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                      <div className="flex items-center gap-4">
                        <div className={`text-3xl ${program.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                          {program.icon}
                        </div>
                        <CardTitle className={`text-lg ${program.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                          {program.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 flex-grow">
                      <p className="text-muted-foreground">{program.description}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Kelompok Usia</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {ageGroups.map((group, index) => (
                <Card 
                  key={index} 
                  className={`border-l-4 ${index === 0 ? 'border-l-primary' : 'border-l-accent'}`}
                >
                  <CardHeader>
                    <CardTitle className={index === 0 ? 'text-primary' : 'text-accent'}>
                      {group.name}
                    </CardTitle>
                    <p className="text-2xl font-bold text-foreground">{group.age}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{group.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary text-center">Metode Pembelajaran</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Bermain Sambil Belajar"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">Bermain Sambil Belajar</CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Pembelajaran dilakukan melalui permainan edukatif yang menyenangkan 
                    untuk menumbuhkan minat belajar anak.
                  </p>
                </div>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Project Based Learning"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">Project Based Learning</CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Anak-anak belajar melalui proyek-proyek sederhana yang melibatkan 
                    eksplorasi dan penemuan.
                  </p>
                </div>
              </Card>
              <Card className="hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-40 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80" 
                    alt="Pendekatan Individual"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <CardTitle className="text-primary mb-4 text-xl">Pendekatan Individual</CardTitle>
                  <p className="text-muted-foreground flex-grow">
                    Setiap anak memiliki kecepatan belajar yang berbeda, 
                    kami memberikan pendekatan individual sesuai kebutuhan.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}