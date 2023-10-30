
import inquirer from "inquirer"
import { convertor } from "./convertor";
import { amount } from "./Amount";


const currencyAvailable = ["Riyal","Usd","Pounds","Euro","Pkr","Inr"];

const SelectCurrencyName = [
    {
    type : "list",
    name : "EnteredCurrency",
    message : "Select the currency which needs to be converted",
    choices : currencyAvailable,
    },
    {
        type: "list",
        name: "ConvertTo",
        message: "Convert to which currency",
        choices : currencyAvailable,
    }
];
(async () => {
    const answers = await inquirer.prompt(SelectCurrencyName);
    const currentCurrency = answers.EnteredCurrency;
    const desiredCurrency = answers.ConvertTo;
    const moneyNeededToConvert = await amount();
    convertor(currentCurrency, desiredCurrency, moneyNeededToConvert);
})();
