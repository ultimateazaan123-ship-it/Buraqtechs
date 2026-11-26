export const site = {
  name: "Buraqtechs",
  tagline: "Fastest And Most Reliable Growth",
  phone: "+923313863069",
  phoneDisplay: "+92 331 386 3069",
  email: "contact@buraqtechs.com",
  address: "B132-A1, Block 1 Gulistan-e-Johar, Karachi",
  coords: "24.9204° N, 67.1344° E",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/buraqtechs" },
    { label: "Facebook", href: "https://www.facebook.com/share/1Gsh715JUQ/" },
    { label: "Instagram", href: "https://www.instagram.com/buraqtechs?igsh=MXN4YnNobXk4dnc4dQ==" },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/services/", label: "Services" },
  { href: "/branding/", label: "Launch your brand" },
  { href: "/contact/", label: "Contact" },
];

export type ServiceId = "research" | "design" | "development" | "marketing" | "social" | "ecommerce";

export const services: { id: ServiceId; title: string; text: string }[] = [
  {
    id: "research",
    title: "Research & Product Hunting",
    text: "We eliminate guesswork by executing rigorous data-driven R&D and product hunting. Our team analyzes market gaps, evaluates competitor landscapes, and validates high-potential products to ensure your venture launches with a proven competitive edge.",
  },
  {
    id: "design",
    title: "Design",
    text: "Get our banner design team that meets all your marketing needs with professionally designed banners that are innovative, insightful and eye catching.",
  },
  {
    id: "development",
    title: "Development",
    text: "We can build responsive codes that allow you to remain in the competition across different platforms.",
  },
  {
    id: "marketing",
    title: "Marketing",
    text: "Think about yourself when you do a Google search. Our continuous efforts in digital marketing will yield results, Guaranteed!",
  },
  {
    id: "social",
    title: "Social Media",
    text: "We recognise that much more than a logo is a brand. The sum total of each and every experience that people have with your business is a brand.",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    text: "The Secret to Effectively Managing an E-Commerce Business in the best way to Enable you and your Desired Audience to achieve their target.",
  },
];

// `dark`: logo is already light-on-dark, so it skips the invert filter.
export const clients: { name: string; src: string; w: number; h: number; dark?: boolean }[] = [
  { name: "Burq", src: "/clients/burq.jpg", w: 244, h: 71 },
  { name: "SA", src: "/clients/SA-300x100.jpg", w: 300, h: 100 },
  { name: "Madiha Gohar", src: "/clients/madiha-gohar-300x100.jpg", w: 300, h: 100 },
  { name: "Azmin", src: "/clients/azmin-300x100.jpg", w: 300, h: 100 },
  { name: "Sila", src: "/clients/Sila-Logo-HD_page-0001-300x93.png", w: 300, h: 93 },
  { name: "Arsh", src: "/clients/arsh-300x100.jpg", w: 300, h: 100 },
  { name: "Alif", src: "/clients/alif.jpg", w: 232, h: 65 },
  { name: "Mechatronics Enterprise", src: "/clients/logosolarpngblk-1-300x100.png", w: 300, h: 100 },
  { name: "Forever", src: "/clients/FOREVER-300x67.jpg", w: 300, h: 67 },
  { name: "Luxe by Fatima", src: "/clients/luxe-by-fatima-300x100.jpg", w: 300, h: 100, dark: true },
  { name: "Owa Aziz", src: "/clients/OwaAziz.png", w: 260, h: 71 },
];

export const helpSubtitle = ["Enabling you and your desired audience to achieve", "Maximizing your investment returns"];

export const heroText =
  "We take your company from scratch, create its identity from the ground up and make it an ideal brand for target clients.";

export const testimonial = {
  title: "Amazing Designs and Quality Work!",
  quote:
    "Quality Work, Happy with all your services, website, hosting, logo designing and Marketing Campaigns.",
  name: "M.Jawaid",
  role: "CEO, Mechatronics",
};

