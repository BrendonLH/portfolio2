import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'brendon.jpg',
  paragraphOne: 'I’ll be honest, I didn’t plan on changing my career. I was practicing programming because I enjoyed it, then I realized that if I want to make something serious out of it, I need to learn the industry and practices. So here I am. I really enjoy solving problems and I am very proficient with technology. Between building my truck, motorcycle and tearing apart any electronics I can get my hands on, The next step in my learning adventure is building programs and software.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/12egkHbiJhlJPh4CqufXI8mipW5yYuhO_X5d0zT42Hgg/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'MeMeal.JPG',
    title: 'MeMeal',
    info: 'Food Application that requests Information from an API based on  user preferences and then storing that data as saved recipes in a users profile.',
    info2: '',
    url: 'https://food-app-final301.herokuapp.com/',
    repo: 'https://github.com/Team-Pickle-juice/code-301-food-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'inventoryApp.jpg',
    title: 'Inventory Application',
    info: 'Inventory App for storing products. Stores expirations, names, NDC’s, and other important data as well as has a  login for user admin.',
    info2: '',
    url: 'https://inventoryapplications.herokuapp.com/',
    repo: 'https://github.com/teamjab/inventoryapplication', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'escapeRoom.jpg',
    title: 'Escape Room',
    info: 'Web Application that takes the user on a series of riddles to navigate through a haunted house and gives the user a score on correct answers. ',
    info2: '',
    url: 'https://ellie-lucky-go-mochi.github.io/Escape-Room/',
    repo: 'https://github.com/Ellie-Lucky-Go-Mochi/Escape-Room', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/BrendonHampton6',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '#',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brendon-hampton-37132899/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BrendonLH',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
