import { v4 as uuidv4, v4 } from 'uuid';
import defaultPhoto from '../../assets/defaultPhoto.jpg';

import js from '../../assets/logos/js.png';
import css from '../../assets/logos/css.png';
import sass from '../../assets/logos/sass.png';
import tailwind from '../../assets/logos/tailwind.png';
import ts from '../../assets/logos/ts.png';
import react from '../../assets/logos/react.png';
import git from '../../assets/logos/git.png';
import vite from '../../assets/logos/vite.png';
import node from '../../assets/logos/node.png';
import vercel from '../../assets/logos/vercel.png';
import firebase from '../../assets/logos/firebase.svg';
import figma from '../../assets/logos/figma.svg';
import csharp from '../../assets/logos/csharp.png';
import unity from '../../assets/logos/unity.png';
import next from '../../assets/logos/next.png';

export function dataObjectFactory() {
  return {
    experience: {
      name: '',
      position: '',
      exp_start: '',
      exp_end: '',
      link: '',
      description: '',
      bulletPoints: new Map([]),
    },

    education: {
      name: '',
      ed_start: '',
      ed_end: '',
      program: '',
      link: '',
      addition: '',
      bulletPoints: new Map([]),
    },
    skill: {
      name: '',
      photoSrc: '',
      iconScale: 50,
      nameVisible: true,
    },
    softSkill: {
      name: '',
      photoSrc: '',
      iconScale: 50,
      nameVisible: true,
    },
    interest: {
      name: '',
      photoSrc: '',
      iconScale: 50,
      nameVisible: true,
    },
    bulletPoint: {
      name: '',
    },
  };
}

export function initialData() {
  return {
    info: {
      settings: {
        colors: {
          primaryColor: '#95d8ff',
          secondaryColor: '#ffb36b',

          primaryColorDesat: '#667f99',
          primaryColorDesatDark: '#42658a',

          secondaryColorDark: '#f5993d',

          lightColor: '#fffcfa',
          darkColor: '#000000',

          complementScale: 0.5,
          contrastFactor: 0.6,
        },
        theme: true,
        icons: true,
        trademark: true,
        experienceColumns: true,
        educationColumns: true,
        linkedColors: true,
        previewRef: null,
      },

      general: {
        name: '',
        title: '',
        blurbTitle: '',
        blurb: '',
        photoSrc: '',
      },

      contact: {
        sectionTitle: '',
        phone: '',
        email: '',
        linkedIn: '',
        website: '',
      },

      experience: { sectionTitle: 'Experience', map: new Map([]) },

      education: { sectionTitle: 'Education', map: new Map([]) },

      skill: { sectionTitle: 'Skills', duoTone: false, map: new Map([]) },

      softSkill: {
        sectionTitle: 'Soft Skills',
        duoTone: true,
        map: new Map([]),
      },

      interest: { sectionTitle: 'Interests', duoTone: true, map: new Map([]) },
    },
  };
}

