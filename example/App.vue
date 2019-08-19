<template>
  <div>
    <p class="package-name">
      <svg
        class="vue-icon"
        viewBox="0 0 256 221"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
            fill="#35495E"
          ></path>
        </g>
      </svg>
      Vue Instagram Embed
      <svg
        class="instagram-icon"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 169.063 169.063"
        style="enable-background:new 0 0 169.063 169.063;"
        xml:space="preserve"
      >
        <path
          d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752
          c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407
          c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752
          c17.455,0,31.656,14.201,31.656,31.655V122.407z"
        />
        <path
          d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561
          C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561
          c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"
        />
        <path
          d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78
          c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78
          C135.661,29.421,132.821,28.251,129.921,28.251z"
        />
      </svg>
    </p>
    <div class="container">
      <div
        class="instagram-embed-container"
        :style="{ maxWidth: this.width + 'px' }"
      >
        <instagram-embed
          :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
          :max-width="this.width"
          :class-name="'instagram-embed'"
        />
      </div>
      <div v-highlight class="usage">
        <i class="description">Props:</i>
        <vue-good-table :columns="columns" :rows="rows" />
        <i class="description">Usage:</i>
        <pre>
          <code class="html">{{this.getUsageTemplate()}}</code>
        </pre>
      </div>
    </div>
  </div>
</template>

<script>
import instagramEmbed from "../src/instaEmbed.js";

export default {
  name: "app",
  components: {
    instagramEmbed
  },
  data() {
    return {
      columns: [
        {
          label: "Propriety",
          field: "name"
        },
        {
          label: "Type",
          field: "type"
        },
        {
          label: "Default",
          field: "default"
        }
      ],
      rows: [
        { name: "url", type: "String", default: "" },
        { name: "max-width", type: "Number", default: 320 },
        { name: "class-name", type: "String", default: "" },
        { name: "hide-caption", type: "Boolean", default: false },
        { name: "omit-script", type: "Boolean", default: true }
      ].map((obj, index) => {
        obj.id = index;
        return obj;
      }),
      width: 500
    };
  },
  methods: {
    getUsageTemplate() {
      return `<instagram-embed
  :url="'https://www.instagram.com/p/Bs_yHwHBjKo/'"
  :max-width=${this.width}
  :class-name="'instagram-embed'"
/>
`;
    }
  }
};
</script>

<style lang="scss">
html {
  border: 1px solid red;
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 0 30px 30px 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
.package-name {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}
.vue-icon,
.instagram-icon {
  path {
    transition: 200ms ease-in;
  }
}
.vue-icon {
  height: 30px;
  width: auto;
  &:hover {
    path {
      &:not(:last-of-type) {
        fill: rgb(53, 73, 94);
      }
      &:last-of-type {
        fill: rgb(65, 184, 131);
      }
    }
  }
}
.instagram-icon {
  height: 30px;
  path {
    fill: rgb(65, 184, 131);
  }
  &:hover {
    path {
      fill: rgb(53, 73, 94);
    }
  }
}
.container {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
.instagram-embed-container {
  text-align: center;
  display: inline-block;
  vertical-align: top;
  padding-right: 20px;
}
.usage {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding-left: 20px;

  pre {
    margin: 0;
  }
  code {
    text-align: left;
    padding: 20px 30px !important;
    width: 500px;
    margin: 0 auto;
    font-size: 14px !important;
  }
}

.description {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  text-decoration: underline;
}

.instagram-embed {
  width: 500px;
}

// Table styles
.vgt-responsive {
  overflow: hidden;
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  margin: 15px 0 25px 0;
}

::selection {
  color: darken(rgb(53, 73, 94), 10%);
  background: rgb(65, 184, 131);
}
</style>
