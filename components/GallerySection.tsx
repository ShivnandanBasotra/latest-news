const galleryImages = [
  { emoji: '🏔️', title: 'Mountains' },
  { emoji: '🏖️', title: 'Beaches' },
  { emoji: '🕌', title: 'Temples' },
  { emoji: '🌲', title: 'Forests' },
  { emoji: '🏰', title: 'Palaces' },
  { emoji: '🌊', title: 'Rivers' },
  { emoji: '🏞️', title: 'Landscapes' },
  { emoji: '🎪', title: 'Culture' },
  { emoji: '🌅', title: 'Sunsets' },
];

export default function GallerySection() {
  return (
    <section className="py-8 md:py-16 lg:py-24 bg-[#FFF8F0] border-b-2 border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 md:mb-12 text-center">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
          {galleryImages.map((image, idx) => (
            <div
              key={idx}
              className="aspect-square bg-gradient-to-br from-[#FBBF24] to-[#F59E0B] rounded-lg border-2 border-[#1A1A1A] overflow-hidden group cursor-pointer hover:shadow-lg transition-all"
            >
              <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-center px-2">
                  <div className="text-4xl md:text-5xl lg:text-6xl mb-1 md:mb-2">{image.emoji}</div>
                  <p className="font-bold text-white text-xs md:text-sm">{image.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
