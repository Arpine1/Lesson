var product = {
   name:'Internet  market  ',
   title:'Nice shopping',
   address:'Armenia, 0001, Yerevan Tumanyan str.',
   site:'OfficeMARCET.am',
   phnumber:'010 323-323',
   discount:70,
   day:new Date(),
   rating:["30%","40%","50%"],
   category:['food','drinks','gifts'],
   product:['sendwich','wine','jewelry box'],
   price:["35$","40$","50$","63$"],
   getType: function (){
   return  (this.name+"<br>"+this.day+"<br>"+this.address+"<br>"+this.phnumber+"<br>"+this.title);
		  },
   
   
//1              
mypro:function(){
  for( i in product) {
  for ( j in product[i])  {
  if(product[i] === product.price){
   return(product[i][j] + ' ');
                }
         }
    }
} ,


//2
cate:function(){
  for( key in product) {
  for (category in product[key])  {
  if(product[key] === product.category){
  return(product[key][category]);
            }
        }
     }
 },

     
  
//3 
getR: function(){
if(this.product[0]){
return ( this.rating[1]);
}else
return(this.rating[2]);
  } ,

  
//4
   Pri: function (){
   if(this.product[2]){
   return( this.price[2]+this.product[2]);
   } else
   return( this.price[3]+this.product[1]);
},
		   
	
//5
myPri: function (){
if(this.product[0]){
return( this.price[1]+this.product[0]);
} else
return( this.price[3]+this.product[1]);
 },
		   

//6	   
getP: function(){
if(this.product[3]){
return ( this.price[3]+this.product[3]);
}else
return(this.price[1]+this.product[1]);
 } ,
  

//7 
Cat: function (){
if(this.category[1]){
return( this.rating+this.category[1]);
} else
return( this.rating+this.category[2]);
    }, 
  
  
//8
getRet: function(){
if(this.rating[2]){
return ( this.site+this.rating[2]);
} else
return( this.site+this.rating[1]);
   },
         
  
//9
getDis: function(){
if(this.category[0]){
return ( this.discount*1);
}else
return(this.discount*2);
   } ,
  
 
   info: function () {
   return  ("<br>"+this.Pri()+'<br>'+this.getType()+"<br>"+this.Cat()+"<br>"+this.getRet()+"<br>"+this.myPri()+"<br>"+this.getP()+"<br>"+this.getDis()+"<br>"+this.getR()+"<br>"+this.mypro()+"<br>"+this.cate());
         }
    };

document.write(product.info());
