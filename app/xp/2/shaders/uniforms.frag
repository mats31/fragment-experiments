#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

void main() {
	gl_FragColor = vec4( abs( sin( u_time * 0.5) ), abs( cos( u_time * 1.5 ) ), abs( tan( u_time * 2.5 ) ), 1.0 );
}
