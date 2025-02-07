'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { products } from '@/constants/scooters'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle
} from '@/components/ui/dialog'
import Carousel from './carousel'
import { Product } from '@/types/products'
import Link from 'next/link'
import { whatsapp } from '@/constants/links'

function Models() {
  const [selectedModel, setSelectedModel] = useState<Product | null>(null)

  return (
    <section id="modelos" className="p-10 z-[1] bg-background relative">
      <div className="max-w-screen-2xl mx-auto">
        <h1 className="text-6xl font-extrabold text-foreground my-12 text-center">
          Modelos
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div
              key={product.model}
              className="relative shadow-custom rounded-xl bg-foreground overflow-hidden group"
            >
              {!product.needCnh && (
                <div className="text-center absolute top-0 right-0 bg-primary text-white text-md font-bold px-4 py-2 rotate-[45deg] translate-x-[70px] translate-y-[15px] w-[230px] z-20 shadow-custom">
                  Não precisa
                  <br />
                  de CNH
                </div>
              )}
              <div
                onClick={() => setSelectedModel(product)}
                className="cursor-pointer absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white text-5xl font-semibold px-4 py-2 z-10 flex items-start"
              >
                {product.name}
              </div>
              <Image
                width={400}
                height={300}
                alt={`Modelo ${product.name}`}
                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                src={product.cover}
              />
              <Link href={whatsapp.main}>
                <Button className="bg-[#25D366] absolute w-full bottom-0 left-0 rounded-none rounded-b-xl text-lg flex items-center justify-center gap-2">
                  <Image
                    height={24}
                    width={24}
                    alt="WhatsApp"
                    src="/logos/whatsapp.png"
                  />
                  Compre agora
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      {selectedModel && (
        <Dialog open={!!selectedModel} onOpenChange={() => setSelectedModel(null)}>
          <DialogContent className="h-[100dvh] max-w-screen rounded-none flex flex-col lg:flex-row gap-0 p-0">
            <div className="lg:w-1/2 flex justify-center items-center">
              <Carousel
                model={selectedModel.model}
                numberOfImages={selectedModel.numberOfImages}
              />
            </div>
            <div className="lg:w-1/2 flex flex-col space-y-2 overflow-auto px-4 py-2">
              <DialogTitle className="text-3xl font-bold">
                {selectedModel.name}
              </DialogTitle>
              <div className="space-y-1 px-2 lg:px-0">
                {selectedModel.descriptions.map((description, index) => (
                  <p key={index} className="text-lg text-gray-700">
                    - {description}
                  </p>
                ))}
              </div>
              <DialogDescription></DialogDescription>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}

export default Models
