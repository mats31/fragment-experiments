/* Import experiments here */
import Webgl0 from './xp/1/Webgl';
import Webgl1 from './xp/2/Webgl';
import Webgl2 from './xp/3/Webgl';
import Webgl3 from './xp/4/Webgl';
/* ---------------------------- */

import dat from 'dat-gui';

/* Add experiments here */
const projects = {
  Webgl0,
  Webgl1,
  Webgl2,
  Webgl3,
};
const projectNames = ['Hello World', 'Uniforms', 'gl_FragCoord', 'Shapes functions'];

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
