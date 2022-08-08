import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Sprite6 from "./Sprite6/Sprite6.js";
import ScratchCat from "./ScratchCat/ScratchCat.js";
import Sprite7 from "./Sprite7/Sprite7.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Sprite1: new Sprite1({
    x: 34.82352941176471,
    y: 24.47058823529411,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Sprite2: new Sprite2({
    x: 96,
    y: 93.88235294117646,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Sprite3: new Sprite3({
    x: 156,
    y: 70.35294117647058,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  }),
  Sprite4: new Sprite4({
    x: 52.4705882352941,
    y: -21.411764705882348,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Sprite5: new Sprite5({
    x: -111.05882352941177,
    y: -21.41176470588236,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Sprite6: new Sprite6({
    x: 192.47058823529414,
    y: 13.882352941176471,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  ScratchCat: new ScratchCat({
    x: -115.29411764705884,
    y: 207.05882352941177,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Sprite7: new Sprite7({
    x: 46.58823529411764,
    y: 100.94117647058825,
    direction: 90,
    costumeNumber: 1,
    size: 10985.155066475872,
    visible: true,
    layerOrder: 7
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
