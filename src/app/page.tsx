'use client'

import { motion } from 'framer-motion'
import { FiAward, FiShield, FiTarget, FiUsers } from 'react-icons/fi'
import Navbar from './components/layout/Navbar'
import About from './components/sections/About'
import Hero from './components/sections/Hero'

const features = [
  {
    icon: FiShield,
    title: "Proteção Jurídica",
    description: "Blindagem completa para seu negócio com estratégias preventivas e gestão de riscos jurídicos."
  },
  {
    icon: FiTarget,
    title: "Foco em Resultados",
    description: "Soluções práticas e eficientes alinhadas aos objetivos estratégicos do seu empreendimento."
  },
  {
    icon: FiUsers,
    title: "Atendimento Personalizado",
    description: "Relacionamento próximo e comunicação clara em todas as etapas do processo jurídico."
  },
  {
    icon: FiAward,
    title: "Excelência Profissional",
    description: "Equipe especializada com vasta experiência em direito empresarial e inovação."
  }
]

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />

      {/* Seção de Features */}
      <section
        id="features"
        className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-6 md:px-8 lg:px-12"
      >
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6">
              Por que escolher a
              <span className="block font-normal text-[#8E4616] mt-3">
                Farias Klug Advocacia
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Combinamos expertise jurídica com visão empresarial para entregar
              resultados que impulsionam seu negócio para o futuro.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                <div className="relative p-8 lg:p-10 bg-white shadow-lg border border-gray-200 transition-all duration-500 hover:scale-[1.02] hover:shadow-xl">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8E4616]/5 via-[#CEBAA3]/5 to-[#1E2B1A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="mb-6">
                      <feature.icon className="w-14 h-14 text-[#8E4616] transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação */}
      <section id="areas" className="relative py-20 px-6 md:px-8 lg:px-12 bg-[#CEBAA3]/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6">
              Áreas de
              <span className="block font-normal text-[#8E4616] mt-2">
                Atuação
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Expertise especializada nas principais demandas do direito empresarial moderno.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "Direito Societário",
              "Contratos Empresariais",
              "Compliance Corporativo",
              "Propriedade Intelectual",
              "Direito Trabalhista",
              "Recuperação Judicial"
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="p-6 bg-white/80 backdrop-blur-sm border border-gray-200 text-center transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {area}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="relative py-24 px-6 md:px-8 lg:px-12 overflow-hidden bg-white">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-gray-900 mb-6">
              Pronto para proteger e
              <span className="block font-normal text-[#8E4616] mt-3">
                impulsionar seu negócio?
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Entre em contato e descubra como podemos ajudar sua empresa a alcançar
              novos patamares com segurança jurídica e estratégia inovadora.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <button className="px-10 py-4 bg-[#8E4616] hover:bg-[#6B3410] text-white font-medium transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-lg">
                Agendar Consulta
              </button>
              <button className="px-10 py-4 bg-white border border-gray-300 hover:border-gray-400 text-gray-900 font-medium transition-all duration-300 hover:scale-105 active:scale-95 text-lg">
                Conhecer Serviços
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
