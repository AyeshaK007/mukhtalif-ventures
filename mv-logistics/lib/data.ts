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
    short: 'Better Logistics solution provider in Pakistan trusted for warehousing, supply chain, and freight systems.',
    description:
      'Mukhtalif Ventures Pvt Ltd. is making us one of the most diversified conglomerates in Pakistan. MVPL is a trusted and large logistics provider founded and promoted keeping private values in mind. We majorly focus on warehousing systems, supply chain systems, and freight systems that support all aspects of our clients’ requirements in Karachi and across key market centers in Pakistan.',
    icon: 'Truck',
    features: [
      'Customized value-added logistics solutions for modern trade requirements',
      'Safe logistics services on a large scale from pickup to destination',
      'Comprehensive warehousing, supply chain, and freight management',
      'Streamlined processes working quickly and efficiently'
    ],
    benefits: [
      'Significant and meaningful client relationships built on trust',
      'Transparent support understanding your core value focuses',
      'Exclusive privately owned local company with legacy care',
      'Dedicated local team taking care of your operations'
    ],
    process: [
      { title: 'Intake & Planning', text: 'Comprehending client requirements and scheduling pickup protocols.' },
      { title: 'Secure Handling', text: 'Safely transporting items from pickup location to the destination place.' },
      { title: 'Warehousing & Staging', text: 'Managing inventory through structured storage and supply chain nodes.' },
      { title: 'Final Delivery', text: 'Ensuring products arrive safely, quickly, and efficiently.' }
    ],
    faqs: [
      { q: 'What regions do you cover for local logistics?', a: 'We operate extensively out of Karachi and cover key market centers across Pakistan.' },
      { q: 'Can solutions be customized for modern trade?', a: 'Yes, we offer customized value-added logistics solutions tailored to modern trade requirements.' }
    ],
  },
  {
    slug: 'international-logistics',
    title: 'International Logistics',
    short: 'Going global? Let us handle sourcing, freight forwarding, customs clearance, and global trade compliance.',
    description:
      'International logistics is critical for businesses operating in global markets, ensuring goods are delivered timely and cost-effectively. It encompasses sourcing, procurement, manufacturing, warehousing, distribution, customs clearance, import/export regulations, and freight forwarding.',
    icon: 'Globe',
    features: [
      'Customs clearance, import/export regulations, and compliance management',
      'Freight forwarding and international transportation management',
      'Trade finance alignment and advanced logistics technology support',
      'Streamlined global supply chain to reduce costs and improve delivery times'
    ],
    benefits: [
      'Enhanced competitiveness in the global economy',
      'Specialized knowledge and resources to control resource flow from origin to consumption',
      'Optimized supply chains powered by industry best practices',
      'Reliable navigation through complex global trade regulations'
    ],
    process: [
      { title: 'Sourcing & Procurement', text: 'Coordinating international origin checkpoints and compliance.' },
      { title: 'Customs Clearance', text: 'Managing import/export regulations and trade documentation.' },
      { title: 'Freight Forwarding', text: 'Overseeing global transport and carrier coordination.' },
      { title: 'Final Distribution', text: 'Delivering goods efficiently to end customers.' }
    ],
    faqs: [
      { q: 'What does international logistics cover?', a: 'It covers procurement, warehousing, distribution, customs clearance, and freight forwarding.' },
      { q: 'How do you ensure cost-effective delivery?', a: 'By utilizing advanced logistics technology and optimized global supply chain routing.' }
    ],
  },
  {
    slug: 'warehousing-management',
    title: 'Warehousing Management',
    short: 'State-of-the-art warehousing solutions with advanced security, fire suppression, and climate control technology.',
    description:
      'Mukhtalif Ventures Pvt Ltd. is a leading warehousing company operating since 2018, offering state-of-the-art solutions to startups and multinational corporations. Our strategically located facilities feature advanced security systems, fire suppression, and climate control technology.',
    icon: 'Package',
    features: [
      'Advanced security systems and fire suppression infrastructure',
      'Climate control technology providing a secure environment',
      'Order fulfillment, inventory management, and transportation services',
      'Real-time inventory tracking and reporting through our online portal'
    ],
    benefits: [
      'Affordable and customized solutions tailored to unique business needs',
      'Complete transparency and visibility into product movements',
      'Round-the-clock customer service team addressing all queries',
      'Trusted partnership ensuring secure storage and precise delivery'
    ],
    process: [
      { title: 'Intake & Assessment', text: 'Analyzing unique warehousing needs and allocation.' },
      { title: 'Secure Storage', text: 'Placing items in climate-controlled and monitored facilities.' },
      { title: 'Inventory Control', text: 'Managing stock levels and real-time portal reporting.' },
      { title: 'Fulfillment', text: 'Executing order processing and outbound delivery.' }
    ],
    faqs: [
      { q: 'Are your warehouses temperature-controlled?', a: 'Yes, our facilities feature climate control technology alongside advanced security systems.' },
      { q: 'Can I track my inventory in real time?', a: 'Yes, clients can access real-time inventory tracking and reporting through our online portal.' }
    ],
  },
  {
    slug: 'clearing-and-forwarding',
    title: 'Clearing & Forwarding',
    short: 'Expert customs clearance, documentation, and flexible freight forwarding services partnering with leading carriers.',
    description:
      'Mukhtalif Ventures Pvt Ltd. specializes in customs clearance, freight forwarding, and logistics services since 2018. Our expert team ensures products are cleared quickly and efficiently, minimizing delays and avoiding unnecessary costs through leading shipping lines and airlines.',
    icon: 'ShieldCheck',
    features: [
      'Expert navigation of complex customs regulations and procedures',
      'Flexible freight forwarding solutions tailored to budget and requirements',
      'Partnerships with leading shipping lines, airlines, and cargo carriers',
      'Integrated warehousing, distribution, and transportation support'
    ],
    benefits: [
      'Minimized border delays and avoidance of unnecessary costs',
      'Complete visibility with 24/7 customer service and real-time tracking',
      'Streamlined customs clearance and logistics operations',
      'Budget-friendly global routing options'
    ],
    process: [
      { title: 'Documentation', text: 'Preparing and verifying customs paperwork and declarations.' },
      { title: 'Clearance', text: 'Liaising with port authorities to clear goods rapidly.' },
      { title: 'Forwarding', text: 'Booking and managing space with top cargo carriers and shipping lines.' },
      { title: 'Delivery & Tracking', text: 'Providing live visibility until final handover.' }
    ],
    faqs: [
      { q: 'How do you handle port delays?', a: 'Our experts are well-versed in procedures to clear products quickly and minimize delays.' },
      { q: 'Is tracking available for clearing and forwarding?', a: 'Yes, through our portal with 24/7 customer support.' }
    ],
  },
  {
    slug: 'dangerous-goods-handling',
    title: 'Dangerous Goods Handling',
    short: 'Safe, certified packaging, labeling, documentation, and transportation of hazardous materials.',
    description:
      'Operating since 2018, Mukhtalif Ventures Pvt Ltd. is a trusted provider of dangerous goods handling services. We combine state-of-the-art equipment, trained professionals, and strict regulatory compliance to manage hazardous materials safely and securely.',
    icon: 'Cpu',
    features: [
      'Specialized packaging, labeling, and documentation services',
      'Trained professionals experienced in handling hazardous materials',
      'Strict adherence to local and international safety regulations',
      'Secure, compliant transportation management'
    ],
    benefits: [
      'Mitigation of complexity and risks associated with hazardous items',
      'Guaranteed compliance with latest industry standards and laws',
      'Tailored solutions matching unique safety requirements',
      'Absolute peace of mind through certified operational handling'
    ],
    process: [
      { title: 'Classification', text: 'Evaluating hazardous material properties and regulatory requirements.' },
      { title: 'Packaging & Labeling', text: 'Applying certified packaging standards and safety labels.' },
      { title: 'Documentation', text: 'Completing complex legal and transport declarations.' },
      { title: 'Transport', text: 'Executing secure, regulated transit to the destination.' }
    ],
    faqs: [
      { q: 'Are your staff certified for hazardous materials?', a: 'Yes, our team undergoes specialized training in handling hazardous goods.' },
      { q: 'Do you manage dangerous goods documentation?', a: 'Yes, we guide customers through all complex documentation requirements.' }
    ],
  },
  {
    slug: 'sea-freight',
    title: 'Sea Freight',
    short: 'Reliable FCL, LCL, and project cargo handling delivered on time through a global partner network.',
    description:
      'Mukhtalif Ventures Pvt Ltd. provides reliable and cost-effective sea freight services since 2018. Featuring Full Container Load (FCL), Less than Container Load (LCL), and specialized project cargo handling for oversized heavy shipments worldwide.',
    icon: 'Globe',
    features: [
      'Full Container Load (FCL) and Less than Container Load (LCL) options',
      'Specialized project cargo handling for oversized and heavy shipments',
      'Global network of trusted partners and agents spanning international ports',
      'Real-time shipment monitoring and milestone tracking technology'
    ],
    benefits: [
      'Cost-effective bulk and fractional shipping solutions',
      'Tailored cargo handling matching unique volume needs',
      'End-to-end status visibility across global maritime routes',
      'Consistent on-time delivery performance in perfect condition'
    ],
    process: [
      { title: 'Booking & Evaluation', text: 'Determining whether FCL, LCL, or project cargo fits best.' },
      { title: 'Port Staging', text: 'Consolidating and containerizing goods securely.' },
      { title: 'Ocean Transit', text: 'Monitoring maritime movement via global partner networks.' },
      { title: 'Port Discharge', text: 'Clearing and dispatching cargo to the final destination.' }
    ],
    faqs: [
      { q: 'What is the difference between FCL and LCL?', a: 'FCL uses a full container for your cargo, while LCL consolidates smaller shipments.' },
      { q: 'Can you handle heavy or oversized cargo?', a: 'Yes, we offer specialized project cargo handling services for heavy and oversized goods.' }
    ],
  },
];

