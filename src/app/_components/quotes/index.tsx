'use client'

import { useState, useEffect, memo } from 'react'
import Image from 'next/image'

const TOTAL_QUOTES = 13
const QUOTE_INTERVAL_MS = 5000

function useRotatingQuotes(totalQuotes: number, intervalMs: number, step: number = 2) {
  const [quoteIndex, setQuoteIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prev => (prev + step) % totalQuotes)
    }, intervalMs)

    return () => clearInterval(interval)
  }, [totalQuotes, intervalMs, step])

  return quoteIndex
}

const QuoteImage = memo(function Quote({ index }: { index: number }) {
  return (
    <div
      className="relative w-full h-[200px] flex items-center justify-center"
      aria-label={`Displaying quote ${index + 1}`}
    >
      <Image
        src={`/quotes/${index}.png`}
        alt={`Quote ${index + 1}`}
        width={700}
        height={200}
        className="rounded-lg shadow-lg opacity-0 animate-fadeIn transition-opacity duration-1000"
      />
    </div>
  )
})

export default function QuoteSection() {
  const quoteIndex = useRotatingQuotes(TOTAL_QUOTES, QUOTE_INTERVAL_MS)
  const secondQuoteIndex = (quoteIndex + 1) % TOTAL_QUOTES

  return (
    <section
      className="p-5 z-[1] bg-foreground relative flex items-center justify-center"
      aria-labelledby="quotes-section"
    >
      <h2 id="quotes-section" className="sr-only">
        Rotating Quotes
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
        {[quoteIndex, secondQuoteIndex].map(index => (
          <QuoteImage key={index} index={index} />
        ))}
      </div>
    </section>
  )
}
