var names = ['heroku', 'app', 'package', 'manifest', 'whatever']
var formats = ['json', 'yml', 'cson', 'xml', 'whatever']

var random = function(array) {
  return array[Math.floor(Math.random()*array.length)]
}

var spin = function() {
  document.querySelector("h1").innerHTML = random(names) + "." + random(formats)
}

document.addEventListener('DOMContentLoaded', function(){
  spin()
})


document.addEventListener('keyup', function(){
  spin()
})

document.addEventListener('click', function(){
  spin()
})