export const stats = [
  { value: '50', suffix: '', label: 'Company Employees' },
  { value: '30', suffix: '+', label: 'Satisfied Clients' },
  { value: '100', suffix: 'k', label: 'Tones Transported' },
  { value: '2018', suffix: '', label: 'Established Year', note: 'Industry Experience' },
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
  { year: '2018', title: 'Company Inception', text: 'Founded with a commitment to providing innovative and reliable distribution solutions in Pakistan.' },
  { year: '2020', title: 'Network Expansion', text: 'Scaled our warehousing and temperature-controlled logistics capabilities nationwide.' },
  { year: '2023', title: 'Technology Integration', text: 'Rolled out advanced digital portals, real-time tracking, and automated inventory systems.' },
  { year: '2026', title: 'Industry Leadership', text: 'Recognized as a leading diversified conglomerate and trusted logistics partner across Pakistan.' }
];

export const values = [
  { title: 'Customer First', text: 'We endeavor to comprehend what clients need and take care of you through meaningful relationships.' },
  { title: 'Employee Heart', text: 'Happy workers create happy clients. Our legacy employees drive our core commitment.' },
  { title: 'Safety & Compliance', text: 'Uncompromising adherence to regulations, especially for temperature-controlled and hazardous goods.' },
  { title: 'Innovation', text: 'Continuously investing in technology and infrastructure to exceed client expectations.' }
];

export const leadership = [
  { name: 'Management Board', role: 'Executive Operations' },
  { name: 'Supply Chain Directors', role: 'Logistics Strategy' },
  { name: 'Warehouse Heads', role: 'Facility Management' },
  { name: 'Compliance Leads', role: 'Regulatory & Safety' }
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