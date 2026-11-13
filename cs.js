document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    gradio: {
      title: "Gradio",
      usage: "Showcase and launch an interactive Python application",
      abilities: ["Python", "Gradio"],
      skills: ["Interface development", "Application prototyping"],
      equip: "Jennifer Truong",
      description: "Explore the Gradio project repository and its source files.",
      link: "https://github.com/jrogramming/Practice-Porfolio/tree/main/Gradio",
      preview: "assets/purplepreview.png"
    },
    "beauty-brands": {
      title: "Cosmetic Brand Color Scraper",
      usage: "Collect cosmetic brand color palettes and export structured data",
      abilities: ["Python", "Web scraping libraries", "CSV"],
      skills: ["Web data extraction", "Data organization", "Color data structuring"],
      equip: "Jennifer Truong",
      description: "A web scraping project that collects cosmetic brand color palettes from Brand Color Code and exports the results into a structured CSV dataset. Each brand can have between 1–8 associated colors, with corresponding color specifications and industry classifications.",
      link: "https://github.com/jrogramming/Beauty-Brands",
      preview: "assets/brand-color-scraper-preview.png"
    },
    "purple-detector": {
      title: "Purple Detector",
      usage: "Detect purple objects in live webcam footage and mark their locations",
      abilities: ["Python", "OpenCV", "Webcam"],
      skills: ["Image processing", "RGB/BGR/HSV color conversion", "Color thresholding", "Masking and bounding box detection"],
      equip: "Jennifer Truong",
      description: "A real-time computer vision experiment that uses a webcam to detect purple objects and draw a bounding box around detected regions. The project explores live webcam capture, RGB, BGR, and HSV color spaces, binary masks, and extracting bounding boxes from detected pixels.",
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
    link.textContent = `Open ${project.title} on GitHub`;

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

  const initialProject = menuItems.find((item) => item.dataset.key === "gradio") || menuItems[0];
  if (initialProject) selectProject(initialProject);
});
