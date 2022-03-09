export class product{
    ProductId?:number;
    ProductName?:string;
    PurchaseDate?:Date;
    ProductAvailable?:boolean;
    SupplierId?:number;
    ContactName?:string;
    Quantity?: number;
    UnitPrice?: number;
    SalesUnitPrice?: number;
    Photos?:string;


    


    constructor(
    _ProductId?:number,
    _ProductName?:string,
    _PurchaseDate?:Date,
    _ProductAvailable?:boolean,
    _SupplierId?:number,
    _ContactName?:string,
    _Quantity?: number,
    _UnitPrice?: number,
    _SalesUnitPrice?: number,
    _Photos?:string,
        
    )
    {
       this.ProductId=_ProductId;
       this.ProductName=_ProductName;
       this.PurchaseDate=_PurchaseDate;
       this.ProductAvailable=_ProductAvailable;
       this.SupplierId=_SupplierId;
       this.ContactName=_ContactName;
       this.Quantity=_Quantity;
       this.UnitPrice=_UnitPrice;
       this.SalesUnitPrice=_SalesUnitPrice;
       this.Photos=_Photos;
       
    }



}
