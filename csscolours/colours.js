// Source: https://www.w3.org/TR/2018/REC-css-color-3-20180619/ "CSS Color Module Level 3 - W3C Recommendation 19 June 2018"

var COLOURS = [
	{
		name: "aliceblue",
		hex: 0xf0f8ff
	},
	{
		name: "antiquewhite",
		hex: 0xfaebd7
	},
	{
		name: "aqua",
		hex: 0x00ffff
	},
	{
		name: "aquamarine",
		hex: 0x7fffd4
	},
	{
		name: "azure",
		hex: 0xf0ffff
	},
	{
		name: "beige",
		hex: 0xf5f5dc
	},
	{
		name: "bisque",
		hex: 0xffe4c4
	},
	{
		name: "black",
		hex: 0x000000
	},
	{
		name: "blanchedalmond",
		hex: 0xffebcd
	},
	{
		name: "blue",
		hex: 0x0000ff
	},
	{
		name: "blueviolet",
		hex: 0x8a2be2
	},
	{
		name: "brown",
		hex: 0xa52a2a
	},
	{
		name: "burlywood",
		hex: 0xdeb887
	},
	{
		name: "cadetblue",
		hex: 0x5f9ea0
	},
	{
		name: "chartreuse",
		hex: 0x7fff00
	},
	{
		name: "chocolate",
		hex: 0xd2691e
	},
	{
		name: "coral",
		hex: 0xff7f50
	},
	{
		name: "cornflowerblue",
		hex: 0x6495ed
	},
	{
		name: "cornsilk",
		hex: 0xfff8dc
	},
	{
		name: "crimson",
		hex: 0xdc143c
	},
	{
		name: "cyan",
		hex: 0x00ffff
	},
	{
		name: "darkblue",
		hex: 0x00008b
	},
	{
		name: "darkcyan",
		hex: 0x008b8b
	},
	{
		name: "darkgoldenrod",
		hex: 0xb8860b
	},
	{
		name: "darkgray",
		hex: 0xa9a9a9
	},
	{
		name: "darkgreen",
		hex: 0x006400
	},
	{
		name: "darkgrey",
		hex: 0xa9a9a9
	},
	{
		name: "darkkhaki",
		hex: 0xbdb76b
	},
	{
		name: "darkmagenta",
		hex: 0x8b008b
	},
	{
		name: "darkolivegreen",
		hex: 0x556b2f
	},
	{
		name: "darkorange",
		hex: 0xff8c00
	},
	{
		name: "darkorchid",
		hex: 0x9932cc
	},
	{
		name: "darkred",
		hex: 0x8b0000
	},
	{
		name: "darksalmon",
		hex: 0xe9967a
	},
	{
		name: "darkseagreen",
		hex: 0x8fbc8f
	},
	{
		name: "darkslateblue",
		hex: 0x483d8b
	},
	{
		name: "darkslategray",
		hex: 0x2f4f4f
	},
	{
		name: "darkslategrey",
		hex: 0x2f4f4f
	},
	{
		name: "darkturquoise",
		hex: 0x00ced1
	},
	{
		name: "darkviolet",
		hex: 0x9400d3
	},
	{
		name: "deeppink",
		hex: 0xff1493
	},
	{
		name: "deepskyblue",
		hex: 0x00bfff
	},
	{
		name: "dimgray",
		hex: 0x696969
	},
	{
		name: "dimgrey",
		hex: 0x696969
	},
	{
		name: "dodgerblue",
		hex: 0x1e90ff
	},
	{
		name: "firebrick",
		hex: 0xb22222
	},
	{
		name: "floralwhite",
		hex: 0xfffaf0
	},
	{
		name: "forestgreen",
		hex: 0x228b22
	},
	{
		name: "fuchsia",
		hex: 0xff00ff
	},
	{
		name: "gainsboro",
		hex: 0xdcdcdc
	},
	{
		name: "ghostwhite",
		hex: 0xf8f8ff
	},
	{
		name: "gold",
		hex: 0xffd700
	},
	{
		name: "goldenrod",
		hex: 0xdaa520
	},
	{
		name: "gray",
		hex: 0x808080
	},
	{
		name: "green",
		hex: 0x008000
	},
	{
		name: "greenyellow",
		hex: 0xadff2f
	},
	{
		name: "grey",
		hex: 0x808080
	},
	{
		name: "honeydew",
		hex: 0xf0fff0
	},
	{
		name: "hotpink",
		hex: 0xff69b4
	},
	{
		name: "indianred",
		hex: 0xcd5c5c
	},
	{
		name: "indigo",
		hex: 0x4b0082
	},
	{
		name: "ivory",
		hex: 0xfffff0
	},
	{
		name: "khaki",
		hex: 0xf0e68c
	},
	{
		name: "lavender",
		hex: 0xe6e6fa
	},
	{
		name: "lavenderblush",
		hex: 0xfff0f5
	},
	{
		name: "lawngreen",
		hex: 0x7cfc00
	},
	{
		name: "lemonchiffon",
		hex: 0xfffacd
	},
	{
		name: "lightblue",
		hex: 0xadd8e6
	},
	{
		name: "lightcoral",
		hex: 0xf08080
	},
	{
		name: "lightcyan",
		hex: 0xe0ffff
	},
	{
		name: "lightgoldenrodyellow",
		hex: 0xfafad2
	},
	{
		name: "lightgray",
		hex: 0xd3d3d3
	},
	{
		name: "lightgreen",
		hex: 0x90ee90
	},
	{
		name: "lightgrey",
		hex: 0xd3d3d3
	},
	{
		name: "lightpink",
		hex: 0xffb6c1
	},
	{
		name: "lightsalmon",
		hex: 0xffa07a
	},
	{
		name: "lightseagreen",
		hex: 0x20b2aa
	},
	{
		name: "lightskyblue",
		hex: 0x87cefa
	},
	{
		name: "lightslategray",
		hex: 0x778899
	},
	{
		name: "lightslategrey",
		hex: 0x778899
	},
	{
		name: "lightsteelblue",
		hex: 0xb0c4de
	},
	{
		name: "lightyellow",
		hex: 0xffffe0
	},
	{
		name: "lime",
		hex: 0x00ff00
	},
	{
		name: "limegreen",
		hex: 0x32cd32
	},
	{
		name: "linen",
		hex: 0xfaf0e6
	},
	{
		name: "magenta",
		hex: 0xff00ff
	},
	{
		name: "maroon",
		hex: 0x800000
	},
	{
		name: "mediumaquamarine",
		hex: 0x66cdaa
	},
	{
		name: "mediumblue",
		hex: 0x0000cd
	},
	{
		name: "mediumorchid",
		hex: 0xba55d3
	},
	{
		name: "mediumpurple",
		hex: 0x9370db
	},
	{
		name: "mediumseagreen",
		hex: 0x3cb371
	},
	{
		name: "mediumslateblue",
		hex: 0x7b68ee
	},
	{
		name: "mediumspringgreen",
		hex: 0x00fa9a
	},
	{
		name: "mediumturquoise",
		hex: 0x48d1cc
	},
	{
		name: "mediumvioletred",
		hex: 0xc71585
	},
	{
		name: "midnightblue",
		hex: 0x191970
	},
	{
		name: "mintcream",
		hex: 0xf5fffa
	},
	{
		name: "mistyrose",
		hex: 0xffe4e1
	},
	{
		name: "moccasin",
		hex: 0xffe4b5
	},
	{
		name: "navajowhite",
		hex: 0xffdead
	},
	{
		name: "navy",
		hex: 0x000080
	},
	{
		name: "oldlace",
		hex: 0xfdf5e6
	},
	{
		name: "olive",
		hex: 0x808000
	},
	{
		name: "olivedrab",
		hex: 0x6b8e23
	},
	{
		name: "orange",
		hex: 0xffa500
	},
	{
		name: "orangered",
		hex: 0xff4500
	},
	{
		name: "orchid",
		hex: 0xda70d6
	},
	{
		name: "palegoldenrod",
		hex: 0xeee8aa
	},
	{
		name: "palegreen",
		hex: 0x98fb98
	},
	{
		name: "paleturquoise",
		hex: 0xafeeee
	},
	{
		name: "palevioletred",
		hex: 0xdb7093
	},
	{
		name: "papayawhip",
		hex: 0xffefd5
	},
	{
		name: "peachpuff",
		hex: 0xffdab9
	},
	{
		name: "peru",
		hex: 0xcd853f
	},
	{
		name: "pink",
		hex: 0xffc0cb
	},
	{
		name: "plum",
		hex: 0xdda0dd
	},
	{
		name: "powderblue",
		hex: 0xb0e0e6
	},
	{
		name: "purple",
		hex: 0x800080
	},
	{
		name: "rebeccapurple",
		hex: 0x663399
	},
	{
		name: "red",
		hex: 0xff0000
	},
	{
		name: "rosybrown",
		hex: 0xbc8f8f
	},
	{
		name: "royalblue",
		hex: 0x4169e1
	},
	{
		name: "saddlebrown",
		hex: 0x8b4513
	},
	{
		name: "salmon",
		hex: 0xfa8072
	},
	{
		name: "sandybrown",
		hex: 0xf4a460
	},
	{
		name: "seagreen",
		hex: 0x2e8b57
	},
	{
		name: "seashell",
		hex: 0xfff5ee
	},
	{
		name: "sienna",
		hex: 0xa0522d
	},
	{
		name: "silver",
		hex: 0xc0c0c0
	},
	{
		name: "skyblue",
		hex: 0x87ceeb
	},
	{
		name: "slateblue",
		hex: 0x6a5acd
	},
	{
		name: "slategray",
		hex: 0x708090
	},
	{
		name: "slategrey",
		hex: 0x708090
	},
	{
		name: "snow",
		hex: 0xfffafa
	},
	{
		name: "springgreen",
		hex: 0x00ff7f
	},
	{
		name: "steelblue",
		hex: 0x4682b4
	},
	{
		name: "tan",
		hex: 0xd2b48c
	},
	{
		name: "teal",
		hex: 0x008080
	},
	{
		name: "thistle",
		hex: 0xd8bfd8
	},
	{
		name: "tomato",
		hex: 0xff6347
	},
	{
		name: "turquoise",
		hex: 0x40e0d0
	},
	{
		name: "violet",
		hex: 0xee82ee
	},
	{
		name: "wheat",
		hex: 0xf5deb3
	},
	{
		name: "white",
		hex: 0xffffff
	},
	{
		name: "whitesmoke",
		hex: 0xf5f5f5
	},
	{
		name: "yellow",
		hex: 0xffff00
	},
	{
		name: "yellowgreen",
		hex: 0x9acd32 
	},
];