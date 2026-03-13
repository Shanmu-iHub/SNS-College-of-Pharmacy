
import { PageHeader } from '../components/page-header'

// ─── Gallery Page ──────────────────────────────────────────────────────────────
export const GalleryPage = () => {
    return `
    ${PageHeader(
        'Campus Gallery',
        'Explore our world-class pharmacy infrastructure and vibrant campus life',
        '/static/images/hero5.png',
        'Gallery'
    )}

    <!-- Life at SNS College of Pharmacy (Campus Experience) -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Campus Experience</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Life at SNS College of Pharmacy</h2>
                <p class="text-xl text-gray-600">Research-driven learning, design thinking projects, and a vibrant campus environment.</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${[
            { img: '/static/images/gallery/research-learning.png', title: 'Research Oriented Learning', desc: 'Students engaged in real-time pharmaceutical research, seminars, and collaborative discussions.' },
            { img: '/static/images/gallery/design-thinking-projects.png', title: 'Design Thinking Projects', desc: 'Hands-on projects using GenAI-powered Design Thinking to solve healthcare challenges.' },
            { img: '/static/images/gallery/vibrant-campus-life.png', title: 'Vibrant Campus Life', desc: 'Dynamic classroom interactions, peer learning, and an energetic academic atmosphere.' },
        ].map(item => `
                <div class="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500 bg-white">
                    <div class="h-56 overflow-hidden relative">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition z-10"></div>
                        <img src="${item.img}" alt="${item.title}" class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700">
                    </div>
                    <div class="p-5">
                        <h4 class="font-bold text-gray-900 mb-2">${item.title}</h4>
                        <p class="text-gray-600 text-sm leading-relaxed">${item.desc}</p>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- SNS Pharmacy Campus -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Infrastructure</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">SNS Pharmacy Campus</h2>
                <p class="text-xl text-gray-600">Wi-Fi enabled campus with smart classrooms and modern pharmacy facilities</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8 mb-10">
                ${[
            { icon: 'fas fa-building', color: 'bg-primary-50 text-primary-600', title: 'A Block', desc: 'Primary academic block with smart classrooms and undergraduate pharmacy labs.', tags: ['Reception', 'Smart Classrooms', 'B.Pharm Labs'] },
            { icon: 'fas fa-flask', color: 'bg-blue-50 text-blue-600', title: 'B Block', desc: 'Research wing with advanced pharmaceutical analysis and drug formulation labs.', tags: ['Research Labs', 'Analytical Lab', 'M.Pharm Wing'] },
            { icon: 'fas fa-hospital', color: 'bg-green-50 text-green-600', title: 'C Block', desc: 'Clinical pharmacy training block with simulation labs and administrative offices.', tags: ['Clinical Wing', 'Admin Office', 'Pharm.D Training'] },
        ].map(b => `
                <div class="bg-white border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md">
                    <div class="w-16 h-16 ${b.color} rounded-full flex items-center justify-center mb-5">
                        <i class="${b.icon} text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2">${b.title}</h3>
                    <p class="text-gray-600 text-sm mb-4 leading-relaxed">${b.desc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${b.tags.map(t => `<span class="bg-gray-50 text-gray-600 text-xs px-3 py-1 rounded-full border border-gray-100 font-medium">${t}</span>`).join('')}
                    </div>
                </div>`).join('')}
            </div>
            <div class="flex flex-wrap justify-center gap-3">
                ${['Reception', 'Smart Classrooms', 'Wi-Fi Campus', 'CCTV Security', 'Solar Powered', 'Digital Library', 'Herbal Garden', 'Seminar Hall'].map(t => `
                <span class="inline-flex items-center bg-white border border-gray-200 text-gray-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm hover:border-primary-400 hover:text-primary-700 transition">${t}</span>`).join('')}
            </div>
        </div>
    </section>

    <!-- Premium Facilities (colored icon cards) -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Premium Facilities</h2>
                <p class="text-xl text-gray-600">Everything our students need for a complete pharmacy education experience</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${[
            { color: 'bg-orange-50', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', icon: 'fas fa-chalkboard', title: 'Smart Classrooms', desc: 'Digital boards, projectors and interactive tools for modern pharma education.' },
            { color: 'bg-red-50', iconBg: 'bg-red-100', iconColor: 'text-red-600', icon: 'fas fa-video', title: 'CCTV Security', desc: '24/7 monitoring for a safe and secure campus environment.' },
            { color: 'bg-cyan-50', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', icon: 'fas fa-bus', title: 'Transport', desc: 'Safe, reliable AC bus service across Coimbatore.' },
            { color: 'bg-yellow-50', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', icon: 'fas fa-solar-panel', title: 'Solar Powered', desc: 'Eco-friendly campus running on green solar energy.' },
            { color: 'bg-purple-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', icon: 'fas fa-wifi', title: 'Wi-Fi Enabled', desc: 'Complete high-speed connectivity for research and e-resources.' },
            { color: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600', icon: 'fas fa-utensils', title: 'Hygienic Dining', desc: 'Nutritious meals and clean dining halls for students and staff.' },
        ].map(f => `
                <div class="${f.color} rounded-2xl p-6 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md">
                    <div class="w-12 h-12 ${f.iconBg} rounded-xl flex items-center justify-center mb-4">
                        <i class="${f.icon} text-xl ${f.iconColor}"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">${f.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${f.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Student Amenities -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Student Amenities</h2>
                <p class="text-xl text-gray-600">Premium spaces for well-rounded student development</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${[
            { icon: 'fas fa-gamepad', color: 'bg-indigo-50 text-indigo-600', title: 'Recreation Zone', desc: 'Dedicated space for student relaxation, board games, and recreational activities.' },
            { icon: 'fas fa-star', color: 'bg-yellow-50 text-yellow-600', title: 'Achievers Lounge', desc: 'Motivational, inspiring environment for top-performing pharmacy students.' },
            { icon: 'fas fa-film', color: 'bg-red-50 text-red-600', title: 'Entertainment Hub', desc: 'Screening room for pharmaceutical case films and student entertainment.' },
            { icon: 'fas fa-leaf', color: 'bg-teal-50 text-teal-600', title: 'Herbal Garden', desc: 'Live medicinal plant garden for hands-on pharmacognosy learning.' },
            { icon: 'fas fa-prescription-bottle', color: 'bg-purple-50 text-purple-600', title: 'Pharmacy Museum', desc: 'Display of historical pharmaceutical equipment and drug discoveries.' },
            { icon: 'fas fa-dumbbell', color: 'bg-green-50 text-green-600', title: 'Wellness Center', desc: 'Fitness and wellness facilities to keep students healthy and energized.' },
        ].map(a => `
                <div class="bg-gray-50 border border-gray-100 rounded-2xl p-7 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md text-center">
                    <div class="w-16 h-16 ${a.color} rounded-full flex items-center justify-center mb-4">
                        <i class="${a.icon} text-2xl"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">${a.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${a.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Green CTA Box -->
    <section class="py-16" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Experience Our Campus</h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Schedule a visit to see our world-class pharmacy infrastructure in person!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg">
                    <i class="fas fa-map-marker-alt mr-2"></i> Book Campus Tour
                </a>
                <a href="/admissions" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300">
                    Apply for Admission
                </a>
            </div>
        </div>
    </section>
    `;
};

// ─── Sports & Clubs Page ────────────────────────────────────────────────────────
export const SportsClubsPage = () => {
    return `
    ${PageHeader(
        'Sports & Clubs',
        'Building champions in sports, wellness, and life skills — beyond pharmaceutical excellence',
        '/static/images/gym.jpg',
        'Sports & Clubs'
    )}

    <!-- Sports For Life -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Physical Development</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Sports For Life</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Well-developed play fields with specialized physical instructors to bring out the best in every pharmacy student</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${[
            { icon: 'fas fa-futbol', color: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600', title: 'Football', desc: 'Full-sized field with professional coaching.' },
            { icon: 'fas fa-table-tennis', color: 'bg-blue-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', title: 'Tennis & TT', desc: 'Professional court and table tennis facility.' },
            { icon: 'fas fa-baseball-ball', color: 'bg-yellow-50', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', title: 'Cricket', desc: 'All-weather indoor cricket center with nets.' },
            { icon: 'fas fa-basketball-ball', color: 'bg-orange-50', iconBg: 'bg-orange-100', iconColor: 'text-orange-600', title: 'Basketball', desc: 'Full court with modern equipment.' },
            { icon: 'fas fa-volleyball-ball', color: 'bg-pink-50', iconBg: 'bg-pink-100', iconColor: 'text-pink-600', title: 'Volleyball', desc: 'Indoor and outdoor courts available.' },
            { icon: 'fas fa-running', color: 'bg-indigo-50', iconBg: 'bg-indigo-100', iconColor: 'text-indigo-600', title: 'Athletics', desc: 'Track events and field sports training.' },
            { icon: 'fas fa-swimmer', color: 'bg-cyan-50', iconBg: 'bg-cyan-100', iconColor: 'text-cyan-600', title: 'Swimming', desc: 'Ozonized pool with trained coaches.' },
            { icon: 'fas fa-dumbbell', color: 'bg-gray-50', iconBg: 'bg-gray-200', iconColor: 'text-gray-700', title: 'Gym & Fitness', desc: 'Modern equipment with fitness trainers.' },
            { icon: 'fas fa-users', color: 'bg-red-50', iconBg: 'bg-red-100', iconColor: 'text-red-600', title: 'Kabaddi & Kho-Kho', desc: 'Traditional Indian sports training.' },
        ].map(s => `
                <div class="${s.color} rounded-3xl p-10 text-center hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="${s.icon} text-3xl ${s.iconColor}"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-xl mb-3">${s.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${s.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Scouts & Guides -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Leadership</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Scouts & Guides</h2>
                <p class="text-xl text-gray-600">Developing leadership, responsibility, and community values</p>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                ${[
            { icon: 'fas fa-campground', color: 'bg-green-50 text-green-600', title: 'Outdoor Activities', desc: 'Camping, hiking, and nature exploration for pharmacy students.' },
            { icon: 'fas fa-handshake', color: 'bg-blue-50 text-blue-600', title: 'Community Service', desc: 'Social responsibility, patient outreach, and healthcare drives.' },
            { icon: 'fas fa-award', color: 'bg-yellow-50 text-yellow-600', title: 'Skill Development', desc: 'Badges, certifications, and personal achievement milestones.' },
        ].map(s => `
                <div class="bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition hover:-translate-y-1 duration-300">
                    <div class="w-16 h-16 ${s.color} rounded-full flex items-center justify-center mx-auto mb-5">
                        <i class="${s.icon} text-2xl"></i>
                    </div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">${s.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${s.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Clubs & Activities -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Extra-Curricular</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Clubs & Activities</h2>
                <p class="text-xl text-gray-600">25+ extra-curricular options for holistic pharmaceutical student development</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                ${[
            { icon: 'fas fa-music', color: 'bg-purple-50 text-purple-600', title: 'Music Club', desc: 'Vocal & instrumental training.' },
            { icon: 'fas fa-female', color: 'bg-pink-50 text-pink-600', title: 'Dance Club', desc: 'Classical, western, and folk forms.' },
            { icon: 'fas fa-paint-brush', color: 'bg-orange-50 text-orange-600', title: 'Art Club', desc: 'Painting, drawing, and crafts.' },
            { icon: 'fas fa-theater-masks', color: 'bg-red-50 text-red-600', title: 'Drama Club', desc: 'Theater and public speaking.' },
            { icon: 'fas fa-robot', color: 'bg-indigo-50 text-indigo-600', title: 'Robotics Club', desc: 'STEM and pharma innovation projects.' },
            { icon: 'fas fa-chess', color: 'bg-green-50 text-green-600', title: 'Chess Club', desc: 'Strategic thinking and tournaments.' },
            { icon: 'fas fa-book', color: 'bg-yellow-50 text-yellow-600', title: 'Literary Club', desc: 'Reading, writing, and debates.' },
            { icon: 'fas fa-microscope', color: 'bg-blue-50 text-blue-600', title: 'Science Club', desc: 'Pharma experiments and exhibitions.' },
            { icon: 'fas fa-leaf', color: 'bg-teal-50 text-teal-600', title: 'Eco Club', desc: 'Environmental awareness activities.' },
            { icon: 'fas fa-language', color: 'bg-cyan-50 text-cyan-600', title: 'Language Club', desc: 'Hindi, Tamil, English proficiency.' },
            { icon: 'fas fa-camera', color: 'bg-fuchsia-50 text-fuchsia-600', title: 'Photography Club', desc: 'Visual arts and documentation.' },
            { icon: 'fas fa-crown', color: 'bg-amber-50 text-amber-600', title: 'Student Council', desc: 'Leadership and governance.' },
            { icon: 'fas fa-microphone', color: 'bg-rose-50 text-rose-600', title: 'Toastmasters Club', desc: 'Public speaking & leadership skills.' },
            { icon: 'fas fa-globe', color: 'bg-sky-50 text-sky-600', title: 'Pharma MUN', desc: 'Drug policy debate & global issues.' },
            { icon: 'fas fa-pills', color: 'bg-lime-50 text-lime-600', title: 'Drug Info Club', desc: 'Pharmacovigilance & patient education.' },
            { icon: 'fas fa-hospital', color: 'bg-emerald-50 text-emerald-600', title: 'Clinical Club', desc: 'Ward visits & patient care simulation.' },
        ].map(c => {
            const textColor = c.color.split(' ').find(cls => cls.startsWith('text-')) || '';
            return `
                <div class="bg-white border border-gray-100 rounded-3xl p-10 text-center hover:border-primary-300 hover:-translate-y-1 transition duration-300 shadow-md hover:shadow-lg">
                    <div class="flex items-center justify-center mx-auto mb-6">
                        <i class="${c.icon} text-5xl ${textColor}"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-lg mb-2">${c.title}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">${c.desc}</p>
                </div>`;
        }).join('')}
            </div>
        </div>
    </section>

    <!-- Green CTA Box -->
    <section class="py-16" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Discover Your Passion</h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Join our sports teams and clubs to unlock your potential alongside your pharmacy career!
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions" class="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg">
                    Join SNSCPHS
                </a>
                <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300">
                    <i class="fas fa-phone mr-2"></i> Talk to Us
                </a>
            </div>
        </div>
    </section>
    `;
};

// ─── Brochure Page ──────────────────────────────────────────────────────────────
export const BrochurePage = () => {
    return `
    ${PageHeader(
        'Digital Brochure',
        'Download the SNSCPHS Prospectus',
        '/static/images/hero.png',
        'Brochure'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-12 text-center shadow-2xl">
                <i class="fas fa-file-pdf text-8xl text-red-600 mb-8"></i>
                <h2 class="text-4xl font-bold mb-4">Pharmacy Prospectus</h2>
                <p class="text-xl text-gray-700 mb-10">
                    Explore our programs, world-class labs, and the unique Design Thinking curriculum.
                </p>
                
                <a href="https://snscphs.org/brochure/" target="_blank" class="bg-primary-600 hover:bg-primary-700 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-xl transition transform hover:scale-105 inline-flex items-center">
                    <i class="fas fa-download mr-3"></i>
                    Download Brochure
                </a>
            </div>
        </div>
    </section>
    `;
};
