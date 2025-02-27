// Example file from
// https://github.com/iangilman/simple-minecraft-shaders/blob/4da5d99d811d950fa3552793e0e20a44e41ed534/Inverter/shaders/final.fsh
// Used under MIT License. See the linked repo LICENSE file for details

#version 120

// Dummy variables added to check that transpilation doesn't mess with the preprocessor directives
vec2 dummy_variable;
vec3 dummy_var_2;

// Test that the #moj_import directive added in 1.17 works fine
#moj_import <base.fsh>
#moj_import "common.fsh"

// Dummy function added to check that it transpiles fine
float rand(vec2 co, vec2 _) {
	return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

varying vec4 texcoord;
uniform sampler2D gcolor;
uniform mat3 IViewRotMat;

void main() {
	// Get the location of the current pixel on the screen.
	// point.x ranges from 0 on the left to 1 on the right.
	// point.y ranges from 0 at the top to 1 at the bottom.
	// Change the numbers to grab values from other parts of the screen.
	vec2 point = texcoord.st;

	// Get the color of the pixel pointed to by the point variable.
	// color.r is red, color.g is green, color.b is blue, all values from 0 to 1.
	vec3 color = texture2D(gcolor, point).rgb;

    // Regression test for bad indexing postfix expression transpiling
    IViewRotMat[0][0] = 0.0;

 # if __VERSION__ == 120
	// You can do whatever you want to the color. Here we're inverting it.
	color.r = 1 - color.r;
	color.g = 1 - color.g;
	color.b = 1 - color.b;
#else
#error "Unexpected GLSL version"
#endif

	// Here's where we tell Minecraft what color we want this pixel.
	gl_FragColor = vec4(color, 1.0);
}