export const about = {
  welcome: "Welcome to The Buraqtechs",
  quote: "People don’t buy what you do, they buy why you do it.",
  who: "IT Business and full-service Digital Agency, which focuses on innovative, IT and digital solutions that are holistic. We take your company from the ground up, create its reputation from the ground up and make it an ideal brand for your target clients.",
  mission:
    "We recognize that the brands and companies out there don't want a company that doesn't know how to do it. This is why we are a creative partner to get the business going and provide the cash flow for all the specifications the customer needs.",
  whatWeDo: ["Research & Product Hunting", "UI UX Design", "Website Development", "Marketing", "Social Media", "E-Commerce Store", "Tech Support"],
  process: [
    {
      name: "Discover",
      text: "This is the first step in the process and includes research and analysis to investigate how the website can best serve the needs of the business and its customers.",
    },
    {
      name: "Define",
      text: "It's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.",
    },
    {
      name: "Design",
      text: "To design an effective website we need all the information that it will include, this allows us to organize the text and graphics into the ideal persuasive argument.",
    },
    {
      name: "Develop",
      text: "Your website prototype is built to the specifications of the approved design concept. The static elements of your site are built using semantic HTML and the latest CSS techniques to ensure fast loading times and cross-browser compatibility, and any dynamic elements of your website are created with modern JavaScript.",
    },
    {
      name: "Deploy",
      text: "It means to push changes or updates from one deployment environment to another.",
    },
    {
      name: "Deliver",
      text: "With the site tested and ready to go, we upload it to your web server and do any required configuration, including set up of plugins and modules for content management systems, and installing Google Analytics or any other tracking software.",
    },
  ],
  whyIntro:
    "We are creative thinkers with full awareness of how IT services and goods are evolving across the globe, and we adapt them as quickly as we can to our customers.",
  why: [
    {
      title: "Best Quality Designs",
      text: "When it comes to design, quality is everything. But, a quality website design is much more than aesthetic. It's the usability. The expandability. The flexibility. The longevity. The creativity. We believe that a great website requires clean, responsive code, user friendly navigation search engine optimized page content and beautiful designs.",
    },
    { title: "24x7 Live Support", text: "24×7 hours Availability." },
    {
      title: "Result Oriented Projects",
      text: "Success is the objective of our projects and it translates to success for Customers that rely on us to achieve their business strategies.",
    },
  ],
  roi: {
    title: "Best ROI Techniques",
    lead: "The 5 best ways to measure your marketing ROI",
    items: [
      "The “magic” method",
      "Single attribution method",
      "Multi-touch attribution method",
      "Test vs control groups method",
      "Market Mix Modelling (MMM) method",
    ],
  },
  numbers: [
    { value: 67, suffix: "", label: "Satisfied Clients" },
    { value: 80, suffix: "", label: "Projects Completed" },
    { value: 28, suffix: "", label: "Accolades Earned" },
    { value: 56, suffix: "K+", label: "Lines of Code" },
  ],
};

export const contact = {
  kicker: "Contact for Premium Business Services",
  text: "Please feel free to contact us if you have any professional ideas, requests or feedback about our growing services or products.",
};

export type BrandIconName =
  | "search"
  | "pencil"
  | "machine"
  | "inspect"
  | "camera"
  | "launch"
  | "rocket"
  | "bulb"
  | "chart"
  | "shirt"
  | "laptop"
  | "chat"
  | "megaphone"
  | "headset";

// Clothing-brand building service ("Launch your brand" page, /branding/). Step names come from the 7-step graphic.
export const branding = {
  kicker: "More Than Marketing",
  lead: "Product-Based Marketing: From Concept to Customer.",
  closing: ["Your Vision.", "Our Execution."],
  closingSub: "Complete Brand Launch Services.",
  journey: [
    { icon: "search", title: "Product Hunting", tag: "Market Research & Trends", text: "We track demand, trends and competitors to find the products worth launching." },
    { icon: "pencil", title: "Designing", tag: "Patterns & Tech-packs", text: "Your ideas become production-ready patterns and detailed tech-packs." },
    { icon: "machine", title: "Stitching & Sampling", tag: "Production", text: "Samples are stitched, fitted and refined until every detail is right." },
    { icon: "inspect", title: "Quality Control", tag: "Final Inspection", text: "Every piece is inspected before it carries your label." },
    { icon: "camera", title: "Content Creation", tag: "Photography & Cataloging", text: "Studio photography and catalogues that let the product sell itself." },
    { icon: "launch", title: "Launching", tag: "Website & Shop Setup", text: "Your online store and shop channels go live, fully set up." },
    { icon: "rocket", title: "Performance Marketing", tag: "Scaling Sales", text: "Data-driven campaigns that turn a launch into lasting sales." },
  ] as { icon: BrandIconName; title: string; tag: string; text: string }[],
  launch: [
    { icon: "shirt", title: "A-Z Production", tag: "Stitching, Photo, Print", text: "One team for the whole run: stitching, printing and product photography, managed end to end so your collection arrives launch-ready.", featured: true },
    { icon: "bulb", title: "Plan & Strategy", tag: "Step 01", text: "Positioning, pricing and a launch roadmap built around your audience." },
    { icon: "chart", title: "R&D & Market Fit", tag: "Step 02", text: "We validate the niche and the product before a single piece is produced." },
    { icon: "laptop", title: "Web Development", tag: "Step 04", text: "A fast, conversion-focused store that is ready to sell from day one." },
    { icon: "chat", title: "Consultation", tag: "Step 05", text: "Direct access to our team for decisions on product, pricing and growth." },
    { icon: "megaphone", title: "Marketing Service", tag: "Step 06", text: "Social, content and paid campaigns that put the brand in front of buyers." },
    { icon: "headset", title: "Customer Support", tag: "Step 07", text: "Support that keeps customers happy and coming back after launch." },
  ] as { icon: BrandIconName; title: string; tag: string; text: string; featured?: boolean }[],
};
