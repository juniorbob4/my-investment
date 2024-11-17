// Handle User Sign-Up
function handleSignUp(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Simulate a sign-up process (replace with API call)
    console.log('User signed up with email:', email);
    alert('Sign up successful!');
}

// Handle User Login
function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulate a login process (replace with API call)
    console.log('User logged in with email:', email);
    alert('Login successful!');
}

// Handle Trading Action
function handleTrade(event) {
    event.preventDefault();

    const crypto = document.getElementById('crypto-select').value;
    const amount = document.getElementById('amount').value;
    const tradeType = document.getElementById('trade-type').value;

    // Simulate a trade process (replace with API call)
    console.log(`User wants to ${tradeType} ${amount} of ${crypto}`);
    alert(`${tradeType.charAt(0).toUpperCase() + tradeType.slice(1)} order placed successfully!`);
}

// Fetch live prices for cryptocurrencies (optional)
document.addEventListener("DOMContentLoaded", function() {
    const bitcoinPriceElement = document.getElementById("bitcoin-price");
    const ethereumPriceElement = document.getElementById("ethereum-price");
    const litecoinPriceElement = document.getElementById("litecoin-price");

    // Example: Fetching live price using an API (this is just a placeholder)
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,litcoin&vs_currencies=usd')
        .then(response => response.json())
        .then(data => {
            bitcoinPriceElement.innerText = `$${data.bitcoin.usd}`;
            ethereumPriceElement.innerText = `$${data.ethereum.usd}`;
            litecoinPriceElement.innerText = `$${data.litecoin.usd}`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
