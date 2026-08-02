document.addEventListener("DOMContentLoaded", () => {
  const data = {
    systems: {
      title: "Systems & Algorithms",
      usage: "Core computer science problem solving",
      abilities: ["Algorithms", "Data structures", "Problem solving"],
      equip: "Sole creator",
      description: "This section will hold coursework, exercises, and technical projects centered on computational thinking and system-level design.",
      link: "#",
      gallery: ["assets/cs-placeholder.svg"]
    },
    web: {
      title: "Web & Software",
      usage: "Interactive software and interface work",
      abilities: ["Frontend", "UI design", "JavaScript"],
      equip: "Creator / collaborator",
      description: "This section will showcase web-based software, interactive tools, and polished interfaces built with modern front-end practices.",
      link: "#",
      gallery: ["assets/cs-placeholder.svg"]
    },
    research: {
      title: "Research & Analysis",
      usage: "Computational research and applied analysis",
      abilities: ["Research", "Data analysis", "Technical writing"],
      equip: "Sole creator / collaborator",
      description: "This section will hold research-driven projects, technical reports, and analytical work that connect computation with real-world questions.",
      link: "#",
      gallery: ["assets/cs-placeholder.svg"]
    }
  };

  const menuEls = document.querySelectorAll("#cs-menu li");
  const title = document.getElementById("panel-title");
  const usage = document.getElementById("cs-usage");
  const abilities = document.getElementById("cs-abilities");
  const equip = document.getElementById("cs-equip");
  const description = document.getElementById("cs-description");
  const projectLink = document.getElementById("cs-link");
  const gallery = document.getElementById("cs-gallery");

  function updatePanel(key) {
    const item = data[key];
    title.textContent = item.title;
    usage.textContent = item.usage;
    abilities.textContent = item.abilities.join(" • ");
    equip.textContent = item.equip;
    description.textContent = item.description;
    projectLink.href = item.link;

    gallery.innerHTML = "";
    if (item.gallery && item.gallery.length > 0) {
      gallery.hidden = false;
      item.gallery.forEach((src) => {
        const card = document.createElement("div");
        card.className = "gallery-card";
        card.innerHTML = `
          <img src="${src}" alt="${item.title} preview" loading="lazy">
        `;
        gallery.appendChild(card);
      });
    } else {
      gallery.hidden = true;
    }
  }

  menuEls.forEach((item) => {
    item.addEventListener("click", () => {
      menuEls.forEach((x) => x.classList.remove("selected"));
      item.classList.add("selected");
      updatePanel(item.dataset.key);
    });
  });

  updatePanel("systems");
});
