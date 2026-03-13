
import { PageHeader } from '../components/page-header'

export const EventsPage = () => {
    return `
    ${PageHeader(
        'Events & Celebrations',
        'Witness the vibrant life and professional journey at SNSCPHS',
        '/static/images/events/events-bg.png',
        'Events'
    )}

    <!-- Events Gallery -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <!-- Event 1: World Pharmacist Day -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/world-pharmacist-day.png" alt="World Pharmacist Day" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">World Pharmacist Day</h3>
                        <p class="text-white/80 text-sm mt-1">Honouring the pharmacists of SNSCPHS who safeguard medicine safety, patient care, and community health.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-bold">Celebration</span>
                    </div>
                </div>

                <!-- Event 2: Pongal Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/pongal-celebration.png" alt="Pongal Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Pongal Celebration</h3>
                        <p class="text-white/80 text-sm mt-1">Traditional festivities on campus bringing together students and faculty to celebrate gratitude and togetherness.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 3: Onam Celebration -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/onam-celebration.png" alt="Onam Celebration" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Onam Celebration</h3>
                        <p class="text-white/80 text-sm mt-1">Colourful traditional attire, cultural performances, and community spirit marking the festival of harmony.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">Culture</span>
                    </div>
                </div>

                <!-- Event 4: Go Green Club -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/go-green-club.png" alt="Go Green Club" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Go Green Club</h3>
                        <p class="text-white/80 text-sm mt-1">Tree plantation and sustainability drives that nurture environmental responsibility among pharmacy students.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-lime-600 text-white px-3 py-1 rounded-full text-xs font-bold">Eco Initiative</span>
                    </div>
                </div>

                <!-- Event 5: Navaratri Celebrations -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/navaratri.png" alt="Navaratri Celebrations" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">Navaratri Celebrations</h3>
                        <p class="text-white/80 text-sm mt-1">Energetic cultural performances and traditional attire celebrating the spirit of Navaratri on campus.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">Festival</span>
                    </div>
                </div>

                <!-- Event 6: National Pharmacy Week -->
                <div class="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square">
                    <div class="absolute inset-0">
                        <img src="/static/images/events/national-pharmacy-week.png" alt="National Pharmacy Week" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    </div>
                    <div class="absolute bottom-0 left-0 right-0 p-6">
                        <h3 class="text-white font-bold text-2xl">National Pharmacy Week</h3>
                        <p class="text-white/80 text-sm mt-1">Awareness programs, expert talks, and student activities highlighting the impact of pharmacy on society.</p>
                    </div>
                    <div class="absolute top-4 left-4">
                        <span class="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">Professional</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-gray-900 mb-6">Experience Professional Growth</h2>
            <p class="text-xl text-gray-600 mb-8">
                Join SNSCPHS to be part of an institution that goes beyond textbooks to shape your professional identity.
            </p>
            <a href="/admissions" class="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition">
                Apply for Admission 2024-25
            </a>
        </div>
    </section>
    `;
};
