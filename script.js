async function get(){
    try {
        var productData=await fetch("https://fakestoreapi.com/products");
        var Data=await productData.json();
        console.log(Data);
        var con=document.createElement('div');
            con.setAttribute('class','container');
            document.body.append(con);
        for(let i in Data){
            var row=document.createElement('div');
                row.setAttribute('class','row');
            var col1=document.createElement('div');
                col1.setAttribute('class','col-12 col-lg-6 col-md-6 col-sm-6');
            var col2=document.createElement('div');
                col2.setAttribute('class','col-12 col-lg-6 col-md-6 col-sm-6');
            var images=document.createElement('img');
                images.setAttribute('src',`${Data[i].image}`);
            var div=document.createElement('div');
                div.setAttribute('class','info');
            var head=document.createElement('h2');
                head.setAttribute('class','headt');
                head.innerHTML=`${Data[i].title}`;
            var para=document.createElement('p');
                para.innerHTML=`<b>Price : ₹${Data[i].price}</b>`;
            var decr=document.createElement('p');
                decr.innerHTML=`${Data[i].description   }`
            
                
            var hrl=document.createElement('hr');
        

        col1.append(images);
        div.append(head,para,decr);
        col2.append(div);
        row.append(col1,col2);

        con.append(row,hrl);

    } 

    } catch (error) {
        alert("404 Not Found");
    }
}
get();

