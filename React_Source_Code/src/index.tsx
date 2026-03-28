import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { Layout, PageHeader } from './components/layout'
import { HomePage } from './pages/home'
import { BPharmPage, DPharmPage, MPharmPage, PharmDPage } from './pages/academics'
import { FacilitiesPage } from './pages/facilities'
import { InnovationPage, AboutPage, ContactPage, AdmissionsPage } from './pages/remaining'
import { MandatoryDisclosurePage } from './pages/mandatory-disclosure'
import { GalleryPage, SportsClubsPage, BrochurePage } from './pages/gallery-sports'
import { TransportPage } from './pages/transport'
import { EventsPage } from './pages/events'
import { SuccessStoriesPage } from './pages/success-stories'

const app = new Hono()

// Diagnostic route
app.get('/health', (c) => c.text('Hono is running!'))
app.get('/api/test', (c) => c.json({ status: 'ok', runtime: 'edge' }))

// Enable CORS for API routes
app.use('/api/*', cors())

// API route for admission inquiry
app.post('/api/admission-inquiry', async (c) => {
    const data = await c.req.json()
    console.log('Admission Inquiry:', data)

    // In production, you would send email or save to database
    return c.json({
        success: true,
        message: 'Thank you! Our admissions team will contact you within 24 hours.'
    })
})

// Home Page
app.get('/', (c) => {
    return c.html(Layout(HomePage(), 'Home', 'home'))
})

// Academic Pages
app.get('/academics/b-pharm', (c) => {
    return c.html(Layout(BPharmPage(), 'B. Pharm', 'academics-b-pharm'))
})

app.get('/academics/d-pharm', (c) => {
    return c.html(Layout(DPharmPage(), 'D. Pharm', 'academics-d-pharm'))
})

app.get('/academics/m-pharm', (c) => {
    return c.html(Layout(MPharmPage(), 'M. Pharm', 'academics-m-pharm'))
})

app.get('/academics/pharm-d', (c) => {
    return c.html(Layout(PharmDPage(), 'Pharm. D', 'academics-pharm-d'))
})

// Facilities Page
app.get('/facilities', (c) => {
    return c.html(Layout(FacilitiesPage(), 'Facilities', 'facilities'))
})

// Innovation Hub Page
app.get('/innovation', (c) => {
    return c.html(Layout(InnovationPage(), 'Innovation Hub', 'innovation'))
})

// About Page
app.get('/about', (c) => {
    return c.html(Layout(AboutPage(), 'About Us', 'about'))
})

// Contact Page
app.get('/contact', (c) => {
    return c.html(Layout(ContactPage(), 'Contact Us', 'contact'))
})

// Mandatory Disclosure Page
app.get('/mandatory-disclosure', (c) => {
    return c.html(Layout(MandatoryDisclosurePage(), 'Mandatory Disclosure', 'mandatory-disclosure'))
})

// Admissions Page
app.get('/admissions', (c) => {
    return c.html(Layout(AdmissionsPage(), 'Admissions', 'admissions'))
})

// Gallery Page
app.get('/gallery', (c) => {
    return c.html(Layout(GalleryPage(), 'Campus Gallery', 'gallery'))
})

// Sports & Clubs Page
app.get('/sports-clubs', (c) => {
    return c.html(Layout(SportsClubsPage(), 'SPINE & 100+ Clubs', 'sports-clubs'))
})

// Brochure Page
app.get('/brochure', (c) => {
    return c.html(Layout(BrochurePage(), 'Digital Brochure', 'brochure'))
})

// Transport Page
app.get('/transport', (c) => {
    return c.html(Layout(TransportPage(), 'Transport Services', 'transport'))
})

// Events & Celebrations Page
app.get('/events', (c) => {
    return c.html(Layout(EventsPage(), 'Events', 'events'))
})

// Success Stories Page
app.get('/success-stories', (c) => {
    return c.html(Layout(SuccessStoriesPage(), 'Placements', 'success-stories'))
})

export default app
