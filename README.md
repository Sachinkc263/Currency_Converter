# Currency Converter

A modern, responsive web app for converting between fiat and cryptocurrency values in real time. Built with vanilla JavaScript, HTML, and CSS.

## Features

- **Real-time currency conversion** using the [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api).
- **Crypto and fiat support**: Convert between hundreds of world currencies and popular cryptocurrencies.
- **Country flags and crypto icons**: Automatically displays the correct flag or crypto logo for each currency.
- **Professional, responsive UI**: Clean, modern design with a Colormind-inspired color palette and mobile-friendly layout.
- **Image caching**: Crypto icons are cached for faster repeat loads.
- **Loading spinners**: Smooth UX with spinners while fetching icons.
- **Swap and instant update**: Swap currencies and get instant conversion.
- **No frameworks required**: 100% vanilla JS, HTML, and CSS.


## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/Currency_Converter.git
   cd Currency_Converter
   ```
2. **Open `index.html` in your browser.**

No build step or dependencies required.

## File Structure

- `index.html` — Main HTML structure
- `style.css` — All styles and responsive design
- `script.js` — Main logic, API calls, DOM manipulation, and UX
- `README.md` — Project documentation

## APIs Used

- [Fawaz Ahmed Currency API](https://github.com/fawazahmed0/currency-api) — Exchange rates
- [CoinGecko API](https://www.coingecko.com/en/api) — Crypto icons
- [FlagCDN](https://flagcdn.com/) — Country flags

## Customization

- To add or remove supported currencies, edit the `allCodeList` and `cryptoCurrencyCodes` arrays in `script.js`.
- To change the color scheme, edit the gradients and color variables in `style.css`.

---

> Built by Sachin K.C . Contributions welcome!
