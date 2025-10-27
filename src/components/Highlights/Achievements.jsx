import React, { useState } from 'react';
import { X } from 'lucide-react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// Import required modules
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export function Achievements({ theme, colors, achievements }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Close modal on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="mt-10 overflow-hidden">
      <h3 className={`text-2xl font-bold mb-8 text-center scroll-animate ${
        theme === 'dark' ? 'text-white' : 'text-slate-900'
      }`}>Achievements</h3>
      
      {/* Swiper Slider with 3D Coverflow Effect */}
      <div className="relative h-80 mx-auto max-w-6xl px-4">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            // reverseDirection: true,
          }}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {achievements.map((achievement, index) => (
            <SwiperSlide 
              key={index} 
              className="!w-72 h-64 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              onClick={() => openModal(achievement.image)}
            >
              <img 
                src={achievement.image} 
                alt={`Achievement ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for displaying selected image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              onClick={closeModal}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged achievement" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}