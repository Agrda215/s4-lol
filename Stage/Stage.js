/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 292.5,
        y: 207
      })
    ];

    this.sounds = [
      new Sound("Dance Around", "./Stage/sounds/Dance Around.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.yearsLeft = 3;
    this.vars.monthsLeft = 4;
    this.vars.daysLeft = 23;
    this.vars.hoursLeft = 6;
    this.vars.minutesLeft = 12;
    this.vars.secondsLeft = 40;

    this.watchers.yearsLeft = new Watcher({
      label: "years left",
      style: "large",
      visible: true,
      value: () => this.vars.yearsLeft,
      x: 383,
      y: 25
    });
    this.watchers.monthsLeft = new Watcher({
      label: "months left",
      style: "large",
      visible: true,
      value: () => this.vars.monthsLeft,
      x: 455,
      y: 25
    });
    this.watchers.daysLeft = new Watcher({
      label: "days left",
      style: "large",
      visible: true,
      value: () => this.vars.daysLeft,
      x: 525,
      y: 25
    });
    this.watchers.hoursLeft = new Watcher({
      label: "hours left",
      style: "large",
      visible: true,
      value: () => this.vars.hoursLeft,
      x: 384,
      y: -40
    });
    this.watchers.minutesLeft = new Watcher({
      label: "minutes left",
      style: "large",
      visible: true,
      value: () => this.vars.minutesLeft,
      x: 454,
      y: -41
    });
    this.watchers.secondsLeft = new Watcher({
      label: "seconds left",
      style: "large",
      visible: true,
      value: () => this.vars.secondsLeft,
      x: 526,
      y: -41
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.vars.yearsLeft = 2025 - new Date().getFullYear();
      this.vars.monthsLeft = 12 - (new Date().getMonth() + 1);
      this.vars.daysLeft = 31 - new Date().getDate();
      this.vars.hoursLeft = 23 - new Date().getHours();
      this.vars.minutesLeft = 59 - new Date().getMinutes();
      this.vars.secondsLeft = 59 - new Date().getSeconds();
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      yield* this.playSoundUntilDone("Dance Around");
      yield;
    }
  }
}
