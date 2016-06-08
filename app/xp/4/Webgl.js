import dat from 'dat-gui';
import GlslCanvas from 'GlslCanvas';
import 'whatwg-fetch';
const glslify = require('glslify');

export default class Webgl {
  constructor() {
    this.tests = [
      'Add time',
      'Multiplicate by PI',
      'Multiplicate by time',
      'Add 1',
      'Multiplicate by 2',
      'Get absolute value',
      'Use fract part of sin value',
      'Use ceil and floor',
    ];
    this.params = {
      tests: 'add time',
    };

    this.canvas = document.getElementById( 'glslCanvas' );
    this.sandbox = new GlslCanvas( this.canvas );
    this.fragment = glslify( './shaders/shape-0.frag' );

    this.initGui();
    this.sizeCanvas();
    this.load();
    this.setCode();
  }

  initGui() {
    this.gui = new dat.GUI();
    this.gui
      .add( this.params, 'tests', this.tests )
      .onChange( ( nextProject ) => {
        for ( let i = 0; i < this.tests.length; i++ ) {
          if ( this.tests[i] === nextProject ) {
            if ( i === 0 ) {
              this.fragment = glslify( './shaders/shape-0.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 1 ) {
              this.fragment = glslify( './shaders/shape-1.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 2 ) {
              this.fragment = glslify( './shaders/shape-2.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 3 ) {
              this.fragment = glslify( './shaders/shape-3.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 4 ) {
              this.fragment = glslify( './shaders/shape-4.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 5 ) {
              this.fragment = glslify( './shaders/shape-5.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 6 ) {
              this.fragment = glslify( './shaders/shape-6.frag' );
              this.sandbox.load( this.fragment );
            }
            if ( i === 7 ) {
              this.fragment = glslify( './shaders/shape-7.frag' );
              this.sandbox.load( this.fragment );
            }

            this.setCode();
          }
        }
      });
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