class BankAccount{
    accountHolderName;
    accountNumber;
    Balance;
    constructor(accountHolderName, accountNumber, Balance){
        this.accountHolderName = accountHolderName;
        this.accountNumber = accountNumber;
        this.Balance = Balance;
    }

    depositMoney(amount){
        this.Balance = this.Balance + amount;
        console.log("My current balance after deposit is", this.Balance);
    }

    withdrawMoney(amount){
        this.Balance = this.Balance - amount;
        console.log("My current balance after withdraw is", this.Balance);
    }

    getBalance(){
        console.log(this.accountNumber, "has balance of", this.Balance);
    }
}

var SBI = new BankAccount("Siva", 123456789, 10000);
SBI.depositMoney(2000);
SBI.withdrawMoney(1000);
SBI.getBalance();
console.table(SBI);

