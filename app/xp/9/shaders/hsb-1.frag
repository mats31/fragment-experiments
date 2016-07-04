#ifdef GL_ES
precision mediump float;
#endif

#define TWO_PI 6.28318530718

uniform vec2 u_resolution;
uniform float u_time;

float pcurve( float x, float a, float b ) {
  float k = pow( a + b, a + b ) / ( pow( a, a ) * pow( b, b ) );
  return k * pow( x, a ) * pow( 1.0 - x, b );
}

//  Function from Iñigo Quiles
//  https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb( in vec3 c ){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix( vec3(1.0), rgb, c.y);
}

void main(){
    vec2 st = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3( 0.0 );

    // Use polar coordinates instead of cartesian
    vec2 toCenter = vec2( 0.5 ) - st;
    float angle = atan( toCenter.y, toCenter.x );
    float radius = length( toCenter ) * 2.0;

    // Map the angle (-PI to PI) to the Hue (from 0 to 1)
    // and the Saturation to the radius
    color = hsb2rgb( vec3( (angle / TWO_PI ) + 0.5, radius, 1.0 ) );

    gl_FragColor = vec4(color,1.0);
}
