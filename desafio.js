function addUpExpenses(expenseList = [], names = []){
    let totalExpenses = 0
    if(names.length === 0){
        return 0
    }
    for(let i = 0; i<expenseList.length; i++){
        totalExpenses += expenseList[i].amount*expenseList[i].unitPrice
    }
    return totalExpenses
}

function shareExpenses(totalExpenses, names){
    if(names.length === 0){
        return {}
    }
    let totalToPay = (totalExpenses/names.length).toFixed(2)
    let object = {}
    for(let i = 0; i<names.length; i++){
        object[names[i]] = totalToPay
    }
    if(totalToPay*names.length !== totalExpenses){
        if(totalExpenses < totalToPay*names.length){
            object[names[names.length-1]] = (Number(totalToPay) - Number((Number(totalToPay)*names.length - totalExpenses).toFixed(2)))+""
        }else{
            object[names[names.length-1]] = (Number(totalToPay) + Number((totalExpenses - Number(totalToPay)*names.length).toFixed(2)))+""
        }
    }
    return object
}

function main(expenseList = [], names = []){
    let totalExpenses = addUpExpenses(expenseList, names);
    return shareExpenses(totalExpenses, names)
}
