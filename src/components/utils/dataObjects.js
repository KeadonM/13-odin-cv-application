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
        blurbTitle: 'About Me',
        blurb:
          'Enjoys efficient problem-solving and communicating effective solutions. Brings forth a motivated attitude and a variety of strong interpersonal skills. Excels in fast-paced environments which foster learning and self-improvement opportunities.',
        photoSrc: defaultPhoto,
      },

      contact: {
        sectionTitle: 'Contact Me',
        phone: '+1 (111) 111-1111',
        email: 'mitchell@keadon.dev ',
        linkedIn: 'KeadonM',
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
              exp_start: '2023',
              exp_end: '',
              description:
                'Freelanced tattoo studio website, deployed to Hostinger. Built using vanilla HTML, CSS, JS, Firebase, ImageKit, and Vite.',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Integrated a dynamic instagram feed with serverless functions.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Increased rate of clientele by upwards of 25% per month by implementing a compelling copywriting scheme and unique design, securing a conversion rate of ~5%.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Achieves lighthouse scores between 95-100. Successfully beating local competition by over 50%.',
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
              exp_start: '2023',
              exp_end: '',
              link: 'https://13-odin-cv-application.vercel.app/',
              description:
                'Realtime templated resume crafter, deployed to Vercel. Built using React, Sass, JS, and Vite.',
              bulletPoints: new Map([
                [
                  // Managed dynamic app state using react hooks.
                  uuidv4(),
                  {
                    name: 'Integrating DndKit and React-to-Print',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Integrated DnDkit, allowing the user to dynamically organize lists.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Implemented React-to-Print allowing users to print the previewed resume.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Implemented a variety of settings allowing detailed control of the product',
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
              exp_end: '',
              link: '',
              description:
                'Creative mobile idle clicker, deployed to Android/iOS. Built using Unity and C#.',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: ' integrating google admobs.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Achieved over 5000 downloads, while maintaining an active user base over a year after release.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Mainted ratings of 4.4/5 over 100+ user reviews.',
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
              exp_end: '2020',
              link: 'https://www.aggrowth.com/en-us/farm-brands-overview/westeel',
              description: '',
              bulletPoints: new Map([
                [
                  uuidv4(),
                  {
                    name: 'Caught over 100 errors prior to shipment adding in saving the company thousands of dollars',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Developed efficient processes to effectively and efficiently inspect shipments reducing operating times by over 20%',
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
                    name: 'Over 100 lessons completed.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Lorem, ipsum dolor sit amet consectetur.',
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
              link: 'https://www.uwinnipeg.ca/',
              addition:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
              bulletPoints: new Map([]),
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
              name: 'Leadership',
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
