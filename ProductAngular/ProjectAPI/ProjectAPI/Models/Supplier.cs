using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.Models
{
    public class Supplier
    {
        [Key]
        public int SupplierId { get; set; }
        
        public string CompanyName { get; set; }
       
        public string ContactName { get; set; }
       
        public string Address { get; set; }
       
        public string Phone { get; set; }
        
        public string Email { get; set; }
        public virtual ICollection<Product> Products { get; set; }
    }
}
