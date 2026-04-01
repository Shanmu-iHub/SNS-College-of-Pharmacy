import { PageHeader } from './page-header'

// Layout component with navigation and footer
export const Layout = (content: string, title: string, activePage: string = 'home') => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title} | SNS College of Pharmacy and Health Sciences - Design Thinking Pharmacy Coimbatore</title>
        <meta name="description" content="SNS College of Pharmacy and Health Sciences (SNSCPHS) - India's first Design Thinking Pharmacy college in Coimbatore. B.Pharm, D.Pharm with world-class labs.">
        
        <!-- Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
            tailwind.config = {
                theme: {
                    extend: {
                        colors: {
                            primary: {
                                DEFAULT: '#058D7A',
                                50: '#f0f9f8',
                                100: '#d1f0ec',
                                200: '#a3e1d9',
                                300: '#6ecec1',
                                400: '#41b6a7',
                                500: '#058D7A',
                                600: '#047a69',
                                700: '#036154',
                                800: '#02483f',
                                900: '#01302b',
                            }
                        }
                    }
                }
            }
        </script>
        
        <!-- Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
        
        <style>
            * { font-family: 'Inter', sans-serif; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Poppins', sans-serif; }
            html { scroll-behavior: smooth; }
            
            .gradient-bg {
                background: linear-gradient(-45deg, #058D7A, #047a69, #036154, #41b6a7);
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
            }
            
            /* Gradient Text Effect */
            .gradient-text {
                background: linear-gradient(135deg, #058D7A 0%, #047a69 50%, #6ecec1 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            .gradient-text-blue {
                background: linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
            }
            
            /* Softer Hero Gradients */
            .hero-gradient-warm {
                background: linear-gradient(135deg, #f0f9f8 0%, #d1f0ec 25%, #a3e1d9 50%, #6ecec1 75%, #058D7A 100%);
            }
            
            .hero-gradient-cool {
                background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 25%, #bfdbfe 50%, #93c5fd 75%, #60a5fa 100%);
            }
            
            /* Better Card Shadows */
            .card-shadow-sm {
                box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow {
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
            }
            
            .card-shadow-lg {
                box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            }
            
            .card-shadow-xl {
                box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }
            
            @keyframes gradient {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            
            .float {
                animation: float 6s ease-in-out infinite;
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-20px); }
            }
            
            .card-hover {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            .card-hover:hover {
                transform: translateY(-10px) scale(1.02);
                box-shadow: 0 25px 50px -12px rgba(5, 141, 122, 0.25);
            }
            
            .pulse-slow {
                animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
            }
            
            @keyframes swing {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
            }
            
            .swing {
                animation: swing 2s ease-in-out infinite;
                transform-origin: top center;
            }
            
            /* Badge/Tag Styles */
            .badge-glow {
                box-shadow: 0 0 20px rgba(5, 141, 122, 0.5);
                animation: glow 2s ease-in-out infinite;
            }
            
            @keyframes glow {
                0%, 100% { box-shadow: 0 0 20px rgba(5, 141, 122, 0.5); }
                50% { box-shadow: 0 0 30px rgba(5, 141, 122, 0.8); }
            }
            
            /* Smooth Transitions */
            .transition-smooth {
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            }
            
            /* Better Line Heights */
            body {
                line-height: 1.6;
            }
            
            h1 { line-height: 1.2; letter-spacing: -0.02em; }
            h2 { line-height: 1.3; letter-spacing: -0.01em; }
            h3 { line-height: 1.4; }

            /* WhatsApp Floating Button */
            .whatsapp-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 40px;
                right: 40px;
                background-color: #25d366;
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-whatsapp 2s infinite;
            }

            .whatsapp-float:hover {
                transform: scale(1.1) translateY(-5px);
                background-color: #128c7e;
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            /* Instagram Floating Button */
            .instagram-float {
                position: fixed;
                width: 60px;
                height: 60px;
                bottom: 110px;
                right: 40px;
                background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
                color: #FFF;
                border-radius: 50%;
                text-align: center;
                font-size: 32px;
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                z-index: 1000;
                display: flex;
                align-items: center;
                justify-content: center;
                text-decoration: none;
                transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                animation: pulse-instagram 2s infinite;
            }

            .instagram-float:hover {
                transform: scale(1.1) translateY(-5px);
                background: linear-gradient(45deg, #e6683c 0%, #dc2743 25%, #cc2366 50%, #bc1888 75%, #f09433 100%);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
                color: white;
            }

            @keyframes pulse-whatsapp {
                0% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }

            @keyframes pulse-instagram {
                0% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0.5);
                }
                70% {
                    box-shadow: 0 0 0 15px rgba(225, 48, 108, 0);
                }
                100% {
                    box-shadow: 0 0 0 0 rgba(225, 48, 108, 0);
                }
            }

            @media screen and (max-width: 768px) {
                body {
                    padding-bottom: 70px;
                }
                .whatsapp-float {
                    width: 50px;
                    height: 50px;
                    bottom: 85px;
                    right: 25px;
                    font-size: 28px;
                }
                .instagram-float {
                    width: 50px;
                    height: 50px;
                    bottom: 145px;
                    right: 25px;
                    font-size: 28px;
                }
            }
        </style>
    </head>
    <body class="antialiased bg-gray-50">
        
        <!-- Hanging Tag 1: PCI -->
        <div class="fixed top-[22%] right-0 z-50 swing">
            <div class="bg-gradient-to-br from-primary-600 to-primary-700 text-white px-4 py-6 rounded-l-2xl shadow-2xl">
                <span class="font-extrabold text-sm uppercase tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">PCI APPROVED</span>
            </div>
        </div>
        
        <!-- Hanging Tag 2: Brochure -->
        <div class="fixed top-[36%] right-0 z-50 swing" style="animation-delay: 0.3s;">
            <a href="/brochure/" class="bg-gradient-to-br from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-4 py-8 rounded-l-2xl shadow-2xl flex flex-col items-center space-y-3 group transition-all">
                <i class="fas fa-file-pdf text-2xl group-hover:scale-110 transition-transform duration-300"></i>
                <span class="font-extrabold text-sm uppercase tracking-widest" style="writing-mode: vertical-rl; text-orientation: mixed; letter-spacing: 0.2em;">BROCHURE</span>
            </a>
        </div>
        
        <!-- Floating CTA Button removed on mobile to avoid redundancy with bottom nav -->

        <!-- Navigation -->
        <nav class="bg-white shadow-md sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-20">
                    <a href="/" class="flex items-center space-x-3">
                        <img src="https://cdn.bitrix24.com/b11752903/landing/b31/b31cec6857f938bf2d1a7b4f140588c0/sdsd_1x.png" alt="SNS Pharmacy Logo" class="h-16 w-auto">
                        <div>
                            <h1 class="text-xl font-bold text-gray-900 leading-tight">SNS College of Pharmacy <br/>& Health Sciences</h1>
                        </div>
                    </a>
                    
                    <div class="hidden md:flex items-center space-x-6">
                        <a href="/" class="${activePage === 'home' ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'} font-medium">Home</a>
                        
                        <!-- Academics Dropdown -->
                        <div class="relative group">
                            <button class="${activePage.startsWith('academics') ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'} font-medium flex items-center">
                                Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-64 mt-0 z-50">
                                <a href="/academics/b-pharm" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">B. Pharm (Pharmacy)</a>
                                <a href="/academics/d-pharm" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">D. Pharm (Pharmacy)</a>
                                <a href="/academics/m-pharm" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">M. Pharm (Pharmaceutics)</a>
                                <a href="/academics/pharm-d" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Pharm. D (Doctor of Pharmacy)</a>
                            </div>
                        </div>
                        
                        <!-- Infrastructure Dropdown -->
                        <div class="relative group">
                            <button class="${['facilities', 'gallery', 'transport'].includes(activePage) ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'} font-medium flex items-center">
                                Infrastructure <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-48 mt-0 z-50">
                                <a href="/facilities" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Facilities</a>
                                <a href="/gallery" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Campus Gallery</a>
                                <a href="/transport" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Transport</a>
                            </div>
                        </div>
                        
                        <!-- Beyond Programs Dropdown -->
                        <div class="relative group">
                            <button class="${['sports-clubs', 'innovation', 'events', 'success-stories'].includes(activePage) ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'} font-medium flex items-center">
                                Beyond Programs <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <a href="/sports-clubs" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Sports &amp; Clubs</a>
                                <a href="/innovation" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Innovation Hub (iHub)</a>
                                <a href="/events" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Events &amp; Celebrations</a>
                                <a href="/success-stories" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Success Stories</a>
                            </div>
                        </div>
                        
                        <!-- Meet Us Dropdown -->
                        <div class="relative group">
                            <button class="${['about', 'contact', 'mandatory-disclosure'].includes(activePage) ? 'text-primary-600 font-bold' : 'text-gray-700 hover:text-primary-600'} font-medium flex items-center">
                                Meet Us <i class="fas fa-chevron-down ml-1 text-xs"></i>
                            </button>
                            <div class="absolute hidden group-hover:block bg-white shadow-xl rounded-lg py-2 w-56 mt-0 z-50">
                                <a href="/about" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">About Us</a>
                                <a href="/contact" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Contact Us</a>
                                <a href="/mandatory-disclosure" class="block px-4 py-2 hover:bg-primary-50 text-gray-700">Mandatory Disclosure</a>
                            </div>
                        </div>
                        
                        <a href="/admissions" class="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-bold transition">
                            Apply Now <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>
                    
                    <button id="mobile-menu-btn" class="md:hidden text-gray-700">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
            
            <!-- Mobile Menu -->
            <div id="mobile-menu" class="hidden md:hidden bg-white border-t">
                <div class="px-4 py-4 space-y-3">
                    <a href="/" class="block text-gray-700 hover:text-primary-600 font-medium py-2">Home</a>
                    
                    <!-- Academics -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-academics').classList.toggle('hidden')">
                            Programs <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-academics" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/academics/b-pharm" class="block text-gray-600 hover:text-primary-600 py-1">B. Pharm (Pharmacy)</a>
                            <a href="/academics/d-pharm" class="block text-gray-600 hover:text-primary-600 py-1">D. Pharm (Pharmacy)</a>
                            <a href="/academics/m-pharm" class="block text-gray-600 hover:text-primary-600 py-1">M. Pharm (Pharmaceutics)</a>
                            <a href="/academics/pharm-d" class="block text-gray-600 hover:text-primary-600 py-1">Pharm. D (Doctor of Pharmacy)</a>
                        </div>
                    </div>
                    
                    <!-- Infrastructure -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-infrastructure').classList.toggle('hidden')">
                            Infrastructure <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-infrastructure" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/facilities" class="block text-gray-600 hover:text-primary-600 py-1">Facilities</a>
                            <a href="/gallery" class="block text-gray-600 hover:text-primary-600 py-1">Gallery</a>
                            <a href="/transport" class="block text-gray-600 hover:text-primary-600 py-1">Transport</a>
                        </div>
                    </div>
                    
                    <!-- Beyond Programs -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-beyond').classList.toggle('hidden')">
                            Beyond Programs <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-beyond" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/sports-clubs" class="block text-gray-600 hover:text-primary-600 py-1">Sports &amp; Clubs</a>
                            <a href="/innovation" class="block text-gray-600 hover:text-primary-600 py-1">Innovation Hub</a>
                            <a href="/events" class="block text-gray-600 hover:text-primary-600 py-1">Events &amp; Celebrations</a>
                            <a href="/success-stories" class="block text-gray-600 hover:text-primary-600 py-1">Success Stories</a>
                        </div>
                    </div>
                    
                    <!-- Meet Us -->
                    <div>
                        <button class="w-full text-left text-gray-700 hover:text-primary-600 font-medium py-2 flex justify-between items-center" onclick="document.getElementById('mobile-meetus').classList.toggle('hidden')">
                            Meet Us <i class="fas fa-chevron-down"></i>
                        </button>
                        <div id="mobile-meetus" class="hidden pl-4 space-y-2 mt-2">
                            <a href="/about" class="block text-gray-600 hover:text-primary-600 py-1">About Us</a>
                            <a href="/contact" class="block text-gray-600 hover:text-primary-600 py-1">Contact Us</a>
                            <a href="/mandatory-disclosure" class="block text-gray-600 hover:text-primary-600 py-1">Mandatory Disclosure</a>
                        </div>
                    </div>
                    
                    <a href="/admissions" class="block bg-primary-600 text-white text-center px-6 py-3 rounded-lg font-bold">
                        Apply Now <i class="fas fa-arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        </nav>

        <!-- Content -->
        ${content}

        <!-- Footer -->
        <footer class="bg-gray-900 text-gray-300 py-12">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div class="flex items-center space-x-3 mb-4">
                            <img src="https://cdn.bitrix24.com/b11752903/landing/b31/b31cec6857f938bf2d1a7b4f140588c0/sdsd_1x.png" alt="SNS Pharmacy Logo" class="h-12 w-auto bg-white rounded p-1">
                            <div>
                                <h3 class="text-white font-bold">SNS College of Pharmacy</h3>
                                <p class="text-xs">& Health Sciences</p>
                            </div>
                        </div>
                        <p class="text-sm leading-relaxed">
                            PCI Approved | Affiliated to MGR Medical University<br>
                            Established: 2019<br>
                            Coimbatore, Tamil Nadu
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Quick Links</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/" class="hover:text-white transition">Home</a></li>
                            <li><a href="/about" class="hover:text-white transition">About Us</a></li>
                            <li><a href="/facilities" class="hover:text-white transition">Facilities</a></li>
                            <li><a href="/gallery" class="hover:text-white transition">Gallery</a></li>
                            <li><a href="/sports-clubs" class="hover:text-white transition">Sports & Clubs</a></li>
                            <li><a href="/events" class="hover:text-white transition">Events & Celebrations</a></li>
                            <li><a href="/success-stories" class="hover:text-white transition">Success Stories</a></li>
                            <li><a href="/transport" class="hover:text-white transition">Transport</a></li>
                            <li><a href="/innovation" class="hover:text-white transition">Innovation Hub</a></li>
                            <li><a href="/brochure/" class="hover:text-white transition">Download Brochure</a></li>
                            <li><a href="/admissions" class="hover:text-white transition">Admissions</a></li>
                            <li><a href="/contact" class="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Programs</h4>
                        <ul class="space-y-2 text-sm">
                            <li><a href="/academics/b-pharm" class="hover:text-white transition">B. Pharm</a></li>
                            <li><a href="/academics/d-pharm" class="hover:text-white transition">D. Pharm</a></li>
                            <li><a href="/academics/m-pharm" class="hover:text-white transition">M. Pharm</a></li>
                            <li><a href="/academics/pharm-d" class="hover:text-white transition">Pharm. D</a></li>
                            <li><a href="/mandatory-disclosure" class="hover:text-white transition">Mandatory Disclosure</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 class="text-white font-bold mb-4">Connect</h4>
                        <ul class="space-y-2 text-sm mb-4">
                            <li><i class="fas fa-map-marker-alt mr-2"></i>SNS Kalvi Nagar, Sathy Main Road, Saravanampatti (PO),<br />Coimbatore - 641035.</li>
                            
                            <li><a href="tel:+919003655855" class="hover:text-white transition"><i
                                        class="fas fa-phone mr-2"></i>Admission - +91 90036 55855</a></li>
                            <li><a href="tel:+9199409 56789" class="hover:text-white transition"><i
                                        class="fas fa-phone mr-2"></i>Office - +91 99409 56789</a></li>
                            <li><a href="mailto:principal@snscphs.org" class="hover:text-white transition whitespace-nowrap"><i
                                        class="fas fa-envelope mr-2"></i>Email - principal@snscphs.org</a></li>
                            <li><a href="mailto:job@snsgroups.com" class="hover:text-white transition"><i
                                        class="fas fa-briefcase mr-2"></i>Career - job@snsgroups.com</a></li>
                        </ul>
                        <div class="flex space-x-3">
                            <a href="https://www.facebook.com/snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.instagram.com/snsinstitutions/" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="https://www.youtube.com/@snsinstitutions" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-youtube"></i>
                            </a>
                            <a href="https://www.linkedin.com/school/snsinstitutions/" target="_blank" class="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-800 pt-8 text-center text-sm">
                    <p>&copy; 2025 SNS College of Pharmacy and Health Sciences. All rights reserved.</p>
                    <p class="mt-2 text-primary-400 font-semibold">We trigger the curiosity in the young minds to explore the world's needs.</p>
                    <p class="mt-1 text-xs">SNS Institutions: Sincerity, Nobility, Service</p>
                    <p class="mt-3 text-primary-400 font-bold"><i class="fas fa-headset mr-2"></i>Admission: +91 90036 55855</p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', function() {
                    mobileMenu.classList.toggle('hidden');
                });
            }
            
            // Close mobile menu when clicking a link
            document.querySelectorAll('#mobile-menu a').forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                });
            });
        </script>
        <!-- Instagram Floating Icon -->
        <a href="https://www.instagram.com/snsinstitutions/" class="instagram-float" target="_blank" rel="noopener noreferrer"
            title="Follow us on Instagram">
            <i class="fab fa-instagram"></i>
        </a>
        <!-- WhatsApp Floating Icon -->
        <a href="https://wa.me/919003655855" class="whatsapp-float" target="_blank" rel="noopener noreferrer"
            title="Chat with us on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>

        <!-- Mobile Bottom Navigation -->
        <div id="mobile-bottom-nav" class="fixed bottom-0 left-0 w-full bg-white shadow-[0_-4px_15px_rgba(0,0,0,0.08)] z-[9999] md:hidden transition-all pointer-events-auto">
            <div class="flex justify-around items-center h-[70px] px-1 pb-1">
                <a href="/" class="flex flex-col items-center justify-center w-full h-full ${activePage === 'home' ? 'text-primary-600' : 'text-gray-400'} transition-colors">
                    <i class="fas fa-home text-[22px] mb-1"></i>
                    <span class="text-[10px] font-semibold">Home</span>
                </a>
                <a href="https://iipc.snsgroups.com" target="_blank" class="flex flex-col items-center justify-center w-full h-full text-gray-400 transition-colors">
                    <i class="fas fa-chart-line text-[22px] mb-1"></i>
                    <span class="text-[10px] font-semibold">Placements</span>
                </a>
                <a href="/academics/" class="nav-item elevated ${activePage.startsWith('academics') ? 'active' : ''}" id="nav-programs">
                    <div class="icon-wrapper">
                        <i class="fas fa-graduation-cap text-[22px] mb-1"></i>
                    </div>
                    <span class="text-[10px] font-semibold">Programs</span>
                </a>
                <a href="/about/" class="flex flex-col items-center justify-center w-full h-full ${activePage === 'about' ? 'text-primary-600' : 'text-gray-400'} transition-colors">
                    <i class="fas fa-info-circle text-[22px] mb-1"></i>
                    <span class="text-[10px] font-semibold">About Us</span>
                </a>
                <a href="/apply-now/" class="flex flex-col items-center justify-center w-full h-full ${activePage === 'apply' ? 'text-primary-600' : 'text-gray-400'} transition-colors">
                    <i class="fas fa-pen-to-square text-[22px] mb-1"></i>
                    <span class="text-[10px] font-semibold">Apply</span>
                </a>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Export PageHeader for use in other components
export { PageHeader };
