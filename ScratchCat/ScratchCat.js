/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class ScratchCat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Launch Dance 1",
        "./ScratchCat/costumes/Launch Dance 1.svg",
        { x: 76.61171873436345, y: -34.10901652345268 }
      )
    ];

    this.sounds = [new Sound("pop", "./ScratchCat/sounds/pop.wav")];

    this.triggers = [];
  }
}
