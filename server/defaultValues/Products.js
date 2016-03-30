/*ProductSeed =[ 
	 {
		'name':'Suits',
		'image':'http://searchengineland.com/figz/wp-content/seloads/2012/05/google-shopping.jpg'
     },        

	{
		'name':'Mobile',
		'image':'http://images.techtimes.com/data/images/full/98893/example-collections-shared-by-demi-lovato-and-nike.png?w=600'
        
    },

    {
        'name':'Camera',
        'image': 'https://cdn.shopify.com/s/files/1/0070/7032/files/Ecommerce_Product_Photography.jpg?117432'
        
    },

   
];

if(Products.find().count() === 0){

    _.each(ProductSeed, function(ProductSeed){
        Products.insert(ProductSeed);
        console.log("Inserted Products");
    })

}


*/