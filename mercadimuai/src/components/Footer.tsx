import { ShoppingCart, MapPin, Phone, Mail, Instagram } from 'lucide-react'

const praVoceLinks = [
    { label: 'Quero ser licenciado', href: 'https://wa.me/5531975426698?text=Olá, gostaria de ser um licenciado MercadimUai' },
    { label: 'Quero no meu condomínio', href: 'https://wa.me/5531975426698?text=Olá, gostaria de colocar o MercadimUai no meu condomínio' },
    { label: 'Vantagens', href: '#vantagens' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Contato', href: '#contato' },
    { label: 'Política de Privacidade', href: '#privacy' },
]

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.55 1c-6.29 0-11.29 5.1-11.29 11.4 0 2.02.53 3.93 1.53 5.64L1 23l5.2-1.36a11.32 11.32 0 0 0 6.35 1.84h.02c6.27 0 11.29-5.1 11.29-11.4 0-2.99-1.18-5.8-3.11-7.95Zm-7.96 16.43h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.22-3.07.8.82-3.01-.24-.38a9.8 9.8 0 0 1-1.49-5.34c0-5.47 4.45-9.93 9.92-9.93 2.65 0 5.13 1.03 6.99 2.9 1.86 1.82 2.9 4.27 2.9 6.9 0 5.48-4.43 9.95-9.88 9.95Zm5.41-7.37c-.29-.15-1.7-.83-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.16.19-.33.22-.62.08-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.14-.19.19-.33.29-.55.1-.22.05-.41-.02-.57-.08-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.15.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.58.68.19 1.3.16 1.79.1.55-.07 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.1-.26-.15-.55-.29Z" />
    </svg>
)

export const Footer = () => (
    <footer className="bg-[#050505] text-white border-t border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-4">

                {/* Coluna esquerda — logo + Pra você */}
                <div>
                    <div className="flex items-center gap-2 mb-8">
                        <div className="relative shrink-0">
                            <ShoppingCart className="w-8 h-8 text-[#FF6300]" strokeWidth={1.7} fill="rgba(255,99,0,0.10)" />
                            <MapPin className="w-4 h-4 text-[#FF6300] absolute -top-2 -right-1" fill="currentColor" />
                        </div>
                        <h2 className="text-2xl font-bold tracking-tight ml-1">
                            Mercadim<span className="text-[#FF6300]">Uai</span>
                        </h2>
                    </div>

                    <h3 className="text-[#FF6300] font-bold italic text-base mb-4">Pra você</h3>
                    <ul className="space-y-2">
                        {praVoceLinks.map(link => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target={link.href.startsWith('http') ? '_blank' : undefined}
                                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                                    className="text-zinc-400 hover:text-white transition-colors text-sm"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Coluna direita — contato + redes sociais */}
                <div>
                    <h3 className="text-[#FF6300] font-bold italic text-base mb-4">Entre em contato:</h3>
                    <ul className="space-y-3 mb-10">
                        <li>
                            <a
                                href="https://wa.me/5531975426698"
                                target="_blank" rel="noreferrer"
                                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                <Phone className="w-4 h-4 text-[#FF6300] shrink-0" />
                                (31) 97542-6698
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:contato@mercadimuai.com.br"
                                className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm"
                            >
                                <Mail className="w-4 h-4 text-[#FF6300] shrink-0" />
                                contato@mercadimuai.com.br
                            </a>
                        </li>
                    </ul>

                    <h3 className="text-[#FF6300] font-bold italic text-base mb-4">Siga o MercadimUai</h3>
                    <div className="flex gap-3">
                        <a
                            href="https://wa.me/5531975426698"
                            target="_blank" rel="noreferrer"
                            aria-label="WhatsApp"
                            className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#FF6300] flex items-center justify-center transition-colors"
                        >
                            <WhatsAppIcon />
                        </a>
                        <a
                            href="https://instagram.com/mercadimuai"
                            target="_blank" rel="noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-[#FF6300] flex items-center justify-center transition-colors"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div className="border-t border-zinc-800 py-6 text-center">
            <p className="text-zinc-600 text-xs">© 2026 MercadimUai. Todos os direitos reservados.</p>
        </div>
    </footer>
)
