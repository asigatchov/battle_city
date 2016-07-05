
var battlemap;

var Tanks = function (bm){
   var self = this;
   var x,y;
   var battlemap  = bm;
   this.initmap = function(obj){
     battlemap = obj;
   }

   this.setPosition = function(a){
     if (battlemap.showCell(a)  ==null  ){
       if (x, y){
         battlemap.unsetTank(self,{x:x,y:y})
        }
        x = a.x
        y = a.y;
        battlemap.setTank(self, {x:x,y:y})
        return true
      }
      return false
   }

   this.currentPostion = function(){
     return {x:x, y:y}
   }


   this.move = function(direction){
     var new_y = y , new_x = x ;
     switch (direction){
       case 'top':
        new_y = y - 1;
        break;
       case 'bottom':
         new_y = y + 1;
         break;
       case 'left':
         new_x = x - 1;
         break;
       case 'right':
         new_x = x + 1;
         break;
       }
       self.setPosition({x:new_x,y:new_y})
       return self.currentPostion()
    }

}

var BattleMap =function (s){

  var size_x =  s.x
  var size_y =  s.y
  battlemap = []
  for(var i=0;i<size_y;i++){
    battlemap[i] = []
    for(var j=0;j<size_x;j++){
      battlemap[i][j] = null
    }
  }
  var self = this
  this.map_size = function(){
    return {x:size_x, y:size_y}
  }

  this.showCell = function(a){
    return battlemap[a.x][a.y]
  }

  this.unsetTank = function(obj) {
     battlemap[obj.currentPostion().x][obj.currentPostion().y] = null
  }

  this.setTank = function(obj) {
     battlemap[obj.currentPostion().x][obj.currentPostion().y] = obj
  }

  this.drawMap = function(){
    var maps = ''
    maps = "<table border=1px>";
    for(var i=0;i<size_y;i++){
       maps += "<tr>"
       for(var j=0;j<size_x;j++){
         maps += "<td class='cell'"
         if (battlemap[j][i]){
           maps += " bgcolor='red'"
         }
         maps += ">&nbsp;</td>"
       }
       maps += "</tr>"
    }

    $('.battlemap').html(maps)
  }
}
