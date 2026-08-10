/**
 * PROJECTS SHOWCASE & CASE STUDY ENGINE
 * Divya Shree P - Portfolio Website
 */

import { $, $$ } from './utilities.js';


// ==========================================================================
// PROJECT DATA
// ==========================================================================

export const projectsData = [

  // ------------------------------------------------------------------------
  // SATBET
  // ------------------------------------------------------------------------
  {
    id: "satbet",

    title: "Satbet iGaming Frontend Platform",

    category: "development",

    categoryLabel: "Frontend Development",

    type: "Professional Project",

    summary:
      "Complete frontend revamp of an iGaming platform, including a new visual theme, redesigned UI across all pages, and implementation of multiple platform functionalities.",

    techStack: [
      "HTML5",
      "CSS3",
      "Bootstrap",
      "JavaScript ES6"
    ],

    challenges:
      "Revamping the existing platform with a completely new visual theme while maintaining consistency across all pages and delivering multiple feature updates within sprint-based development cycles.",

    solutions:
      "Redesigned and implemented the UI across the platform, developed responsive and reusable interface components, and worked on multiple functionalities including bonus-related features as part of an Agile sprint-based team.",

    demoUrl:
      "https://www.satbet0.in/",

    highlights: [
      "Complete UI & Theme Revamp",
    "Responsive UI Redesign",
    "Sprint-Based Development",
    "Bonus Functionality"
    ]
  },


  // ------------------------------------------------------------------------
  // PEDO2GERO
  // ------------------------------------------------------------------------
  {
    id: "pedo2gero",

    title: "Pedo2gero Business Website",

    category: "development",

    categoryLabel: "Frontend Development",

    type: "Freelance Project",

    summary:
      "Responsive business website designed and developed as a freelance project with a focus on clean presentation, usability, and mobile responsiveness.",

    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "AI-Assisted Development",
      "SEO"
    ],

    challenges:
      "Creating a professional and responsive web presence that clearly presents the business while maintaining a consistent experience across different screen sizes.",

    solutions:
      "Translated project requirements into a responsive website, structured the content for usability, implemented mobile-friendly layouts, and used AI-assisted tools during the design and development process.",

    demoUrl:
      "https://www.pedo2gero.in/",

    highlights: [
      "Freelance Project",
      "Responsive Website",
      "AI-Assisted Development"
    ]
  }

];


// ==========================================================================
// INITIALIZE PROJECTS
// ==========================================================================

export const initProjects = () => {

  const container = $('.projects-section-container');

  const filterBtns = $$('[data-project-filter]');

  if (!container) return;


  // Initial render
  renderProjects('all');


  // Filter buttons
  filterBtns.forEach(btn => {

    btn.addEventListener('click', () => {

      // Remove active state
      filterBtns.forEach(button => {
        button.classList.remove('active');
      });


      // Add active state
      btn.classList.add('active');


      // Get selected filter
      const filter =
        btn.getAttribute('data-project-filter');


      renderProjects(filter);

    });

  });

};


// ==========================================================================
// RENDER PROJECTS
// ==========================================================================

const renderProjects = (filterCategory = 'all') => {

  const container =
    $('.projects-section-container');

  if (!container) return;


  // Filter projects
  const filteredProjects =
    filterCategory === 'all'
      ? projectsData
      : projectsData.filter(
          project => project.category === filterCategory
        );


  if (filteredProjects.length === 0) {

    container.innerHTML = `
      <p class="text-secondary">
        No projects available.
      </p>
    `;

    return;

  }


  // Project section
  container.innerHTML = `

    <div
      class="project-subsection"
      style=""
    >

      <div
        class="flex items-center gap-3"
        style="
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 0.75rem;
        "
      >

        <span style="font-size: 1.5rem;">
          ⚡
        </span>

        <h3
          style="
            font-size: var(--font-size-xl);
            margin: 0;
          "
        >
          Frontend Development
        </h3>

        <span
          class="badge badge-accent"
          style="margin-left: auto;"
        >
          ${filteredProjects.length} Projects
        </span>

      </div>


      <div class="grid grid-cols-2 gap-6">

        ${filteredProjects.map(project => `

          <article class="project-card shimmer">

            <!-- PROJECT THUMBNAIL -->

            <div class="project-thumb">

              <div class="project-thumb-preview">

                ${project.title.charAt(0)}
                ${
                  project.title.split(' ')[1]
                    ? project.title
                        .split(' ')[1]
                        .charAt(0)
                    : ''
                }

              </div>

            </div>


            <!-- PROJECT CONTENT -->

            <div class="project-body">


              <!-- PROJECT TYPE -->

              <div
                class="flex items-center justify-between gap-2"
                style="margin-bottom: 0.5rem;"
              >

                <span class="badge badge-accent">
                  ${project.type}
                </span>

              </div>


              <!-- TITLE -->

              <h4
                class="project-title"
                style="font-size: var(--font-size-lg);"
              >
                ${project.title}
              </h4>


              <!-- SUMMARY -->

              <p class="project-desc">
                ${project.summary}
              </p>


              <!-- TECH STACK -->

              <div class="project-tags">

                ${project.techStack
                  .map(tech => `
                    <span class="badge">
                      ${tech}
                    </span>
                  `)
                  .join('')}

              </div>


              <!-- BUTTON -->

              <div class="project-links">

                <button
                  class="btn btn-secondary btn-sm"
                  data-action="view-case-study"
                  data-id="${project.id}"
                  style="
                    padding: 0.5rem 1rem;
                    font-size: 0.85rem;
                    width: 100%;
                    justify-content: center;
                  "
                >
                  View Case Study
                </button>

              </div>

            </div>

          </article>

        `).join('')}

      </div>

    </div>

  `;


  // ========================================================================
  // CASE STUDY BUTTON EVENTS
  // ========================================================================

  $$(
    '[data-action="view-case-study"]',
    container
  ).forEach(button => {

    button.addEventListener('click', () => {

      const projectId =
        button.getAttribute('data-id');


      const project =
        projectsData.find(
          item => item.id === projectId
        );


      if (project) {

        openCaseStudyModal(project);

      }

    });

  });

};


