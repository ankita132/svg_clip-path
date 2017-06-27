$(document).ready(function(){

  var list = [
    {
      img : "img/pic-1.jpg",
      id : 0,
      name : "Asphalt 8"
    },
    {
      img : "img/pic-2.png",
      id : 1,
      name : "Geometry Wars"
    },
    {
      img : "img/pic-3.jpg",
      id : 2,
      name : "G T A"
    },
    {
      img : "img/pic-4.png",
      id : 3,
      name : "Minecraft"
    },
    {
      img : "img/pic-5.jpg",
      id : 4,
      name : "Modern Combat"
    },
    {
      img : "img/pic-6.jpg",
      id : 5,
      name : "Riptide GP2"
    },
    {
      img : "img/pic-7.jpg",
      id : 6,
      name : "The Room Three"
    },
    {
      img : "img/pic-8.jpg",
      id : 7,
      name : "Unkilled"
    },
    {
      img : "img/pic-9.jpg",
      id : 8,
      name : "Titanfall"
    },
    {
      img : "img/pic-10.jpg",
      id : 9,
      name : "Tekken 7"
    }
  ];

var newHTML = [];
    $.each(list , function(k , v){
      newHTML.push( '<div class="grid--item">  <svg preserveAspectRatio="xMidYMid slice" viewBox="0 0 300 200">\
				 <defs><clipPath id="clip-' + v.id + '"> <circle cx="0" cy="0" fill="#000" r="80px"></circle> </clipPath> </defs>\
				<text class="svg-text" dy=".3em" x="50%" y="50%">' + v.name + '</text>\
         <g clip-path="url(#clip-'+ v.id +')"><image height="100%" preserveAspectRatio="xMidYMid slice" width="100%" xlink:href='+ v.img + '></image>\
				<text class="svg-masked-text" dy=".3em" x="50%" y="50%">'+ v.name + '</text></g></svg>\
				</div>');
    });

  $('.grid').html(newHTML.join(""));

  var items = [];
  //returns a svg point;svg point represents a 2D or 3D point in the SVG coordinate system
  var point = document.querySelector("svg").createSVGPoint();
console.log(point);
function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function Item(config) {
  Object.keys(config).forEach(function(item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
  this.el.addEventListener("touchmove", this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute("cx", c.x);
    this.clip.setAttribute("cy", c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice
  .call(document.querySelectorAll(".grid--item"), 0)
  .forEach(function(item, index) {
    items.push(
      new Item({
        el: item,
        svg: item.querySelector("svg"),
        clip: document.querySelector("#clip-" + index + " circle")
      })
    );
  });

});
