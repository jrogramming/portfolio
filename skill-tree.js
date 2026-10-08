document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('skill-map-canvas');
  const categoriesContainer = container?.querySelector('.skill-categories');
  const skillList = document.getElementById('skill-list');
  const panel = document.getElementById('skill-info-panel');

  if (!container || !categoriesContainer || !skillList || !panel) return;

  const skillMapData = {
    nodes: [
      {
        id: 'programming',
        label: 'Programming',
        icon: '●',
        x: 26,
        y: 54,
        description: 'Core implementation work across analysis, interfaces, and tooling.',
        projects: ['Portfolio website', 'Interactive dashboards', 'Game-adjacent systems'],
        related: ['Python', 'R', 'SQL', 'JavaScript'],
        links: [{ label: 'View projects', href: 'games.html' }],
        years: '4+ years'
      },
      {
        id: 'python',
        label: 'Python',
        icon: 'Py',
        x: 18,
        y: 32,
        description: 'Primary language for data analysis, automation, and experimentation.',
        projects: ['Statistical analysis notebooks', 'Cleaning pipelines', 'Visualization workflows'],
        related: ['NumPy', 'Pandas', 'SciPy', 'Matplotlib', 'Scikit-Learn', 'PyTorch'],
        links: [{ label: 'Open stats showcase', href: 'stats.html' }],
        years: '4+ years'
      },
      {
        id: 'numpy',
        label: 'NumPy',
        icon: 'N',
        x: 10,
        y: 18,
        description: 'Fast numerical operations and matrix-based analysis.',
        projects: ['Simulation work', 'Array-based experiments'],
        related: ['Python', 'SciPy'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'pandas',
        label: 'Pandas',
        icon: 'P',
        x: 22,
        y: 14,
        description: 'Flexible data wrangling for messy real-world datasets.',
        projects: ['Data cleaning', 'Reporting tables'],
        related: ['Python', 'Matplotlib'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'scipy',
        label: 'SciPy',
        icon: 'S',
        x: 12,
        y: 40,
        description: 'Scientific computing for statistical and numerical workflows.',
        projects: ['Optimization demos', 'Modeling tasks'],
        related: ['Python', 'NumPy'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'matplotlib',
        label: 'Matplotlib',
        icon: 'M',
        x: 24,
        y: 10,
        description: 'Custom plots and visuals for exploratory analysis.',
        projects: ['Publication-style plots', 'Visual storytelling'],
        related: ['Python', 'Pandas'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'sklearn',
        label: 'Scikit-Learn',
        icon: 'SK',
        x: 36,
        y: 20,
        description: 'Practical machine learning workflows and model evaluation.',
        projects: ['Model experiments', 'Prediction tasks'],
        related: ['Python', 'PyTorch'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'pytorch',
        label: 'PyTorch',
        icon: 'PT',
        x: 34,
        y: 34,
        description: 'Deep learning experiments and model prototyping.',
        projects: ['Model prototypes', 'Experiment notebooks'],
        related: ['Python', 'Scikit-Learn'],
        links: [],
        years: '1+ years'
      },
      {
        id: 'r',
        label: 'R',
        icon: 'R',
        x: 58,
        y: 26,
        description: 'Statistical analysis and visualization in a research-friendly workflow.',
        projects: ['Research reports', 'Shiny apps', 'Plots'],
        related: ['tidyverse', 'ggplot2', 'dplyr', 'tidyr'],
        links: [{ label: 'Open stats showcase', href: 'stats.html' }],
        years: '4+ years'
      },
      {
        id: 'tidyverse',
        label: 'tidyverse',
        icon: 'TV',
        x: 66,
        y: 12,
        description: 'A coherent set of tools for data wrangling and analysis.',
        projects: ['Data pipelines', 'Clean workflows'],
        related: ['R', 'dplyr', 'ggplot2', 'tidyr'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'dplyr',
        label: 'dplyr',
        icon: 'D',
        x: 56,
        y: 16,
        description: 'Verb-based data manipulation for readable analysis.',
        projects: ['Transformations', 'Data prep'],
        related: ['R', 'tidyverse'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'ggplot2',
        label: 'ggplot2',
        icon: 'G',
        x: 72,
        y: 16,
        description: 'Flexible plotting for polished visual explanations.',
        projects: ['Presentation visuals', 'Exploratory plots'],
        related: ['R', 'tidyverse'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'tidyr',
        label: 'tidyr',
        icon: 'T',
        x: 62,
        y: 24,
        description: 'Reshaping and tidying data into workable structures.',
        projects: ['Data restructuring', 'Project prep'],
        related: ['R', 'dplyr'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'sql',
        label: 'SQL',
        icon: 'SQL',
        x: 72,
        y: 48,
        description: 'Querying and organizing information from relational systems.',
        projects: ['Database logic', 'Reporting queries'],
        related: ['Programming', 'Analytics'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'javascript',
        label: 'JavaScript',
        icon: 'JS',
        x: 32,
        y: 72,
        description: 'Interactive websites and lightweight front-end experiences.',
        projects: ['Portfolio components', 'Interactive UI'],
        related: ['HTML', 'CSS', 'React'],
        links: [{ label: 'Open portfolio', href: 'index.html' }],
        years: '2+ years'
      },
      {
        id: 'html',
        label: 'HTML',
        icon: 'H',
        x: 18,
        y: 80,
        description: 'Structure for accessible, readable pages.',
        projects: ['Page layouts', 'Content structure'],
        related: ['JavaScript', 'CSS'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'css',
        label: 'CSS',
        icon: 'C',
        x: 32,
        y: 84,
        description: 'Presentation layers and polished, consistent interfaces.',
        projects: ['Visual systems', 'Responsive layouts'],
        related: ['JavaScript', 'HTML'],
        links: [],
        years: '3+ years'
      },
      {
        id: 'react',
        label: 'React',
        icon: 'R',
        x: 46,
        y: 80,
        description: 'Component-based interfaces and reusable UI logic.',
        projects: ['Reusable UI modules', 'Complex interfaces'],
        related: ['JavaScript', 'CSS'],
        links: [],
        years: '1+ years'
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: 'A',
        x: 68,
        y: 64,
        description: 'Turning data into clear decisions and business-ready insight.',
        projects: ['Reporting', 'Dashboards', 'Exploration'],
        related: ['Power BI', 'Tableau', 'Looker Studio'],
        links: [{ label: 'Open marketing showcase', href: 'marketing.html' }],
        years: '4+ years'
      },
      {
        id: 'powerbi',
        label: 'Power BI',
        icon: 'PB',
        x: 58,
        y: 78,
        description: 'Data storytelling and dashboarding for decision support.',
        projects: ['Dashboard work', 'Executive summaries'],
        related: ['Analytics', 'DAX', 'Power Query'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'dax',
        label: 'DAX',
        icon: 'DAX',
        x: 50,
        y: 88,
        description: 'Measure logic and business metrics in Power BI.',
        projects: ['Metric definitions', 'Reporting logic'],
        related: ['Power BI', 'Power Query'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'powerquery',
        label: 'Power Query',
        icon: 'PQ',
        x: 66,
        y: 88,
        description: 'Data shaping and transformation before analysis.',
        projects: ['Data prep', 'Reusable transforms'],
        related: ['Power BI', 'DAX', 'M Language'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'mlang',
        label: 'M Language',
        icon: 'M',
        x: 78,
        y: 88,
        description: 'Formula language for Power Query transformations.',
        projects: ['Transformation logic', 'Reusable data steps'],
        related: ['Power Query'],
        links: [],
        years: '1+ years'
      },
      {
        id: 'tableau',
        label: 'Tableau',
        icon: 'T',
        x: 80,
        y: 66,
        description: 'Visual analytics for fast, polished story-driven reporting.',
        projects: ['Interactive dashboards', 'Quick insights'],
        related: ['Analytics', 'Looker Studio'],
        links: [],
        years: '2+ years'
      },
      {
        id: 'looker',
        label: 'Looker Studio',
        icon: 'LS',
        x: 90,
        y: 72,
        description: 'Lightweight web-based reporting and visualization.',
        projects: ['Readable dashboards', 'Shareable reports'],
        related: ['Analytics', 'Tableau'],
        links: [],
        years: '1+ years'
      },
      {
        id: 'communication',
        label: 'Communication',
        icon: 'CO',
        description: 'Clear communication developed through teaching, customer service, and campaign work.',
        projects: ['Teaching Unity and PICO-8 to 50+ students', 'Customer service and community communications'],
        related: [],
        links: [],
        years: 'Core strength'
      },
      {
        id: 'collaboration',
        label: 'Collaboration',
        icon: 'CL',
        description: 'Working with creators, students, and cross-functional teams to move projects forward.',
        projects: ['Coordinating creator contributions', 'Supporting students during office hours'],
        related: [],
        links: [],
        years: 'Core strength'
      },
      {
        id: 'problem-solving',
        label: 'Problem Solving',
        icon: 'PS',
        description: 'Breaking down challenges and finding practical solutions through analysis and iteration.',
        projects: ['Game design and development instruction', 'Data analysis and experimentation'],
        related: [],
        links: [],
        years: 'Core strength'
      },
      {
        id: 'leadership',
        label: 'Leadership',
        icon: 'L',
        description: 'Guiding learning and coordinating creative work toward shared goals.',
        projects: ['Teaching game development to 50+ students', 'Leading creator-driven campaign work'],
        related: [],
        links: [],
        years: 'Core strength'
      }
    ]
  };

  const nodeMap = new Map(skillMapData.nodes.map((node) => [node.id, node]));
  const categories = [
    {
      label: 'Languages',
      skills: ['python', 'r', 'sql', 'javascript', 'html', 'css', 'react', 'dax', 'mlang']
    },
    {
      label: 'Statistics',
      skills: ['numpy', 'pandas', 'scipy', 'matplotlib', 'tidyverse', 'dplyr', 'ggplot2', 'tidyr', 'analytics', 'powerbi', 'powerquery', 'tableau', 'looker']
    },
    {
      label: 'Machine Learning',
      skills: ['sklearn', 'pytorch']
    },
    {
      label: 'Soft Skills',
      skills: ['communication', 'collaboration', 'problem-solving', 'leadership']
    }
  ];

  function createNode(node) {
    const button = document.createElement('button');
    button.className = 'skill-node';
    button.type = 'button';
    button.dataset.id = node.id;
    button.textContent = node.label;

    button.addEventListener('click', () => {
      button.classList.add('is-pressed');
      setTimeout(() => button.classList.remove('is-pressed'), 140);
      selectNode(node.id);
    });

    return button;
  }

  function showCategory(category, categoryButton) {
    categoriesContainer.querySelectorAll('.skill-category').forEach((button) => {
      const isActive = button === categoryButton;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-expanded', String(isActive));
    });

    skillList.textContent = '';
    category.skills.forEach((id) => {
      const node = nodeMap.get(id);
      if (node) skillList.appendChild(createNode(node));
    });

    panel.querySelector('.skill-panel-title').textContent = 'Choose a skill';
    panel.querySelector('.skill-panel-years').textContent = '';
    panel.querySelector('.skill-panel-years').hidden = true;
    panel.querySelector('.skill-panel-description').textContent = 'Select a skill to see more details.';
    panel.querySelectorAll('.skill-panel-section').forEach((section) => {
      section.hidden = true;
    });
  }

  function selectNode(id) {
    const node = nodeMap.get(id);
    if (!node) return;

    container.querySelectorAll('.skill-node').forEach((element) => {
      element.classList.toggle('is-active', element.dataset.id === id);
    });

    panel.querySelector('.skill-panel-title').textContent = node.label;
    panel.querySelector('.skill-panel-years').textContent = node.years;
    panel.querySelector('.skill-panel-description').textContent = node.description;

    const projectsList = panel.querySelector('.skill-panel-projects');
    projectsList.innerHTML = '';
    node.projects.forEach((project) => {
      const item = document.createElement('li');
      item.textContent = project;
      projectsList.appendChild(item);
    });

    const relatedList = panel.querySelector('.skill-panel-related');
    relatedList.innerHTML = '';
    node.related.forEach((skill) => {
      const item = document.createElement('li');
      item.textContent = skill;
      relatedList.appendChild(item);
    });

    const linksList = panel.querySelector('.skill-panel-links');
    linksList.innerHTML = '';
    node.links.forEach((link) => {
      const anchor = document.createElement('a');
      anchor.href = link.href;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      linksList.appendChild(anchor);
    });

    panel.querySelectorAll('.skill-panel-section').forEach((section, index) => {
      const content = [node.projects, node.related, node.links][index];
      section.hidden = content.length === 0;
    });

    panel.querySelector('.skill-panel-years').hidden = !node.years;
  }

  categories.forEach((category) => {
    const button = document.createElement('button');
    button.className = 'skill-category';
    button.type = 'button';
    button.textContent = category.label;
    button.setAttribute('aria-controls', 'skill-list');
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => showCategory(category, button));
    categoriesContainer.appendChild(button);
  });
});
