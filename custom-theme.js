
export default {
  colors: {
    text: "#111",
    title: "#CF022B"
  },
  styles: {
    h1: {
      color: "#CF022B",
    },
    strong: {
      fontStyle: "bold",
    },
    li: {
      fontSize: "2.5rem",
    },
    p: {
      fontSize: "2.5rem",
    },
    CodeSurfer: {
      pre: {
        color: "text",
        backgroundColor: "#FFF",
        maxHeight: '80vh',
        width: '90vw',
        margin: '-10vh'
      },
      code: {
        color: "#000",
        width: '90vw',
        margin: '-10vh'
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
        color: "title"
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