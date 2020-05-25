export default {
  colors: {
    background: "#FFF",
    text: "#000",
    primary: "#fb1818"
  },
  styles: {
    CodeSurfer: { //1b7d41
      pre: {
        color: "text",
        backgroundColor: "#FFF",
      },
      code: {
        color: "#000",
      },
      tokens: {
        "changed": {
  
          color: "rgb(162, 191, 252)",
          fontStyle: "italic"
        }
      ,
        "deleted": {
        
          color: "rgba(239, 83, 80, 0.56)",
          fontStyle: "italic"
        }
      ,
        "inserted attr-name": {
        
          color: "#1b7d41",
          fontStyle: "italic"
        }
      ,
        "comment": {
        
          color: "rgb(99, 119, 119)",
          fontStyle: "italic"
        }
      ,
        "string url": {
        
          color: "#1b7d41"
        }
      ,
        "variable": {
        
          color: "rgb(214, 222, 235)"
        }
      ,
        "number": {
        
          color: "#d07805"
        }
      ,
        "builtin char constant function": {
        
          color: "#ba6abc"
        }
      ,
        // This was manually added after the auto-generation
        // so that punctuations are not italicised
        "punctuation": {
        
          color: "rgb(199, 146, 234)"
        }
      ,
        "selector doctype": {
        
          color: "rgb(199, 146, 234)",
          fontStyle: "italic"
        }
      ,
        "class-name": {
        
          color: "#d4af05"
        }
      ,
        "tag operator keyword": {
        
          color: "#1582e1"
        }
      ,
        "boolean": {
        
          color: "rgb(255, 88, 116)"
        }
      ,
        "property": {
        
          color: "rgb(128, 203, 196)"
        }
      ,
        "namespace": {
        
          color: "rgb(178, 204, 214)"
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