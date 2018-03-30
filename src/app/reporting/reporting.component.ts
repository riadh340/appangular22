import { Component, OnInit } from '@angular/core';
import {AppPipePipe} from '../app-pipe.pipe';


@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
carts=[

 ];
 cartsprice=[

 ];
 totalprice:number ;
 totalpriceremise:number ;
 tva:number ;
clients = [
{p_id: "1", p_name: "mohamed" , p_prenom: "mohamed" ,p_cin: "09915766"},
{p_id: "1", p_name: "Ahmed" , p_prenom: "mohamed" ,p_cin: "01578545" },
{p_id: "1", p_name: "Ali" , p_prenom: "mohamed" ,p_cin: "03215487"}


 ];
 clientsch = [
 ];
quantite=1;
qunt=0;

products = [
          {p_id: "1", p_name: "Samsung Galaxy S7 Edge", p_image: "", p_price: 28990},
          {p_id: "2", p_name: "iPhone 8", p_image: "", p_price: 60138},
          {p_id: "3", p_name: "Sony Xperia Z3+", p_image: "", p_price: 1519000},
          {p_id: "4", p_name: "ALIENWARE 17", p_image: "", p_price: 75187},
          {p_id: "5", p_name: "Luvaglio Laptop", p_image: "", p_price: 50115},
          {p_id: "6", p_name: "Motorola Moto G4 16GB", p_image: "", p_price: 9013}
        ];

add_client = function(client , clientsch=[] ){

        this.clientsch = []; 
             if(client){

          this.clientsch.push({p_id: client.p_id, p_name: client.p_name, p_prenom: client.p_prenom , p_cin: client.p_cin});
          }

                  console.log(this.clientsch);
              }



 add_cart = function(product , quantite , qunt , carts=[] ){
          console.log("oo");

           this.qunt=product.p_price*this.quantite ;
          if(product){

          this.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price , p_quantite: this.quantite , p_pricequnt : this.qunt });
          }
 this.quantite=1;
           console.log(this.carts);
           }






 add_cartprice = function(product , cartsprice=[] , quantite){
          console.log("oo");
        if(product){

          this.cartsprice.push({price :product.p_price*Number(quantite)});
          }

           console.log(this.cartsprice);
        }
 



gettotal(){
            let total = 0 ;
          for (let  index=0; index< this.carts.length;index++){
  
          total += parseFloat(this.carts[index].p_pricequnt.toString());
          }
          this.totalprice= total ; 
          this.tva = total /100 * 19 ;
          this.totalpriceremise =total + this.tva ;

          console.log("total=" ,this.totalprice);

           }


getremise(code){
             this.totalpriceremise = ( this.totalprice -  ((this.totalprice * code)/100) ) ;

                     
          } 



remove_cart = function(cart){
        let total = 0 ;
          if(cart){
         this.carts.splice(this.carts.indexOf(cart), 1);
                    }         
     for (let  index=0; index< this.carts.length;index++){
  
        total += parseFloat(this.carts[index].p_price.toString());
                        }

                this.totalprice = total ;
             this.tva = total /100 * 19 ;

             this.totalpriceremise =total + this.tva   ;
        }            


      


  constructor() { }

  ngOnInit() {
  this.gettotal() ;
  
  }

}
