const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'FlashFlow Diagnostics',
    description: 'my theme',
    contact: {
      phone: '514 699 0789',
      email: 'flashflowdiagnostics@gmail.com',
    },
    menuLinks: [
      {
        name: 'MRSA',
        link: '/services/MinutesToMRSA',
      },
      {
        name: 'Awards',
        link: '/awards',
      },
      {
        name: 'Team',
        link: '/team',
      },
      // {
      //   name: 'Testimonials',
      //   link: '/testimonials',
      // },
      {
        name: 'Contact',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    // `gatsby-remark-responsive-iframe`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: "gatsby-remark-better-embed-video",
      options: {
        // width: 800,
        ratio: 1, // Optional: Defaults to 16/9 = 1.77.
        // height: 9000, // Optional: Overrides optional.ratio.
        related: false, // Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, // Optional: Disable insertion of <style> border: 0.
        showInfo: false // Optional: Hides video title and player actions.
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
