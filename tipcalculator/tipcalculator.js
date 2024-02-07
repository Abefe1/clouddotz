window.onload= () =>{

    document.querySelector('#solve').onclick=calTip;
}

function calTip() {
    let amount = document.querySelector('#amount').value;
    let percent=document.querySelector('#percentage').value;
    let people=document.querySelector('#people').value;

    console.log(amount);
    console.log(percent);
    console.log(people);


    if (amount=== '' || percent === ''){
        alert("Enter valid value in all fields, field can't be null")
        return;
    }

    if (people ===''){
        alert("Input a valid value")
        return;
    }

    let tip= ((percent/100)*amount).toFixed(1);
    let totalAmountToPay= amount + tip;
    let tipPerPerson = tip/people;

    
    document.querySelector('#outAmount').innerHTML=amount;
    document.querySelector('#tamount').innerHTML=tip;
    document.querySelector('#total').innerHTML=totalAmountToPay;
    document.querySelector('#per').innerHTML=tip;
}

// window.addEventListener("click", ()=> {
//     document.querySelector('#solve') =calTip;
// })