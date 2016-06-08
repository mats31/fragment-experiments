import GlslCanvas from 'GlslCanvas';
import 'whatwg-fetch';
const glslify = require('glslify');

export default class Webgl {
  constructor() {
    this.canvas = document.getElementById( 'glslCanvas' );
    this.sandbox = new GlslCanvas( this.canvas );
    this.fragment = glslify( './shaders/uniforms.frag' );

    this.sizeCanvas();
    this.load();
    this.setCode();
  }

  load() {
    this.sandbox.load( this.fragment );
  }

  resize() {
    this.canvas.height = window.innerHeight / 2;
    this.canvas.width = window.innerWidth / 2;
  }

  render() {
    this.renderer.render( this.scene, this.camera );
    this.cube.update();
  }

  setCode() {
    const codeContainer = document.querySelector( '.code' );
    const p = codeContainer.querySelector( 'p' );
    p.innerText = '';
    p.innerText = this.fragment;

    codeContainer.appendChild( p );
  }

  sizeCanvas() {
    this.canvas.height = window.innerHeight / 2;
    this.canvas.width = window.innerWidth / 2;
  }
}
