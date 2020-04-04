export default (req, res) => {
  const {
    query: { id },
  } = req
  res.status(200).json(
    {
      title: 'Blog 1',
      description: 'zeby zalabya',
      body: `
      ---
title: FAQ
description: "Frequently Asked Questions"
---

## What keyboard do you use?

[Das keyboard with brown switches](https://www.daskeyboard.com/daskeyboard-4-professional/)

## How do you code so fast?

- Vim: https://www.youtube.com/watch?v=IiwGbcd8S7I
- VSCode shortcuts: https://www.youtube.com/watch?v=t9kSTiqhUfg

## How do you get autocompletion in your terminal?

[Fish shell](https://fishshell.com/)

## What theme do you use?

- VSCode: default dark theme with [bracket-pair-colorizer-2](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2)

- iTerm2: [gruvbox](https://github.com/morhetz/gruvbox-contrib)

If you want to see all my VSCode settings/extensions: http
      `
    },
  );
};