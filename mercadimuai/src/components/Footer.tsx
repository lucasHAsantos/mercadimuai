import { ShoppingCart, Phone, Mail, FileText } from 'lucide-react'

export const Footer = () => (
    <footer className="bg-[#050505] text-white border-t-8 border-[#FF6B00]">
        {/* Desktop Layout */}
        <div className="hidden md:block py-16 px-4 md:px-8 lg:px-12">
            <div className="w-full max-w-none mx-auto flex flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <ShoppingCart className="w-8 h-8 text-[#FF6B00]" />
                    <h2 className="text-3xl font-bold tracking-tight">
                        Mercadim<span className="text-[#FF6B00]">Uai</span>
                    </h2>
                </div>

                <div className="flex flex-row gap-8 text-zinc-400 text-lg">
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
        </div>

        {/* Mobile Layout - Modern Card Grid */}
        <div className="md:hidden py-12 px-4">
            <div className="flex items-center gap-2 mb-8">
                <ShoppingCart className="w-6 h-6 text-[#FF6B00]" />
                <h2 className="text-2xl font-bold tracking-tight">
                    Mercadim<span className="text-[#FF6B00]">Uai</span>
                </h2>
            </div>

            {/* Contact Cards Grid */}
            <div className="space-y-3">
                <a
                    href="https://wa.me/5531975426698"
                    target="_blank"
                    rel="noreferrer"
                    className="block bg-gradient-to-r from-[#FF6B00] to-[#e56000] rounded-xl p-4 hover:shadow-lg hover:shadow-[#FF6B00]/30 transition-all duration-300 group"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-black/60 text-xs font-medium uppercase tracking-wider">WhatsApp/Contato</p>
                            <p className="text-black font-bold text-lg mt-1">(31) 97542-6698</p>
                        </div>
                        <Phone className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
                    </div>
                </a>

                <a
                    href="mailto:guilherme@mercadimuai.com.br"
                    className="block bg-gradient-to-r from-[#1f2937] to-[#111827] rounded-xl p-4 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 group border border-[#FF6B00]/20"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">E-mail</p>
                            <p className="text-white font-bold text-sm mt-1 break-all">guilherme@mercadimuai.com.br</p>
                        </div>
                        <Mail className="w-6 h-6 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                    </div>
                </a>

                <a
                    href="#privacy"
                    className="block bg-gradient-to-r from-[#1f2937] to-[#111827] rounded-xl p-4 hover:shadow-lg hover:shadow-white/5 transition-all duration-300 group border border-[#FF6B00]/20"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-zinc-400 text-xs font-medium uppercase tracking-wider">Legal</p>
                            <p className="text-white font-bold text-lg mt-1">Política de Privacidade</p>
                        </div>
                        <FileText className="w-6 h-6 text-[#FF6B00] group-hover:scale-110 transition-transform" />
                    </div>
                </a>
            </div>

            <p className="text-zinc-600 text-xs text-center mt-8 pt-6 border-t border-zinc-800">
                © 2026 MercadimUai. Todos os direitos reservados.
            </p>
        </div>
    </footer>
)
