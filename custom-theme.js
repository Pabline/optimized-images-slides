import sopra from "./background-sopra.png";

export default {
  colors: {
    background: "#FFF",
    text: "#111"
  },
  styles: {
    backgroundImage: sopra,
    h1: {
      color: "#CF022B",
    },
    strong: {
      fontStyle: "bold"
    },
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "#FFF",
      },
      code: {
        color: "#000",
      },
      tokens: {
        "comment cdata doctype": {
          fontStyle: "italic"
        },
        "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
          color: "rgb(219, 50, 50)"
        },
        "line-number": {
          opacity: 0.65,
          userSelect: "none"
        }
      },
      title: {
        backgroundColor: "background",
        color: "text"
      },
      selector: {
        color: "rgb(128, 203, 196)"
      },
      subtitle: {
        color: "#d6deeb",
        backgroundColor: "rgba(10,10,10,0.9)"
      },
      unfocused: {
        // only the opacity of unfocused code can be changed #6f42c1
        opacity: 0.1
      }
    }
  }
};