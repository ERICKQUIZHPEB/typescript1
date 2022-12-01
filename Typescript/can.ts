/* Implement interfaces in TypeScript */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan{
    principal: number,
    interestRate: number
}

/*  TODO: Declare the ConventionalLoan interface. */
interface ConventionalLoan extends Loan{
    months:number
}

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

function calculateInterestOnlyLoanPayment(newLoan:Loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = newLoan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = newLoan.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */

function calculateConventionalLoanPayment(newPayment:ConventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = newPayment.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = newPayment.principal * interest / (1 - (Math.pow(1 / (1 + interest), newPayment.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principal:3000,interestRate:2000});
//let conventionalPayment = calculateConventionalLoanPayment({});

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
//console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"



