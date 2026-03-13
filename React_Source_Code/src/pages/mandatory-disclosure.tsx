
import { PageHeader } from '../components/page-header'

export const MandatoryDisclosurePage = () => {
    return `
    ${PageHeader(
        'Mandatory Disclosure',
        'Transparency and Stewardship in Pharmaceutical Education',
        '/static/images/sns-college-building.png',
        'Mandatory Disclosure'
    )}

    <!-- A: Institutional Information -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">A. General Information</h2>
            
            <div class="overflow-x-auto border rounded-xl shadow-sm">
                <table class="w-full border-collapse">
                    <thead class="bg-primary-50">
                        <tr>
                            <th class="px-6 py-4 text-left font-bold text-primary-900 border-b">INFORMATION</th>
                            <th class="px-6 py-4 text-left font-bold text-primary-900 border-b">DETAILS</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200">
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">NAME OF THE INSTITUTION</td>
                            <td class="px-6 py-4 text-gray-900 font-bold">SNS COLLEGE OF PHARMACY AND HEALTH SCIENCES</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">YEAR OF ESTABLISHMENT</td>
                            <td class="px-6 py-4 text-gray-900">2019</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">PCI APPROVAL ID</td>
                            <td class="px-6 py-4 text-gray-900 font-bold text-primary-600">PCI-4067</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">AFFILIATION</td>
                            <td class="px-6 py-4 text-gray-900">The Tamil Nadu Dr. M.G.R. Medical University, Chennai</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">CAMPUS ADDRESS</td>
                            <td class="px-6 py-4 text-gray-900">SNS Kalvi Nagar, Sathy Main Road (NH-209), Vazhiyampalayam, Saravanampatti, Coimbatore - 641035.</td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">EMAIL ID</td>
                            <td class="px-6 py-4"><a href="mailto:college@snscphs.org" class="text-primary-600 font-bold hover:underline">college@snscphs.org</a></td>
                        </tr>
                        <tr>
                            <td class="px-6 py-4 font-semibold text-gray-700">CONTACT DETAILS</td>
                            <td class="px-6 py-4 font-bold text-gray-900">+91 75503 16701 / 02</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <!-- B: Programs and Intake -->
    <section class="py-12 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">B. Academic Programs & Approved Intake</h2>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-2xl shadow-md border-t-4 border-primary-500">
                    <h3 class="font-bold text-xl mb-2">B. Pharm</h3>
                    <div class="text-3xl font-black text-primary-600 mb-1">100</div>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wider">Annual Intake</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-md border-t-4 border-primary-500">
                    <h3 class="font-bold text-xl mb-2">D. Pharm</h3>
                    <div class="text-3xl font-black text-primary-600 mb-1">60</div>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wider">Annual Intake</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-md border-t-4 border-primary-500">
                    <h3 class="font-bold text-xl mb-2">M. Pharm</h3>
                    <div class="text-3xl font-black text-primary-600 mb-1">15</div>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wider">Annual Intake</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-md border-t-4 border-primary-500">
                    <h3 class="font-bold text-xl mb-2">Pharm. D</h3>
                    <div class="text-3xl font-black text-primary-600 mb-1">30</div>
                    <p class="text-sm text-gray-600 font-semibold uppercase tracking-wider">Annual Intake</p>
                </div>
            </div>
        </div>
    </section>

    <!-- C: Documents -->
    <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold mb-8 text-gray-900">C. Statutory Documents</h2>
            
            <div class="grid md:grid-cols-2 gap-4">
                <a href="https://snscphs.org/mandatory-disclosure/" target="_blank" class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition border group">
                    <i class="fas fa-file-pdf text-2xl text-red-500 mr-4 group-hover:scale-110 transition"></i>
                    <span class="font-bold text-gray-700 group-hover:text-primary-700">PCI Approval Letter</span>
                </a>
                <a href="https://snscphs.org/mandatory-disclosure/" target="_blank" class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition border group">
                    <i class="fas fa-file-pdf text-2xl text-red-500 mr-4 group-hover:scale-110 transition"></i>
                    <span class="font-bold text-gray-700 group-hover:text-primary-700">MGR University Affiliation Letter</span>
                </a>
                <a href="https://snscphs.org/mandatory-disclosure/" target="_blank" class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition border group">
                    <i class="fas fa-file-pdf text-2xl text-red-500 mr-4 group-hover:scale-110 transition"></i>
                    <span class="font-bold text-gray-700 group-hover:text-primary-700">Trust Deed</span>
                </a>
                <a href="https://snscphs.org/mandatory-disclosure/" target="_blank" class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-primary-50 transition border group">
                    <i class="fas fa-file-pdf text-2xl text-red-500 mr-4 group-hover:scale-110 transition"></i>
                    <span class="font-bold text-gray-700 group-hover:text-primary-700">Safety Certificates (Building/Fire)</span>
                </a>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16 bg-primary-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl font-bold mb-4">Official Documentation</h2>
            <p class="text-xl mb-8 opacity-90">All statutory documents are available for verification at our administrative office.</p>
            <a href="/contact" class="bg-white text-primary-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition inline-block">
                Contact Office
            </a>
        </div>
    </section>
    `;
};
