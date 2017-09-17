import * as Phaser from "phaser-ce";
import WebFont from "webfontloader";
import loaderBg from "../assets/images/loader-bg.png";
import loaderBar from "../assets/images/loader-bar.png";

export default class extends Phaser.State {
    init() {
        this.stage.backgroundColor = "#EDEEC9";
        this.fontsReady = false;
        this.fontsLoaded = this.fontsLoaded.bind(this);
    }

    preload() {
        WebFont.load({
            google: {
                families: ["Bangers"]
            },
            active: this.fontsLoaded
        });

        let text = this.add.text(this.world.centerX, this.world.centerY, "loading fonts", {
            font: "16px Arial",
            fill: "#dddddd",
            align: "center"
        });
        text.anchor.setTo(0.5, 0.5);

        this.load.image("loaderBg", loaderBg);
        this.load.image("loaderBar", loaderBar);
    }

    render() {
        if (this.fontsReady) {
            this.state.start("Splash");
        }
    }

    fontsLoaded() {
        this.fontsReady = true;
    }
}
