#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

vec3 circle(in vec2 _st, in float _radius, in vec3 _color) {
	vec2 dist = _st - vec2( .5 );
	return vec3( 1. - smoothstep( _radius - ( _radius * .01 ),
                         _radius + ( _radius * .01 ),
                         dot( dist, dist ) * 4.0 ) ) * _color;
}

void main(){
	vec2 st = gl_FragCoord.xy/u_resolution;

  vec3 color = vec3( circle( st, 0.9, vec3( 0.9, 0.6, 0.6 ) ) );

	gl_FragColor = vec4( color, 1.0 );
}
