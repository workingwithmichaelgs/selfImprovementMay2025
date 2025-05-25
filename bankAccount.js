class BankAccount {
    #balance;

    constructor(accountHolder, balance=0) {
        this.accountHolder = accountHolder
        this.#balance = balance
        
    }

    deposit(jumlahDeposit) {
        this.#balance += jumlahDeposit
        return this
    }
    withdraw(jumlahWithdraw) {
        if (jumlahWithdraw > this.#balance) {
            return `Insufficient funds`
        }
        this.#balance -= jumlahWithdraw
        return this
    }
    getBalanceReport() {
        return `saldo ${this.accountHolder} adalah ${this.#balance}`
    }
    getBalance() {
        return this.#balance
    }
}

// class SavingAccount {
//     #balance
//     constructor(interestRate, balance) {
//         this.interestRate = interestRate
//         this.#balance = balance
//     }
//     addInterest() {
//         this.balance += this.interestRate*this.balance
//         return this
//     }

// }


class SavingAccount extends BankAccount {
    constructor(accountHolder, balance = 0, interestRate = 0.01)
    {
        super(accountHolder, balance)
        this.interestRate = interestRate
    }
    addInterest() {
        let interest = this.getBalance() * this.interestRate
        this.deposit(interest)
        return this
        
    } 
}


// let bankAccount1 = new BankAccount("Budi", 50000)
// console.log(bankAccount1);

// let transaksiBudi = new BankAccount("Budi", 800000).deposit(77).deposit(99)

// let transaksiBudi = new BankAccount("Budi", 800000).withdraw(999990000)

// let transaksiBudi_getBalance = new BankAccount("Budi", 800000).getBalance()
// console.log(transaksiBudi_getBalance);


// console.log(new SavingAccount(0.01, 800000).addInterest().addInterest().addInterest());


// console.log(new SavingAccount("Budi", 10_000_000).addInterest().getBalance());

let budiBalance = new SavingAccount("Budi", 10_000_000).addInterest().getBalanceReport()
console.log(budiBalance);







