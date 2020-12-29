<p align="center"><img src="https://i.imgur.com/MlcbzqB.png"></p>
<h1 align="center">Vue Instagram Embed</h1>

[![Build Status](https://travis-ci.org/katalonne/vue-instagram-embed.svg?branch=master)](https://travis-ci.org/katalonne/vue-instagram-embed)
[![codebeat badge](https://codebeat.co/badges/299f68a9-8267-4f8d-a3e8-9abc5910f582)](https://codebeat.co/projects/github-com-katalonne-vue-instagram-embed-master)
[![GitHub open issues](https://img.shields.io/github/issues/katalonne/vue-instagram-embed.svg)](https://github.com/katalonne/vue-instagram-embed/issues?q=is%3Aopen+is%3Aissue)
[![npm version](https://img.shields.io/npm/v/vue-instagram-embed.svg)](https://www.npmjs.com/package/vue-instagram-embed)
[![MIT License](https://img.shields.io/github/license/katalonne/vue-instagram-embed.svg)](https://github.com/katalonne/vue-instagram-embed/blob/master/LICENSE)

Vue component for embedding instagram posts

## Demo

[Vue Instagram Embed](https://katalonne.github.io/vue-instagram-embed/)

## Installation

```bash
yarn add vue-instagram-embed

npm install --save vue-instagram-embed
```

## Preparation

Facebook has updated their requirements to allow access to the oEmbed API for Instagram. You will need to register an application at the [Facebook Developer site](https://developers.facebook.com/), give that application access to the oEmbed API for Instagram, and get your Application ID and Client Secret. You can find more information on this process [here](https://developers.facebook.com/docs/instagram/oembed/).

## Usage

```javascript
import InstagramEmbed from "vue-instagram-embed";

export default {
  components: {
    InstagramEmbed,
  },
};
```

```html
<instagram-embed
  :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
  :max-width="500"
  :appID="'{Your registered App ID}'"
  :client-token="'{Your registered app's client token}'"
/>
```

## Props

| Property     | Type    | Default |
| ------------ | ------- | ------- |
| url          | String  |         |
| max-width    | Number  | 320     |
| class-name   | String  |         |
| hide-caption | Boolean | false   |
| appID        | String  |         |
| client-token | String  |         |

## License

MIT © [katalonne](https://github.com/katalonne)
