const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(Response => Response.json())
    .then(data => displayCountry(data))
}
const displayCountry = (countries) =>{
    const allCountriesHtml = countries.map(country => countryDetailsHTML(country))
    const container = document.getElementById('couuntries')
    container.innerHTML = allCountriesHtml.join(' ')
}

const countryDetailsHTML = (country) =>{
    return `
    <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">
    </div>
    `
}


loadCountries()