import { ShoppingCart, MapPin } from 'lucide-react'

export const HeroSection = () => (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#050505] text-white px-4 py-8 md:py-20">
        <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=1920&auto=format&fit=crop')",
                backgroundSize: 'cover',
                backgroundPosition: 'right center',
                filter: 'grayscale(100%) brightness(0.4) contrast(1.2)',
                opacity: 0.15,
            }}
        />

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
                <div className="relative">
                    <ShoppingCart className="w-12 h-12 text-[#FF6B00]" strokeWidth={2.5} />
                    <MapPin className="w-6 h-6 text-[#FF6B00] absolute -top-3 -right-2" fill="currentColor" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    <span className="text-white">Mercadim</span>
                    <span className="text-[#FF6B00]">Uai</span>
                </h1>
            </div>

            <div className="bg-[#FF6B00] text-black font-bold px-4 py-1 text-sm tracking-widest rounded-sm mb-12 uppercase">
                Mercado Autônomo • 24H
            </div>

            <h2 className="text-3xl md:text-5xl font-light leading-tight mb-8">
                Invista no seu futuro com um negócio autônomo, inteligente e que fatura{' '}
                <span className="font-bold text-[#FF6B00]">24 horas por dia.</span>
            </h2>

            <p className="text-xl md:text-2xl text-zinc-300 font-light mb-4 md:mb-12">
                Seu mercadim, seu lucro, do seu jeito. <strong className="text-white font-bold">Uai!</strong>
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                    href="https://wa.me/5531975426698?text=Olá, gostaria de ser um licenciado MercadimUai"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#FF6B00] hover:bg-[#e56000] transition-colors text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-[#FF6B00]/20"
                >
                    Quero ser um licenciado
                </a>
                <a
                    href="https://wa.me/5531975426698?text=Olá, gostaria de colocar o MercadimUai no meu condomínio"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#1f2937] text-white hover:bg-[#374151] transition-colors px-8 py-3 rounded-full font-bold text-lg shadow-lg shadow-black/30"
                >
                    Quero no meu condomínio
                </a>
            </div>
        </div>

        <a
            href="https://wa.me/5531975426698"
            target="_blank"
            rel="noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] shadow-lg shadow-[#25D366]/40 hover:bg-[#1ebe5a] text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
            aria-label="WhatsApp"
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8">
                <path fill="currentColor" d="M20.52 3.48A11.8 11.8 0 0 0 12.55 1c-6.29 0-11.29 5.1-11.29 11.4 0 2.02.53 3.93 1.53 5.64L1 23l5.2-1.36a11.32 11.32 0 0 0 6.35 1.84h.02c6.27 0 11.29-5.1 11.29-11.4 0-2.99-1.18-5.8-3.11-7.95Zm-7.96 16.43h-.01a9.92 9.92 0 0 1-5.05-1.38l-.36-.22-3.07.8.82-3.01-.24-.38a9.8 9.8 0 0 1-1.49-5.34c0-5.47 4.45-9.93 9.92-9.93 2.65 0 5.13 1.03 6.99 2.9 1.86 1.82 2.9 4.27 2.9 6.9 0 5.48-4.43 9.95-9.88 9.95Zm5.41-7.37c-.29-.15-1.7-.83-1.96-.93-.26-.1-.45-.14-.64.14-.19.29-.74.93-.9 1.12-.16.19-.33.22-.62.08-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.33.44-.5.14-.19.19-.33.29-.55.1-.22.05-.41-.02-.57-.08-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.43 0 1.42 1.03 2.79 1.17 2.98.15.19 2.02 3.08 4.9 4.32.68.29 1.21.46 1.62.58.68.19 1.3.16 1.79.1.55-.07 1.7-.69 1.94-1.37.24-.68.24-1.26.17-1.37-.07-.1-.26-.15-.55-.29Z" />
            </svg>
        </a>
    </section>
)
