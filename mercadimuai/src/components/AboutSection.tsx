import { ShoppingCart, MapPin } from 'lucide-react'

export const AboutSection = () => (
    <section id="modelo" className="py-8 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-48 h-48 bg-[#111] border border-zinc-800 rounded-full flex items-center justify-center p-8 shadow-inner">
                    <ShoppingCart className="w-32 h-32 text-white" />
                    <MapPin className="w-20 h-20 text-[#FF6B00] absolute -top-4 right-8" fill="currentColor" />
                </div>
            </div>
            <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold mb-6 text-white">Minimercados Autônomos</h2>
                <div className="space-y-4 text-lg text-zinc-400 leading-relaxed">
                    <p>
                        O MercadimUai oferece um modelo de negócio inovador e lucrativo no segmento de minimercados autônomos.
                    </p>
                    <p>
                        Com investimento inicial acessível e operação simplificada, o modelo elimina custos com equipe e funciona 24 horas por dia, maximizando as vendas.
                    </p>
                    <p>
                        Além disso, o formato flexível para empresas amplia as oportunidades de atuação no mercado.
                    </p>
                </div>
            </div>
        </div>
    </section>
)
