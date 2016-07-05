
var bm = new BattleMap({x:32,y:32})
t1 = new Tanks(bm)
t2 = new Tanks(bm)

t1.setPosition({x:1,y:1})

//console.log(bm.showCell({x:1,y:1}))
t2.setPosition({x:1,y:10})


$(function(){
  bm.drawMap()
  $('.control div').click(function(){
    var m = $(this).attr('class')
    t1.move(m)
    bm.drawMap()
    })

})
