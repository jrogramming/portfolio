document.addEventListener("DOMContentLoaded", () => {
  const data = {
    infinite: {
      title: "Infinite Horizons",
      usage: "Community-driven campaign strategy for fandom growth",
      abilities: [
        "Social media",
        "Newsletter publishing"
      ],
      skills: [
        "Campaign strategy",
        "Creator coordination",
        "Content design"
      ],
      equip: "Jennifer Truong and contributing artists",
      description:
        "A cross-platform social and newsletter campaign for a collaborative fandom project. I shaped campaign messaging, coordinated creator contributions, and used visual storytelling to keep audiences engaged.",
      link: "https://x.com/talesfanzine?lang=en",
      gallery: []
    },
    justanother: {
      title: "Just Another Day",
      usage: "Narrative branding and community engagement content",
      abilities: [
        "Social media",
        "Visual content tools"
      ],
      skills: ["Brand voice", "Audience research", "Campaign content development"],
      equip: "Jennifer Truong",
      description:
        "A marketing refresh for a serialized story, focused on consistent branding and audience retention. I created social previews and teaser content to build interest between releases.",
      link: "https://x.com/shezdiary?lang=en",
      gallery: []
    },
    arise: {
      title: "Tales of Arise Countdown",
      usage: "Countdown campaign design for fan excitement",
      abilities: [
        "Social media",
        "Visual content tools"
      ],
      skills: ["Campaign planning", "Launch coordination", "Fan activation"],
      equip: "Jennifer Truong",
      description:
        "A social countdown campaign leading up to a release. Shareable visuals and scheduled posts built anticipation and encouraged fan participation.",
      link: "https://x.com/toarise_cd",
      gallery: []
    },
    secret: {
      title: "Secret Recipe",
      usage: "Creator-driven social storytelling campaign",
      abilities: [
        "Social media",
        "Cross-platform publishing"
      ],
      skills: ["Community engagement", "Visual storytelling", "Campaign strategy"],
      equip: "Jennifer Truong",
      description:
        "A creator-driven social campaign built around a serialized reveal. Each post used narrative clues, mood, and pacing to invite audience speculation and participation.",
      link: "https://www.tumblr.com/talesfanzine",
      gallery: []
    },
    makerspace: {
      title: "Weekly Makerspace Newsletters",
      usage: "Recurring newsletters for community updates and projects",
      abilities: [
        "Email newsletter tools"
      ],
      skills: ["Newsletter design", "Content curation", "Community outreach"],
      equip: "Jennifer Truong",
      description:
        "A recurring newsletter sharing makerspace events, equipment updates, guest visits, and community projects. Curated updates help readers stay informed and discover ways to participate.",
      link: "https://scholarslab.lib.virginia.edu/makerspace//",
      gallery: []
    }
  };

  const menuEls = document.querySelectorAll("#marketing-menu li");
  const title = document.getElementById("marketing-title");
  const usage = document.getElementById("marketing-usage");
  const abilities = document.getElementById("marketing-abilities");
  const skills = document.getElementById("marketing-skills");
  const equip = document.getElementById("marketing-equip");
  const description = document.getElementById("marketing-description");
  const projectLink = document.getElementById("marketing-link");
  const gallery = document.getElementById("marketing-gallery");

  function updatePanel(key) {
    const item = data[key];
    title.textContent = item.title;
    usage.textContent = item.usage;
    abilities.textContent = item.abilities.join(" • ");
    skills.textContent = item.skills.join(" • ");
    equip.textContent = item.equip;
    description.textContent = item.description;

    projectLink.href = item.link;
    projectLink.textContent = "Open Link";

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

  const requestedProject = new URLSearchParams(window.location.search).get("project");
  const initialItem = [...menuEls].find((item) => item.dataset.key === requestedProject);
  if (initialItem) {
    menuEls.forEach((item) => item.classList.remove("selected"));
    initialItem.classList.add("selected");
    updatePanel(requestedProject);
  } else {
    updatePanel("infinite");
  }
});
