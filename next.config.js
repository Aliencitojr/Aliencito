const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["cdn.discordapp.com"],
  },
  async redirects() {
    return [
      {
        source: '/abount',
        destination: 'https://t.me/AliencitoProject',
        permanent: true,
      },
      {
        source: '/x',
        destination: 'https://x.com/Aliencitojr',
        permanent: true,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/id/aliencitojr/',
        permanent: true,
      },
      {
        source: '/malibuclub',
        destination: 'https://t.me/malibuhub',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/aliencito.jr/',
        permanent: true,
      },
      {
        source: '/tiktok',
        destination: 'https://www.tiktok.com/@aliencito.jr',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31yidm4xt436rauqecfnffbx5tra/',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/Aliencitojs',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/Aliencitojr',
        permanent: true,
      },
      {
        source: '/malibusv',
        destination: 'https://discord.gg/',
        permanent: true,
      },
    ]; // Menutup kurung siku penutup array redirects
  }, // Menutup fungsi redirects
}; // Menutup module.exports
