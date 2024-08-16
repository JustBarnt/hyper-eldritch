const backgroundColor = "#212337";
const foregroundColor = "#ebfafa";

const black = "#171928";
const blue = "#1076bd";
const cyan = "#04d1f9";
const green = "#37f499";
const magenta = "#a48cf2";
const red = "#f16c75";
const white = "#ebfafa";
const yellow = "#f1fc79";

const lightBlack = "#373746";
const lightBlue = "#10a6db";
const lightCyan = "#39DDFD";
const lightGreen = "#00FA82";
const lightMagenta = "#aea4ff";
const lightRed = "#ff9a9a";
const lightWhite = "#e1e1e1";
const lightYellow = "#f1fc4e";

const borderColor = "#292e42";
const activeTabBorderBottomColor = "#ABB4DA";

const cursorColor = foregroundColor;
const cursorAccentColor = backgroundColor;

const selectionColor = "#76639e40";

exports.decorateConfig = (config) =>
  Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    cursorAccentColor,
    selectionColor,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
    css: `
    /* source: https://github.com/sindresorhus/hyper-snazzy */

    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    /* Add a highlight line below the active tab */
    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: ${activeTabBorderBottomColor};
      transform: scaleX(0);
      will-change: transform;
    }
    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 200ms cubic-bezier(0, 0, 0.2, 1);
    }

    /* Fade the title of inactive tabs and the content of inactive panes */
    .tab_text,
    .term_term {
      opacity: 0.6;
      will-change: opacity;
    }
    .tab_active .tab_text,
    .term_active .term_term {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
    }

    /* Allow custom css / overrides */
    ${config.css}
  `,
  });
