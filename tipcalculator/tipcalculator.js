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


    if (amount=== '' || percent === '' ||people ===''){
        alert("Enter valid value in all fields, field can't be null")
        return;
    }


    let amountf = parseFloat(amount);
    let tip= parseFloat((percent/100)*amount);
    let totalAmountToPay= parseFloat(amount) + parseFloat(tip);
    let tipPerPerson = parseFloat(tip/people);

    
    document.querySelector('#outAmount').innerHTML=amountf.toFixed(2);
    document.querySelector('#tamount').innerHTML=tip.toFixed(2);
    document.querySelector('#total').innerHTML=totalAmountToPay.toFixed(2);
    document.querySelector('#per').innerHTML=tipPerPerson.toFixed(2);
    
}

function refresh() {
    let rset = document.querySelector('#inf');
    rset.reset()
}

// window.addEventListener("click", ()=> {
//     document.querySelector('#solve') =calTip;
// })