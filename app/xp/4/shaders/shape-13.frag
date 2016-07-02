#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

float pcurve( float x, float a, float b ) {
    float k = pow( a + b, a + b ) / ( pow( a, a ) * pow( b, b ) );
    return k * pow( x, a ) * pow( 1.0 - x, b );
}

float plot(vec2 st, float pct) {
  return  smoothstep( pct-0.02, pct, st.y) - smoothstep( pct, pct+0.02, st.y);
}

void main() {
  vec2 st = gl_FragCoord.xy/u_resolution;

  float y = pcurve( st.x, 0.1, 2.5 );

  vec3 color = vec3(y);

  float pct = plot(st,y);
  color = ( 1.0 - pct ) * color + pct * vec3( 0.0, 1.0, 0.0 );

  gl_FragColor = vec4(color,1.0);
}
