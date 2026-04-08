// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
const siteContent = {
  hero: {
    title: "Crafting premium properties for modern city living.",
    text: "Skyline Builders delivers thoughtfully planned apartments, villas, and commercial spaces with strong design standards, transparent execution, and on-time handover.",
    metrics: [
      { value: "18+", label: "Projects Delivered" },
      { value: "1,250+", label: "Happy Families" },
      { value: "22 Lakh+", label: "Sq. Ft. Developed" }
    ],
    highlight: {
      name: "Aurora Heights",
      text: "A landmark residential community with sky gardens, wellness amenities, co-working lounges, and seamless access to schools, business hubs, and transit.",
      badges: ["3 & 4 BHK", "Possession 2027", "Clubhouse + Pool"]
    }
  },
  services: [
    {
      icon: "01",
      title: "Residential Development",
      text: "Luxury apartments, gated villa communities, and plotted developments designed for comfort and long-term appreciation."
    },
    {
      icon: "02",
      title: "Commercial Projects",
      text: "Retail spaces, office towers, and mixed-use destinations built around visibility, flexibility, and value generation."
    },
    {
      icon: "03",
      title: "Construction Management",
      text: "End-to-end project supervision with milestone tracking, quality control, and delivery planning for every build phase."
    },
    {
      icon: "04",
      title: "Property Consultation",
      text: "Personalized guidance on investment opportunities, unit selection, pricing strategy, and project documentation."
    }
  ],
  properties: [
    {
      name: "Aurora Heights",
      location: "Sector 88, Gurgaon",
      price: "Starting from Rs. 1.95 Cr",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      meta: ["3 & 4 BHK", "Sky Deck", "RERA Approved"]
    },
    {
      name: "Palm Horizon Villas",
      location: "Sarjapur Road, Bengaluru",
      price: "Starting from Rs. 2.45 Cr",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      meta: ["Private Garden", "Smart Home", "Club Amenities"]
    },
    {
      name: "Urban Square Offices",
      location: "Baner, Pune",
      price: "Starting from Rs. 89 Lakh",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      meta: ["Grade A Offices", "Retail Frontage", "High Footfall"]
    }
  ],
  gallery: [
    {
      title: "Grand Lobby Arrival",
      tag: "Interior Design",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Premium Tower Facade",
      tag: "Architecture",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Skyline Rooftop Lounge",
      tag: "Amenities",
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80"
    },
    {
      title: "Construction Progress View",
      tag: "Execution",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80"
    }
  ],
  contact: {
    text: "Connect with our sales team for floor plans, site visits, investment guidance, and current offers across our flagship developments.",
    details: [
      { title: "Visit Sales Lounge", value: "Skyline Business Park, MG Road, Bengaluru" },
      { title: "Call Us", value: "+91 98765 43210" },
      { title: "Email", value: "sales@skylinebuilders.in" }
    ]
  }
};

const renderHero = () => {
  document.getElementById("hero-title").textContent = siteContent.hero.title;
  document.getElementById("hero-text").textContent = siteContent.hero.text;
  document.getElementById("highlight-name").textContent = siteContent.hero.highlight.name;
  document.getElementById("highlight-text").textContent = siteContent.hero.highlight.text;

  document.getElementById("hero-metrics").innerHTML = siteContent.hero.metrics
    .map(
      (metric) => `
        <article class="metric-card">
          <span class="metric-value">${metric.value}</span>
          <span>${metric.label}</span>
        </article>`
    )
    .join("");

  document.getElementById("highlight-badges").innerHTML = siteContent.hero.highlight.badges
    .map((badge) => `<span>${badge}</span>`)
    .join("");
};

const renderServices = () => {
  document.getElementById("service-grid").innerHTML = siteContent.services
    .map(
      (service) => `
        <article class="service-card">
          <div class="service-icon">${service.icon}</div>
          <h3>${service.title}</h3>
          <p>${service.text}</p>
        </article>`
    )
    .join("");
};

const renderProperties = () => {
  document.getElementById("property-grid").innerHTML = siteContent.properties
    .map(
      (property) => `
        <article class="property-card">
          <div class="property-image" style="background-image:url('${property.image}')"></div>
          <div class="property-content">
            <p class="eyebrow">${property.location}</p>
            <h3>${property.name}</h3>
            <div class="property-meta">
              ${property.meta.map((item) => `<span>${item}</span>`).join("")}
            </div>
            <p class="property-price">${property.price}</p>
          </div>
        </article>`
    )
    .join("");
};

const renderGallery = () => {
  document.getElementById("gallery-grid").innerHTML = siteContent.gallery
    .map(
      (item) => `
        <article class="gallery-card">
          <div class="gallery-image" style="background-image:url('${item.image}')"></div>
          <div class="gallery-content">
            <span class="gallery-tag">${item.tag}</span>
            <h3>${item.title}</h3>
          </div>
        </article>`
    )
    .join("");
};

const renderContact = () => {
  document.getElementById("contact-text").textContent = siteContent.contact.text;
  document.getElementById("contact-details").innerHTML = siteContent.contact.details
    .map(
      (detail) => `
        <div class="contact-detail">
          <strong>${detail.title}</strong>
          <span>${detail.value}</span>
        </div>`
    )
    .join("");

  document.getElementById("interest").innerHTML = siteContent.properties
    .map((property) => `<option>${property.name}</option>`)
    .join("");
};

const setupNavigation = () => {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (!toggle || !links) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderServices();
  renderProperties();
  renderGallery();
  renderContact();
  setupNavigation();
});
