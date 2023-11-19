import { v4 as uuidv4, v4 } from 'uuid';
import defaultPhoto from '../../assets/defaultPhoto.jpg';

import html from '../../assets/logos/html.png';
import js from '../../assets/logos/js.svg';
import css from '../../assets/logos/css.svg';
import sass from '../../assets/logos/sass.png';
import ts from '../../assets/logos/ts.png';
import react from '../../assets/logos/react.png';
import git from '../../assets/logos/git.png';
import vite from '../../assets/logos/vite.png';
import node from '../../assets/logos/node.png';
import npm from '../../assets/logos/npm.png';
import vercel from '../../assets/logos/vercel.png';
import figma from '../../assets/logos/figma.svg';

export function dataObjectFactory() {
  return {
    experience: {
      name: '',
      position: '',
      exp_start: '',
      exp_end: '',
      link: '',
      responsibility: '',
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
          contrastFactor: 0.5,
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
          contrastFactor: 0.5,
        },

        theme: true,
        icons: true,
        trademark: true,
        experienceColumns: true,
        educationColumns: true,
        linkedColors: true,
      },

      general: {
        name: 'Keadon Mitchell',
        title: 'Full Stack Developer',
        blurbTitle: 'About Me',
        blurb:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
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
              name: 'ResuCraft',
              position: 'Developer - Personal',
              exp_start: '2023',
              exp_end: '',
              link: 'https://13-odin-cv-application.vercel.app/',
              responsibility:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
              bulletPoints: new Map([]),
            },
          ],
          [
            uuidv4(),
            {
              name: 'Conspicuous Ink',
              position: 'Full Stack - Freelance',
              exp_start: '2023',
              exp_end: '',
              link: 'https://conspicuous.ink',
              responsibility:
                'Increased client rate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
              bulletPoints: new Map([]),
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
              responsibility:
                'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
              bulletPoints: new Map([]),
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
              responsibility:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
              bulletPoints: new Map([]),
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
                    name: 'Over 100 lessons.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Lorem, ipsum dolor sit amet consectetur.',
                  },
                ],
                [
                  uuidv4(),
                  {
                    name: 'Adipisicing elit. Labore, facilis!',
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
              name: 'HTML  ',
              photoSrc: html,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'CSS  ',
              photoSrc: css,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'JS  ',
              photoSrc: js,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'SCSS  ',
              photoSrc: sass,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'TS  ',
              photoSrc: ts,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'REACT  ',
              photoSrc: react,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'GIT  ',
              photoSrc: git,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'VITE  ',
              photoSrc: vite,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'NODE  ',
              photoSrc: node,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'NPM  ',
              photoSrc: npm,
              iconScale: 35,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'VERCEL  ',
              photoSrc: vercel,
              iconScale: 50,
              nameVisible: true,
            },
          ],
          [
            uuidv4(),
            {
              name: 'FIGMA  ',
              photoSrc: figma,
              iconScale: 50,
              nameVisible: true,
            },
          ],
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
