import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { memo } from 'react'

interface Props {
  model: string
  numberOfImages: number
}

function Carousel({ model, numberOfImages }: Props) {
  const images = Array.from(
    { length: numberOfImages },
    (_, index) => `/models/${model}/${index}.jpg`
  )

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="w-full h-full md:max-h-screen"
    >
      {images.map((imgSrc, index) => (
        <SwiperSlide key={index}>
          <Image
            src={imgSrc}
            width={600}
            height={400}
            alt={`Imagem ${index + 1} do modelo ${model}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default memo(Carousel)
