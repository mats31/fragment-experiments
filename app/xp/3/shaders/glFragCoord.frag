// You can pass your mouse on the canvas to see the render !

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
	vec2 st = gl_FragCoord.xy / u_resolution;
	gl_FragColor = vec4( st.x * abs( cos( u_time ) ), abs( sin( u_mouse.y / u_resolution.y ) ), abs( sin( u_mouse.x / u_resolution.x ) ), 1.0 );
}
