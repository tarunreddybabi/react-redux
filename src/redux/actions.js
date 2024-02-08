


export function buyTicket(numOfTickets){
    return{
        type:"BUY_TICKET",
        payload:numOfTickets
    }
}

export function blockTicket(){
    return{
        type:"BLOCK_TICKET",
    }
}

export function cancelTicket(){
    return{
        type:"CANCEL_TICKET",
    }
}

