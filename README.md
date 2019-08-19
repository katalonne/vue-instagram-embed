<p align="center"><img src="https://i.imgur.com/MlcbzqB.png"></p>
<h1 align="center">Vue Instagram Embed</h1>

Vue component for embedding instagram posts

## Installation
```bash
yarn add vue-instagram-embed

npm install --save vue-instagram-embed
```

## Usage

```javascript
import InstagramEmbed from 'vue-instagram-embed';

export default {
  components: {
    InstagramEmbed
  }
}
```

```html
<instagram-embed
  :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
  :max-width=500
/>
```

## Props

| Property     | Type    | Default |
|--------------|---------|---------|
| url          | String  |         |
| max-width    | Number  | 320     |
| class-name   | String  |         |
| hide-caption | Boolean | false   |

## License

MIT © [katalonne](https://github.com/katalonne)