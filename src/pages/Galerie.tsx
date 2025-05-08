import ImageGallery from '../components/ImageGallery'

export default function Galerie() {
  // Imagini pentru hale
  const haleImages = [
    '/images/hale/WhatsApp-Image-2019-02-11-at-16.41.16-1-768x576.jpeg',
    '/images/hale/WhatsApp-Image-2019-02-11-at-16.41.16-2-768x576.jpeg',
    '/images/hale/WhatsApp-Image-2019-02-11-at-16.41.17-768x576.jpeg'
  ]
  
  // Imagini pentru amintiri finala
  const aminitiriImages = [
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.06.56-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.06.57-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.46-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.48-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.49-1-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.49-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.50-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.51-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.52-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.53-1-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.53-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.54-1-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.54-2-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.54-3-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.54-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.55-1-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.55-2-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.55-3-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.55-4-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.55-768x768.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.56-1-768x576.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.56-2-768x576.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.56-3.jpeg',
    '/images/aminitiri_finala/WhatsApp-Image-2021-01-07-at-22.08.56.jpeg'
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="space-y-12">
        <ImageGallery
          title="Hale de Concurs"
          description="Galerie cu halele de concurs din Vadu Volovat, locul unde porumbeii sunt găzduiți și pregătiți pentru competiții."
          images={haleImages}
        />

        <div className="border-t border-gray-200 my-12" />

        <ImageGallery
          title="Amintiri Finala Vadu Volovat"
          description="Momente memorabile din finala concursului de la Vadu Volovat, capturând emoțiile și pasiunea pentru porumbei."
          images={aminitiriImages}
        />
      </div>
    </div>
  )
} 