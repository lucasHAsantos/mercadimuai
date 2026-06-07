export const VideoSection = () => (
    <section className="relative bg-white py-20 px-4 overflow-hidden">
        {/* Orange corner decoration top-right */}
        <div
            className="hidden sm:block absolute top-0 right-0 w-64 h-64 pointer-events-none"
            style={{
                background: 'linear-gradient(225deg, #FF6300 0%, #FF6300 40%, transparent 70%)',
                borderRadius: '0 0 0 100%',
            }}
        />
        {/* Orange corner decoration bottom-left */}
        <div
            className="hidden sm:block absolute bottom-0 left-0 w-40 h-40 pointer-events-none"
            style={{
                background: 'linear-gradient(45deg, #FF6300 0%, #FF6300 40%, transparent 70%)',
                borderRadius: '0 100% 0 0',
            }}
        />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#FF6300] mb-10">
                Conheça o MercadimUai
            </h2>
            <div
                className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-zinc-200"
                style={{ paddingBottom: '56.25%' }}
            >
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/cqTKp-G6o9w?rel=0&modestbranding=1"
                    title="Conheça o MercadimUai"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>
        </div>
    </section>
)
