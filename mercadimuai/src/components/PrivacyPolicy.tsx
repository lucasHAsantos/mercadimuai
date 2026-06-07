import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

export const PrivacyPolicy = () => (
    <div className="min-h-screen bg-[#050505] text-white py-24 px-4">
        <Helmet>
            <title>Política de Privacidade | MercadimUai</title>
            <meta name="description" content="Política de Privacidade da MercadimUai — saiba como coletamos, usamos e protegemos seus dados pessoais." />
            <meta name="robots" content="noindex, follow" />
            <link rel="canonical" href="https://mercadimuai.com.br/#privacy" />
        </Helmet>
        <div className="max-w-4xl mx-auto">
            <a
                href="#"
                className="inline-flex items-center gap-2 text-[#FF6300] hover:text-orange-400 transition-colors mb-8"
            >
                <ArrowLeft className="w-5 h-5" />
                Voltar
            </a>

            <h1 className="text-5xl md:text-6xl font-bold mb-12 text-[#FF6300]">Política de Privacidade</h1>
        </div>
    </div>
)
