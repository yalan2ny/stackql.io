/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    'index',
    'installing-stackql',
    {
      type: 'category',
      label: 'Getting Started',
      items: [{type: 'autogenerated', dirName: 'getting-started'}]
    },
    {
      type: 'category',
      label: 'Command Line Usage',
      items: [{type: 'autogenerated', dirName: 'command-line-usage'}]
    },
    {
      type: 'category',
      label: 'Language Specification',
      items: [{type: 'autogenerated', dirName: 'language-spec'}]
    },  
    {
      type: 'category',
      label: 'Developers',
      items: [{type: 'autogenerated', dirName: 'developers'}]
    },
    {
      type: 'link',
      label: 'Registry',
      href: '/registry',
    },
    {
      type: 'link',
      label: 'Blog',
      href: '/blog',
    },
    {
      type: 'link',
      label: 'Downloads',
      href: '/downloads',
    },    
  ],
};

module.exports = sidebars;
