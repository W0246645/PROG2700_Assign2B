function displayHolidays(holidays) {
    console.log(holidays)
    holidays.forEach(date => {
        document.write(
            `<h2>${date.name}</h2>
            <ul>
                <li>Date: ${date.date}</li>
                <li>Counties: ${date.counties ? date.counties[0] : ""}</li>
                <li>Fixed Date: ${date.fixed ? "True" : "False"}</li>
            </ul>`
        )
    });
}

fetch('https://date.nager.at/api/v3/publicholidays/2023/CA') //Character 48 is Bob
    .then(response => response.json())
    .then(data => displayHolidays(data))

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then(response => response.json())
    .then(data => console.log(data))
    