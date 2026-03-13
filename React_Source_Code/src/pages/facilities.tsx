
import { PageHeader } from '../components/page-header'

export const FacilitiesPage = () => {
    return `
    ${PageHeader(
        'Advanced Pharmacy Infrastructure',
        'State-of-the-art laboratory facilities and learning spaces designed for future pharmaceutical excellence',
        '/static/images/hero5.png',
        'Facilities'
    )}

    <!-- Campus Overview -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Campus</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-4">SNS Campus</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Wi-Fi enabled campus with smart classrooms and modern pharmaceutical facilities</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg">
                    <div class="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition">
                        <i class="fas fa-building text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">A Block</h3>
                    <p class="text-gray-600 text-sm">Primary academic block with smart classrooms and pharmaceutical labs</p>
                </div>
                <div class="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg">
                    <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition">
                        <i class="fas fa-flask text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">B Block</h3>
                    <p class="text-gray-600 text-sm">Research wing with advanced pharmaceutical analysis and formulation labs</p>
                </div>
                <div class="group bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:-translate-y-2 transition duration-300 shadow-sm hover:shadow-lg">
                    <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition">
                        <i class="fas fa-hospital text-2xl text-white"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">C Block</h3>
                    <p class="text-gray-600 text-sm">Clinical pharmacy training block with simulation labs and administrative offices</p>
                </div>
            </div>
            <!-- Quick tags -->
            <div class="flex flex-wrap justify-center gap-4 mt-10">
                ${[
            { icon: 'fas fa-concierge-bell', label: 'Reception' },
            { icon: 'fas fa-chalkboard-teacher', label: 'Smart Classrooms' },
            { icon: 'fas fa-vials', label: 'Research Labs' },
            { icon: 'fas fa-wifi', label: 'Wi-Fi Campus' },
            { icon: 'fas fa-leaf', label: 'Solar Powered' },
            { icon: 'fas fa-video', label: 'CCTV Security' },
        ].map(t => `
                <span class="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-50 hover:text-primary-700 transition">
                    <i class="${t.icon} text-primary-500"></i> ${t.label}
                </span>`).join('')}
            </div>
        </div>
    </section>

    <!-- State-of-the-Art Laboratories -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Research & Learning</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-4">State-of-the-Art Laboratories</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    Our laboratories are equipped with the latest pharmaceutical machinery and instruments to provide hands-on experience in drug development and analysis.
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${[
            { img: '/static/images/facilities/pharmaceutics-lab.png', alt: 'Pharmaceutics Lab', title: 'Pharmaceutics Lab', desc: 'Focuses on the formulation and development of various dosage forms like tablets, capsules, and liquid orals using modern technology.' },
            { img: '/static/images/facilities/pharmaceutical-chemistry.png', alt: 'Pharmaceutical Chemistry Lab', title: 'Pharmaceutical Chemistry', desc: 'Equipped for the synthesis and analysis of chemical medicinal substances, fostering expertise in drug composition and behavior.' },
            { img: '/static/images/facilities/pharmacology-lab.png', alt: 'Pharmacology Lab', title: 'Pharmacology Lab', desc: 'Dedicated to studying the effects of drugs on biological systems, providing critical insights into drug action and safety.' },
            { img: '/static/images/facilities/pharmacognosy-lab.png', alt: 'Pharmacognosy Lab', title: 'Pharmacognosy Lab', desc: 'Focuses on medicines derived from natural sources, identifying and analyzing medicinal plants and herbal formulations.' },
            { img: '/static/images/facilities/computer-tech-hub.png', alt: 'Computer & Tech Hub', title: 'Computer & Tech Hub', desc: 'Latest computers with modern pharmaceutical software, drug databases, and complete internet connectivity.' },
            { img: '/static/images/facilities/central-library.png', alt: 'Central Library', title: 'Central Library', desc: 'A vast collection of pharmaceutical books, journals, and digital resources to support academic excellence and research.' },
        ].map(l => `
                <div class="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 bg-white">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="${l.img}" alt="${l.alt}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-7">
                        <h3 class="text-xl font-bold text-gray-900 mb-2">${l.title}</h3>
                        <p class="text-gray-600 leading-relaxed text-sm">${l.desc}</p>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- SNS SPINE Activity Center -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">World-Class Infrastructure</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-4">SNS SPINE Activity Center</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                    A 5-level world-class activity center for sports, arts, entertainment, and wellness—unlocking our pharmacy students' full potential.
                </p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${[
            { icon: 'fas fa-swimmer', color: 'bg-blue-50 text-blue-600', title: 'Swimming Pool', desc: 'Professional-grade ozonized swimming pool with trained coaches to build physical endurance and reduce stress.' },
            { icon: 'fas fa-baseball-ball', color: 'bg-green-50 text-green-600', title: 'Indoor Cricket', desc: 'All-weather indoor cricket pitch with bowling machines and nets. Professional coaching available day or night.' },
            { icon: 'fas fa-dumbbell', color: 'bg-orange-50 text-orange-600', title: 'Fitness Center', desc: 'Fully-equipped gym with treadmills, strength machines, weights, and boxing kits for student health.' },
            { icon: 'fas fa-music', color: 'bg-purple-50 text-purple-600', title: 'Music Studio', desc: 'Professional music studio with recording equipment and instruments for composition and creative expression.' },
            { icon: 'fas fa-child', color: 'bg-pink-50 text-pink-600', title: 'Dance Studio', desc: 'Dedicated air-conditioned space for various dance styles—from classical to contemporary.' },
            { icon: 'fas fa-palette', color: 'bg-cyan-50 text-cyan-600', title: 'Art Studio', desc: 'Creative space for drawing, painting, and sculpting, allowing students to visualize concepts and emotions.' },
            { icon: 'fas fa-film', color: 'bg-red-50 text-red-600', title: 'Bioskop Theater', desc: 'Compact digital theater with superior sound and 4K projection for educational films and entertainment.' },
            { icon: 'fas fa-gamepad', color: 'bg-indigo-50 text-indigo-600', title: 'Gaming Arena', desc: 'State-of-the-art gaming space with latest consoles for recreational esports and strategic thinking.' },
            { icon: 'fas fa-utensils', color: 'bg-yellow-50 text-yellow-600', title: 'Rooftop Dining', desc: 'Fine dining experience with healthy, seasonal meals in a perfect setting for community interaction.' },
        ].map(s => `
                <div class="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition duration-500 hover:-translate-y-2">
                    <div class="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition duration-300 ${s.color}">
                        <i class="${s.icon} text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">${s.title}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">${s.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Premium Pharmacy Facilities (colored icon cards) -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Infrastructure</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Premium Facilities</h2>
                <p class="text-xl text-gray-600">Everything you need for a world-class pharmaceutical education experience</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${[
            { color: 'bg-white', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', icon: 'fas fa-chalkboard', title: 'Smart Classrooms', desc: 'Digital boards, projectors, and interactive learning tools for modern pharmaceutical education.' },
            { color: 'bg-white', iconBg: 'bg-red-100', iconColor: 'text-red-600', icon: 'fas fa-video', title: 'CCTV Security', desc: '24/7 monitoring for a safe and secure campus environment.' },
            { color: 'bg-white', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', icon: 'fas fa-bus', title: 'Transport', desc: 'Safe and comfortable bus service covering all major areas of Coimbatore.' },
            { color: 'bg-white', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', icon: 'fas fa-solar-panel', title: 'Solar Powered', desc: 'Eco-friendly campus running on green solar energy.' },
            { color: 'bg-white', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', icon: 'fas fa-wifi', title: 'Wi-Fi Enabled', desc: 'Complete high-speed campus connectivity for research and learning.' },
            { color: 'bg-white', iconBg: 'bg-green-100', iconColor: 'text-green-600', icon: 'fas fa-utensils', title: 'Hygienic Dining', desc: 'Nutritious meals and hygienic dining facilities for students and staff.' },
        ].map(f => `
                <div class="${f.color} border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md">
                    <div class="w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center mb-5">
                        <i class="${f.icon} text-2xl ${f.iconColor}"></i>
                    </div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">${f.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${f.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Student Amenities (Executive Lounge style) -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Student Amenities</h2>
                <p class="text-xl text-gray-600">Premium spaces for well-rounded student development</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${[
            { icon: 'fas fa-chalkboard-teacher', color: 'bg-blue-50 text-blue-600', title: 'Seminar Hall', desc: 'Fully air-conditioned auditorium for conferences, guest lectures, and events.' },
            { icon: 'fas fa-dumbbell', color: 'bg-green-50 text-green-600', title: 'Sports & Fitness', desc: 'Indoor and outdoor sports facilities to keep students healthy and active.' },
            { icon: 'fas fa-book', color: 'bg-yellow-50 text-yellow-600', title: 'Digital Library', desc: 'Online journal access, e-books, and pharmaceutical database subscriptions.' },
            { icon: 'fas fa-leaf', color: 'bg-teal-50 text-teal-600', title: 'Herbal Garden', desc: 'Live medicinal plant garden for practical pharmacognosy learning.' },
            { icon: 'fas fa-lightbulb', color: 'bg-purple-50 text-purple-600', title: 'Innovation Hub', desc: 'Dedicated space for student research projects, startups, and innovation.' },
            { icon: 'fas fa-coffee', color: 'bg-red-50 text-red-600', title: 'Student Lounge', desc: 'Relaxed common area for students to unwind, collaborate, and socialize.' },
        ].map(a => {
            const bgClass = a.color.split(' ').find(cls => cls.startsWith('bg-')) || 'bg-gray-50';
            const textClass = a.color.split(' ').find(cls => cls.startsWith('text-')) || '';
            return `
                <div class="${bgClass} border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-md transition text-center hover:-translate-y-1 duration-300">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="${a.icon} text-3xl ${textClass}"></i>
                    </div>
                    <h4 class="text-xl font-bold text-gray-900 mb-3">${a.title}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">${a.desc}</p>
                </div>`;
        }).join('')}
            </div>
        </div>
    </section>

    <!-- Colored CTA Box (SNS Academy style) -->
    <section class="py-20" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Experience Our Campus</h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Schedule a visit to see our world-class pharmacy infrastructure and SPINE Activity Center in person!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact"
                   class="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg">
                    <i class="fas fa-map-marker-alt mr-2"></i> Book Campus Tour
                </a>
                <a href="/admissions"
                   class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
    `;
};
