function scrollHandler(input) {
  if (!input) return;
  var arr = input;
  var NODES = [];

  for (var i = 0; i < arr.length; i++) {
    var selector = 'a[href="#'+arr[i] + '"]'
    if (document.querySelector(selector))
      NODES.push(document.querySelector(selector));
  }
  
  if (!NODES) return;

  NODES.forEach(function(element){
    element.addEventListener('click',function(){
      event.preventDefault();
      
      var id = element.href.slice(element.href.indexOf("#") + 1);
      var target = document.getElementById(id);
      
      window.scrollTo({
        top: target.offsetTop ,
        behavior: "smooth"
      });
      
      target.id = ''      
      location.hash = id;      
      target.id = id;
    });
  });
}
