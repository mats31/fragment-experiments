#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;
	float pct1 = 0.;
	float pct2 = 0.;

	// pct = distance(st,vec2(0.4)) + distance(st,vec2(0.6));
	// pct = distance(st,vec2(0.4)) * distance(st,vec2(0.6));
	// pct = min(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
	// pct = max(distance(st,vec2(0.4)),distance(st,vec2(0.6)));
	pct1 = pow( distance( st, vec2( 0.4 + sin( u_time ) ) ), distance( st, vec2( 0.6 + sin( u_time ) ) ) );
	pct2 = distance(st, vec2( 0.4 + cos( u_time ) * sin( u_time ) ) ) + distance( st, vec2( 0.6 + cos( u_time ) * sin( u_time ) ) );

	vec3 color1 = step( 0.5, vec3( pct1 ) );
	vec3 color2 = step( 0.5, vec3( pct2 ) );

	vec3 color = color1 * color2;

	gl_FragColor = vec4( color, 1.0 );
}
