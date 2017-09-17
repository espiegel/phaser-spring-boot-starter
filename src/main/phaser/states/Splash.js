import * as Phaser from "phaser-ce";
import {centerGameObjects} from "../utils";
import mushroomImage from "../assets/images/mushroom2.png";

export default class extends Phaser.State {
    init() {
    }

    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBg");
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "loaderBar");
        centerGameObjects([this.loaderBg, this.loaderBar]);

        this.load.setPreloadSprite(this.loaderBar);
        //
        // load your assets
        //
        this.load.image("mushroom", mushroomImage);
    }

    create() {
        this.state.start("Game");
    }
}
