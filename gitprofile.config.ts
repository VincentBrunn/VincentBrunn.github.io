// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'VincentBrunn', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects (Click for Images)',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Assistive Gesture-Controlled RC Car',
          description:
            'This RC Car uses ESP-NOW for wireless communication between a wrist-mounted gesture sensor and the onboard microcontroller, enabling seamless operation up to 200 meters for 2 hours on one charge. Its intuitive gesture-based control system is designed for individuals with minimal motor control, while the simple control schema makes it easy for children to learn and enjoy. The controls are fully customizable, allowing users to remap functionality as needed. All components, including the shell, electronics mount, and decals, were originally designed specifically for this project, taking inspiration from the movie "Cars".',
          imageUrl:
            'https://i.imgur.com/7GQKnAI.png',
          link: 'https://drive.google.com/file/d/1jCBjBCmazpqCxpNRv6A-RS74yoz4e5Lp/view?usp=sharing',
        },
        {
          title: '',
          description:
            '',
          imageUrl:
            '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Vincent Brunn',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'vincent-brunn-352464178',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'brunnvincent@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/13H7uvoVGheY3K_AArjbYxyTzNqnNNDwW/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'CAD (Solidworks, Onshape)',
    'Python',
    'MATLAB',
    'MQTT Networks',
    'Prototyping',
    'Microsoft Suite',
    'Histochemistry',
    'Animal Autopsy',
    'Cryostat/PCR',
    'Fluent German',
    'Conversational Thai and Japanese',
  ],
  experiences: [
    {
      company: 'Robotics & Autonomous Systems Teaching and Innovation Center',
      position: 'Research Assistant',
      from: 'February 2024',
      to: 'Present',
      companyLink: 'https://www.bu.edu/eng/academics/teaching-and-innovation/robotics-autonomous-systems-teaching-innovation-center/',
    },
    {
      company: 'Boston University Office of Admissions',
      position: 'Admissions Ambassador',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://www.bu.edu/admissions/',
    },
    {
      company: 'Harvard Medical School - von Andrian Lab',
      position: 'Research Intern',
      from: 'June 2022',
      to: 'August 2024',
      companyLink: 'https://vonandrian.hms.harvard.edu/',
    },
    {
      company: 'Boston University Diversity Board',
      position: 'Admissions Student Diversity Board Member',
      from: 'September 2023',
      to: 'Present',
      companyLink: 'https://asdbbu.wixsite.com/home',
    },
  ],
  certifications: [
    {
      name: '',
      body: '',
      year: '',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Boston University',
      degree: 'B.S. Mechanical Engineering',
      from: '2023',
      to: '2027',
    },
    {
      institution: '',
      degree: '',
      from: '',
      to: '',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 0, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
