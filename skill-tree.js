document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('skill-map-canvas');
  const panel = document.getElementById('skill-info-panel');

  if (!container || !panel) return;

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
      }
    ],
    connections: [
      ['programming', 'python'],
      ['programming', 'r'],
      ['programming', 'sql'],
      ['programming', 'javascript'],
      ['python', 'numpy'],
      ['python', 'pandas'],
      ['python', 'scipy'],
      ['python', 'matplotlib'],
      ['python', 'sklearn'],
      ['python', 'pytorch'],
      ['r', 'tidyverse'],
      ['tidyverse', 'dplyr'],
      ['tidyverse', 'ggplot2'],
      ['tidyverse', 'tidyr'],
      ['javascript', 'html'],
      ['javascript', 'css'],
      ['javascript', 'react'],
      ['analytics', 'powerbi'],
      ['analytics', 'tableau'],
      ['analytics', 'looker'],
      ['powerbi', 'dax'],
      ['powerbi', 'powerquery'],
      ['powerquery', 'mlang'],
      ['sql', 'analytics']
    ]
  };

  const nodeMap = new Map(skillMapData.nodes.map((node) => [node.id, node]));

  function createNode(node) {
    const button = document.createElement('button');
    button.className = 'skill-node';
    button.type = 'button';
    button.dataset.id = node.id;
    button.innerHTML = `
      <span class="skill-node-icon">${node.icon}</span>
      <span class="skill-node-label">${node.label}</span>
    `;

    button.style.left = `${node.x}%`;
    button.style.top = `${node.y}%`;

    button.addEventListener('click', () => {
      button.classList.add('is-pressed');
      setTimeout(() => button.classList.remove('is-pressed'), 140);
      selectNode(node.id);
    });

    return button;
  }

  function renderConnections() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.className = 'skill-connectors';

    skillMapData.connections.forEach(([fromId, toId]) => {
      const from = nodeMap.get(fromId);
      const to = nodeMap.get(toId);
      if (!from || !to) return;

      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      const fromX = (from.x / 100) * 100;
      const fromY = (from.y / 100) * 100;
      const toX = (to.x / 100) * 100;
      const toY = (to.y / 100) * 100;

      line.setAttribute('x1', `${fromX}%`);
      line.setAttribute('y1', `${fromY}%`);
      line.setAttribute('x2', `${toX}%`);
      line.setAttribute('y2', `${toY}%`);
      line.classList.add('skill-connector');
      svg.appendChild(line);
    });

    container.prepend(svg);
    requestAnimationFrame(() => {
      svg.querySelectorAll('.skill-connector').forEach((line, index) => {
        requestAnimationFrame(() => line.classList.add('is-drawn'));
      });
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
  }

  renderConnections();
  skillMapData.nodes.forEach((node) => container.appendChild(createNode(node)));
  selectNode('python');
});
