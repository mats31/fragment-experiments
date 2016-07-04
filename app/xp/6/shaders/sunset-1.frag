#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3( 0.0, 0.0, 0.0 );
vec3 colorB = vec3( 1., 0.756, 0.0 );

float parabola( float x, float k ) {
  return pow( 4.0 * x * ( 1.0 - x ), k );
}

float plot (vec2 st, float pct){
  return  smoothstep( pct-0.01, pct, st.y) -
          smoothstep( pct, pct+0.01, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3( 0.0 );

    vec3 pct = vec3(st.x);

    pct = pct * abs( sin( u_time ) + 1. );


    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix( colorA, colorB, pct );

    // Plot transition lines for each channel
    // color = mix(color,vec3(1.0,0.0,0.0),plot(st,pct.r));
    // color = mix(color,vec3(0.0,1.0,0.0),plot(st,pct.g));
    // color = mix(color,vec3(0.0,0.0,1.0),plot(st,pct.b));

    gl_FragColor = vec4( color, 1.0 );
}
