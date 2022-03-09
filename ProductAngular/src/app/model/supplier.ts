export class supplier{
    SupplierId?:number;
    CompanyName?:string;
    ContactName?:string;
    Address?:string;
    Phone?:string;
    Email?: string;
    constructor(
        _SupplierId?:number,
        _CompanyName?:string,
        _ContactName?:string,
        _Address?:string,
        _Phone?:string,
        _Email?: string, 
    )
    {
       this.SupplierId=_SupplierId;
       this.CompanyName=_CompanyName;
       this.ContactName=_ContactName;
       this.Address=_Address;
       this.Phone=_Phone;
       this.Email=_Email;
    }



}




