module.exports = {
  siteMetadata: {
    title: 'Vinni Hoke Portfolio',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vinni Hoke Portfolio',
        short_name: 'Built with Gatsby',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    }, `gatsby-plugin-sass`
  ],
};
