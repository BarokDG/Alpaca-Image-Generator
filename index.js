const app = new Vue({
  el: "#app",
  data: {
    selection: "hair",
    options: {
      backgrounds: ["darkblue70", "darkblue", "green", "grey", "red", "yellow"],
      ears: ["default", "tilt-backward", "tilt-forward"],
      neck: ["default", "bend-backward", "bend-forward", "thick"],
      leg: [
        "default",
        "bubble-tea",
        "cookie",
        "game-console",
        "tilt-backward",
        "tilt-forward",
      ],
      nose: ["nose"],
      hair: ["default", "bang", "curls", "elegant", "fancy", "quiff", "short"],
      accessories: ["headphone", "earings", "flower", "glasses"],
      eyes: ["default", "angry", "naughty", "panda", "smart", "star"],
      mouth: ["default", "astonished", "eating", "laugh", "tongue"],
    },
  },
  methods: {
    updateImageSource: function (style) {
      this.$refs[this.selection][0].src = `/assets/alpaca/${this.selection}/${style}.png`;
    },
  },
});
