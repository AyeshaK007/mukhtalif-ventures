export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'local-logistics',
    title: 'Local Logistics',
    short: 'Reliable domestic transportation and last-mile delivery solutions.',
    description:
      'Our local logistics network ensures your cargo moves swiftly and securely across domestic routes with real-time tracking and dedicated fleet support.',
    icon: 'truck',
    features: ['300+ cities on the network', 'Real-time route visibility', 'Dedicated & shared fleet options', 'Proof-of-delivery on every drop'],
    benefits: ['Fewer missed delivery windows', 'Lower cost per shipment at scale', 'Single point of contact for the whole route'],
    process: [
      { title: 'Intake', text: 'Shipment details and delivery windows are confirmed against live fleet capacity.' },
      { title: 'Routing', text: 'Loads are batched onto the most efficient trunk and last-mile routes.' },
      { title: 'In-transit', text: 'Drivers scan at every checkpoint, updating the shipment timeline automatically.' },
      { title: 'Delivery', text: 'Proof-of-delivery is captured and shared back within minutes.' },
    ],
    faqs: [
      { q: 'What is the average delivery window?', a: 'Most domestic routes deliver in 24–72 hours depending on distance and load type.' },
      { q: 'Can I track a local shipment live?', a: 'Yes, every shipment on this service is visible in real time.' },
    ],
  },
  {
    slug: 'international-logistics',
    title: 'International Logistics',
    short: 'Seamless cross-border freight and global supply chain coordination.',
    description:
      'We bridge global markets with comprehensive international transport strategies, managing border compliance, documentation, and carrier partnerships.',
    icon: 'globe',
    features: ['Global carrier partnerships', 'Customs documentation handling', 'End-to-end supply chain coordination', 'Multi-modal transit options'],
    benefits: ['Streamlined cross-border movement', 'Reduced regulatory compliance risks', 'Optimized international freight costs'],
    process: [
      { title: 'Consultation', text: 'Analyzing origin, destination, and regulatory paperwork requirements.' },
      { title: 'Booking', text: 'Securing cargo space and planning international freight legs.' },
      { title: 'Transit', text: 'Tracking movement across international borders and ports.' },
      { title: 'Handover', text: 'Final customs clearance and local destination delivery.' },
    ],
    faqs: [
      { q: 'Do you handle customs paperwork?', a: 'Yes, our team handles all required export and import documentation.' },
      { q: 'What regions do you cover internationally?', a: 'We manage shipments connecting through major global trade lanes.' },
    ],
  },
  {
    slug: 'warehousing-management',
    title: 'Warehousing Management',
    short: 'Secure storage, inventory control, and order fulfillment services.',
    description:
      'State-of-the-art facilities equipped with modern inventory management systems to store, pick, pack, and distribute your goods efficiently.',
    icon: 'warehouse',
    features: ['24/7 monitored facilities', 'Barcode & RFID inventory control', 'Bonded and general storage', 'Pick, pack & fulfilment services'],
    benefits: ['Lower carrying costs through shared space', 'Audit-ready inventory records', 'Faster order turnaround'],
    process: [
      { title: 'Onboarding', text: 'SKUs are mapped and inventory is received against a digital manifest.' },
      { title: 'Storage', text: 'Goods are placed by zone according to handling requirements.' },
      { title: 'Fulfilment', text: 'Orders are picked, packed and staged for outbound dispatch.' },
      { title: 'Reporting', text: 'Stock levels and movements are reported on a live dashboard.' },
    ],
    faqs: [
      { q: 'Do you offer short-term storage?', a: 'Yes, both short-term overflow and long-term contracted storage are available.' },
      { q: 'Is inventory insured?', a: 'All stored inventory is covered under our facility insurance policy by default.' },
    ],
  },
  {
    slug: 'clearing-forwarding',
    title: 'Clearing & Forwarding',
    short: 'Expert customs brokerage and documentation management.',
    description:
      'Navigating complex customs regulations is effortless with our licensed brokers who expedite clearance and prevent costly delays.',
    icon: 'file-check',
    features: ['Licensed customs brokerage', 'Tariff classification expertise', 'Duty and tax calculation support', 'Electronic documentation processing'],
    benefits: ['Elimination of costly port demurrage fees', 'Seamless compliance with trade laws', 'Hassle-free clearance procedures'],
    process: [
      { title: 'Review', text: 'Inspecting commercial invoices, bills of lading, and permits.' },
      { title: 'Declaration', text: 'Submitting digital paperwork to customs authorities.' },
      { title: 'Inspection', text: 'Facilitating official examinations when required.' },
      { title: 'Release', text: 'Securing cargo release and arranging onward transport.' },
    ],
    faqs: [
      { q: 'What documents are required for clearing?', a: 'Typically an invoice, packing list, bill of lading, and any product-specific certificates.' },
      { q: 'How long does customs clearance take?', a: 'Clearance usually takes 24–48 hours once all compliant paperwork is submitted.' },
    ],
  },
  {
    slug: 'dangerous-goods-handling',
    title: 'Dangerous Goods Handling',
    short: 'Certified, safe transport of hazardous and sensitive materials.',
    description:
      'Fully compliant handling and specialized transport protocols for hazardous, chemical, and sensitive cargo, managed by certified safety experts.',
    icon: 'shield-alert',
    features: ['Certified Hazmat handling staff', 'Specialized containment equipment', 'Strict regulatory compliance (IATA/IMO/Local)', 'Emergency response protocols'],
    benefits: ['Zero-compromise safety standards', 'Mitigation of legal and environmental risks', 'Authorized transport compliance documentation'],
    process: [
      { title: 'Classification', text: 'Verifying UN number, hazard class, and packing group requirements.' },
      { title: 'Packaging', text: 'Ensuring materials are packed and labeled per international safety codes.' },
      { title: 'Transport', text: 'Moving cargo via specialized, placarded vehicles or certified containers.' },
      { title: 'Delivery', text: 'Secure unloading with trained handlers and verified receiver sign-off.' },
    ],
    faqs: [
      { q: 'Are your drivers certified for hazardous materials?', a: 'Yes, all personnel handling dangerous goods undergo specialized safety certifications.' },
      { q: 'Do you handle chemical waste or restricted materials?', a: 'We handle approved industrial and commercial hazardous goods subject to legal verification.' },
    ],
  },
  {
    slug: 'sea-freight',
    title: 'Sea Freight',
    short: 'Cost-effective FCL and LCL container shipping across oceans.',
    description:
      'Reliable ocean freight solutions designed for bulk shipments and oversized cargo, balancing cost-efficiency with scheduled global port coverage.',
    icon: 'ship',
    features: ['Full Container Load (FCL) options', 'Less than Container Load (LCL) consolidation', 'Port-to-port and door-to-door services', 'Oversized and break-bulk handling'],
    benefits: ['Significant cost savings for bulk volumes', 'High capacity for heavy or large shipments', 'Dependable global shipping schedules'],
    process: [
      { title: 'Booking & Planning', text: 'Selecting container type and securing vessel space.' },
      { title: 'Stuffing', text: 'Loading and securing cargo securely inside containers.' },
      { title: 'Ocean Transit', text: 'Scheduled maritime shipping across major ocean routes.' },
      { title: 'Unloading', text: 'Port handling, container de-stuffing, and final transport dispatch.' },
    ],
    faqs: [
      { q: 'What is the difference between FCL and LCL?', a: 'FCL gives you an entire container to yourself, while LCL lets you share container space for smaller shipments.' },
      { q: 'How long does sea freight take?', a: 'Transit times vary widely by destination port, usually ranging from 1 to 6 weeks.' },
    ],
  },
];

