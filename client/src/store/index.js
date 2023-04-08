import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#5b5b5b",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
