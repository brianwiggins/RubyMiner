
import {items, mine, autoMine, howManyRubies} from './math.js';
window["mine"]=mine;
window["autoMine"]=autoMine;
window["howManyRubies"]=howManyRubies;
window["update"]=update;
window["buy"]=buy;
function buy(thing){
switch(thing){
  case "pickaxe":
    items[0].addOne()
    break;
  case "dwarves":
    items[2].addOne()
    break;
  case "minecart":
    items[3].addOne()
    break;
  case "dynamite":
    items[1].addOne()
    break;
}
}

autoMine();
setInterval(autoMine,5000);
setInterval(update,5000);

function update(){
  document.getElementById("ruby-count").innerHTML=howManyRubies();//update ruby count

  //update item count
  document.getElementById("pickaxe-count").innerHTML=items[0].getQuantity();
  document.getElementById("dynamite-count").innerHTML=items[1].getQuantity();document.getElementById("dwarf-count").innerHTML=items[2].getQuantity();document.getElementById("minecart-count").innerHTML=items[3].getQuantity();

  //update item cost
  document.getElementById("pickaxe-cost").innerHTML=items[0].getPrice();
  document.getElementById("dynamite-cost").innerHTML=items[1].getPrice();document.getElementById("dwarf-cost").innerHTML=items[2].getPrice();document.getElementById("minecart-cost").innerHTML=items[3].getPrice();
  if(howManyRubies()){

  }
}


