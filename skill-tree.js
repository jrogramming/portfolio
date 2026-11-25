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

  const projectCatalog = [
    { title: 'ISAM Project', href: 'stats.html?project=isam', skills: ['programming', 'r', 'rpubs', 'research', 'statistics', 'data-analysis', 'presentation-development', 'presentation-software'] },
    { title: 'Statistics Capstone Project', href: 'stats.html?project=capstone', skills: ['research', 'statistics', 'statistical-analysis', 'research-communication'] },
    { title: 'Catalyst Presentation', href: 'stats.html?project=catalyst', skills: ['research', 'statistics', 'data-visualization', 'research-communication', 'presentation-development', 'presentation-software'] },
    { title: 'Waste Colonialism Paper', href: 'stats.html?project=waste', skills: ['r', 'ggplot2', 'rpubs', 'research', 'statistics', 'data-cleaning', 'statistical-analysis', 'data-visualization', 'research-communication'] },
    { title: 'Penguin Visualizer', href: 'stats.html?project=penguin', skills: ['r', 'shiny', 'statistics', 'interactive-data-exploration', 'data-filtering', 'data-visualization'] },
    { title: 'Worst Plot Contest Entry', href: 'stats.html?project=worst', skills: ['r', 'ggplot2', 'data-visualization', 'visual-experimentation', 'design-critique', 'statistical-communication'] },
    { title: 'Plot Revision Process', href: 'stats.html?project=revision', skills: ['r', 'ggplot2', 'data-visualization', 'visual-communication', 'iterative-design', 'critique-based-refinement'] },
    { title: 'Stylevana Product Discovery App', href: 'cs.html?project=stylevana', skills: ['programming', 'python', 'streamlit', 'sentence-transformers', 'sklearn', 'web-scraping', 'data-cleaning', 'semantic-search', 'product-filtering', 'search-evaluation', 'information-retrieval', 'application-prototyping'] },
    { title: 'Gradio Purple Image Filter', href: 'cs.html?project=gradio', skills: ['programming', 'python', 'gradio', 'image-processing', 'image-filtering', 'application-prototyping', 'interface-development'] },
    { title: 'Cosmetic Brand Color Scraper', href: 'cs.html?project=beauty-brands', skills: ['programming', 'python', 'web-scraping', 'csv', 'data-organization', 'color-data'] },
    { title: 'Purple Detector', href: 'cs.html?project=purple-detector', skills: ['programming', 'python', 'opencv', 'computer-vision', 'image-processing', 'color-spaces', 'color-thresholding', 'masking-detection', 'webcam'] },
    { title: 'Infinite Horizons', href: 'marketing.html?project=infinite', skills: ['excel', 'campaign-analytics', 'campaign-performance', 'engagement-metrics'] },
    { title: 'Just Another Day', href: 'marketing.html?project=justanother', skills: ['campaign-analytics', 'campaign-performance', 'engagement-metrics'] },
    { title: 'Tales of Arise Countdown', href: 'marketing.html?project=arise', skills: ['social-media', 'campaign-planning', 'launch-coordination', 'fan-activation', 'visual-content'] },
    { title: 'Secret Recipe', href: 'marketing.html?project=secret', skills: ['social-media', 'cross-platform-publishing', 'community-engagement', 'visual-storytelling', 'campaign-strategy', 'collaboration'] },
    { title: 'Makerspace Newsletters', href: 'marketing.html?project=makerspace', skills: ['newsletter-design', 'content-curation', 'community-outreach', 'email-newsletter', 'communication'] },
    { title: 'Twilight Tower', href: 'games.html?project=twilight', skills: ['unity', 'csharp', 'combat-design', 'story-writing', 'character-art', 'background-art', 'collaboration'] },
    { title: 'Fatal Flower', href: 'games.html?project=fatal', skills: ['unity', 'game-design', 'narrative-design', 'collaborative-development', 'collaboration'] },
    { title: 'Office Escape', href: 'games.html?project=office', skills: ['pico8', 'sprite-art', 'music-composition', 'game-logic', 'puzzle-design'] }
  ];

  const addedSkills = [
    ['research', 'Research', 'Frame questions, examine evidence, and communicate findings.'],
    ['statistics', 'Statistics', 'Apply statistical thinking to real datasets and research questions.'],
    ['data-analysis', 'Data Analysis', 'Explore data and interpret patterns to answer practical questions.'],
    ['statistical-analysis', 'Statistical Analysis', 'Use statistical methods to evaluate data and support conclusions.'],
    ['research-communication', 'Research Communication', 'Explain research methods and findings clearly to an audience.'],
    ['presentation-development', 'Presentation Development', 'Organize analysis and visuals into clear presentations.'],
    ['data-cleaning', 'Data Cleaning', 'Prepare scraped and real-world data for reliable analysis and search.'],
    ['data-visualization', 'Data Visualization', 'Use charts and visual design to make patterns easier to understand.'],
    ['interactive-data-exploration', 'Interactive Data Exploration', 'Build controls that let viewers explore data dynamically.'],
    ['data-filtering', 'Data Filtering', 'Let users narrow datasets and compare relevant records.'],
    ['visual-experimentation', 'Visual Experimentation', 'Test visual choices and examine how they affect interpretation.'],
    ['design-critique', 'Design Critique', 'Identify design choices that help or hinder clear communication.'],
    ['statistical-communication', 'Statistical Communication', 'Present statistical information in an understandable visual form.'],
    ['visual-communication', 'Visual Communication', 'Improve how information is conveyed through visual design.'],
    ['iterative-design', 'Iterative Design', 'Refine a design through feedback, revision, and comparison.'],
    ['critique-based-refinement', 'Critique-Based Refinement', 'Use feedback and critique to guide improvements to a visual design.'],
    ['rpubs', 'RPubs', 'Publish and share reports created in R Markdown.'],
    ['presentation-software', 'Presentation Software', 'Build and present visual summaries of research and analysis.'],
    ['streamlit', 'Streamlit', 'Build interactive data applications for the web.'],
    ['sentence-transformers', 'Sentence Transformers', 'Create text embeddings for meaning-based search and ranking.'],
    ['web-scraping', 'Web Scraping', 'Collect and structure information from websites.'],
    ['semantic-search', 'Semantic Search', 'Rank results by meaning to match natural-language queries.'],
    ['product-filtering', 'Product Filtering', 'Narrow product results using price and item attributes.'],
    ['search-evaluation', 'Search Evaluation', 'Compare ranked search results with relevance metrics.'],
    ['information-retrieval', 'Information Retrieval', 'Retrieve and rank useful items from a searchable collection.'],
    ['gradio', 'Gradio', 'Create a simple interactive interface for a Python application.'],
    ['application-prototyping', 'Application Prototyping', 'Turn a focused idea into an interactive application users can try.'],
    ['interface-development', 'Interface Development', 'Design a straightforward interface around an interactive tool.'],
    ['image-processing', 'Image Processing', 'Transform and analyze digital images.'],
    ['image-filtering', 'Image Filtering', 'Apply color effects to create a tinted image result.'],
    ['shiny', 'Shiny', 'Build interactive web applications with R.'],
    ['csv', 'CSV Data', 'Export and organize structured data in comma-separated files.'],
    ['data-organization', 'Data Organization', 'Arrange collected information into a consistent, reusable dataset.'],
    ['color-data', 'Color Data', 'Capture color values and classifications for brand palettes.'],
    ['opencv', 'OpenCV', 'Use computer vision tools to process images and video.'],
    ['computer-vision', 'Computer Vision', 'Detect and locate visual features in images and live video.'],
    ['color-spaces', 'Color Spaces', 'Convert image data between color representations for analysis.'],
    ['color-thresholding', 'Color Thresholding', 'Isolate image regions by selecting ranges of color values.'],
    ['masking-detection', 'Masking & Bounding Boxes', 'Use color masks to isolate objects and mark their locations in an image.'],
    ['webcam', 'Webcam Processing', 'Analyze a live camera feed frame by frame.'],
    ['social-media', 'Social Media Campaigns', 'Plan and publish content to build audience interest and participation.'],
    ['newsletter-publishing', 'Newsletter Publishing', 'Share campaign updates and community content through newsletters.'],
    ['campaign-strategy', 'Campaign Strategy', 'Plan campaign messaging and activity around audience goals.'],
    ['creator-coordination', 'Creator Coordination', 'Coordinate contributions and publishing across creative collaborators.'],
    ['content-design', 'Content Design', 'Shape content and visuals for a consistent campaign experience.'],
    ['brand-voice', 'Brand Voice', 'Maintain a consistent tone across ongoing project communications.'],
    ['audience-research', 'Audience Research', 'Use audience interests to guide messaging and content choices.'],
    ['campaign-content', 'Campaign Content', 'Create previews and promotional content for a serialized project.'],
    ['campaign-content-development', 'Campaign Content Development', 'Develop content that supports a campaign across its timeline.'],
    ['campaign-planning', 'Campaign Planning', 'Organize promotional activities around a release timeline.'],
    ['launch-coordination', 'Launch Coordination', 'Coordinate content and timing for a project launch.'],
    ['fan-activation', 'Fan Activation', 'Encourage audiences to participate in a shared fandom campaign.'],
    ['community-engagement', 'Community Engagement', 'Invite audience participation through ongoing social content.'],
    ['visual-storytelling', 'Visual Storytelling', 'Use visuals and narrative sequencing to sustain audience interest.'],
    ['newsletter-design', 'Newsletter Design', 'Structure newsletter content for clear, engaging community updates.'],
    ['content-curation', 'Content Curation', 'Select and organize relevant updates for a specific audience.'],
    ['community-outreach', 'Community Outreach', 'Connect community members with events, resources, and projects.'],
    ['email-newsletter', 'Email Newsletters', 'Produce recurring email updates for a community.'],
    ['cross-platform-publishing', 'Cross-Platform Publishing', 'Adapt and publish campaign content across social platforms.'],
    ['visual-content', 'Visual Content Tools', 'Create visual assets and previews for social campaigns.'],
    ['unity', 'Unity', 'Develop interactive games and experiences in Unity.'],
    ['csharp', 'C#', 'Write gameplay and application logic in C#.'],
    ['pico8', 'PICO-8', 'Create compact retro-style games with the PICO-8 fantasy console.'],
    ['combat-design', 'Combat Design', 'Design encounters and combat spaces for a game.'],
    ['story-writing', 'Story Writing', 'Write narrative content that supports a game experience.'],
    ['character-art', 'Character Art', 'Create character artwork for an interactive project.'],
    ['background-art', 'Background Art', 'Create environment artwork for a game.'],
    ['game-design', 'Game Design', 'Plan gameplay systems and player experience.'],
    ['narrative-design', 'Narrative Design', 'Connect story, characters, and interactive mechanics.'],
    ['collaborative-development', 'Collaborative Development', 'Contribute to a shared game project across disciplines.'],
    ['sprite-art', 'Sprite Art', 'Create pixel-art sprites for a retro game.'],
    ['music-composition', 'Music Composition', 'Compose original music for an interactive project.'],
    ['game-logic', 'Game Logic', 'Implement rules and state changes that drive gameplay.'],
    ['puzzle-design', 'Puzzle Design', 'Create puzzles that challenge players through game mechanics.']
  ].map(([id, label, description]) => ({ id, label, icon: label.slice(0, 2), description, projects: [], related: [], links: [], years: '' }));

  addedSkills.push(
    { id: 'sentence-transformers', label: 'Sentence Transformers', icon: 'ST', description: 'Generate text embeddings for semantic search.', projects: [], related: [], links: [], years: '' },
    { id: 'excel', label: 'Excel', icon: 'XL', description: 'Organize and analyze data with spreadsheets and formulas.', projects: [], related: [], links: [], years: '' },
    { id: 'campaign-analytics', label: 'Campaign Analytics', icon: 'CA', description: 'Analyze campaign and engagement results to guide marketing decisions.', projects: [], related: [], links: [], years: '' },
    { id: 'campaign-performance', label: 'Campaign Performance', icon: 'CP', description: 'Track campaign outcomes such as reach, engagement, traffic, and sales.', projects: [], related: [], links: [], years: '' },
    { id: 'engagement-metrics', label: 'Engagement Metrics', icon: 'EM', description: 'Use audience engagement data to evaluate content performance.', projects: [], related: [], links: [], years: '' }
  );

  skillMapData.nodes.push(...addedSkills);

  const nodeMap = new Map(skillMapData.nodes.map((node) => [node.id, node]));
  const categories = [
    {
      label: 'Languages',
      skills: ['python', 'r', 'sql', 'javascript', 'html', 'css', 'csharp']
    },
    {
      label: 'Statistics & Data',
      skills: ['numpy', 'pandas', 'scipy', 'matplotlib', 'tidyverse', 'dplyr', 'ggplot2', 'tidyr', 'sklearn', 'pytorch', 'sentence-transformers']
    },
    {
      label: 'App Tools',
      skills: ['streamlit', 'gradio', 'shiny', 'web-scraping', 'opencv']
    },
    {
      label: 'Marketing Analytics',
      skills: ['excel', 'powerbi', 'tableau', 'looker', 'campaign-analytics', 'campaign-performance', 'engagement-metrics']
    },
    {
      label: 'Game Development',
      skills: ['unity', 'csharp', 'pico8', 'character-art', 'background-art', 'sprite-art', 'game-design', 'narrative-design', 'combat-design', 'story-writing']
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
    panel.querySelector('.skill-panel-description').textContent = 'Tip: Select a skill to explore related projects.';
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
    panel.querySelector('.skill-panel-description').textContent = node.description;

    const projectsList = panel.querySelector('.skill-panel-projects');
    projectsList.innerHTML = '';
    const featuredProjects = projectCatalog.filter((project) => project.skills.includes(node.id));
    featuredProjects.forEach((project) => {
      const item = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = project.href;
      anchor.textContent = project.title;
      item.appendChild(anchor);
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
      const content = [featuredProjects, node.related, node.links][index];
      section.hidden = content.length === 0;
    });
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
