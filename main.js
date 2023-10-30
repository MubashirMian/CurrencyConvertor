"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const convertor_1 = require("./convertor");
const Amount_1 = require("./Amount");
const currencyAvailable = ["Riyal", "Usd", "Pounds", "Euro", "Pkr", "Inr"];
const SelectCurrencyName = [
    {
        type: "list",
        name: "EnteredCurrency",
        message: "Select the currency which needs to be converted",
        choices: currencyAvailable,
    },
    {
        type: "list",
        name: "ConvertTo",
        message: "Convert to which currency",
        choices: currencyAvailable,
    }
];
(async () => {
    const answers = await inquirer_1.default.prompt(SelectCurrencyName);
    const currentCurrency = answers.EnteredCurrency;
    const desiredCurrency = answers.ConvertTo;
    const moneyNeededToConvert = await (0, Amount_1.amount)();
    (0, convertor_1.convertor)(currentCurrency, desiredCurrency, moneyNeededToConvert);
})();
