/* Import experiments here */
import Webgl0 from './xp/1/Webgl';
import Webgl1 from './xp/2/Webgl';
import Webgl2 from './xp/3/Webgl';
import Webgl3 from './xp/4/Webgl';
import Webgl4 from './xp/5/Webgl';
import Webgl5 from './xp/6/Webgl';
import Webgl6 from './xp/7/Webgl';
import Webgl7 from './xp/8/Webgl';
import Webgl8 from './xp/9/Webgl';
import Webgl9 from './xp/10/Webgl';
import Webgl10 from './xp/11/Webgl';
import Webgl11 from './xp/12/Webgl';
import Webgl12 from './xp/13/Webgl';
import Webgl13 from './xp/14/Webgl';
import Webgl14 from './xp/15/Webgl';
import Webgl15 from './xp/16/Webgl';
/* ---------------------------- */

import dat from 'dat-gui';

/* Add experiments here */
const projects = {
  Webgl0,
  Webgl1,
  Webgl2,
  Webgl3,
  Webgl4,
  Webgl5,
  Webgl6,
  Webgl7,
  Webgl8,
  Webgl9,
  Webgl10,
  Webgl11,
  Webgl12,
  Webgl13,
  Webgl14,
  Webgl15,
};
const projectNames = [
  'Hello World',
  'Uniforms',
  'gl_FragCoord',
  'Shapes functions',
  'Hope mix',
  'Sunset',
  'Rainbow',
  'Flag',
  'Polar coordinates',
  'Rectangle',
  'Circles',
  'Polar forms',
  'Combinatorial',
  'Translation',
  'Rotation',
  'Scale',
];

// Current project
let webgl;
const index = projectNames.length - 1;
const params = {
  project: projectNames[index],
};
/* --------------------------------------------- */

// Functions
function killProject() {
  // Remove canvas
  if ( typeof webgl.renderer !== 'undefined' ) webgl.sandbox = null;
  // Remove gui of webgl class if exists
  if ( typeof webgl.gui !== 'undefined' ) {
    for ( let i = 0; i < document.querySelectorAll( '.dg.main.a' ).length; i++ ) {
      const item = document.querySelectorAll( '.dg.main.a' )[i];
      if ( i > 0 ) {
        item.parentElement.removeChild( item );
      }
    }
  }
  webgl = null;
}

function launchProject( indexProject ) {
  const CurrentWebgl = projects['Webgl' + indexProject];
  webgl = new CurrentWebgl();
}

function resizeHandler() {
  webgl.resize();
}

// Project GUI settings
const projectGui = new dat.GUI();
projectGui
  .add( params, 'project', projectNames )
  .onChange( ( nextProject ) => {
    for ( let i = 0; i < projectNames.length; i++ ) {
      if ( projectNames[i] === nextProject ) {
        killProject();
        launchProject( i );
      }
    }
  });

// handle resize
window.addEventListener( 'resize', resizeHandler );

launchProject( index );
