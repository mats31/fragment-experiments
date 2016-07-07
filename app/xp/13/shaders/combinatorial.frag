#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359
#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float createShape( in vec2 st, in int side ) {
  // Remap the space to -1. to 1.
  st = st * 2. - 1.;

  // Number of sides of your shape
  int N = side;

  // Angle and radius from the current pixel
  float a = atan( st.x, st.y ) + PI;
  float r = TWO_PI / float( N );

  // Shaping function that modulate the distance
  return cos( floor( .5 + a / r ) * r - a ) * length( st );
}

void main(){
  vec2 st = gl_FragCoord.xy / u_resolution.xy;
  st.x *= u_resolution.x / u_resolution.y;
  vec3 color = vec3(0.0);
  vec3 color1 = vec3(0.0);
  vec3 color2 = vec3(0.0);
  float d = 0.0;

  d = createShape( st, 6 );

  color1 = vec3( 1.0 - smoothstep( .4, .41, d) );
  color2 = vec3( step( .3, d ) * step( d, .4 ) );
  color = mix (color1, color2, abs( sin( u_time ) ) );

  gl_FragColor = vec4(color,1.0);
}
