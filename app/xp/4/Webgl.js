import dat from 'dat-gui';
import GlslCanvas from 'GlslCanvas';
const glslify = require( 'glslify' );

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
      'Impulse',
      'Almost identity',
      'Cubic Pulse',
      'Exponential Step',
      'Parabola',
      'Power Curve',
    ];
    this.params = {
      tests: 'Power Curve',
    };

    this.canvas = document.getElementById( 'glslCanvas' );
    this.sandbox = new GlslCanvas( this.canvas );
    this.fragment = glslify( './shaders/shape-0.frag' );

    this.initGui();
    this.sizeCanvas();
    this.load();
    this.setCode();
  }

  checkGuiValue( nextProject ) {
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
        if ( i === 8 ) {
          this.fragment = glslify( './shaders/shape-8.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 9 ) {
          this.fragment = glslify( './shaders/shape-9.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 10 ) {
          this.fragment = glslify( './shaders/shape-10.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 11 ) {
          this.fragment = glslify( './shaders/shape-11.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 12 ) {
          this.fragment = glslify( './shaders/shape-12.frag' );
          this.sandbox.load( this.fragment );
        }
        if ( i === 13 ) {
          this.fragment = glslify( './shaders/shape-13.frag' );
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
