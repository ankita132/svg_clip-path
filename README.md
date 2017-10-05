# svg_clip-path
Breakdown of the Javascript code -<br/>
Basically here there is involvement of DOM to SVG Coordinate Translation. SVGs provide their own matrix factoring mechanisms to translate cordinates.

var point = document.querySelector("svg").createSVGPoint();<br/>
This returns a svg point.Basically a svg point is a 2D or 3D point in the SVG coordinate system.The coordinate system is defined by the viewBox which is also referred to as the 'real' coordinate system.

point.x = e.clientX;<br/>
point.y = e.clientY;<br/>
These returns the horizontal and the vertical cordinate of the mouse over the svg canvas.Remember,here the svg canvas exists for each hexagonal structure and therefore the cordinates are given in reference to that.Also remember here the coordinates provided are the pixel coordinates and not the svg ones.

return point.matrixTransform(svg.getScreenCTM().inverse());<br/>
Here we do the matrix transformation.That matrix is created from an inverse of the SVG’s.getScreenCTM() method which maps SVG units to screen coordinates.For detailed representation of the conversion refer -https://msdn.microsoft.com/en-us/library/hh535760(v=vs.85).aspx

Now we can create the svg circle on the hovered portion-<br/>
    this.clip.setAttribute("cx", c.x);<br/>
    this.clip.setAttribute("cy", c.y);<br/>
    
Array.prototype.slice.call(document.querySelectorAll(".grid--item"), 0) -<br/>
Array.prototype.slice.call is one way to turn that NodeList;here the grid--item classes (which acts like an array, but doesn’t have the methods from Array.prototype) into a real array.

Array.prototype.slice.call(document.querySelectorAll(".grid--item"), 0)<br/>
  .forEach(function(item, index) {<br/>
    items.push(<br/>
      new Item({<br/>
        el: item,<br/>
        svg: item.querySelector("svg"),<br/>
        clip: document.querySelector("#clip-" + index + " circle")<br/>
      })<br/>
    );<br/>
  });<br/>
  the function here first converts the given nodelist to a real array and then it pushes the following methods to the item array.
  
  function Item(config) {<br/>
  Object.keys(config).forEach(function(item) {<br/>
    this[item] = config[item];<br/>
  }, this);<br/>
  this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));<br/>
  this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));<br/>
}<br/>
 Object.keys(config) extracts keys from a given object, the returned array has been used with a forEach loop.<br/>
 
 Also remember to bind(this) in the handler functions otherwise we get this error-<br/>
 Uncaught TypeError: Object [object global] has no method 'function'
