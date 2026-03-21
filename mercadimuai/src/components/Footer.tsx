import { ShoppingCart } from 'lucide-react'

export const Footer = () => (
    <footer className="bg-[#050505] text-white py-16 px-4 border-t-8 border-[#FF6B00]">
        <div className="w-full max-w-none mx-auto flex flex-row justify-between items-center gap-8 flex-nowrap overflow-x-auto px-4 md:px-8 lg:px-12">
            <div className="flex items-center gap-2">
                <ShoppingCart className="w-8 h-8 text-[#FF6B00]" />
                <h2 className="text-3xl font-bold tracking-tight">
                    Mercadim<span className="text-[#FF6B00]">Uai</span>
                </h2>
            </div>

            <div className="flex flex-row gap-8 text-zinc-400 text-lg flex-nowrap">
                <div className="flex items-center gap-2">
                    <span className="text-[#FF6B00] font-bold">Contato {'>'}</span> (31) 97542-6698
                </div>
                <a
                    href="mailto:guilherme@mercadimuai.com.br"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                >
                    <span className="text-[#FF6B00] font-bold">E-mail {'>'}</span> guilherme@mercadimuai.com.br
                </a>
                <a
                    href="#privacy"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                >
                    <span className="text-[#FF6B00] font-bold">Legal {'>'}</span> Política de Privacidade
                </a>
            </div>
        </div>
    </footer>
)
