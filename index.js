let thankYouMessages =  [];

function writeCards(names, event) {
    for (let i = 0; i < names.length; i++) {

    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    
    thankYouMessages.push(message);  

    };          
            
    return thankYouMessages;
 
}; 

function countDown (num) {
    while (num > 0) {
        console.log(num--);
    };

    console.log(num);
};