// ==========================================================================
// CASE STUDY MODAL
// ==========================================================================

const openCaseStudyModal = (project) => {

  let modal = $('.case-study-modal');


  // Create modal if it doesn't exist
  if (!modal) {

    document.body.insertAdjacentHTML(
      'beforeend',

      `
        <div
          class="case-study-modal command-palette-backdrop"
          aria-hidden="true"
        >

          <div
            class="command-dialog glass-card"
            style="
              max-width: 720px;
              max-height: 85vh;
              overflow-y: auto;
              padding: 2rem;
            "
          >

            <div class="modal-content"></div>

          </div>

        </div>
      `
    );


    modal = $('.case-study-modal');

  }


  const modalContent =
    $('.modal-content', modal);


  // ========================================================================
  // MODAL CONTENT
  // ========================================================================

  modalContent.innerHTML = `

    <!-- HEADER -->

    <div
      class="flex items-center justify-between"
      style="margin-bottom: 1.5rem;"
    >

      <span class="badge badge-accent">
        ${project.type}
      </span>


      <button
        class="btn-icon"
        data-action="close-modal"
        aria-label="Close modal"
      >
        ✕
      </button>

    </div>


    <!-- TITLE -->

    <h2
      style="
        font-size: var(--font-size-2xl);
        margin-bottom: 1rem;
      "
    >
      ${project.title}
    </h2>


    <!-- SUMMARY -->

    <p
      style="
        font-size: var(--font-size-lg);
        color: var(--text-secondary);
        margin-bottom: 1.5rem;
      "
    >
      ${project.summary}
    </p>


    <!-- TECH STACK -->

    <div style="margin-bottom: 1.5rem;">

      <h4
        style="
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        "
      >
        Tech Stack & Skills
      </h4>


      <div class="flex flex-wrap gap-2 tech_stack">

        ${project.techStack
          .map(tech => `
            <span class="badge">
              ${tech}
            </span>
          `)
          .join('')}

      </div>

    </div>


    <!-- CHALLENGE -->

    <div style="margin-bottom: 1.5rem;">

      <h4
        style="
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        "
      >
        The Challenge
      </h4>


      <p style="color: var(--text-secondary);">
        ${project.challenges}
      </p>

    </div>


    <!-- SOLUTION -->

    <div style="margin-bottom: 1.5rem;">

      <h4
        style="
          color: var(--accent-primary);
          margin-bottom: 0.5rem;
        "
      >
        My Contribution
      </h4>


      <p style="color: var(--text-secondary);">
        ${project.solutions}
      </p>

    </div>


    <!-- HIGHLIGHTS -->

    ${
      project.highlights?.length
        ? `

          <div style="margin-bottom: 1.5rem;">

            <h4
              style="
                color: var(--accent-primary);
                margin-bottom: 0.5rem;
              "
            >
              Highlights
            </h4>


            <div class="flex flex-wrap gap-2 tech_stack">

              ${project.highlights
                .map(highlight => `
                  <span class="badge">
                    ${highlight}
                  </span>
                `)
                .join('')}

            </div>

          </div>

        `
        : ''
    }


    <!-- PROJECT ACTIONS -->

    <div
      style="
        margin-top: 2rem;
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
      "
    >

      ${
        project.demoUrl
          ? `

            <a
              href="${project.demoUrl}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary"
            >
              View Live Project
            </a>

          `
          : ''
      }


      <button
        class="btn btn-secondary"
        data-action="close-modal"
      >
        Close Case Study
      </button>

    </div>

  `;


  // ========================================================================
  // SHOW MODAL
  // ========================================================================

  modal.classList.add('active');

  modal.setAttribute(
    'aria-hidden',
    'false'
  );


  // ========================================================================
  // CLOSE BUTTON
  // ========================================================================

  $$(
    '[data-action="close-modal"]',
    modal
  ).forEach(button => {

    button.addEventListener(
      'click',
      () => {

        modal.classList.remove('active');

        modal.setAttribute(
          'aria-hidden',
          'true'
        );

      }
    );

  });


  // ========================================================================
  // CLOSE ON BACKDROP CLICK
  // ========================================================================

  const handleBackdropClick = (event) => {

    if (event.target === modal) {

      modal.classList.remove('active');

      modal.setAttribute(
        'aria-hidden',
        'true'
      );

    }

  };


  modal.addEventListener(
    'click',
    handleBackdropClick,
    { once: true }
  );

};  