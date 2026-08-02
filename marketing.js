document.addEventListener("DOMContentLoaded", () => {
  const data = {
    infinite: {
      title: "Infinite Horizons",
      usage: "Community-driven campaign strategy for fandom growth",
      abilities: [
        "Social media planning",
        "Content design",
        "Influencer partnerships"
      ],
      equip: "Campaign lead / copywriter",
      description:
        "Infinite Horizons was a social media and newsletter campaign built to grow a collective fandom project. I developed campaign messaging, coordinated creator contributions, and designed visual storytelling that drove engagement across multiple platforms.",
      link: "https://x.com/talesfanzine?lang=en",
      gallery: [
        "assets/marketing-infinite.svg"
      ]
    },
    justanother: {
      title: "Just Another Day",
      usage: "Narrative branding and community engagement content",
      abilities: [
        "Brand voice",
        "Campaign assets",
        "Audience research"
      ],
      equip: "Creative strategist",
      description:
        "Just Another Day was a marketing refresh for a serialized project, with a focus on cohesive visual identity, social storytelling, and audience retention. I created content previews and teaser assets to keep the community excited and informed.",
      link: "https://x.com/shezdiary?lang=en",
      gallery: [
        "assets/marketing-justanother.svg"
      ]
    },
    arise: {
      title: "Tales of Arise Countdown",
      usage: "Countdown campaign design for fan excitement",
      abilities: [
        "Visual countdowns",
        "Launch coordination",
        "Fan activation"
      ],
      equip: "Campaign designer",
      description:
        "This campaign featured countdown visuals and social promotions crafted to build anticipation before a release. I designed shareable assets and coordinated schedule timing to amplify fan excitement.",
      link: "https://x.com/toarise_cd",
      gallery: [
        "assets/marketing-arise.svg"
      ]
    },
    secret: {
      title: "Secret Recipe",
      usage: "Creator-driven social storytelling campaign",
      abilities: [
        "Community engagement",
        "Visual storytelling",
        "Cross-platform promotion"
      ],
      equip: "Campaign creator",
      description:
        "Secret Recipe focused on building audience intrigue and participation through a collaborative social campaign. The work centered on mood, pacing, and a narrative hook that made each post feel like part of a larger reveal.",
      link: "https://www.tumblr.com/talesfanzine",
      gallery: [
        "assets/marketing-secret.svg"
      ]
    },
    makerspace: {
      title: "Weekly Makerspace Newsletters",
      usage: "Recurring newsletters for community updates and projects",
      abilities: [
        "Newsletter design",
        "Content curation",
        "Community outreach"
      ],
      equip: "Newsletter creator",
      description:
        "This ongoing newsletter series spotlighted makerspace events, equipment updates, guest appearances, and featured projects. The content was designed to keep the community informed while building excitement around monthly initiatives.",
      link: "https://x.com/talesfanzine?lang=en",
      gallery: [
        "assets/marketing-makerspace.svg"
      ]
    }
  };

  const menuEls = document.querySelectorAll("#marketing-menu li");
  const title = document.getElementById("marketing-title");
  const usage = document.getElementById("marketing-usage");
  const abilities = document.getElementById("marketing-abilities");
  const equip = document.getElementById("marketing-equip");
  const description = document.getElementById("marketing-description");
  const projectLink = document.getElementById("marketing-link");
  const gallery = document.getElementById("marketing-gallery");

  function updatePanel(key) {
    const item = data[key];
    title.textContent = item.title;
    usage.textContent = item.usage;
    abilities.textContent = item.abilities.join(" • ");
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

  updatePanel("infinite");
});
