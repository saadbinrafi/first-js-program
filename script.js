// const price = document.getElementById('budget').innerText
// const convertPrice = parseInt(price);
// console.log(typeof convertPrice);

// const cartCount = document.getElementById("cart").innerText
// const convertCartCount = parseInt(cartCount);


// const leftCount = document.getElementById("left").innerText
// const convertLeftCount = parseInt(leftCount);

//------------------------------------------------------///
//------------------------------------------------------///


// id converted  system
function getConvertedValue(id){

    const price = document.getElementById(id).innerText
    const convertPrice = parseInt(price);
    // console.log(convertPrice);

    return convertPrice;

}

const allBtn = document.getElementsByClassName('add-btn')
// console.log(allBtn)

for(const btn of allBtn){
    btn.addEventListener('click', function(event){
        
        const name = event.target.parentNode.childNodes[1].innerText;
        
        const price = event.target.parentNode.childNodes[3].childNodes[1].innerText;

        const category = event.target.parentNode.childNodes[5].childNodes[1].innerText;

        console.log(name,price,category)

        const selectedContainer = document.getElementById('selected-players-container')

        

    
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        p1.innerText = name;
        p2.innerText = price;
        p3.innerText = category;


        selectedContainer.appendChild(p1)
        selectedContainer.appendChild(p2)
        selectedContainer.appendChild(p3)


        updateTotalCost(price);
        updateGrandTotal()

        // after 1 click button disabled setup 
        event.target.setAttribute('disabled', false)
        
        



        // cart min & max setup 
        const firstCartCount =getConvertedValue('cart')
        if(firstCartCount + 1 > 6){
            alert('your limit is finished')
            return;
        }

        // after 1 click background color setup 
        event.target.parentNode.style.backgroundColor = "gray";
        
        
        
        
        // console.log(firstCartCount);

        
        



        //**budget dynamic setup start*/
        const budget = getConvertedValue("budget");
            document.getElementById("budget").innerText = budget - parseInt(price);

        //**cart dynamic setup tart */
        const cartCount = getConvertedValue('cart')
            document.getElementById('cart').innerText= cartCount + 1; 
            
            
        //**left dynamic setup start */
        const leftCount = getConvertedValue('left')
            document.getElementById('left').innerText = leftCount - 1; 

        
       














    })
    // console.log(btn)
}

function updateGrandTotal (status){

    const totalCost = getConvertedValue('total-cost')


    if(status === undefined){
        
        
        document.getElementById('grand-total').innerText = totalCost;
    }
    else{
        const couponCode = document.getElementById("coupon-code").value;

        if(couponCode == 'love420'){

            const discounted = totalCost * 0.2;
            // console.log(discounted);

            document.getElementById('grand-total').innerText = totalCost - discounted


        }
        else{
            alert('please enter a valid coupon code')
        }
    }


    
    
}

function updateTotalCost (price){



    const totalCost = getConvertedValue('total-cost')


    const sum = totalCost +  parseInt(price);

    document.getElementById('total-cost').innerText = sum
}







//--------------------------------------------------------///
//--------------------------------------------------------///
// function getConvertedValue (id){
//     const price = document.getElementById(id).innerText;
//     const convertedPrice = parseInt(price)
//     return convertedPrice;
//     // console.log(convertedPrice) 

// }

// const result =  getConvertedValue('budget')
// console.log(result);