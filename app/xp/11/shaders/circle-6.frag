#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 heart(in vec2 _st, in float _radius, in vec3 _color) {
	vec2 dist = _st - vec2( .5 );
	dist *= min( 1., sin( u_time * 4. ) + 1. ) + 1.;
	dist += abs( sin( u_time ) ) - .5 ;

	return vec3( 1. - smoothstep( _radius - ( _radius * .01 ),
                         _radius + ( _radius * .01 ),
                         dot( dist, dist ) * 4.0 ) ) * _color;
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;

  vec3 color1 = vec3( heart( st, 0.3, vec3( 0.9, 0.6, 0.6 ) ) );
	vec3 color2 = vec3( heart( st, 0.5, vec3( 0.1, 0.2, 0.9 ) ) );
	vec3 color3 = vec3( heart( st, 0.1, vec3( 0.4, 0.9, 0.9 ) ) );

	vec3 color = mix(color1, color2, sin( u_time ) );
	color = mix(color, color3, sin( u_time ) );


	gl_FragColor = vec4( color, 1.0 );
}
