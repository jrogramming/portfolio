document.addEventListener("DOMContentLoaded", () => {
  const project = {
    title: "Gradio",
    usage: "Python project built with Gradio",
    abilities: ["Python", "Gradio"],
    role: "Project work",
    description: "Explore the Gradio project repository and its source files.",
    link: "https://github.com/jrogramming/Practice-Porfolio/tree/main/Gradio",
    preview: "assets/purplepreview.png"
  };

  document.getElementById("cs-title").textContent = project.title;
  document.getElementById("cs-usage").textContent = project.usage;
  document.getElementById("cs-abilities").textContent = project.abilities.join(" • ");
  document.getElementById("cs-equip").textContent = project.role;
  document.getElementById("cs-description").textContent = project.description;

  const link = document.getElementById("cs-link");
  link.href = project.link;
  link.textContent = `Open ${project.title} on GitHub`;

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

  const gallery = document.getElementById("cs-gallery");
  gallery.replaceChildren(previewLink);
  gallery.hidden = false;
});
