// var addNewProduct=document.getElementById("addNewProduct");    // element kolo ===>input kolo
// var ProductPrice=document.getElementById("ProductPrice");// element kolo ===>input kolo
// var produtCategory=document.getElementById("produtCategory");// element kolo ===>input kolo
// var productDescription=document.getElementById("productDescription");// element kolo ===>input kolo
// var productList=[]
// function addProduct(){
//     var product={
//         name:addNewProduct.value,
//         price:ProductPrice.value,
//         category:produtCategory.value,
//         description: productDescription.value
//     }
//     productList.push(product);
//     console.log(productList); [{},{},{},{}]
//     // console.log(addNewProduct.value);    // value for input
//     // console.log(ProductPrice.value);
//     // console.log(produtCategory.value);
//     // console.log(productDescription.value)
    
// }

// 
////*************************************************************************** */
/*
var newProductInput=document.getElementById("addNewProduct"); //input kolo
var ProductPrice=document.getElementById("ProductPrice");
var produtCategory=document.getElementById("produtCategory");
var productDescription=document.getElementById("productDescription");
// var searchProduct=document.getElementById("search");
*/
//**************************** */
/*
var productList=[];
*/
//***************************** */
/*
if(localStorage.getItem("products")!=null){
    productList=JSON.parse(localStorage.getItem("products"));
    displayProduct();
}
*/
//******************************** */
/*
function addProduct(){   //add function
    var product={
        name:newProductInput.value ,// value fo input is user enterd in 
        price:ProductPrice.value ,  //value price usesr enterd  is 
        category:produtCategory.value, // value for category is user enterd is 
        description:productDescription.value // value for description is user enterd is 
    }
    productList.push(product);
    localStorage.setItem("products",JSON.stringify(productList));
    clear();
    displayProduct()
    console.log(productList);
}
*/
//******************************** */
/*
function clear(){   // clear function 
    newProductInput.value="";
    ProductPrice.value="";
    produtCategory.value="";
    productDescription.value=""
}
*/
// ***********************************************
/*
function displayProduct(){   //veiw product for user 
    var data="";
    for(var i=0 ; i<productList.length ; i++){
        data+=`
         <tr>
                <td >
                   ${i}
                </td>
                <td >
                    ${productList[i].name}
                </td>
                <td>
                    ${productList[i].price}
                </td>
                <td>
                    ${productList[i].category}
                </td>
                <td>
                    ${productList[i].description}
                </td>
                <td >
                    <button class="btn bg-warning btn-sm " >update</button>
                    <button class="btn bg-danger btn-sm" onclick="sayDelete(${i})">delete</button>
                </td>
                </tr> 
        `
    }
    document.getElementById("tableBody").innerHTML=data
}
*/
//******************************************* */
// // delete item 
// function sayDelete(index){
//     // window.alert(index)
//     productList.splice(index,1);
//     console.log(productList)
//     displayProduct();
// }
//************************************************* */
/*
function sayDelete(index){   //delete function 
    productList.splice(index,1);  /// delete from array  according of idnex of prameter
    localStorage.setItem("products",JSON.stringify(productList));
    displayProduct() // display after delete 
}
*/
//************************************************* */
// function productSearch(){
   
//     // console.log("hello");
//     // console.log(searchProduct.value);
//     var term=searchProduct.value;
//     var data="";
//     for(var i=0 ; i<productList.length ; i++){
//        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
//         data+=`
//         <tr>
//                <td >
//                   ${i}
//                </td>
//                <td >
//                    ${productList[i].name}
//                </td>
//                <td>
//                    ${productList[i].price}
//                </td>
//                <td>
//                    ${productList[i].category}
//                </td>
//                <td>
//                    ${productList[i].description}
//                </td>
//                <td >
//                    <button class="btn bg-warning btn-sm " >update</button>
//                    <button class="btn bg-danger btn-sm" onclick="sayDelete(${i})">delete</button>
//                </td>
//                </tr> 
//        `
//    }
//    document.getElementById("tableBody").innerHTML=data
//        }
// }
//****************************************** */
/*
function productSearch(){    //search function 
    var term=searchProduct.value;
    var data="";
    
    for(var i=0 ; i<productList.length ; i++){
       if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
        data+=`
        <tr>
               <td >
                  ${i}
               </td>
               <td >
                   ${productList[i].name}
               </td>
               <td>
                   ${productList[i].price}
               </td>
               <td>
                   ${productList[i].category}
               </td>
               <td>
                   ${productList[i].description}
               </td>
               <td >
                   <button class="btn bg-warning btn-sm " >update</button>
                   <button class="btn bg-danger btn-sm" onclick="sayDelete(${i})">delete</button>
               </td>
               </tr> 
       `
   }
   document.getElementById("tableBody").innerHTML=data
       }
}
*/
//****************************************************** */
var newProductInput=document.getElementById("addNewProduct"); //input kolo
var productPrice=document.getElementById("ProductPrice"); //input kolo
var produtCategory=document.getElementById("produtCategory") //input kolo
var productDescription=document.getElementById("productDescription"); //input kolo
var searchProduct
=document.getElementById("search"); //input kolo 

var productList=[]
if(localStorage.getItem("product")!=null){
    productList=JSON.parse(localStorage.getItem("product"));
    displayProduct()
}
function addProduct(){   //add product function 
    var product={
        name:newProductInput.value,
        price:productPrice.value,
        category:produtCategory.value,
        Description:productDescription.value
    }
    productList.push(product)
    localStorage.setItem("product",JSON.stringify(productList));
    displayProduct()
    clearProduct()
    console.log(productList);
    

}
function clearProduct(){    // clear function 
    newProductInput.value="";
    productPrice.value="";
    produtCategory.value="";
    productDescription.value="";
}
function displayProduct(){   // veiw function 
    var data="";
    for(var i=0 ;i<productList.length ; i++){
        data+=`
         <tr>
         <td >
                ${i}
            </td>
                <td >
                    ${productList[i].name}
                </td>
                <td>
                    ${productList[i].price}
                </td>
                <td>
                    ${productList[i].category}
                </td>
                <td>
                    ${productList[i].Description}
                </td>
                <td >
                    <button class="btn bg-warning " >update</button>
                    <button class="btn bg-danger" onclick="deleteProduct(${i})">delete</button>
                </td>
                </tr> 
        `
    }
    document.getElementById("tableBody").innerHTML=data;
}

function deleteProduct(index){   //delete function 
    productList.splice(index,1);
    localStorage.setItem("product",JSON.stringify(productList));
    displayProduct();
}

function productSearch(){    //search function 
    var term=searchProduct.value;
    var data="";
    
    for(var i=0 ; i<productList.length ; i++){
       if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
        data += `
            <tr>
               <td >
                  ${i}
               </td>
               <td >
                   ${productList[i].name}
               </td>
               <td>
                   ${productList[i].price}
               </td>
               <td>
                   ${productList[i].category}
               </td>
               <td>
                   ${productList[i].description}
               </td>
               <td >
                   <button class="btn bg-warning btn-sm " >update</button>
                   <button class="btn bg-danger btn-sm" onclick="sayDelete(${i})">delete</button>
               </td>
            </tr> 
       `
   }
   document.getElementById("tableBody").innerHTML=data
       }
}























