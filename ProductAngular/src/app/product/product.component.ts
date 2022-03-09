import { Component, OnInit } from '@angular/core';
import{supplierSvc} from '../service/supplierservice';
import {product} from '../model/product';
import{supplier} from '../model/supplier';
import{productSvc} from '../service/productservice';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prodList: product[] =new Array<product>();
  producting:productSvc;
  supSvc:supplierSvc;
  productFrom:product =new product();
  supList:supplier[] = new Array<supplier>();
  editDate:Date =new Date();
  searchText: string = "";
  actionType:number;

  constructor(_producting :productSvc, _supSvc:supplierSvc) 
  {
     this.producting = _producting;
     this.supSvc=_supSvc;
     this.productFrom.ProductId=0;
     this.loadDatasupplier();
  }

  ngOnInit() 
  {
    this.loadData();
    this.editDate=new Date();
  }
  loadDatasupplier()
  {
     this.supList.length=0;
     localStorage.setItem('data_supplier',null);
     this.supSvc.getData();
     this.waitForSupplierResult();
  }
  getSupplierList():supplier[]
  {
    return this.supList;
  }
  waitForSupplierResult()
  {
    var jData=JSON.parse(localStorage.getItem('data_supplier'));
    if(!Object.is(jData,null))
    {
         for(var s = 0; s < jData.length; s++)
         {
           this.supList.push(new supplier(
             Number(jData[s].SupplierId),jData[s].CompanyName, jData[s].ContactName,jData[s].Address,jData[s].Phone,jData[s].Email
           ));
         }
    }else
    {
       setTimeout(()=>{
         this.waitForSupplierResult();
       },1500);
    }

  }
  filterCondition(product) {
    return product.productName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
  loadData()
  {
     this.prodList.length=0;
     localStorage.setItem('data',null);
     this.producting.getData();
     this.waitForResult();
  }
  waitForResult()
  {
    var jData =JSON.parse(localStorage.getItem('data'));
    console.log(jData);
    if(!Object.is(jData,null))
    {
      for(var s =0; s < jData.length; s++ )
      {
        var pData= new Date(jData[s].PurchaseDate.toString());
        this.prodList.push(new product(
          Number(jData[s].ProductId),
          jData[s].ProductName,
          pData,
          jData[s].ProductAvailable,
          jData[s].SupplierId,
          jData[s].ContactName ,
          jData[s].Quantity,
          jData[s].UnitPrice,
          jData[s].SalesUnitPrice,
          jData[s].Photos,
           
         
          

        ));
      }

    }else
    {
      setTimeout(() => {
        this.waitForResult();
      }, 1500);

    }

  }
  showInfo():product[]
  {
    console.log(this.prodList);
    return this.prodList;
  }

  submitInfo(productFrom:product, actionType:Number)
  {
    productFrom.PurchaseDate = this.editDate;
    console.log(productFrom.PurchaseDate);
    console.log(productFrom);
    console.log(actionType);
    if(actionType ==1)
    {
      productFrom.ProductId =0;
      this.producting.insertData(productFrom);
    }else if (actionType == 2)
    {
       console.log('update');
       this.producting.updateData(productFrom);

    }else
    {
      this.producting.deleteData(productFrom);
    }
    setTimeout(() =>{
      this.loadData();
    },2000);

  }
  upload(event)
  {
   var file = event.target.files[0];
   var filereader =new FileReader();
   filereader.onload =function()
   {
     var image64string =filereader.result.toString();
     console.log(image64string);
     localStorage.setItem('Photos',image64string);
   }
   filereader.readAsDataURL(file);
   this.productFrom.Photos =localStorage.getItem("Photos");
  } 
  updateEntity(item: product)
  {
    this.productFrom.ProductId = item.ProductId;
    this.productFrom.ProductName= item.ProductName;
    this.editDate=item.PurchaseDate;
    this.productFrom.PurchaseDate=item.PurchaseDate;
    this.productFrom.ProductAvailable=item.ProductAvailable;
    this.productFrom.SupplierId=item.SupplierId;
    this.productFrom.Quantity=item.Quantity;
    this.productFrom.UnitPrice=item.UnitPrice;
    this.productFrom.SalesUnitPrice=item.SalesUnitPrice;
    this.productFrom.Photos=item.Photos;
    this.actionType =2;

  } 
  deleteEntity(item: product)
  {
    this.productFrom.ProductId = item.ProductId;
    this.productFrom.ProductName= item.ProductName;
    this.editDate=item.PurchaseDate;
    this.productFrom.PurchaseDate=item.PurchaseDate;
    this.productFrom.ProductAvailable=item.ProductAvailable;
    this.productFrom.SupplierId=item.SupplierId;
    this.productFrom.Quantity=item.Quantity;
    this.productFrom.UnitPrice=item.UnitPrice;
    this.productFrom.SalesUnitPrice=item.SalesUnitPrice;
    this.productFrom.Photos=item.Photos;
    this.actionType =3;

  } 

}
