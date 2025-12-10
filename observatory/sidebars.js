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
  // The main sidebar with the 4-part taxonomy
  observatorySidebar: [
    {
      type: 'category',
      label: '[LANDSCAPE] → Literature Synthesis',
      collapsed: false,
      items: [
        'landscape/intro',
        'landscape/strategic-foresight',
        'landscape/ai-decision-making',
        'landscape/institutional-decline',
      ],
    },
    {
      type: 'category',
      label: '[THEORY] → Core Framework',
      collapsed: false,
      items: [
        'theory/intro',
        'theory/constitution',
        'theory/definitions',
        'theory/framework',
      ],
    },
    {
      type: 'category',
      label: '[METHODS] → Operational Protocols',
      collapsed: false,
      items: [
        'methods/intro',
        'methods/data-collection',
        'methods/llm-frameworks',
        'methods/analysis',
      ],
    },
    {
      type: 'category',
      label: '[RESULTS] → Data & Analysis (Archived)',
      collapsed: false,
      items: [
        'results/intro',
        'results/pilot-study',
        'results/datasets',
      ],
    },
    {
      type: 'doc',
      id: 'changelog',
      label: '📋 Changelog',
    },
    {
      type: 'doc',
      id: 'contribute',
      label: '🤝 Contribute / Peer Review',
    },
  ],
};

export default sidebars;
