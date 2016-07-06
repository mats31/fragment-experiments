import dat from 'dat-gui';
import GlslCanvas from 'GlslCanvas';
const glslify = require( 'glslify' );

export default class Webgl {
  constructor() {
    this.tests = [
      'Custom size',
      'Smoothstep',
    ];
    this.params = {
      tests: 'Smoothstep',
    };

    this.canvas = document.getElementById( 'glslCanvas' );
    this.sandbox = new GlslCanvas( this.canvas );
    this.fragment = glslify( './shaders/rectangle-0.frag' );

    this.initGui();
    this.sizeCanvas();
    this.load();
    this.setCode();
  }

  checkGuiValue( nextProject ) {
    for ( let i = 0; i < this.tests.length; i++ ) {
      if ( this.tests[i] === nextProject ) {
        if ( i === 0 ) {
          this.fragment = glslify( './shaders/rectangle-0.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 1 ) {
          this.fragment = glslify( './shaders/rectangle-1.frag' );
          this.sandbox.load( this.fragment );
        }

        this.setCode();
      }
    }
  }

  initGui() {
    this.gui = new dat.GUI();
    this.gui
      .add( this.params, 'tests', this.tests )
      .onChange( ( nextProject ) => {
        this.checkGuiValue( nextProject );
      });
    this.checkGuiValue( this.params.tests );
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
    this.canvas.style.height = window.innerHeight / 2;
    this.canvas.style.width = window.innerWidth / 2;
  }
}
