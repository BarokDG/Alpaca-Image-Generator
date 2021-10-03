const app = new Vue({
  el: "#app",
  data: {
    marker: "hair",
    options: {
      hair: ["bang", "curls", "default", "elegant", "fancy", "quiff", "short"],
      ears: ["default", "tilt-backward", "tilt-forward"],
      eyes: ["angry", "default", "naughty", "panda", "smart", "star"],
      mouth: ["astonished", "default", "eating", "laugh", "tongue"],
      neck: ["bend-backward", "bend-forward", "default", "thick"],
      leg: [
        "bubble-tea",
        "cookie",
        "default",
        "game-console",
        "tilt-backward",
        "tilt-forward",
      ],
      accessories: ["earings", "flower", "glasses", "headphone"],
      backgrounds: ["blue", "darkblue", "green", "grey", "red", "yellow"],
    },
  },
  // computed: {
  //   selected: function () {

  //   }
  // }
});
