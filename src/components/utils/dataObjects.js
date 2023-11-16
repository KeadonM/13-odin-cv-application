import { v4 as uuidv4, v4 } from 'uuid';
import defaultPhoto from '../../assets/defaultPhoto.jpg';

export function dataObjectFactory() {
  return {
    experience: {
      name: '',
      position: '',
      exp_start: '',
      exp_end: '',
      responsibility: '',
    },
    education: {
      name: '',
      location: '',
      ed_start: '',
      ed_end: '',
      program: '',
      addition: '',
    },
    skill: {
      name: '',
      photoSrc: '',
      iconScale: '50',
    },
    interest: {
      name: '',
      photoSrc: '',
      iconScale: '50',
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
        educatwionColumns: true,
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
        email: 'Mitchell.Keadon@outlook .com ',
        linkedIn: 'KeadonM',
        website: 'Github.com/KeadonM',
      },

      experience: new Map([
        [
          uuidv4(),
          {
            name: 'ResuCraft',
            position: 'Developer - Personal',
            exp_start: '2023-10',
            exp_end: '',
            responsibility:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Conspicuous Ink',
            position: 'Full Stack - Freelance',
            exp_start: '2023-03',
            exp_end: '2023-04',
            responsibility:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
          },
        ],
        [
          uuidv4(),
          {
            name: 'AGI Westeel',
            position: 'Load Inspector',
            exp_start: '2018-08',
            exp_end: '2020-01',
            responsibility:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, consequatur doloremque nostrum culpa nemo consequuntur.',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Duck Farm',
            position: 'Developer - Personal',
            exp_start: '2018-08',
            exp_end: '2020-01',
            responsibility:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
      ]),

      education: new Map([
        [
          uuidv4(),
          {
            name: 'The Odin Project',
            location: '',
            ed_start: '2022-08',
            ed_end: '2023-10',
            program: 'JavaScript Curriculum',
            addition:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
        [
          uuidv4(),
          {
            name: 'University of Winnipeg',
            location: 'Winnipeg, MB, Canada',
            ed_start: '2019-09',
            ed_end: '2020-06',
            program: 'Computer Science',
            addition:
              'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, facilis!',
          },
        ],
      ]),

      skill: new Map([
        [
          uuidv4(),
          {
            name: 'HTML',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'CSS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'JS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'SCSS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'TS',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'REACT',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'GIT',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'VITE',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'NPM',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'VERCEL',
            photoSrc: '',
            iconScale: 50,
          },
        ],
        [
          uuidv4(),
          {
            name: 'FIGMA',
            photoSrc: '',
            iconScale: 50,
          },
        ],
      ]),

      interest: new Map([
        [
          uuidv4(),
          {
            name: 'Open Source',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Bowling',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Poker',
            photoSrc: '',
            iconScale: '50',
          },
        ],

        [
          uuidv4(),
          {
            name: 'Cooking',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Philosophy',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Travel',
            photoSrc: '',
            iconScale: '50',
          },
        ],

        [
          uuidv4(),
          {
            name: 'Photography',
            photoSrc: '',
            iconScale: '50',
          },
        ],
        [
          uuidv4(),
          {
            name: 'Bouldering',
            photoSrc: '',
            iconScale: '50',
          },
        ],
      ]),
    },
  };
}
