/**
 * ============================================================
 *  CLIENT CONFIG — Edit ONLY this file to rebrand this site
 *  for a new clinic/business client.
 *  One file. One client. 15 minutes.
 *
 *  To reuse for a new client:
 *  1. Duplicate this whole folder (e.g. "jamela" -> "new-client")
 *  2. Edit every value below
 *  3. Change the gold accent color in client-theme.css (:root --primary-red)
 *  4. Done — layout, animations, and structure never change.
 * ============================================================
 */

const CLIENT = {

  // ── Core Identity ─────────────────────────────────────────
  name:        "Jamela",
  nameArabic:  "چميلة",
  tagline:     "چميلة.. عيشي الفرق",
  pageTitle:   "عيادات چميلة | Jamela Clinics - سوهاج",
  metaDescription: "عيادات چميلة - عيادات متخصصة في العناية بالبشرة والتجميل الطبي والتغذية العلاجية، شارع الجمهورية، سوهاج. چميلة.. عيشي الفرق.",

  // ── Contact ───────────────────────────────────────────────
  phones:     ["011 49 88 1909", "0155 63 86 734", "012 02 99999 1"],
  whatsapp:   "201149881909",     // TODO Yousef: confirm which of the 3 numbers is on WhatsApp
  email:      "",                 // TODO Yousef: real email if any
  address:    "ش الجمهورية، برج صلاح ضيف الله الذهبي، أعلى ماكدونالدز، سوهاج",
  facebook:   "https://web.facebook.com/jamelaclinics",

  // ── Hero Section ──────────────────────────────────────────
  hero: {
    title:       "رعاية طبية وتجميلية متكاملة في قلب سوهاج",
    subtitle:    "چميلة.. عيشي الفرق",
    description: "عيادات متخصصة في العناية بالبشرة والتجميل الطبي والتغذية العلاجية، بإشراف نخبة من الأطباء المتخصصين، وبالتعاون مع أفضل العلامات التجميلية والطبية",
    badges: [
      { icon: "fas fa-user-doctor", text: "أطباء متخصصون" },
      { icon: "fas fa-award",       text: "منتجات وتقنيات عالمية" },
      { icon: "fas fa-heart",       text: "بيئة آمنة ومريحة" },
    ],
    primaryCta: { text: "احجزي موعدك الآن", action: "whatsapp" },
    secondaryCta: { text: "تابعينا على فيسبوك", action: "facebook" },
  },

  // ── Stats Strip ───────────────────────────────────────────
  stats: [
    { number: "3+",       label: "أطباء متخصصون",         sublabel: "بشرة، تجميل، وتغذية علاجية" },
    { number: "2+",       label: "علامات عالمية شريكة",    sublabel: "Lixora · Solumart · Eva Pharma" },
    { number: "أسبوعياً", label: "فعاليات صحية وتجميلية", sublabel: "كشوفات وهدايا مع كل فعالية" },
    { number: "سوهاج",    label: "شارع الجمهورية",         sublabel: "برج ضيف الله الذهبي" },
  ],

  // ── Services (features grid) ─────────────────────────────
  services: [
    { icon: "fas fa-spa",            title: "العناية بالبشرة والتجميل الطبي", description: "بروتوكولات عناية متقدمة وتقنيات تجميل طبي بإشراف متخصصين، بالتعاون مع علامات عالمية مثل Lixora" },
    { icon: "fas fa-leaf",           title: "التغذية العلاجية وإدارة الوزن", description: "برامج متابعة غذائية وعلاج طبيعي بإشراف طبي، مع قياس دقيق لمكونات الجسم" },
    { icon: "fas fa-hand-sparkles",  title: "العناية الجلدية المتقدمة", description: "تشخيص ومتابعة حالات البشرة، ومنتجات عناية منزلية موصى بها طبياً" },
    { icon: "fas fa-syringe",        title: "الفيلر وحقن التجميل", description: "جلسات فيلر وSkin Booster بإشراف طبي كامل ومعايير سلامة عالية" },
    { icon: "fas fa-weight-scale",   title: "قياس تكوين الجسم", description: "أحدث أجهزة InBody لقياس نسبة الدهون والعضلات والماء بدقة" },
    { icon: "fas fa-user-doctor",    title: "استشارات طبية متخصصة", description: "جلسات استشارة فردية لتحديد أنسب خطة علاج أو عناية لكل حالة" },
  ],

  // ── Doctors / Team (pricing-grid layout reused) ──────────
  doctors: [
    {
      initial: "أ", name: "د. أمنية عبدالله", role: "العناية بالبشرة", featured: false,
      focus: ["بروتوكولات عناية متقدمة بالبشرة", "شراكة علامة Solumart", "استشارات فردية"],
    },
    {
      initial: "ف", name: "د. فريدة سامي", role: "العلاج الطبيعي والتغذية العلاجية", featured: true,
      focus: ["برامج إدارة الوزن", "قياس تكوين الجسم InBody", "متابعة دورية"],
    },
    {
      initial: "ر", name: "د. رحاب محبوب الله", role: "الجلدية والتجميل", featured: false,
      focus: ["فيلر وSkin Booster", "شراكة علامة Lixora", "حماية ونضارة البشرة"],
    },
  ],

  // ── Final CTA ─────────────────────────────────────────────
  cta: {
    title:    "جاهزة تعيشي الفرق؟",
    subtitle: "احجزي موعدك الآن مع أطباء عيادات چميلة في سوهاج",
  },

};

