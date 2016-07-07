#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3( 0.0 );
    vec3 color1 = vec3( 0.0 );
    vec3 color2 = vec3( 0.0 );

    vec2 bl1 = step( vec2( 0.1 ), st );       // bottom-left
    vec2 tr1 = step( vec2( 0.1 ), 1.0 - st );   // top-right
    color1 = vec3( bl1.x * bl1.y * tr1.x * tr1.y );

    vec2 bl2 = step( vec2( 0.3 ), st );       // bottom-left
    vec2 tr2 = step( vec2( 0.3 ), 1.0 - st );   // top-right
    color2 = vec3( bl2.x * bl2.y * tr2.x * tr2.y );

    color = mix( color1, color2, abs( sin( u_time ) ) );

    gl_FragColor = vec4( color, 1.0 );
}
