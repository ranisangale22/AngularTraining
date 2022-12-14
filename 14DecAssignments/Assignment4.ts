class Items{
    itemid:number;
    itemname:string;
    itemprice:number;
    itemcategory:string;

    constructor(itemid:number,itemname:string,itemprice:number,itemcategory:string)
    {
        this.itemid=itemid;
        this.itemname=itemname;
        this.itemprice=itemprice;
        this.itemcategory=itemcategory

    }
    display = () => console.log(this.itemid +' ' + this.itemname+' '+this.itemprice+' '+this.itemcategory)
}

let item1=new Items(100,"Item1",500,"A");
let item2=new Items(101,"Item2",1000,"B");
let item3=new Items(102,"Item3",1500,"C");

item1.display();
item2.display();
item3.display();

