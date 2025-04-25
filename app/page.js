import Video from "./components/video";
import Header from "./components/header";
import Footer from "./components/footer";
import BenefitCard from "./components/benefitCard";
import ContactSection from "./components/contactSection";

export default function Home() {
  return (
    <div 
      className="relative grid grid-rows-[2px_1fr_2px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/yaco3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>
  
      <main className="relative z-10 flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white">
        <Header />

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Beneficios de Gestionar tu Patio con <span className="text-blue-600">Yaco YardContainers</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">

              <BenefitCard
                icon="🚀"
                title="Optimización Operativa"
                benefits={[
                  "Control de movimientos en tiempo real",
                  "Reducción de tiempos de espera",
                  "Minimización de errores humanos"
                ]}
                className="bg-gradient-to-br from-gray-900 to-gray-600"
              />

              <BenefitCard
                icon="📱"
                title="Tecnología Integrada"
                benefits={[
                  "Generación de EIR con QR",
                  "Notificaciones en tiempo real",
                  "Acceso remoto 24/7"
                ]}
                className="border-2 border-blue-500"
              />

              <BenefitCard
                icon="📊"
                title="Análisis de Datos"
                benefits={[
                  "Informes detallados",
                  "Toma de decisiones basada en datos",
                  "Mejora continua"
                ]}
                className="bg-gradient-to-br from-gray-600 to-gray-900"
              />

            </div>
          </div>
        </section>

        {/* New Video Grid Section */}
        <section className="relative z-10 w-full max-w-6xl row-start-3 px-4 sm:px-0" id="videos">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
            Descubre cómo funciona
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Video
               videoId="6u6uXpFyyys"
               title="Conoce Yaco YardContainers"
               description="Conoce la aplicación y funcionalidades principales de Yaco YardContainers."
               className="custom-class-if-needed"
             />
            <Video
              videoId="oOoLk0myvko"
              title="Flujo ideal de la aplicación"
              description="Describe el flujo ideal de la aplicación Yaco YardContainers."
              className="custom-class-if-needed"
            />
            <Video
              videoId="MVVR8v5-yfk"
              title="Prefacturando en YACO"
              description="Describe las opciones de prefacturación."
              className="custom-class-if-needed"
            />
          </div>
        </section>
      
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
