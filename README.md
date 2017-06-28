# svg_clip-path
Breakdown of the Javascript code -
Basically here there is involvement of DOM to SVG Coordinate Translation.

var point = document.querySelector("svg").createSVGPoint();
This returns a svg point.Basically a svg point is a 2D or 3D point in the SVG coordinate system.The coordinate system is defined by the viewBox which is also referred to as the 'real' coordinate system.

point.x = e.clientX;
point.y = e.clientY;
These returns the horizontal and the vertical coordinate of the mouse over the svg canvas.Remember,here the svg canvas exists for each hexagonal structure and therefore the coordinates are given in reference to that.Also remember here the coordinates provided are 

return point.matrixTransform(svg.getScreenCTM().inverse());
Lets break this into components to understand it better.We have this svg.getScreenCTM().So basically this function converts every svg point to screen coordinate
