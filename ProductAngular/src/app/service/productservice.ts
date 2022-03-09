import {Injectable} from '@angular/core';
import {product} from '../model/product'; 
import {HttpClient} from '@angular/common/http';


@Injectable()
export class productSvc
{
   productlist : product [] = new Array<product>();
   http:HttpClient ;
   baseUrl:string='https://localhost:44308';
    constructor(_http:HttpClient)
    {
        this.http=_http;
    }
    getData()
    {
         this.http.get(this.baseUrl+'/api/Products').subscribe(data =>
        {
            this.productlist.length=0;
            var jsonData =JSON.parse(JSON.stringify(data));
            console.log(jsonData);
            console.log("dataaaa");
            for(var p =0; p < jsonData.length; p++)
            {
                    this.productlist.push(new product(
                     jsonData[p].productId,
                     jsonData[p].productName,
                     jsonData[p].purchaseDate,
                     jsonData[p].productAvailable,
                     jsonData[p].supplierId,
                     jsonData[p].contactName,
                     jsonData[p].quantity,
                     jsonData[p].unitPrice,
                     jsonData[p].salesUnitPrice,
                     jsonData[p].photos,


                     

                 ));
            }
            localStorage.setItem('data',JSON.stringify(this.productlist));

        });
    }

    insertData(pi:product)
    {
      this.http.post(this.baseUrl+'/api/Products',pi).subscribe(data =>
        {
          var jsonData =JSON.parse(JSON.stringify(data));
        });
    }
    updateData(pi:product)
    {
      this.http.put(this.baseUrl+'/api/Products/'+pi.ProductId,pi).subscribe(data =>
        {
          var jsonData =JSON.parse(JSON.stringify(data));
        });
    }
    deleteData(pi:product)
    {
      this.http.delete(this.baseUrl+'/api/Products/'+pi.ProductId).subscribe(data =>
        {
          var jsonData =JSON.parse(JSON.stringify(data));
        });
    }
}