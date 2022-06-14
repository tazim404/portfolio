export const state = () => ({
  profile: {
    name: 'Tazim Rahbar',
    // profilePhoto: '',
    profilePhoto: require('@/static/profile.jpg'),
    description: 'Sharing what I am learning. Learning web development.',
  },
  details: {
    codingFrom: '',
    dob: '',
    country: 'India',
    socials: [
      {
        name: 'Github',
        username: 'tazim404',
        link: 'https://github.com/tazim404',
        icon: require('@/assets/icons/github.svg'),
      },
      {
        name: 'Twitter',
        username: 'tazim_rahbar',
        link: 'https://twitter.com/tazim_rahbar',
        icon: require('@/assets/icons/twitter.svg'),
      },
      {
        name: 'Email',
        username: 'rahbartazim@gmail.com',
        link: 'mailto:rahbartazim@gmail.com',
        icon: require('@/assets/icons/mail.svg'),
      },
    ],
  },
  stacks: [
    {
      name: 'html',
      icon: require('@/assets/icons/html.svg'),
    },
    {
      name: 'bulma',
      icon: require('@/assets/icons/bulma.svg'),
    },
    {
      name: 'python',
      icon: require('@/assets/icons/python.svg'),
    },
    {
      name: 'fastapi',
      icon: require('@/assets/icons/fastapi.svg'),
    },
    {
      name: 'flask',
      icon: require('@/assets/icons/flask.svg'),
    },
    {
      name: 'vue',
      icon: require('@/assets/icons/vue.svg'),
    },
    {
      name: 'nuxt',
      icon: require('@/assets/icons/nuxt.svg'),
    },
    {
      name: 'git',
      icon: require('@/assets/icons/git.svg'),
    },
  ],
  experiences: [{ starting: '', till: '', company: '' }],
  educations: [
    {
      starting: '2009',
      till: '2019',
      degree: 'High School',
      from: 'Bright Land School, Daltonganj',
    },
    {
      starting: '2019',
      till: '2021',
      degree: 'Higher Secondaty School',
      from: 'Doranda Collage, Ranchi',
    },
  ],
  projects: [
    {
      name: 'Devshub',
      logo: require('@/assets/images/devshub-logo.png'),
      description:
        'A social network for developers where developers can share thier proejcts and tools they have built. Working on many amazing features right now.',
      status: 'Under Dev',
      stacks: [
        {
          name: 'bulma',
          icon: require('../assets/icons/bulma.svg'),
        },
        {
          name: 'nuxt',
          icon: require('../assets/icons/nuxt.svg'),
        },
        {
          name: 'python',
          icon: require('../assets/icons/python.svg'),
        },
        {
          name: 'fastapi',
          icon: require('../assets/icons/fastapi.svg'),
        },
        {
          name: 'netlify',
          icon: require('../assets/icons/netlify.svg'),
        },
        {
          name: 'heroku',
          icon: require('../assets/icons/heroku.svg'),
        },
      ],
      projectLink: 'https://devshub.netlify.app',
      githubLink: '',
      videoLink: '',
    },
    {
      name: 'Portfolio',
      logo: require('@/assets/images/portfolio.png'),
      description:
        'A portfolio website to show project and document my journey of becoming a good programmer. If you liked this theme feel free to use it. Usage guide is on github repo.',
      status: 'Done',
      stacks: [
        {
          name: 'bulma',
          icon: require('../assets/icons/bulma.svg'),
        },
        {
          name: 'nuxt',
          icon: require('../assets/icons/nuxt.svg'),
        },
        {
          name: 'netlify',
          icon: require('../assets/icons/netlify.svg'),
        },
      ],
      projectLink: 'https://tazim.netlify.app',
      githubLink: 'https://github.com/tazim404/portfolio',
      videoLink: '',
    },
    {
      name: 'Collab Play',
      logo: require('@/assets/images/collab-logo.png'),
      description:
        ' A web app in which you can watch youtube videos collaboratively with your friend and at the same time you can chat with them. It is best suitable and suggested for two people.',
      status: 'Done',
      stacks: [
        {
          name: 'bulma',
          icon: require('../assets/icons/bulma.svg'),
        },
        {
          name: 'vue',
          icon: require('../assets/icons/vue.svg'),
        },
        {
          name: 'netlify',
          icon: require('../assets/icons/netlify.svg'),
        },
        {
          name: 'heroku',
          icon: require('../assets/icons/heroku.svg'),
        },
      ],
      projectLink: '',
      githubLink: 'https://github.com/tazim404/collab',
      videoLink: 'https://www.youtube.com/watch?v=bCtpTogUu64&t=21s',
    },
  ],
})
