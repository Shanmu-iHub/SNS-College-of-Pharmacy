
export const ParentsTestimonialsCarousel = () => {
    const avatarIcon = `
    <svg aria-hidden="true" viewBox="0 0 24 24" class="w-9 h-9 text-white/95">
      <path fill="currentColor" d="M12 12c2.761 0 5-2.239 5-5S14.761 2 12 2 7 4.239 7 7s2.239 5 5 5Zm0 2c-3.866 0-7 3.134-7 7v1h14v-1c0-3.866-3.134-7-7-7Z" />
    </svg>
  `;

    return `
    <section class="py-16 bg-gradient-to-br from-primary-50 to-primary-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Voice of SNSCPHS</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Hear from our students and partners about their experience with India's first Design Thinking Pharmacy college.
                </p>
            </div>

            <div class="relative">
                <div id="testimonials-carousel" class="overflow-hidden">
                    <div class="flex transition-transform duration-500 ease-in-out" id="testimonials-track">
                        
                        <!-- Testimonial 1 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Arun Kumar</h4>
                                        <p class="text-primary-600 font-medium">B.Pharm Student (Final Year)</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                    "The Design Thinking framework at SNSCPHS has completely changed my perspective on pharmacy. Instead of just learning formulas, we focus on patient empathy. My project on 'User-friendly Insulin Delivery' was featured in our iHub pitch session. It's truly a professional environment."
                                </p>
                            </div>
                        </div>

                        <!-- Testimonial 2 -->
                        <div class="w-full flex-shrink-0 px-4">
                            <div class="bg-white rounded-3xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
                                <div class="flex items-center mb-6">
                                    <div class="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
                                        ${avatarIcon}
                                    </div>
                                    <div>
                                        <h4 class="text-xl font-bold text-gray-900">Dr. S. Meenakshi</h4>
                                        <p class="text-primary-600 font-medium">Industry Partner (R&D Head)</p>
                                    </div>
                                </div>
                                <p class="text-gray-700 text-lg leading-relaxed mb-6 italic">
                                    "We have recruited several students from SNSCPHS. What stands out is their ability to think beyond traditional limits. Their exposure to advanced labs and industry-interface programs makes them 'day-one' productive. The institution is bridging the gap between academia and industry beautifully."
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="flex justify-center mt-8 space-x-2">
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-primary-600 transition-all" data-index="0"></button>
                    <button class="testimonial-dot w-3 h-3 rounded-full bg-gray-300 hover:bg-primary-400 transition-all" data-index="1"></button>
                </div>
            </div>
        </div>
    </section>

    <script>
        (function() {
            let currentIndex = 0;
            const track = document.getElementById('testimonials-track');
            const dots = document.querySelectorAll('.testimonial-dot');
            const totalSlides = 2;

            function updateCarousel() {
                track.style.transform = \`translateX(-\${currentIndex * 100}%)\`;
                dots.forEach((dot, index) => {
                    dot.classList.toggle('bg-primary-600', index === currentIndex);
                    dot.classList.toggle('bg-gray-300', index !== currentIndex);
                });
            }

            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    currentIndex = parseInt(dot.dataset.index);
                    updateCarousel();
                });
            });

            setInterval(() => {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateCarousel();
            }, 6000);
        })();
    </script>
  `;
};
