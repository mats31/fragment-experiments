#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;




float cubicPulse( float c, float w, float x ) {
    x = abs( x - c );
    if( x > w ) return 0.0;
    x /= w;
    return 1.0 - x * x * ( 3.0 - 2.0 * x );
}

float plot(vec2 st, float pct) {
  return  smoothstep( pct-0.02, pct, st.y) - smoothstep( pct, pct+0.02, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;

  // Change 1st argument to place the curve on x axis.
  // Change 2nd argument to control the curve's width.
  float y = cubicPulse( 0.5, 0.2, st.x );

  vec3 color = vec3(y);

  float pct = plot(st,y);
  color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

  gl_FragColor = vec4(color,1.0);
}
