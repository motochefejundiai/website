function Videos() {
  return (
    <section className="relative flex flex-wrap h-[80vh] z-[2]">
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
      {[
        {
          src: '/videos/hero-1.mp4',
          type: 'video/mp4',
          alt: 'Descrição do vídeo da bicicleta no lago'
        },
        {
          src: '/videos/hero-2.mp4',
          type: 'video/mp4',
          alt: 'Descrição do vídeo da fachada'
        }
        // {
        //   src: '/videos/hero-3.mp4',
        //   type: 'video/mp4',
        //   alt: 'Descrição do vídeo do lago'
        // }
      ].map((video, index) => (
        <div key={index} className={`relative w-full md:w-1/2 h-1/2 md:h-full`}>
          <video
            preload="metadata"
            muted
            loop
            autoPlay
            playsInline
            className="h-full w-full object-cover object-center"
            aria-label={video.alt}
          >
            <source src={video.src} />O seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      ))}
    </section>
  )
}

export default Videos
