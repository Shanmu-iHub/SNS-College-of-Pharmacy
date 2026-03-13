
import { PageHeader } from '../components/page-header'

// Innovation Hub Page
export const InnovationPage = () => {
    return `
    ${PageHeader(
        'SNS Innovation Hub (iHub)',
        "Powered by India's First Patented GenAI Design Thinking Framework | India's Y-Combinator for Pharmacy",
        '/static/images/pillar_industry.jpg',
        'Innovation Hub'
    )}

    <!-- About iHub -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-14 items-center">
                <div>
                    <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-3 block">About SNS iHub</span>
                    <h2 class="text-4xl font-bold text-gray-900 mb-6">Innovation in Pharmacy</h2>
                    <p class="text-lg text-gray-700 leading-relaxed mb-5">
                        SNS iHub is an initiative by SNS Institutions to foster pharmaceutical startups by providing a prototyping space immersed in an ambience of creativity and our patented GenAI-powered Design Thinking framework.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed mb-5">
                        The center helps identify healthcare and pharma-industry needs and solve them using our AI-enhanced design thinking approach, mentored by experts from academia and the pharmaceutical industry.
                    </p>
                    <p class="text-lg text-gray-700 leading-relaxed">
                        Our <strong class="text-primary-600">patented GenAI-powered Design Thinking framework</strong> helps pharmacy students identify unmet patient needs and develop novel solutions — from advanced drug formulations to digital health tools.
                    </p>
                </div>
                <div class="bg-primary-50 rounded-2xl p-8 border-l-4 border-primary-500">
                    <h3 class="text-2xl font-bold mb-6 text-primary-700">Pharmacy Innovation Focus</h3>
                    <ul class="space-y-4">
                        ${[
            { icon: 'fas fa-capsules', text: 'Drug Formulation & Design' },
            { icon: 'fas fa-microscope', text: 'Novel Drug Delivery Systems (NDDS)' },
            { icon: 'fas fa-laptop-medical', text: 'Digital Healthcare & Tele-pharmacy' },
            { icon: 'fas fa-vial', text: 'Clinical Research & Data Analytics' },
            { icon: 'fas fa-leaf', text: 'Herbal & Natural Product Development' },
            { icon: 'fas fa-robot', text: 'AI in Drug Discovery & Genomics' },
        ].map(li => `
                        <li class="flex items-start">
                            <i class="${li.icon} text-primary-600 mr-3 mt-1"></i>
                            <span class="text-gray-700">${li.text}</span>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- RADICAL Technologies -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Technology Pillars</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">RADICAL Technologies</h2>
                <p class="text-xl text-gray-600">Cutting-edge technologies integrated into pharmaceutical innovation</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                ${[
            { icon: 'fas fa-robot', color: 'bg-blue-50 text-blue-600', title: 'Robotics & Automation', desc: 'Automated dispensing and drug manufacturing robots.' },
            { icon: 'fas fa-vr-cardboard', color: 'bg-purple-50 text-purple-600', title: 'AR/VR Technology', desc: 'Virtual anatomy & clinical simulation for pharmacy students.' },
            { icon: 'fas fa-brain', color: 'bg-pink-50 text-pink-600', title: 'Data Science / AI / ML', desc: 'Predictive modeling for drug interactions and pharmacovigilance.' },
            { icon: 'fas fa-network-wired', color: 'bg-cyan-50 text-cyan-600', title: 'IoT / Cybersecurity', desc: 'Smart drug monitoring devices and secure health data systems.' },
            { icon: 'fas fa-satellite', color: 'bg-indigo-50 text-indigo-600', title: 'Communication Tech', desc: 'Tele-pharmacy and digital patient counseling platforms.' },
            { icon: 'fas fa-cube', color: 'bg-orange-50 text-orange-600', title: 'Additive Manufacturing', desc: '3D-printed personalized drug dosage forms and implants.' },
            { icon: 'fas fa-code', color: 'bg-green-50 text-green-600', title: 'Low Code / No Code', desc: 'Build pharmacy management apps without heavy programming.' },
            { icon: 'fas fa-dna', color: 'bg-red-50 text-red-600', title: 'Genomics & Bioinformatics', 'desc': 'Personalized medicine solutions using genomic data.' },
        ].map(t => {
            const bgClass = t.color.split(' ').find(cls => cls.startsWith('bg-')) || 'bg-gray-50';
            const textClass = t.color.split(' ').find(cls => cls.startsWith('text-')) || '';
            return `
                <div class="${bgClass} border border-gray-100 rounded-3xl p-10 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md text-center">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="${t.icon} text-3xl ${textClass}"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-xl mb-3">${t.title}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">${t.desc}</p>
                </div>`;
        }).join('')}
            </div>
        </div>
    </section>

    <!-- SHAAARP Pharma Industry Verticals -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Industry Focus</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">SHAAARP Pharma Verticals</h2>
                <p class="text-xl text-gray-600">Focus areas for pharmaceutical innovation and startup development</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                ${[
            { icon: 'fas fa-hospital', color: 'bg-green-50 text-green-600', title: 'Clinical Pharmacy', desc: 'Patient-centered care, therapeutic drug monitoring & ICU pharmacy.' },
            { icon: 'fas fa-dna', color: 'bg-blue-50 text-blue-600', title: 'Biotech & Genomics', desc: 'Biopharmaceuticals, gene therapy, and personalized medicine solutions.' },
            { icon: 'fas fa-leaf', color: 'bg-teal-50 text-teal-600', title: 'Herbal & Nutraceuticals', desc: 'Natural drug development, phytochemistry, and functional foods.' },
            { icon: 'fas fa-robot', color: 'bg-indigo-50 text-indigo-600', title: 'AI Drug Discovery', desc: 'Machine learning for target identification and molecular optimization.' },
            { icon: 'fas fa-box', color: 'bg-orange-50 text-orange-600', title: 'Pharma Packaging', desc: 'Smart, sustainable, and patient-compliant packaging solutions.' },
            { icon: 'fas fa-industry', color: 'bg-gray-100 text-gray-600', title: 'Pharma Manufacturing', desc: 'QC/QA, GMP compliance, and automated production processes.' },
            { icon: 'fas fa-laptop-medical', color: 'bg-purple-50 text-purple-600', title: 'Digital Health & Medtech', desc: 'Tele-pharmacy, health apps, wearable drug delivery devices.' },
            { icon: 'fas fa-globe', color: 'bg-cyan-50 text-cyan-600', title: 'Regulatory & CRO', desc: 'Drug approval, pharmacovigilance, and clinical research organizations.' },
        ].map(v => {
            const bgClass = v.color.split(' ').find(cls => cls.startsWith('bg-')) || 'bg-gray-50';
            const textClass = v.color.split(' ').find(cls => cls.startsWith('text-')) || '';
            return `
                <div class="${bgClass} border border-gray-100 rounded-3xl p-10 hover:-translate-y-1 transition duration-300 shadow-sm hover:shadow-md text-center">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                        <i class="${v.icon} text-3xl ${textClass}"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 text-xl mb-3">${v.title}</h4>
                    <p class="text-sm text-gray-600 leading-relaxed">${v.desc}</p>
                </div>`;
        }).join('')}
            </div>
        </div>
    </section>

    <!-- Innovation Labs -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Facilities</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Innovation Labs</h2>
                <p class="text-xl text-gray-600">Specialized spaces where pharmaceutical ideas become reality</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                ${[
            {
                badge: 'I-TECH Lab', badgeColor: 'bg-blue-100 text-blue-700',
                icon: 'fas fa-flask', iconBg: 'bg-blue-600',
                title: 'Pharma I-TECH Lab',
                desc: 'Interdisciplinary research space for AI-driven drug discovery, computational chemistry, IoT drug monitoring, and 3D-printed dosage form innovation.',
                features: ['AI Drug Modeling', '3D Drug Printing', 'IoT Monitoring'],
            },
            {
                badge: 'BOT Lab', badgeColor: 'bg-purple-100 text-purple-700',
                icon: 'fas fa-robot', iconBg: 'bg-purple-600',
                title: 'Pharma BOT Lab',
                desc: "Coimbatore's first Center-of-Excellence in pharmaceutical process automation — featuring robotic dispensing, automated QC analysis, and process robotic arms.",
                features: ['Robotic Dispensing', 'Automated QC', 'Process Automation'],
            },
            {
                badge: 'Fabrication', badgeColor: 'bg-green-100 text-green-700',
                icon: 'fas fa-industry', iconBg: 'bg-green-600',
                title: 'Pharma Fabrication Lab',
                desc: 'Real-time project workspace for drug formulation prototyping, herbal extract development, and student-led pharmaceutical startup pilot testing.',
                features: ['Formulation Prototyping', 'Herbal Extraction', 'Startup Testing'],
            },
        ].map(lab => `
                <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">
                    <div class="h-3 ${lab.iconBg}"></div>
                    <div class="p-8">
                        <div class="flex items-center justify-between mb-5">
                            <div class="w-14 h-14 ${lab.iconBg} rounded-2xl flex items-center justify-center shadow-md">
                                <i class="${lab.icon} text-2xl text-white"></i>
                            </div>
                            <span class="text-xs font-bold px-3 py-1 rounded-full ${lab.badgeColor}">${lab.badge}</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-3">${lab.title}</h3>
                        <p class="text-gray-600 text-sm leading-relaxed mb-5">${lab.desc}</p>
                        <div class="flex flex-wrap gap-2">
                            ${lab.features.map(f => `<span class="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-semibold">${f}</span>`).join('')}
                        </div>
                    </div>
                </div>`).join('')}
            </div>
        </div>
    </section>

    <!-- Pharma Industry Big7 Clubs -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-14">
                <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Student Clubs</span>
                <h2 class="text-4xl font-bold text-gray-900 mb-3">Pharma Industry Big7 Clubs</h2>
                <p class="text-xl text-gray-600 max-w-2xl mx-auto">Student clubs focused on world-leading pharma companies and career pathways</p>
            </div>
            <div class="grid md:grid-cols-2 gap-10">
                <!-- Top Pharma Companies Club -->
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">Top Pharma Giants Club</h3>
                    <p class="text-gray-600 text-sm mb-6">Exposure to world-leading pharmaceutical companies and their innovations</p>
                    <div class="grid grid-cols-3 gap-3">
                        ${[
            { name: 'Sun Pharma', desc: 'India\'s Largest', color: 'bg-orange-50 border-orange-200' },
            { name: 'Cipla', desc: 'Global Generic', color: 'bg-blue-50 border-blue-200' },
            { name: 'Dr. Reddy\'s', desc: 'R&D Leader', color: 'bg-red-50 border-red-200' },
            { name: 'Pfizer', desc: 'Global Giant', color: 'bg-indigo-50 border-indigo-200' },
            { name: 'Novartis', desc: 'Innovation Hub', color: 'bg-purple-50 border-purple-200' },
            { name: 'Roche', desc: 'Diagnostics', color: 'bg-pink-50 border-pink-200' },
            { name: 'AstraZeneca', desc: 'BioPharm', color: 'bg-cyan-50 border-cyan-200' },
            { name: 'Johnson & J', desc: 'Consumer Health', color: 'bg-yellow-50 border-yellow-200' },
            { name: 'Abbott', desc: 'Diagnostics', color: 'bg-green-50 border-green-200' },
        ].map(c => `
                        <div class="${c.color} border rounded-xl p-3 text-center">
                            <div class="font-bold text-gray-800 text-xs mb-1">${c.name}</div>
                            <div class="text-gray-500 text-xs">${c.desc}</div>
                        </div>`).join('')}
                    </div>
                </div>
                <!-- What Students Learn -->
                <div class="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                    <h3 class="text-2xl font-bold text-gray-900 mb-2">CRO & Research Club</h3>
                    <p class="text-gray-600 text-sm mb-6">Exposure to clinical research organizations, regulatory agencies & consultancies</p>
                    <div class="grid grid-cols-3 gap-3 mb-8">
                        ${[
            { name: 'ICMR', desc: 'Clinical Research' },
            { name: 'CDSCO', desc: 'Drug Regulator' },
            { name: 'DCGI', desc: 'Drug Controller' },
            { name: 'Quintiles', desc: 'CRO Giant' },
            { name: 'Covance', desc: 'Lab Services' },
            { name: 'Parexel', desc: 'Clinical Trials' },
        ].map(c => `
                        <div class="bg-white border border-primary-200 rounded-xl p-3 text-center">
                            <div class="font-bold text-gray-800 text-xs mb-1">${c.name}</div>
                            <div class="text-gray-500 text-xs">${c.desc}</div>
                        </div>`).join('')}
                    </div>
                    <h4 class="font-bold text-gray-900 mb-4">What Students Learn</h4>
                    <div class="grid grid-cols-2 gap-3">
                        ${[
            { icon: 'fas fa-lightbulb', title: 'Industry Insights', desc: 'Deep dive into pharma business models' },
            { icon: 'fas fa-file-alt', title: 'Case Studies', desc: 'Real-world pharma problem solving' },
            { icon: 'fas fa-users', title: 'Networking', desc: 'Connect with alumni & industry experts' },
            { icon: 'fas fa-briefcase', title: 'Career Prep', desc: 'Internship & placement guidance' },
        ].map(w => `
                        <div class="bg-white rounded-xl p-4 shadow-sm">
                            <i class="${w.icon} text-primary-600 mb-2 block"></i>
                            <div class="font-bold text-gray-800 text-sm">${w.title}</div>
                            <div class="text-gray-500 text-xs mt-1">${w.desc}</div>
                        </div>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Colored CTA Box (SNS Academy style) -->
    <section class="py-20" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold text-white mb-4">Join the Pharma Innovation Movement</h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Be part of SNS iHub — where pharmacy students become entrepreneurs, researchers, and healthcare innovators of tomorrow.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/admissions"
                   class="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-bold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-lg">
                    Apply for Admission
                </a>
                <a href="/contact"
                   class="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300">
                    <i class="fas fa-phone mr-2"></i> Talk to Us
                </a>
            </div>
        </div>
    </section>
    `;
};

// About Page
export const AboutPage = () => {
    return `
    ${PageHeader(
        'About SNSCPHS',
        'India\'s First Design Thinking Pharmacy College',
        '/static/images/sns-college-building.png',
        'About Us'
    )}

    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <img src="/static/images/sns-about-team.png" alt="SNS Pharmacy College" class="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]">
                </div>
                
                <div>
                    <span class="text-primary-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Identity</span>
                    <h2 class="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                        Pioneering <span class="text-primary-600">Design Thinking</span> in Pharmaceutical Sciences
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed mb-6">
                        SNS College of Pharmacy and Health Sciences (SNSCPHS), established in 2019, is a premier institution dedicated to excellence in pharmaceutical education. We are approved by PCI, New Delhi, and affiliated to The Tamil Nadu Dr. M.G.R. Medical University.
                    </p>
                    <p class="text-lg text-gray-600 leading-relaxed mb-8">
                        Our mission is to nurture common minds into exceptional pharmaceutical professionals through our unique Design Thinking framework, fostering an entrepreneurial mindset in every student.
                    </p>

                    <div class="grid grid-cols-2 gap-6">
                        <div class="p-4 bg-primary-50 rounded-xl">
                            <h4 class="font-bold text-primary-700 text-lg">PCI Approved</h4>
                            <p class="text-gray-600 text-sm font-medium">Industry Standard Compliance</p>
                        </div>
                        <div class="p-4 bg-primary-50 rounded-xl">
                            <h4 class="font-bold text-primary-700 text-lg">MGR Affiliated</h4>
                            <p class="text-gray-600 text-sm font-medium">Academic Excellence</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Contact Page
export const ContactPage = () => {
    return `
    ${PageHeader(
        'Contact SNSCPHS',
        'Reach out to Coimbatore\'s leading Pharmacy College',
        '/static/images/sns-college-building.png',
        'Contact Us'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-12">
                <div>
                    <h2 class="text-3xl font-bold mb-8">Connect With Us</h2>
                    <div class="space-y-8">
                        <div class="flex items-start">
                            <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-map-marker-alt text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Campus Address</h3>
                                <p class="text-gray-700">SNS Kalvi Nagar, Sathy Main Road (NH-209),<br>Vazhiyampalayam, Saravanampatti,<br>Coimbatore - 641035.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-phone text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Phone Numbers</h3>
                                <p class="text-gray-700">Admission: +91 75503 16701<br>Helpline: +91 75503 16702</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                             <div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                                <i class="fas fa-envelope text-primary-600"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-xl mb-1">Email Address</h3>
                                <p class="text-gray-700">college@snscphs.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 rounded-2xl p-8 border border-gray-200 shadow-xl">
                    <h3 class="text-2xl font-bold mb-6 text-center">Admission Enquiry</h3>
                    <form action="#" class="space-y-4">
                        <input type="text" placeholder="Full Name *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <input type="email" placeholder="Email Address *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <input type="tel" placeholder="Phone Number *" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                        <select class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none">
                            <option value="">Select Program of Interest</option>
                            <option value="bpharm">B. Pharm</option>
                            <option value="dpharm">D. Pharm</option>
                            <option value="mpharm">M. Pharm</option>
                            <option value="pharmd">Pharm. D</option>
                        </select>
                        <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary-500 outline-none"></textarea>
                        <button class="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition shadow-lg">Submit Enquiry</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    `;
};

// Admissions Page
export const AdmissionsPage = () => {
    return `
    ${PageHeader(
        'Admissions 2024-25',
        'Begin your journey towards a specialized career in Pharmacy',
        '/static/images/sns-college-building.png',
        'Admissions'
    )}

    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold mb-4">Undergraduate & Postgraduate Programs</h2>
                <p class="text-xl text-gray-600">Choose the right pathway for your pharmaceutical career</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- B.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">B. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">4 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Bachelor of Pharmacy - Comprehensive study of drug discovery, development, and delivery.</p>
                    <a href="/academics/b-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- D.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">D. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">2 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Diploma in Pharmacy - Essential training for pharmacy technicians and retail pharmacy careers.</p>
                    <a href="/academics/d-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- M.Pharm -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">M. Pharm</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">2 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Master of Pharmacy - Specialization in Pharmaceutics with advanced research focus.</p>
                    <a href="/academics/m-pharm" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>

                <!-- Pharm.D -->
                <div class="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group">
                    <h3 class="text-2xl font-bold mb-2 group-hover:text-primary-600 transition">Pharm. D</h3>
                    <p class="text-sm text-primary-600 font-bold mb-4">6 Years Program</p>
                    <p class="text-gray-600 text-sm mb-6">Doctor of Pharmacy - Clinical pharmacy focus with extensive ward round participation.</p>
                    <a href="/academics/pharm-d" class="text-primary-600 font-bold flex items-center group-hover:underline">Learn More <i class="fas fa-arrow-right ml-2 text-xs"></i></a>
                </div>
            </div>
        </div>
    </section>
    `;
};
