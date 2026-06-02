'use client'

import { useState, useCallback, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function Gallery({ images }: { images: string[] }) {
  const [i, setI] = useState<number | null>(null)
  const touchX = useRef<number | null>(null)

  const open = useCallback((n: number) => { setI(n); document.body.classList.add('lightbox-open') }, [])
  const close = useCallback(() => { setI(null); document.body.classList.remove('lightbox-open') }, [])
  const prev = useCallback(() => setI((c) => (c !== null ? (c - 1 + images.length) % images.length : 0)), [images.length])
  const next = useCallback(() => setI((c) => (c !== null ? (c + 1) % images.length : 0)), [images.length])

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3">
        {images.map((src, n) => (
          <button key={n} onClick={() => open(n)} className={`relative overflow-hidden group ${n % 5 === 0 ? 'col-span-2 md:col-span-1' : ''}`}>
            <div className="aspect-square bg-cover bg-center bg-[#2a2520] group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url("${src}")` }} />
          </button>
        ))}
      </div>

      {i !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (dx > 40) prev(); else if (dx < -40) next()
            touchX.current = null
          }}
        >
          <button onClick={(e) => { e.stopPropagation(); close() }} className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20"><X size={20} /></button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20"><ChevronLeft size={22} /></button>
          <img src={images[i]} alt={`Photo ${i + 1}`} className="max-w-[92vw] max-h-[86vh] object-contain" onClick={(e) => e.stopPropagation()} />
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20"><ChevronRight size={22} /></button>
          <div className="absolute bottom-4 text-white/60 text-sm">{i + 1} / {images.length}</div>
        </div>
      )}
    </>
  )
}
