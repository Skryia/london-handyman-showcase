/* London Handyman Services — vanilla + jQuery */

// ---- Data ----
const SERVICES = [
  { i: "🎨", t: "Painting & Decorating", d: "Interior and exterior. Walls, woodwork and flawless finishes." },
  { i: "🔨", t: "Repairs & Maintenance", d: "Doors, locks, fixtures, leaks, fittings — sorted properly." },
  { i: "🛋", t: "Furniture Assembly",   d: "Flat-pack, wardrobes, beds and built-ins, expertly assembled." },
  { i: "🚰", t: "Plumbing",              d: "Taps, toilets, leaks and minor installations done cleanly." },
  { i: "🔌", t: "Electrical",            d: "Sockets, lights, fittings and safe minor electrical work." },
  { i: "🪚", t: "Carpentry",             d: "Shelves, doors, skirting and custom timber work." },
  { i: "💡", t: "General Maintenance",   d: "The to-do list you never get round to — handled in one visit." },
  { i: "🌳", t: "Outdoor & Garden",      d: "Fence repairs, decking, gates and small outdoor projects." }
];

const WORK = [
  { src: "assets/work-1.jpg", title: "Living room repaint",       tag: "Painting",   tall: true  },
  { src: "assets/work-2.jpg", title: "Wardrobe assembly",         tag: "Furniture",  tall: false },
  { src: "assets/work-3.jpg", title: "Bathroom refresh",          tag: "Repairs",    tall: true  },
  { src: "assets/work-4.jpg", title: "Floating oak shelves",      tag: "Carpentry",  tall: false },
  { src: "assets/work-5.jpg", title: "Front door restoration",    tag: "Decorating", tall: false },
  { src: "assets/work-6.jpg", title: "Kitchen refit details",     tag: "Maintenance", tall: false }
];

const WHY = [
  { i: "🛡", t: "Reliable",       d: "We turn up on time, every time — and keep you updated throughout." },
  { i: "✨", t: "Quality Finish", d: "Attention to detail that turns small jobs into proud results." },
  { i: "⏱", t: "Quick Response", d: "Most enquiries answered the same day, often within the hour." },
  { i: "☺", t: "Friendly Service", d: "Polite, respectful and easy to chat with — no jargon." },
  { i: "✓", t: "Fully Insured",  d: "Comprehensive cover so you can relax while we work." },
  { i: "🔧", t: "Fully Equipped", d: "We arrive with the right tools and materials for the job." },
  { i: "£",  t: "Honest Pricing", d: "Clear quotes upfront — no surprises when we finish." },
  { i: "🔨", t: "Experienced",   d: "Years of trade experience across hundreds of London homes." }
];

const REVIEWS = [
  { name: "Sarah M.", area: "Islington", text: "Booked for a quick repair and ended up giving them three more jobs. Punctual, polite and the finish was spotless." },
  { name: "James T.", area: "Clapham",   text: "Hung shelves, fixed a leaking tap and assembled a wardrobe in one visit. Genuinely the easiest tradesman experience I've had in London." },
  { name: "Priya K.", area: "Hackney",   text: "Repainted our hallway and stairwell. The prep was meticulous and the result looks better than when we moved in." }
];

$(function () {
  // ---- Render grids ----
  const $services = $("#servicesGrid");
  SERVICES.forEach(function (s) {
    $services.append(
      '<article class="card reveal"><div class="ic">' + s.i + '</div>' +
      '<h3>' + s.t + '</h3><p>' + s.d + '</p></article>'
    );
  });

  const $gallery = $("#galleryGrid");
  WORK.forEach(function (w) {
    $gallery.append(
      '<figure class="reveal' + (w.tall ? ' tall' : '') + '">' +
      '<img src="' + w.src + '" alt="' + w.title + '" loading="lazy" />' +
      '<figcaption><span class="tag">' + w.tag + '</span><p>' + w.title + '</p></figcaption>' +
      '</figure>'
    );
  });

  const $why = $("#whyGrid");
  WHY.forEach(function (w) {
    $why.append(
      '<div class="card-dark reveal"><div class="ic">' + w.i + '</div>' +
      '<h3>' + w.t + '</h3><p>' + w.d + '</p></div>'
    );
  });

  const $rev = $("#reviewsGrid");
  REVIEWS.forEach(function (r) {
    const initials = r.name.split(" ").map(function (p) { return p[0]; }).join("");
    $rev.append(
      '<blockquote class="review reveal"><span class="quote">“</span>' +
      '<div class="stars">★★★★★</div><p>"' + r.text + '"</p>' +
      '<footer><span class="avatar">' + initials + '</span>' +
      '<span><span class="name">' + r.name + '</span><span class="area">' + r.area + '</span></span></footer>' +
      '</blockquote>'
    );
  });

  // ---- Year ----
  $("#year").text(new Date().getFullYear());

  // ---- Nav scroll state ----
  const $nav = $("#nav");
  function onScroll() { $nav.toggleClass("scrolled", window.scrollY > 16); }
  $(window).on("scroll", onScroll); onScroll();

  // ---- Mobile menu ----
  $("#navToggle").on("click", function () { $("#mobileMenu").toggleClass("open"); });
  $("#mobileMenu a").on("click", function () { $("#mobileMenu").removeClass("open"); });

  // ---- Reveal on scroll ----
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---- Active nav link via IntersectionObserver ----
  const ids = ["services","about","work","why","reviews","contact"];
  const linkMap = {};
  $(".nav-links a, .mobile-menu a").each(function () {
    const href = $(this).attr("href") || "";
    if (href.startsWith("#")) (linkMap[href.slice(1)] = linkMap[href.slice(1)] || []).push(this);
  });
  const navObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        $(".nav-links a").removeClass("active");
        (linkMap[e.target.id] || []).forEach(function (a) { $(a).addClass("active"); });
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  ids.forEach(function (id) { const el = document.getElementById(id); if (el) navObs.observe(el); });

  // ---- Back to top ----
  const $back = $("#backTop");
  $(window).on("scroll", function () { $back.toggleClass("show", window.scrollY > 800); });
  $back.on("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  // ---- Contact form (FormSubmit AJAX) ----
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();
    const $form = $(this);
    $.ajax({
      url: $form.attr("action"),
      method: "POST",
      data: $form.serialize(),
      dataType: "json"
    }).always(function () {
      $("#formMsg").prop("hidden", false);
      $form.find("input[name=name],input[name=phone],input[name=email],textarea").val("");
    });
  });
});
