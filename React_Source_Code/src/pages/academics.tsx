
import { PageHeader } from '../components/page-header'

// ── Shared helper ─────────────────────────────────────────────────────────────

interface ProgramPageProps {
    headerTitle: string
    headerSubtitle: string
    headerImage: string
    headerCrumb: string
    overviewParagraphs: string[]
    highlights: string[]
    careerOpportunities: { icon: string; title: string; desc: string }[]
    ctaTitle: string
    ctaSubtitle: string
}

const ProgramPage = (p: ProgramPageProps) => `
${PageHeader(p.headerTitle, p.headerSubtitle, p.headerImage, p.headerCrumb)}

<!-- Course Overview + Course Highlights -->
<section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-12 items-start">
            <!-- Overview -->
            <div>
                <h2 class="text-4xl font-bold mb-6">Course Overview</h2>
                ${p.overviewParagraphs.map(para => `<p class="text-lg text-gray-700 leading-relaxed mb-4">${para}</p>`).join('')}
            </div>
            <!-- Highlights -->
            <div class="bg-primary-50 rounded-2xl p-8">
                <h3 class="text-2xl font-bold mb-6 font-display text-primary-700">Course Highlights</h3>
                <ul class="space-y-4">
                    ${p.highlights.map(h => `
                    <li class="flex items-start">
                        <i class="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                        <span class="text-gray-700">${h}</span>
                    </li>`).join('')}
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Career Opportunities -->
<section class="py-16 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
            <h2 class="text-4xl font-bold mb-4">Career Opportunities</h2>
            <p class="text-xl text-gray-600 max-w-2xl mx-auto">Unlock a world of rewarding career paths upon graduation.</p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            ${p.careerOpportunities.map(c => `
            <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div class="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i class="${c.icon} text-2xl text-primary-600"></i>
                </div>
                <h4 class="text-lg font-bold mb-2 text-gray-800">${c.title}</h4>
                <p class="text-sm text-gray-600 leading-relaxed">${c.desc}</p>
            </div>`).join('')}
        </div>
    </div>
</section>

<!-- Colored CTA Box (SNS Academy style) -->
<section class="py-16" style="background: linear-gradient(135deg, #1a6b3a 0%, #22c55e 100%);">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-4">${p.ctaTitle}</h2>
        <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">${p.ctaSubtitle}</p>
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

// ── B. Pharm ──────────────────────────────────────────────────────────────────

export const BPharmPage = () => ProgramPage({
    headerTitle: 'B. Pharm (Bachelor of Pharmacy)',
    headerSubtitle: 'Foundation of Pharmaceutical Science: A 4-year undergraduate program focusing on drug discovery, pharmaceutical formulation, and clinical pharmacy practices',
    headerImage: '/static/images/7.JPG',
    headerCrumb: 'B. Pharm',

    overviewParagraphs: [
        'The Bachelor of Pharmacy (B.Pharm) is an undergraduate academic program in the field of pharmacy. The students learn the methods and process of preparing drugs and how the dispensing of drugs and medicines takes place.',
        'At SNSCPHS, we integrate Design Thinking into the curriculum, encouraging students to empathize with patient needs and ideate innovative drug delivery systems.',
        'The program spans 4 years and is approved by the Pharmacy Council of India (PCI), ensuring that graduates meet national standards for pharmaceutical practice.',
    ],
    highlights: [
        'PCI Approved Curriculum',
        'Advanced Pharmaceutics Labs',
        'Industrial Training & Visits',
        'Focus on Drug Discovery',
        'Design Thinking Integration',
        'Research Publication Support',
    ],
    careerOpportunities: [
        { icon: 'fas fa-hospital', title: 'Hospital Pharmacist', desc: 'Clinical dispensing, patient counseling, and medication management in hospitals.' },
        { icon: 'fas fa-flask', title: 'Research Scientist', desc: 'Drug formulation and research in pharma companies & R&D institutes.' },
        { icon: 'fas fa-industry', title: 'Pharmaceutical Industry', desc: 'Production, quality assurance, and regulatory affairs in top pharma firms.' },
        { icon: 'fas fa-store', title: 'Retail & Community Pharmacy', desc: 'Running your own pharmacy or working in community health settings.' },
    ],
    ctaTitle: 'Shape Your Future with B. Pharm',
    ctaSubtitle: 'Join SNS College of Pharmacy and build a career at the forefront of healthcare and pharmaceutical science.',
});

// ── D. Pharm ──────────────────────────────────────────────────────────────────

export const DPharmPage = () => ProgramPage({
    headerTitle: 'D. Pharm (Diploma in Pharmacy)',
    headerSubtitle: 'Professional Skill Building: A 2-year diploma program designed to produce skilled pharmacy technicians for hospitals and retail pharmacies',
    headerImage: '/static/images/10.JPG',
    headerCrumb: 'D. Pharm',

    overviewParagraphs: [
        'The Diploma in Pharmacy (D.Pharm) is a foundation-level course in the field of pharmacy. It covers the basics of pharmacy education including the application of chemistry in the pharmaceutical industry and pharmacy practice.',
        'This 2-year program is ideal for students who want to enter the workforce quickly as certified pharmacy technicians or use it as a stepping stone towards the B.Pharm program.',
        'At SNSCPHS, the D.Pharm curriculum emphasizes hands-on learning with regular hospital visits, lab sessions, and patient interaction exercises.',
    ],
    highlights: [
        'PCI Approved Curriculum',
        'Hospital Pharmacy Training',
        'Patient Counseling Skills',
        'Inventory & Drug Management',
        'Direct Industry Exposure',
        'Pathway to B.Pharm Lateral Entry',
    ],
    careerOpportunities: [
        { icon: 'fas fa-clinic-medical', title: 'Hospital Pharmacy', desc: 'Work as a pharmacy technician in government and private hospitals.' },
        { icon: 'fas fa-store-alt', title: 'Retail Pharmacy', desc: 'Operate or assist in retail drug stores and community pharmacies.' },
        { icon: 'fas fa-truck', title: 'Drug Distribution', desc: 'Join pharmaceutical wholesalers and drug distribution networks.' },
        { icon: 'fas fa-graduation-cap', title: 'Further Education', desc: 'Pursue lateral entry into B.Pharm for advanced qualifications.' },
    ],
    ctaTitle: 'Begin Your Pharmacy Journey',
    ctaSubtitle: 'The D.Pharm program at SNSCPHS is your gateway to a fulfilling career in the healthcare and pharmacy sector.',
});

// ── M. Pharm ──────────────────────────────────────────────────────────────────

export const MPharmPage = () => ProgramPage({
    headerTitle: 'M. Pharm (Pharmaceutics)',
    headerSubtitle: 'Advanced Research Excellence: A 2-year postgraduate program focusing on advanced drug delivery systems and pharmaceutical research',
    headerImage: '/static/images/5.JPG',
    headerCrumb: 'M. Pharm',

    overviewParagraphs: [
        'The Master of Pharmacy (M.Pharm) in Pharmaceutics is a postgraduate research-driven program that equips students with in-depth knowledge of advanced drug formulation, delivery systems, and pharmaceutical analysis.',
        'Students engage in cutting-edge research projects, guided by experienced faculty, in areas such as novel drug delivery, nanotechnology, and biopharmaceutics.',
        'At SNSCPHS, the M.Pharm program provides access to state-of-the-art research laboratories and collaboration opportunities with leading pharmaceutical companies.',
    ],
    highlights: [
        'Advanced Drug Delivery Research',
        'Nanotechnology & Nanoformulations',
        'Industry-Collaborated Projects',
        'High-Impact Research Publications',
        'Biopharmaceutics & Pharmacokinetics',
        'National & International Conference Exposure',
    ],
    careerOpportunities: [
        { icon: 'fas fa-microscope', title: 'Research Scientist', desc: 'Lead R&D projects in top pharmaceutical and biotech companies.' },
        { icon: 'fas fa-university', title: 'Academia & Teaching', desc: 'Pursue a career as a lecturer or professor in pharmacy colleges.' },
        { icon: 'fas fa-vial', title: 'Formulation Scientist', desc: 'Develop and optimize drug formulations for global markets.' },
        { icon: 'fas fa-file-medical', title: 'Regulatory Affairs', desc: 'Manage drug approvals and compliance with national and global agencies.' },
    ],
    ctaTitle: 'Advance Your Research Career',
    ctaSubtitle: 'Become a pharmaceutical innovator with the M.Pharm program at SNS College of Pharmacy.',
});

// ── Pharm. D ──────────────────────────────────────────────────────────────────

export const PharmDPage = () => ProgramPage({
    headerTitle: 'Pharm. D (Doctor of Pharmacy)',
    headerSubtitle: 'Clinical Mastery: A 6-year professional doctorate program focusing on clinical pharmacy, ward rounds, and patient-centered care',
    headerImage: '/static/images/8.JPG',
    headerCrumb: 'Pharm. D',

    overviewParagraphs: [
        'The Doctor of Pharmacy (Pharm.D) is a 6-year professional doctorate program (5 years of study + 1 year of internship) that trains pharmacists for clinical roles in hospitals, patient care management, and therapeutic decision-making.',
        'Pharm.D students participate in active ward rounds, direct patient consultations, and collaborative healthcare team meetings, gaining hands-on clinical exposure unlike any other pharmacy program.',
        'At SNSCPHS, the Pharm.D program is the flagship course built to produce clinical pharmacists who can make meaningful impacts on patient outcomes at every level of healthcare.',
    ],
    highlights: [
        'PCI Approved 6-Year Doctorate Program',
        'Active Ward Rounds & Clinical Postings',
        'Patient-Centered Care Training',
        'Therapeutic Drug Monitoring',
        'Clinical Pharmacy Practice',
        '1-Year Compulsory Internship',
    ],
    careerOpportunities: [
        { icon: 'fas fa-user-md', title: 'Clinical Pharmacist', desc: 'Work alongside doctors in ICUs, oncology, and specialty wards.' },
        { icon: 'fas fa-heartbeat', title: 'Critical Care Pharmacy', desc: 'Manage complex drug therapies in critical and emergency care units.' },
        { icon: 'fas fa-globe', title: 'Global Opportunities', desc: 'Pursue clinical pharmacy roles in the USA, UK, Canada, and Gulf countries.' },
        { icon: 'fas fa-chalkboard-teacher', title: 'Clinical Research', desc: 'Conduct clinical trials and pharmacovigilance studies with pharma giants.' },
    ],
    ctaTitle: 'Become a Clinical Pharmacy Leader',
    ctaSubtitle: "Pharm.D at SNSCPHS prepares you to be at the heart of patient care — India's most comprehensive clinical pharmacy program.",
});
