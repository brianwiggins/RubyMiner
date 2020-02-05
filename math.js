
export class Item{
  constructor(name,price,quantity,multiplier,auto){
    this.name=name;
    this.price=price;
    this.quantity=quantity;
    this.multiplier=multiplier;
    this.auto=auto;
  }
  getName(){
    return this.name;
  }
  getPrice(){
    return this.price;
  }
  getQuantity(){
    return this.quantity;
  }
  getMultiplier(){
    return this.multiplier;
  }
  isAuto(){
    return this.auto;
  }
  addOne(){
    if(this.price<=rubies){
    this.quantity++;
    rubies-=this.price;
    this.price=Math.trunc(this.price*(1.1));
    Swal.fire({
      position:'top-end',
      icon:'success',
      title:'Congrats, you bought a '+this.name,
    });
    return true;
    }
    else{
      Swal.fire({
        position:'top-end',
        icon:'error',
        title:'You do not have enough rubies for a '+this.name,
      });
      return false
    }
  }
}
let rubies=0;
export let items=[
  new Item("pickaxe",20,0,1,false),
  new Item("dynamite",300,0,15,false),
  new Item("dwarf",600,0,20,true),
  new Item("minecart",400,0,10,true),
]
export function mine(){
  let pickaxe = items[0];
  let dynamite = items[1];
rubies+=((pickaxe.getMultiplier()*pickaxe.getQuantity())//pickaxe stuff
+(dynamite.getMultiplier()*dynamite.getQuantity())//dynamite stuff
)+1;//original click value]
};
export function autoMine(){
  let autoRuby=0;
  let dwarf = items[2];
  let cart= items[3];
  autoRuby+=((dwarf.getMultiplier()*dwarf.getQuantity())//dwarf stuff
  +(cart.getQuantity()*cart.getMultiplier())//cart stuff
  );
  rubies+=autoRuby;
};
export function howManyRubies(){
return rubies;
};

