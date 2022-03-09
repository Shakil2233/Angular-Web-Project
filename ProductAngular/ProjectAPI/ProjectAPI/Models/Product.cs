using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class Product
    {

        [Key]
        public int ProductId { get; set; }
        
        public string ProductName { get; set; }
       
        public DateTime PurchaseDate { get; set; }
        public bool ProductAvailable { get; set; }
    
        public int SupplierId { get; set; }
        [ForeignKey("SupplierId")]
        public string ContactName { get; set; }
        
        public int Quantity { get; set; }
        
        public decimal UnitPrice { get; set; }
       
        public decimal SalesUnitPrice { get; set; }
        public string Photos { get; set; }
        public virtual Supplier Supplier { get; set; }
    }
}