export function defaultData() {
  return {
    info: {
      settings: {
        colors: {
          primaryColor: '#95d8ff',
          secondaryColor: '#ffb36b',
          primaryColorDesat: '#667f99',
          primaryColorDesatDark: '#42658a',
          secondaryColorDark: '#f5993d',
          lightColor: '#fffcfa',
          darkColor: '#000000',
          complementScale: 0.5,
          contrastFactor: 0.6,
        },

        theme: true,
        icons: true,
        trademark: true,
        experienceColumns: false,
        educationColumns: true,
        linkedColors: true,
      },

      general: {
        name: 'Keadon Mitchell',
        title: 'Full Stack Developer',
        blurbTitle: 'Highlights',
        blurb:
          'Excels in growth environments, fostering valued improvement and learning opportunities. Communicates creative technical solutions for efficient and collaborative problem-solving. Demonstrates practical interpersonal skills and an adaptable rational perspective. Executes tasks with comprehensive focus and resolution-driven flexibility.',
        photoSrc: defaultPhoto,
      },

      contact: {
        sectionTitle: 'Reach out',
        phone: '+1 (111) 111-1111',
        email: 'reach@keadon.dev ',
        linkedIn: '',
        website: 'keadon.dev',
      },

      experience: {
        sectionTitle: 'Experience',
        map: new Map([
          [
            uuidv4(),
            {
              name: 'Conspicuous Ink',
              position: 'Full Stack - Freelance',
              link: 'https://conspicuous.ink',
              exp_start: '03/2023',
              exp_end: '',
              description:
                'Freelanced custom tattoo studio website. JS, CSS, Firebase, ImageKit, MapBox, Vite. Deployed to Hostinger',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Generated a 25%+ clientele boost through respectful copywriting strategies.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Streamlined DevOps via GitHub CI/CD, rapid prototyping and Agile methods.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Slashed bounce rates through maximized performance and best practice compliance, delivering 98-100 in web vitals metrics, outperforming competitors by 33%+.',
                  },
                ],
              ]),
            },
          ],
          [
            uuidv4(),
            {
              name: 'ResuCraft',
              position: 'Developer - Personal',
              exp_start: '10/2023',
              exp_end: '',
              link: 'https://13-odin-cv-application.vercel.app/',
              description:
                'Feature-rich scalable resume crafter. React.js, SCSS, Font Awesome, Google Fonts, Vite. Deployed to Vercel.',
              bulletPoints: new Map([
                [
                  // Managed dynamic app state using react hooks.
                  uuidv4(),
                  {
                    name: 'Feature-rich scalable resume crafter. React.js, SCSS, Font Awesome, Google Fonts, Vite. Deployed to Vercel.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Enhanced user engagement through the incorporation of dnd-kit for dynamically sortable lists.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Continued development of feature set with the intention of developing a marketable product.',
                  },
                ],
              ]),
            },
          ],
          [
            uuidv4(),
            {
              name: 'Duck Farm',
              position: 'Developer - Personal',
              exp_start: '2018',
              exp_end: '2019',
              link: 'https://www.youtube.com/watch?v=jwxJ7XPa15g',
              description:
                'Accessible, innovative casual mobile game. Unity, C#, Google AdMob. Deployed to iOS and Android.',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Achieved 5k+ downloads while maintaining a dedicated active user base of over 200, leading to a 4.4/5 average rating and 100+ reviews.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Succeeded in integrating Google AdMob and in-app purchases, grossing $500+ in its lifespan.',
                  },
                ],
              ]),
            },
          ],
          [
            uuidv4(),
            {
              name: 'AGI Westeel',
              position: 'Load Inspector',
              exp_start: '2017',
              exp_end: '2019',
              link: 'https://www.aggrowth.com/en-us/farm-brands-overview/westeel',
              description: '',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Spearheaded a data-driven error reporting system, enabling identification of leading production issues, resulting in an error reduction rate upwards of 15%.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Detected 100+ errors, substantially reducing overhead and elevating customer satisfaction.',
                  },
                ],
              ]),
            },
          ],
        ]),
      },

      education: {
        sectionTitle: 'Education',
        map: new Map([
          [
            uuidv4(),
            {
              name: 'The Odin Project',
              program: 'JavaScript Curriculum',
              ed_start: '2022',
              ed_end: '2023',
              link: 'https://www.theodinproject.com/paths',
              addition: '',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Completed over 150 lessons and 15 projects',
                  },
                ],
              ]),
            },
          ],
          [
            uuidv4(),
            {
              name: 'University of Winnipeg',
              program: 'Computer Science',
              ed_start: '2019',
              ed_end: '2021',
              link: '',
              addition: '',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Fundamentals, Databases, Data Structures, Algorithm.',
                  },
                ],
              ]),
            },
          ],
        ]),
      },

      skill: {
        sectionTitle: 'Skills',
        duoTone: false,
        map: new Map([
          [
            uuidv4(),
            {
              name: 'JS',
              photoSrc: js,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'TS',
              photoSrc: ts,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'NEXT',
              photoSrc: next,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'REACT',
              photoSrc: react,
              iconScale: 50,
              nameVisible: false,
            },
          ],

          [
            uuidv4(),
            {
              name: 'C#',
              photoSrc: csharp,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'UNITY',
              photoSrc: unity,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'NODE',
              photoSrc: node,
              iconScale: 50,
              nameVisible: false,
            },
          ],

          [
            uuidv4(),
            {
              name: 'CSS',
              photoSrc: css,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'SCSS',
              photoSrc: sass,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'TAILWIND',
              photoSrc: tailwind,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'VERCEL',
              photoSrc: vercel,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'FIREBASE',
              photoSrc: firebase,
              iconScale: 50,
              nameVisible: false,
            },
          ],

          [
            uuidv4(),
            {
              name: 'VITE',
              photoSrc: vite,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          [
            uuidv4(),
            {
              name: 'GIT',
              photoSrc: git,
              iconScale: 50,
              nameVisible: false,
            },
          ],
          // [
          //   uuidv4(),
          //   {
          //     name: 'FIGMA',
          //     photoSrc: figma,
          //     iconScale: 50,
          //     nameVisible: false,
          //   },
          // ],
        ]),
      },

      softSkill: {
        sectionTitle: 'Soft Skills',
        duoTone: true,
        map: new Map([
          [
            uuidv4(),
            {
              name: 'Organized',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Positive',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Analytical',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Resilient',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Patient',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Innovative',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
        ]),
      },

      interest: {
        sectionTitle: 'Interests',
        duoTone: true,
        map: new Map([
          [
            uuidv4(),
            {
              name: 'Open Source',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Bowling',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Poker',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],

          [
            uuidv4(),
            {
              name: 'Cooking',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Philosophy',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Travel',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],

          [
            uuidv4(),
            {
              name: 'Photography',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'Bouldering',
              photoSrc: '',
              iconScale: 50,
              nameVisible: true,
            },
          ],
        ]),
      },
    },
  };
}
