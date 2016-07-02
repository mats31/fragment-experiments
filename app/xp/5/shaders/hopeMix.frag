#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3( 0.8, 0.0, 0.0 );
vec3 colorB = vec3( 0.0, 0.788, 0.0823 );

float almostIdentity( float x, float m, float n ) {
    if( x > m ) return x;

    float a = 2.0 * n - m;
    float b = 2.0 * m - 3.0 * n;
    float t = x / m;

    return ( a * t + b ) * t * t + n;
}

void main() {
    vec3 color = vec3( 0.0 );

    float pct = abs(sin(u_time));
    pct = almostIdentity( pct, 0.5, 0.7 );

    // Mix uses pct (a value from 0-1) to
    // mix the two colors
    color = mix( colorA, colorB, pct );

    gl_FragColor = vec4( color, 1.0 );
}
