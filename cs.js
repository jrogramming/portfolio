document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    stylevana: {
      title: "Stylevana Product Discovery App",
      usage: "Find beauty products with natural-language semantic search",
      abilities: ["Python", "Streamlit", "Sentence Transformers", "scikit-learn", "Web Scraper"],
      skills: ["Web scraping and data cleaning", "Semantic search", "Product filtering", "Search evaluation: Precision@5, Recall@10, nDCG@10"],
      equip: "Jennifer Truong",
      description: "Search 360 Stylevana listings with natural-language queries ranked by Sentence Transformer embeddings. Filter by price and review product details and relevance scores; search quality is compared with a TF-IDF baseline.",
      link: "https://semanticvana.streamlit.app/",
      linkText: "Open Stylevana Product Discovery App",
      embed: "https://semanticvana.streamlit.app/?embed=true"
    },
    gradio: {
      title: "Gradio",
      usage: "Showcase and launch an interactive Python application",
      abilities: ["Python", "Gradio"],
      skills: ["Interface development", "Application prototyping"],
      equip: "Jennifer Truong",
      description: "Upload a picture and apply an image-wide purple hue filter. The Gradio interface transforms the image and lets you preview the tinted result.",
      link: "https://github.com/jrogramming/Practice-Porfolio/tree/main/Gradio",
      preview: "assets/purplepreview.png"
    },
    "beauty-brands": {
      title: "Cosmetic Brand Color Scraper",
      usage: "Collect cosmetic brand color palettes and export structured data",
      abilities: ["Python", "Web scraping libraries", "CSV"],
      skills: ["Web data extraction", "Data organization", "Color data structuring"],
      equip: "Jennifer Truong",
      description: "Scrape cosmetic brand palettes from Brand Color Code and export them to CSV. The dataset records each brand’s colors, color specifications, and industry classification.",
      link: "https://github.com/jrogramming/Beauty-Brands",
      preview: "assets/datasetpreview.png"
    },
    "purple-detector": {
      title: "Purple Detector",
      usage: "Detect purple objects in live webcam footage and mark their locations",
      abilities: ["Python", "OpenCV", "Webcam"],
      skills: ["Image processing", "RGB/BGR/HSV color conversion", "Color thresholding", "Masking and bounding box detection"],
      equip: "Jennifer Truong",
      description: "Detect purple objects in live webcam footage and mark them with bounding boxes. OpenCV color conversion and threshold masks isolate purple pixels for detection.",
      link: "https://github.com/jrogramming/Practice-Porfolio/tree/main/ComputerVision/PurpleDetector"
    }
  };

  const menuItems = [...document.querySelectorAll("#cs-menu li")];
  const title = document.getElementById("cs-title");
  const usage = document.getElementById("cs-usage");
  const abilities = document.getElementById("cs-abilities");
  const skills = document.getElementById("cs-skills");
  const equip = document.getElementById("cs-equip");
  const description = document.getElementById("cs-description");
  const link = document.getElementById("cs-link");
  const gallery = document.getElementById("cs-gallery");
  const embedToggle = document.getElementById("cs-embed-toggle");
  const embedArea = document.getElementById("cs-embed-area");
  const embedFrame = document.getElementById("cs-embed-frame");

  function selectProject(item) {
    const project = projects[item.dataset.key];
    menuItems.forEach((menuItem) => {
      const selected = menuItem === item;
      menuItem.classList.toggle("selected", selected);
      menuItem.setAttribute("aria-current", selected ? "true" : "false");
    });

    title.textContent = project.title;
    usage.textContent = project.usage;
    abilities.textContent = project.abilities.join(" • ");
    skills.textContent = project.skills.join(" • ");
    equip.textContent = project.equip;
    description.textContent = project.description;
    link.href = project.link;
    link.textContent = project.linkText || `Open ${project.title} on GitHub`;

    embedToggle.hidden = !project.embed;
    embedArea.hidden = true;
    embedFrame.src = "";
    embedToggle.textContent = "View App";
    embedToggle.setAttribute("aria-expanded", "false");

    gallery.replaceChildren();
    if (project.preview) {
      const previewLink = document.createElement("a");
      previewLink.className = "gallery-card";
      previewLink.href = project.link;
      previewLink.target = "_blank";
      previewLink.rel = "noopener noreferrer";
      previewLink.setAttribute("aria-label", `Open ${project.title} repository`);

      const image = document.createElement("img");
      image.src = project.preview;
      image.alt = `${project.title} project preview`;
      image.loading = "lazy";
      previewLink.appendChild(image);
      gallery.appendChild(previewLink);
      gallery.hidden = false;
    } else {
      gallery.hidden = true;
    }
  }

  menuItems.forEach((item) => {
    item.addEventListener("click", () => selectProject(item));
    item.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        selectProject(item);
      }
    });
  });

  embedToggle.addEventListener("click", () => {
    const project = projects[menuItems.find((item) => item.classList.contains("selected"))?.dataset.key];
    if (!project?.embed) return;

    const shouldShow = embedArea.hidden;
    embedArea.hidden = !shouldShow;
    embedFrame.src = shouldShow ? project.embed : "";
    embedToggle.textContent = shouldShow ? "Hide App" : "View App";
    embedToggle.setAttribute("aria-expanded", String(shouldShow));
  });

  const requestedProject = new URLSearchParams(window.location.search).get("project");
  const initialProject = menuItems.find((item) => item.dataset.key === requestedProject)
    || menuItems.find((item) => item.dataset.key === "stylevana")
    || menuItems[0];
  if (initialProject) selectProject(initialProject);
});
