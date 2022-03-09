import { Component, OnInit } from '@angular/core';
import{ supplier } from '../model/supplier';
import{ supplierSvc } from '../service/supplierservice'

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit 
{

  supList : supplier [] = new Array<supplier>();
  supSvc :supplierSvc;
  supForm : supplier = new supplier();
  searchText: string = "";

  actionType : number ;

  constructor( _supSvc :supplierSvc ) { 
     this.supSvc = _supSvc;
     this.supForm.SupplierId = 0;
  }

  ngOnInit() {
   
    this.loadData();

  }

   loadData()
   {
           this.supList.length = 0;
           localStorage.setItem('data_supplier', null);
           this.supSvc.getData();
           this.waitForResult();
   }

    waitForResult()
    {      
         var jData =  JSON.parse(localStorage.getItem('data_supplier'));
         if(!Object.is(jData,null))
         {  
              for(var v =0 ; v < jData.length ; v++ )
              {
                   
                    this.supList.push(new supplier(
                      Number(jData[v].SupplierId) ,  jData[v].CompanyName , jData[v].ContactName , jData[v].Address,jData[v].Phone,jData[v].Email
                    )); 
              }
              
         }else
         {
             setTimeout(() => {
              this.waitForResult();
             }, 500);
         }
         
    }

   showInfo() : supplier []
   {

    console.log(this.supList);
      return this.supList;
   }
   filterCondition(supplier) {
    return supplier.CompanyName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }


   submitInfo(supplierFrom : supplier , actionType : Number)
   {
        console.log(supplierFrom);
        console.log(actionType);
      if(actionType == 1)
      {
        supplierFrom.SupplierId =0 ;
        this.supSvc.insertData(supplierFrom);
      }else if(actionType == 2)
      {
         console.log('update');
        this.supSvc.updateData(supplierFrom);
      }
      else{
      
        this.supSvc.deleteData(supplierFrom);
      }
     

      setTimeout(() => {

        this.loadData();
        
      }, 700);
      
   }

   

   updateEntity(item : supplier)
   {
    
    this.supForm.SupplierId = item.SupplierId;
    this.supForm.CompanyName = item.CompanyName;
    this.supForm.ContactName = item.ContactName;
    this.supForm.Address = item.Address;
    this.supForm.Phone = item.Phone;
    this.supForm.Email= item.Email;
 
    this.actionType = 2;
    
    
   }

   deleteEntity(item : supplier)
   {
    this.supForm.SupplierId = item.SupplierId;
    this.supForm.CompanyName = item.CompanyName;
    this.supForm.ContactName = item.ContactName;
    this.supForm.Address = item.Address;
    this.supForm.Phone = item.Phone;
    this.supForm.Email= item.Email;

    this.actionType = 3;
    
   }
   

}