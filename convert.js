const baserates={
    USD:1,
    INR:84,
    EUR:0.92,
    GBP:0.79
}
function convert(){
    const rawamount=document.getElementById("amount").value;
    const from=document.getElementById("from").value;
    const to=document.getElementById("to").value;

    const amount=parseFloat(rawamount);
    if(isNaN(amount)){
        alert("Please enter a valid number!");
        return;
    }
    if(amount<0){
        alert("Please enter a positive number!");
        return;
    }
    if(from===to){
        alert("Please select different currencies!");
        return;
    }
    const result=amount*(baserates[to]/baserates[from]);
    document.getElementById("converted-amount").innerText=result.toFixed(2);
}