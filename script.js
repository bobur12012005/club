let question = prompt('How many people are there in the club?')
if(question <10 && question >=0) {

    let second_question = prompt('What is your name?').toLowerCase().trim()
    if(second_question.charAt(0) === 'a') {

        let third_question = prompt('How old are you?')
        if(third_question >=20 && third_question <=40) {

            let fourth_question = prompt('How much money do you have in $?')
            if(fourth_question >= "$" + 100) {

                let fifth_question = prompt('How many people want to enter the club?')
                if(fifth_question <= 10 - question) {
                    alert('Welcome to our club!')
                } else {
                    alert ('We cannot let you go in, as we do not have any more place in our club!')
                }

            } else {
                alert('We cannot let you go in, as you do not have enough money!')
            }

        } else {
            alert ('We cannot let you go in, as your age is not suitable for this club!')
        }

    } else {
        alert('We cannot let you go in, as your name does not start with "A"!')
    }

} else {
    alert('The maximum capacity of the club is 10 people!')
}