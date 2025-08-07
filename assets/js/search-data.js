// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-team",
          title: "Team",
          description: "Mobile Vision Perception (MVP) Lab",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-welcome-to-face-anti-spoofing-challenge-cvpr-2023",
          title: 'Welcome to Face Anti-spoofing Challenge @ CVPR 2023.',
          description: "",
          section: "News",},{id: "news-welcome-to-view-synthesis-challenge-for-human-heads-iccv-2023",
          title: 'Welcome to View Synthesis Challenge for Human Heads @ ICCV 2023.',
          description: "",
          section: "News",},{id: "news-welcome-to-ai-for-digital-human-workshop-aaai-2024",
          title: 'Welcome to AI for Digital Human Workshop @ AAAI 2024.',
          description: "",
          section: "News",},{id: "news-we-released-the-3rd-edition-of-handbook-of-face-recognition",
          title: 'We released the 3rd edition of Handbook of Face Recognition.',
          description: "",
          section: "News",},{id: "news-welcome-to-face-anti-spoofing-challenge-cvpr-2024",
          title: 'Welcome to Face Anti-spoofing Challenge @ CVPR 2024.',
          description: "",
          section: "News",},{id: "news-welcome-to-face-anti-spoofing-challenge-iccv-2025",
          title: 'Welcome to Face Anti-spoofing Challenge @ ICCV 2025.',
          description: "",
          section: "News",},{id: "projects-alexander-black",
          title: 'Alexander Black',
          description: "Generative Modelling",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AlexanderBlack/";
            },},{id: "projects-andreea-maria-oncescu",
          title: 'Andreea-Maria Oncescu',
          description: "Audio and Video Analysis",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AndreeaMariaOncescu/";
            },},{id: "projects-ayan-das",
          title: 'Ayan Das',
          description: "Diffusion Theory",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AyanDas/";
            },},{id: "projects-aysim-toker",
          title: 'Aysim Toker',
          description: "Geoscience and Remote Sensing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AysimToker/";
            },},{id: "projects-evangelos-ververas",
          title: 'Evangelos Ververas',
          description: "3D Vision",
          section: "Projects",handler: () => {
              window.location.href = "/projects/EvangelosVerveras/";
            },},{id: "projects-ismail-elezi",
          title: 'Ismail Elezi',
          description: "Diffusion LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IsmailElezi/";
            },},{id: "projects-konstantinos-panagiotis-alexandridis",
          title: 'Konstantinos Panagiotis Alexandridis',
          description: "Long-Tailed Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/KonstantinosAlexandridis/";
            },},{id: "projects-polydefkis-gkagkos",
          title: 'Polydefkis Gkagkos',
          description: "Gaze Estimation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/PolydefkisGkagkos/";
            },},{id: "projects-rolandos-alexandros-potamias",
          title: 'Rolandos Alexandros Potamias',
          description: "3D Avatars",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RolandosAlexandrosPotamias/";
            },},{id: "projects-ronglai-zuo",
          title: 'Ronglai Zuo',
          description: "Sign Language Translation/Generation",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RonglaiZuo/";
            },},{id: "projects-roy-miles",
          title: 'Roy Miles',
          description: "Multimodal LLMs",
          section: "Projects",handler: () => {
              window.location.href = "/projects/RoyMiles/";
            },},{id: "projects-yanzuo-lu",
          title: 'YanZuo Lu',
          description: "Generative Diffusion Models",
          section: "Projects",handler: () => {
              window.location.href = "/projects/YanzuoLu/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