// ── Auto-render engine — do not edit below this line ────────
document.addEventListener("DOMContentLoaded", () => {

  document.title = CLIENT.pageTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content", CLIENT.metaDescription);

  const wa = () => window.open(`https://wa.me/${CLIENT.whatsapp}`, "_blank");
  const fb = () => window.open(CLIENT.facebook, "_blank");
  const actionFns = { whatsapp: wa, facebook: fb };

  // Hero
  document.querySelectorAll("[data-hero-title]").forEach(el => el.textContent = CLIENT.hero.title);
  document.querySelectorAll("[data-hero-subtitle]").forEach(el => el.textContent = CLIENT.hero.subtitle);
  document.querySelectorAll("[data-hero-description]").forEach(el => el.textContent = CLIENT.hero.description);

  const badgesEl = document.getElementById("heroBadges");
  if (badgesEl) {
    badgesEl.innerHTML = CLIENT.hero.badges.map(b => `
      <div class="badge"><i class="${b.icon}"></i><span>${b.text}</span></div>
    `).join("");
  }

  document.querySelectorAll("[data-cta='primary']").forEach(el => {
    el.textContent = CLIENT.hero.primaryCta.text;
    el.onclick = actionFns[CLIENT.hero.primaryCta.action];
  });
  document.querySelectorAll("[data-cta='secondary']").forEach(el => {
    el.textContent = CLIENT.hero.secondaryCta.text;
    el.onclick = actionFns[CLIENT.hero.secondaryCta.action];
  });

  // Stats
  const statsEl = document.getElementById("statsGrid");
  if (statsEl) {
    statsEl.innerHTML = CLIENT.stats.map(s => `
      <div class="stat-card fade-in">
        <div class="stat-number">${s.number}</div>
        <div class="stat-label">${s.label}</div>
        <div class="stat-sublabel">${s.sublabel}</div>
      </div>
    `).join("");
  }

  // Services
  const servicesEl = document.getElementById("servicesGrid");
  if (servicesEl) {
    servicesEl.innerHTML = CLIENT.services.map(s => `
      <div class="feature-card fade-in">
        <div class="feature-icon"><i class="${s.icon}"></i></div>
        <h3>${s.title}</h3>
        <p>${s.description}</p>
      </div>
    `).join("");
  }

  // Doctors
  const doctorsEl = document.getElementById("doctorsGrid");
  if (doctorsEl) {
    doctorsEl.innerHTML = CLIENT.doctors.map(d => `
      <div class="pricing-card fade-in ${d.featured ? "popular" : ""}">
        ${d.featured ? '<div class="pricing-badge">الأكثر طلباً</div>' : ""}
        <div class="doctor-avatar">${d.initial}</div>
        <h3>${d.name}</h3>
        <span class="doctor-role">${d.role}</span>
        <ul class="pricing-features">
          ${d.focus.map(f => `<li>✨ ${f}</li>`).join("")}
        </ul>
      </div>
    `).join("");
  }

  // CTA section
  document.querySelectorAll("[data-cta-title]").forEach(el => el.textContent = CLIENT.cta.title);
  document.querySelectorAll("[data-cta-subtitle]").forEach(el => el.textContent = CLIENT.cta.subtitle);
  document.querySelectorAll("[data-final-cta='primary']").forEach(el => {
    el.textContent = "احجزي عبر واتساب";
    el.onclick = wa;
  });
  document.querySelectorAll("[data-final-cta='secondary']").forEach(el => {
    el.textContent = "تواصلي معنا على فيسبوك";
    el.onclick = fb;
  });

  // Footer / contact
  document.querySelectorAll("[data-brand-name]").forEach(el => el.textContent = CLIENT.name);
  document.querySelectorAll("[data-brand-name-arabic]").forEach(el => el.textContent = CLIENT.nameArabic);
  document.querySelectorAll("[data-brand-tagline]").forEach(el => el.textContent = CLIENT.tagline);
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = CLIENT.phones.join(" | "));
  document.querySelectorAll("[data-address]").forEach(el => el.textContent = CLIENT.address);
  document.querySelectorAll("[data-facebook-link]").forEach(el => el.href = CLIENT.facebook);
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => el.href = `https://wa.me/${CLIENT.whatsapp}`);

  // Re-observe fade-in elements injected above — the shared engine's
  // ScrollAnimations only observes elements present at its own DOMContentLoaded
  // run, which fires before this script's dynamic content exists.
  if ("IntersectionObserver" in window) {
    const lateObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll("#statsGrid .fade-in, #servicesGrid .fade-in, #doctorsGrid .fade-in")
      .forEach(el => lateObserver.observe(el));
  } else {
    document.querySelectorAll("#statsGrid .fade-in, #servicesGrid .fade-in, #doctorsGrid .fade-in")
      .forEach(el => el.classList.add("visible"));
  }

});
