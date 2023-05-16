// Fetch the JSON file
fetch('https://filiphuhta.github.io/coffe-quote/data/quotes.json')
  .then(response => response.json())
  .then(data => {
    // Get the current date
    console.log(data);
    const today = new Date();
    const dayOfYear = today.getFullYear() * 1000 + today.getMonth() * 31 + today.getDate();

    // Use the day of the year as the seed for random quote selection
    const quoteIndex = dayOfYear % data.length;
    const quote = data[quoteIndex];

    // Display the quote on the website
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    quoteText.textContent = quote.quote;
  })
  .catch(error => {
    console.error('Error:', error);
  });