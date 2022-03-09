import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{supplier} from '../model/supplier'




@Injectable()
export class supplierSvc
{
    supplierList:supplier[]=new Array<supplier>();
    http:HttpClient;
    baseUrl:string='https://localhost:44308';
    constructor(_http:HttpClient){
        this.http=_http;
    }
    getData()
    {
        this.http.get(this.baseUrl+'/api/Suppliers').subscribe(data=>{
            this.supplierList.length=0;
           var jsonData=JSON.parse(JSON.stringify(data));
           console.log('perse data GG');
           console.log(jsonData);
            for(var s=0;s<jsonData.length;s++)
            {
                this.supplierList.push(new supplier(
                    jsonData[s].supplierId,
                    jsonData[s].companyName,
                    jsonData[s].contactName,
                    jsonData[s].address,
                    jsonData[s].phone,
                    jsonData[s].email,
                ));
            }
            localStorage.setItem('data_supplier',JSON.stringify(this.supplierList));
        });
        
    }

    insertData(s:supplier)
    {
        this.http.post(this.baseUrl+'/api/Suppliers',s).subscribe(data=>{
           
           var jsonData=JSON.parse(JSON.stringify(data));
           
        });
       
    }
    updateData(s:supplier)
    {

        this.http.put(this.baseUrl+'/api/Suppliers/'+s.SupplierId,s).subscribe(data=>{
           
            var jsonData=JSON.parse(JSON.stringify(data));
            
         
        });
    }
    deleteData(s:supplier)
    {
        this.http.delete(this.baseUrl+'/api/Suppliers/'+s.SupplierId).subscribe(data=>{
           
            var jsonData=JSON.parse(JSON.stringify(data));
            
         
        });
    }
  
    

}