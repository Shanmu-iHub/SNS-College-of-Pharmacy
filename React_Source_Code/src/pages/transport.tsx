
import { PageHeader } from '../components/page-header'

export const TransportPage = () => {
    return `
    ${PageHeader(
        'Transport Services',
        'Why Parents Trust Our Transport — Safe, Reliable & GPS-Tracked Connectivity Across Coimbatore',
        '/static/images/SNS_BUS.jpg',
        'Transport'
    )}

    <!-- Fleet Stats Banner -->
    <section class="py-12 bg-primary-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-8">
                <h2 class="text-3xl font-bold mb-2">Why Parents Trust Our Transport</h2>
                <p class="text-primary-100 text-lg">Fleet of 20 buses covering major areas of Coimbatore</p>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                ${[
            { icon: 'fas fa-bus', stat: '20 Buses', desc: 'Full fleet of air-conditioned buses' },
            { icon: 'fas fa-map-marked-alt', stat: 'GPS Tracking', desc: 'Real-time location monitoring' },
            { icon: 'fas fa-id-card', stat: 'RFID Cards', desc: 'Safe boarding system' },
            { icon: 'fas fa-snowflake', stat: 'Air Conditioned', desc: 'All buses fully AC' },
        ].map(s => `
                <div class="bg-white/10 backdrop-blur rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition">
                    <i class="${s.icon} text-3xl mb-3 block"></i>
                    <div class="text-xl font-bold mb-1">${s.stat}</div>
                    <div class="text-sm text-primary-100">${s.desc}</div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Bus Route Coverage Areas -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Bus Route Coverage Areas</h2>
                <p class="text-xl text-gray-600">We cover major areas across Coimbatore</p>
                <div class="mt-4 inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-5 py-3 rounded-full font-semibold text-sm">
                    <i class="fas fa-exclamation-circle"></i>
                    Check if your area is covered before admission!
                </div>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-primary-500">
                    <h4 class="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <i class="fas fa-map-pin text-primary-500"></i> Central Coimbatore
                    </h4>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        ${['RS Puram', 'Race Course', 'Town Hall', 'Gandhipuram', 'Saibaba Colony'].map(area => `<li class="flex items-center gap-2"><i class="fas fa-circle text-primary-400" style="font-size:6px"></i>${area}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-blue-500">
                    <h4 class="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <i class="fas fa-map-pin text-blue-500"></i> East Coimbatore
                    </h4>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        ${['Peelamedu', 'Hopes College', 'Singanallur', 'Ramanathapuram', 'Ganapathy'].map(area => `<li class="flex items-center gap-2"><i class="fas fa-circle text-blue-400" style="font-size:6px"></i>${area}</li>`).join('')}
                    </ul>
                </div>
                <div class="bg-white rounded-2xl p-7 shadow-sm border-l-4 border-green-500">
                    <h4 class="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                        <i class="fas fa-map-pin text-green-500"></i> West & South
                    </h4>
                    <ul class="space-y-2 text-gray-600 text-sm">
                        ${['Vadavalli', 'Thudiyalur', 'Podanur', 'Ukkadam', 'Kuniyamuthur'].map(area => `<li class="flex items-center gap-2"><i class="fas fa-circle text-green-400" style="font-size:6px"></i>${area}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Not sure about area -->
            <div class="mt-10 bg-white rounded-2xl p-8 shadow-sm text-center">
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Not Sure If Your Area Is Covered?</h3>
                <p class="text-gray-600 mb-6">Contact our transport coordinator to check route availability for your specific location</p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="tel:+919629937861" class="inline-flex items-center gap-2 bg-primary-600 text-white px-7 py-3 rounded-full font-bold hover:bg-primary-700 transition shadow-md">
                        <i class="fas fa-phone"></i> Call: +91 96299 37861
                    </a>
                    <a href="/contact" class="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-600 px-7 py-3 rounded-full font-bold hover:bg-primary-50 transition">
                        <i class="fas fa-paper-plane"></i> Send Inquiry
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Safety Features -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Commitment</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Safety Features</h2>
                <p class="text-xl text-gray-600">Every bus is equipped with industry-leading safety measures</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${[
            { color: 'bg-red-50', iconBg: 'bg-red-100', iconColor: 'text-red-600', icon: 'fas fa-tachometer-alt', title: 'Speed Governor', desc: 'All buses fitted with speed limiters for safety.' },
            { color: 'bg-blue-50', iconBg: 'bg-blue-100', iconColor: 'text-blue-600', icon: 'fas fa-satellite', title: 'GPS Tracking', desc: 'Real-time location monitoring system.' },
            { color: 'bg-purple-50', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', icon: 'fas fa-id-badge', title: 'RFID System', desc: 'Smart cards for secure boarding.' },
            { color: 'bg-green-50', iconBg: 'bg-green-100', iconColor: 'text-green-600', icon: 'fas fa-first-aid', title: 'First Aid Box', desc: 'Fully equipped medical kit in every bus.' },
            { color: 'bg-yellow-50', iconBg: 'bg-yellow-100', iconColor: 'text-yellow-600', icon: 'fas fa-user-shield', title: 'Trained Staff', desc: 'Caretakers on every bus for student safety.' },
            { color: 'bg-gray-50', iconBg: 'bg-gray-200', iconColor: 'text-gray-700', icon: 'fas fa-video', title: 'CCTV Cameras', desc: 'Video surveillance for complete security.' },
        ].map(f => `
                <div class="${f.color} rounded-2xl p-7 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md">
                    <div class="w-14 h-14 ${f.iconBg} rounded-xl flex items-center justify-center mb-5">
                        <i class="${f.icon} text-2xl ${f.iconColor}"></i>
                    </div>
                    <h4 class="text-lg font-bold text-gray-900 mb-2">${f.title}</h4>
                    <p class="text-gray-600 text-sm leading-relaxed">${f.desc}</p>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Transport Guidelines -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Transport Guidelines</h2>
                <p class="text-xl text-gray-600">Important information for parents and students</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8">
                <!-- For Parents -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-primary-500">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span class="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-users text-primary-600"></i>
                        </span>
                        For Parents
                    </h3>
                    <ul class="space-y-4">
                        ${[
            { label: 'Punctuality', text: 'Students must report 5 minutes before bus arrival' },
            { label: 'Pick-up', text: 'Parents must receive the child at the bus stop' },
            { label: 'Changes', text: 'Route/stop changes require 1 month advance notice' },
            { label: 'Communication', text: 'All requests via official email only' },
        ].map(g => `
                        <li class="flex gap-3">
                            <i class="fas fa-check-circle text-primary-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700 text-sm"><strong>${g.label}:</strong> ${g.text}</span>
                        </li>`).join('')}
                    </ul>
                </div>
                <!-- For Students -->
                <div class="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-blue-500">
                    <h3 class="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <span class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <i class="fas fa-user-graduate text-blue-600"></i>
                        </span>
                        For Students
                    </h3>
                    <ul class="space-y-4">
                        ${[
            { label: 'Uniform', text: 'Proper college uniform mandatory while travelling' },
            { label: 'ID Card', text: 'College ID with bus number required at all times' },
            { label: 'Prohibited', text: 'Eating, drinking, or games in bus are not allowed' },
            { label: 'Behavior', text: 'Maintain discipline; misbehavior may cancel bus service' },
        ].map(g => `
                        <li class="flex gap-3">
                            <i class="fas fa-check-circle text-blue-500 mt-1 flex-shrink-0"></i>
                            <span class="text-gray-700 text-sm"><strong>${g.label}:</strong> ${g.text}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- College Timings note -->
            <div class="mt-8 bg-primary-50 border border-primary-100 rounded-2xl p-7 text-center">
                <h3 class="text-xl font-bold text-primary-800 mb-2">College Timings</h3>
                <p class="text-primary-700 text-sm mb-1">Buses are scheduled to ensure students arrive by <strong>8:45 AM</strong> daily.</p>
                <p class="text-primary-600 text-sm">Routes are designed to minimise transit time and provide comfortable journeys.</p>
                <a href="/contact" class="inline-flex items-center gap-2 mt-4 bg-primary-600 text-white px-7 py-3 rounded-full font-bold hover:bg-primary-700 transition shadow-md text-sm">
                    <i class="fas fa-route"></i> Get Route Schedule
                </a>
            </div>
        </div>
    </section>

    <!-- Colored CTA Box (SNS Academy style) -->
    <section class="py-16" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Safe Travel, Every Day</h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Join SNS College of Pharmacy and enjoy a safe, reliable and comfortable commute with our dedicated transport fleet.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+919629937861"
                   class="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg">
                    <i class="fas fa-phone mr-2"></i> Call Transport Office
                </a>
                <a href="/contact"
                   class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300">
                    Send Inquiry
                </a>
            </div>
        </div>
    </section>
    `;
};
