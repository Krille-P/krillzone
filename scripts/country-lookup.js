const searchInput = document.getElementById("country-search");
const lookupBtn = document.getElementById("lookup-btn");
const resultDiv = document.getElementById("lookup-result");


const countries = [
    { name: "Sweden", code: "SE", callingCode: "46", currency: "SEK" },
    { name: "Norway", code: "NO", callingCode: "47", currency: "NOK" },
    { name: "Denmark", code: "DK", callingCode: "45", currency: "DKK" },
    { name: "Finland", code: "FI", callingCode: "358", currency: "EUR" },
    { name: "Iceland", code: "IS", callingCode: "354", currency: "ISK" },
    { name: "Belgium", code: "BE", callingCode: "32", currency: "EUR" },
    { name: "Netherlands", code: "NL", callingCode: "31", currency: "EUR" },
    { name: "Germany", code: "DE", callingCode: "49", currency: "EUR" },
    { name: "Austria", code: "AT", callingCode: "43", currency: "EUR" },
    { name: "France", code: "FR", callingCode: "33", currency: "EUR" },
    { name: "Italy", code: "IT", callingCode: "39", currency: "EUR" },
    { name: "Poland", code: "PL", callingCode: "48", currency: "PLN" },
    { name: "Estonia", code: "EE", callingCode: "372", currency: "EUR" },
    { name: "Latvia", code: "LV", callingCode: "371", currency: "EUR" },
    { name: "Lithuania", code: "LT", callingCode: "370", currency: "EUR" },
    { name: "Ireland", code: "IE", callingCode: "353", currency: "EUR" },
    { name: "Spain", code: "ES", callingCode: "34", currency: "EUR" },
    { name: "Portugal", code: "PT", callingCode: "351", currency: "EUR" },
    { name: "Switzerland", code: "CH", callingCode: "41", currency: "CHF" },
    { name: "United Kingdom", code: "GB", callingCode: "44", currency: "GBP" },
    { name: "Singapore", code: "SG", callingCode: "65", currency: "SGD" },
    { name: "Australia", code: "AU", callingCode: "61", currency: "AUD" },
    { name: "New Zealand", code: "NZ", callingCode: "64", currency: "NZD" },
    { name: "Japan", code: "JP", callingCode: "81", currency: "JPY" },
    { name: "Malaysia", code: "MY", callingCode: "60", currency: "MYR" }
]

lookupBtn.addEventListener("click", function () {
    const query = searchInput.value.trim().toLowerCase();

    const match = countries.find(function (country) {
        return country.name.toLowerCase() === query ||
               country.code.toLowerCase() === query ||
               country.callingCode === query;
    });

    if (match) {
        resultDiv.textContent = match.name + " (" + match.code + ") +" + match.callingCode + ", " + match.currency;
    } else {
        resultDiv.textContent = "Hittade inget land som matchar.";
    }

});