export const stats = [
  { label: 'Cities Served', value: 300, suffix: '+' },
  { label: 'Shipments Handled', value: 1000, suffix: '+' },
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Coverage', value: 100, suffix: '%', note: 'Nationwide & Global' },
];

export const testimonials = [
  {
    quote: 'Mukhtalif Ventures transformed our supply chain reliability with exceptional service and clear communication.',
    name: 'Ayesha Raza',
    role: 'Supply Chain Manager',
  },
  {
    quote: 'We moved our warehousing and distribution to Mukhtalif Ventures and noticed immediate improvements in efficiency.',
    name: 'Bilal Sheikh',
    role: 'Operations Director',
  },
];

export const partners = ['MedCore Pharma', 'Alpine Retail Group', 'Vantage Health', 'Kashmir Foods', 'CityCare Hospitals', 'Northline Distributors'];

export const timeline = [
  { year: '1999', title: 'Founded', text: 'Started as a regional logistics operator.' },
  { year: '2007', title: 'Expansion', text: 'Introduced specialized transport fleets.' },
  { year: '2014', title: 'National network', text: 'Expanded warehousing and distribution coverage.' },
  { year: '2021', title: 'Digital tracking', text: 'Rolled out live shipment tracking for all clients.' },
  { year: '2026', title: 'Modernization', text: 'Deepened investment in digital logistics infrastructure.' },
];

export const values = [
  { title: 'Reliability', text: 'We deliver on the window we commit to, every time.' },
  { title: 'Compliance', text: 'Handling standards are built to meet strict regulatory scrutiny.' },
  { title: 'Transparency', text: 'Every shipment is visible, end to end, no exceptions.' },
  { title: 'Care', text: 'Client goods are handled with utmost professionalism and safety.' },
];

export const leadership = [
  { name: 'Omar Farooqi', role: 'Chief Executive Officer' },
  { name: 'Nadia Khan', role: 'Chief Operating Officer' },
  { name: 'Hassan Iqbal', role: 'Head of Operations' },
  { name: 'Zara Ahmed', role: 'Head of Network & Fleet' },
];

export const openPositions = [
  { title: 'Fleet Route Planner', location: 'Karachi', type: 'Full-time' },
  { title: 'Warehouse Operations Supervisor', location: 'Lahore', type: 'Full-time' },
  { title: 'Logistics Compliance Officer', location: 'Islamabad', type: 'Full-time' },
  { title: 'Customer Experience Associate', location: 'Karachi', type: 'Full-time' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.title, href: `/services/${s.slug}` })),
  },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
];