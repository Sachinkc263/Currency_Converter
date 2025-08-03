// Prevent form submission from refreshing the page and trigger the submit button
document.getElementById('converterForm').addEventListener('submit', function (event) {
    event.preventDefault();
    document.getElementById('submit').click();
});

// Swap select values and trigger conversion
document.getElementById('swapIcon').addEventListener('click', async () => {
    const fromSelect = document.getElementById('fromOptions');
    const toSelect = document.getElementById('toOptions');
    // Swap values
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    // Trigger change events to update flags
    fromSelect.dispatchEvent(new Event('change'));
    toSelect.dispatchEvent(new Event('change'));
    // Trigger conversion
    document.getElementById('submit').click();
});

let allCodeList = [
    '1inch', 'aave', 'ada', 'aed', 'afn', 'agix', 'akt', 'algo', 'all', 'amd', 'amp', 'ang',
    'aoa', 'ape', 'apt', 'ar', 'arb', 'ars', 'atom', 'ats', 'aud', 'avax', 'awg', 'axs', 'azm',
    'azn', 'bake', 'bam', 'bat', 'bbd', 'bch', 'bdt', 'bef', 'bgn', 'bhd', 'bif', 'bmd', 'bnb',
    'bnd', 'bob', 'brl', 'bsd', 'bsv', 'bsw', 'btc', 'btcb', 'btg', 'btn', 'btt', 'busd', 'bwp',
    'byn', 'byr', 'bzd', 'cad', 'cake', 'cdf', 'celo', 'cfx', 'chf', 'chz', 'clp', 'cnh', 'cny',
    'comp', 'cop', 'crc', 'cro', 'crv', 'cspr', 'cuc', 'cup', 'cve', 'cvx', 'cyp', 'czk', 'dai',
    'dash', 'dcr', 'dem', 'dfi', 'djf', 'dkk', 'doge', 'dop', 'dot', 'dydx', 'dzd', 'eek', 'egld',
    'egp', 'enj', 'eos', 'ern', 'esp', 'etb', 'etc', 'eth', 'eur', 'eurc', 'fei', 'fil', 'fim',
    'fjd', 'fkp', 'flow', 'flr', 'frax', 'frf', 'ftt', 'gala', 'gbp', 'gel', 'ggp', 'ghc', 'ghs',
    'gip', 'gmd', 'gmx', 'gnf', 'gno', 'grd', 'grt', 'gt', 'gtq', 'gusd', 'gyd', 'hbar', 'hkd',
    'hnl', 'hnt', 'hot', 'hrk', 'ht', 'htg', 'huf', 'icp', 'idr', 'iep', 'ils', 'imp', 'imx', 'inj',
    'inr', 'iqd', 'irr', 'isk', 'itl', 'jep', 'jmd', 'jod', 'jpy', 'kas', 'kava', 'kcs', 'kda', 'kes',
    'kgs', 'khr', 'klay', 'kmf', 'knc', 'kpw', 'krw', 'ksm', 'kwd', 'kyd', 'kzt', 'lak', 'lbp', 'ldo',
    'leo', 'link', 'lkr', 'lrc', 'lrd', 'lsl', 'ltc', 'ltl', 'luf', 'luna', 'lunc', 'lvl', 'lyd', 'mad',
    'mana', 'mbx', 'mdl', 'mga', 'mgf', 'mina', 'mkd', 'mkr', 'mmk', 'mnt', 'mop', 'mro', 'mru', 'mtl',
    'mur', 'mvr', 'mwk', 'mxn', 'mxv', 'myr', 'mzm', 'mzn', 'nad', 'near', 'neo', 'nexo', 'nft', 'ngn',
    'nio', 'nlg', 'nok', 'npr', 'nzd', 'okb', 'omr', 'one', 'op', 'ordi', 'pab', 'paxg', 'pen', 'pepe',
    'pgk', 'php', 'pkr', 'pln', 'pol', 'pte', 'pyg', 'qar', 'qnt', 'qtum', 'rol', 'ron', 'rpl', 'rsd',
    'rub', 'rune', 'rvn', 'rwf', 'sand', 'sar', 'sbd', 'scr', 'sdd', 'sdg', 'sek', 'sgd', 'shib', 'shp',
    'sit', 'skk', 'sle', 'sll', 'snx', 'sol', 'sos', 'spl', 'srd', 'srg', 'std', 'stn', 'stx', 'sui',
    'svc', 'syp', 'szl', 'thb', 'theta', 'tjs', 'tmm', 'tmt', 'tnd', 'ton', 'top', 'trl', 'trx', 'try',
    'ttd', 'tusd', 'tvd', 'twd', 'twt', 'tzs', 'uah', 'ugx', 'uni', 'usd', 'usdc', 'usdd', 'usdp', 'usdt',
    'uyu', 'uzs', 'val', 'veb', 'ved', 'vef', 'ves', 'vet', 'vnd', 'vuv', 'waves', 'wemix', 'woo', 'wst',
    'xaf', 'xag', 'xau', 'xaut', 'xbt', 'xcd', 'xcg', 'xch', 'xdc', 'xdr', 'xec', 'xem', 'xlm', 'xmr',
    'xof', 'xpd', 'xpf', 'xpt', 'xrp', 'xtz', 'yer', 'zar', 'zec', 'zil', 'zmk', 'zmw', 'zwd', 'zwg', 'zwl'];

let currencySelect = document.getElementsByClassName('currency-select')
let selectTemp = ['<option value="" disabled selected>From</option>', '<option value="" disabled selected>To</option>'];
for (let i = 0; i < currencySelect.length; i++) {
    currencySelect[i].innerHTML = selectTemp[i] + allCodeList.map(code => `<option value="${code.toUpperCase()}">${code.toUpperCase()}</option>`).join('');
};

let countryCurrencyCodes = {
    "AED": "AE", "AFN": "AF", "ALL": "AL", "AMD": "AM", "ANG": "SX",
    "AOA": "AO", "ARS": "AR", "AUD": "AU", "AWG": "AW", "AZN": "AZ",
    "BAM": "BA", "BBD": "BB", "BDT": "BD", "BGN": "BG", "BHD": "BH",
    "BIF": "BI", "BMD": "BM", "BND": "BN", "BOB": "BO", "BRL": "BR",
    "BSD": "BS", "BTN": "BT", "BWP": "BW", "BYN": "BY", "BZD": "BZ",
    "CAD": "CA", "CDF": "CD", "CHF": "CH", "CLP": "CL", "CNY": "CN",
    "COP": "CO", "CRC": "CR", "CUC": "CU", "CUP": "CU", "CVE": "CV",
    "CZK": "CZ", "DJF": "DJ", "DKK": "DK", "DOP": "DO", "DZD": "DZ",
    "EGP": "EG", "ERN": "ER", "ETB": "ET", "EUR": "EU", "FJD": "FJ",
    "FKP": "FK", "GBP": "GB", "GEL": "GE", "GHS": "GH", "GIP": "GI",
    "GMD": "GM", "GNF": "GN", "GTQ": "GT", "GYD": "GY", "HKD": "HK",
    "HNL": "HN", "HTG": "HT", "HUF": "HU", "IDR": "ID", "ILS": "IL",
    "INR": "IN", "IQD": "IQ", "IRR": "IR", "ISK": "IS", "JMD": "JM",
    "JOD": "JO", "JPY": "JP", "KES": "KE", "KGS": "KG", "KHR": "KH",
    "KMF": "KM", "KPW": "KP", "KRW": "KR", "KWD": "KW", "KYD": "KY",
    "KZT": "KZ", "LAK": "LA", "LBP": "LB", "LKR": "LK", "LRD": "LR",
    "LSL": "LS", "LYD": "LY", "MAD": "MA", "MDL": "MD", "MGA": "MG",
    "MKD": "MK", "MMK": "MM", "MNT": "MN", "MOP": "MO", "MRU": "MR",
    "MUR": "MU", "MVR": "MV", "MWK": "MW", "MXN": "MX", "MYR": "MY",
    "MZN": "MZ", "NAD": "NA", "NGN": "NG", "NIO": "NI", "NOK": "NO",
    "NPR": "NP", "NZD": "NZ", "OMR": "OM", "PAB": "PA", "PEN": "PE",
    "PGK": "PG", "PHP": "PH", "PKR": "PK", "PLN": "PL", "PYG": "PY",
    "QAR": "QA", "RON": "RO", "RSD": "RS", "RUB": "RU", "RWF": "RW",
    "SAR": "SA", "SBD": "SB", "SCR": "SC", "SDG": "SD", "SEK": "SE",
    "SGD": "SG", "SHP": "SH", "SLE": "SL", "SLL": "SL", "SOS": "SO",
    "SRD": "SR", "SSP": "SS", "STN": "ST", "SVC": "SV", "SYP": "SY",
    "SZL": "SZ", "THB": "TH", "TJS": "TJ", "TMT": "TM", "TND": "TN",
    "TOP": "TO", "TRY": "TR", "TTD": "TT", "TWD": "TW", "TZS": "TZ",
    "UAH": "UA", "UGX": "UG", "USD": "US", "UYU": "UY", "UZS": "UZ",
    "VES": "VE", "VND": "VN", "VUV": "VU", "WST": "WS", "XAF": "CM",
    "XCD": "AG", "XOF": "SN", "XPF": "PF", "YER": "YE", "ZAR": "ZA",
    "ZMW": "ZM", "ZWL": "ZW"
};

let cryptoCurrencyCodes = [
    "1INCH", "AAVE", "ADA", "AGIX", "AKT", "ALGO", "AMP", "APE", "APT",
    "ARB", "AR", "ATOM", "AVAX", "AXS", "BCH", "BNB", "BSV", "BTC",
    "BTT", "BUSD", "CAKE", "CELO", "CFX", "CHZ", "COMP", "CRO", "CRV",
    "CSPR", "CVX", "DAI", "DASH", "DCR", "DFI", "DOGE", "DOT", "DYDX",
    "EGLD", "ENJ", "EOS", "ETC", "ETH", "FIL", "FLOW", "FLR", "FTT",
    "GALA", "GMX", "GNO", "GRT", "GT", "HBAR", "ICP", "IMX", "INJ",
    "KAS", "KAVA", "KCS", "KDA", "KLAY", "KNC", "KSM", "LDO", "LEO",
    "LINK", "LRC", "LTC", "LUNA", "LUNC", "MANA", "MATIC", "MINA",
    "MKR", "NEAR", "NEO", "NEXO", "OKB", "ONE", "OP", "ORDI", "PAXG",
    "PEPE", "QNT", "QTUM", "RON", "RPL", "RUNE", "RVN", "SAND", "SHIB",
    "SNX", "SOL", "STX", "SUI", "THETA", "TON", "TRX", "TUSD", "TWT",
    "UNI", "USDC", "USDD", "USDT", "VET", "WAVES", "WOO", "XLM", "XMR",
    "XRP", "XTZ", "ZEC", "ZIL"
];

//api call to get crypto data
async function apiCall(url) {
    const API_KEY = "CG-7rG2whKeJoJsXpHQFsZHdXmA";
    const defaultHeaders = {
        'x-cg-demo-api-key': API_KEY,
        'accept': 'application/json'
    };
    console.log(`Making API call to: ${url}`);
    const response = await fetch(url, {
        headers: defaultHeaders,
        mode: 'cors'
    })
    if (response) {
        return response;
    }
    else {
        console.error('Error fetching data:', response.statusText);
        return null;
    }

}

//function to get the ids of the crypto currencies
let CrytoIdsMap = async () => {
    const response = await apiCall(`https://api.coingecko.com/api/v3/coins/list`);
    if (response) {
        const data = await response.json();
        const newMap = new Map();
        data.forEach(coin => {
            if (cryptoCurrencyCodes.includes(coin.symbol.toUpperCase())) {
                newMap.set(coin.symbol.toLowerCase(), coin.id);
            }
        });
        return newMap;
    }
    else {
        return null;
    }
}

let cryptoIdsPromise = CrytoIdsMap();

//function to get the image of the crypto currencies
async function getCryptoImg(currencyCode) {
    if (cryptoImgCache[currencyCode]) return cryptoImgCache[currencyCode];
    const map = await cryptoIdsPromise;
    if (!map) return null;
    const coinId = map.get(currencyCode.toLowerCase());
    if (!coinId) return null;
    const response = await apiCall(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`);
    if (response) {
        const data = await response.json();
        console.log(`Fetched image for ${currencyCode}: ${data.image.small}`);
        cryptoImgCache[currencyCode] = data.image.small;
        return data.image.small;
    } else return null;
}
// Cache for crypto images
const cryptoImgCache = {};

let getFlagImage = async (currencyCode) => {
    let countryCode = countryCurrencyCodes[currencyCode];
    if (countryCode) {
        return `https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`;
    } else if (cryptoCurrencyCodes.includes(currencyCode)) {
        let imgUrl = await getCryptoImg(currencyCode);
        return imgUrl;
    } else {
        return null
    }
};

let fromOption = document.getElementById('fromOptions');
let toOption = document.getElementById('toOptions');
let fromContainer = document.getElementById('fromOptionsContainer');
let toContainer = document.getElementById('toOptionsContainer');

fromOption.addEventListener('change', async () => {
    // Remove existing img if present
    const existingImg = fromContainer.querySelector('img');
    if (existingImg) {
        fromContainer.removeChild(existingImg);
    }
    let currencyCode = fromOption.value;
    // Show spinner
    let spinner = document.createElement('span');
    spinner.className = 'spinner';
    spinner.style.display = 'inline-block';
    spinner.style.width = '30px';
    spinner.style.height = '24px';
    spinner.style.border = '3px solid #ccc';
    spinner.style.borderTop = '3px solid #333';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';
    fromContainer.appendChild(spinner);
    let flagImage = null;
    try {
        flagImage = await getFlagImage(currencyCode);
    } finally {
        fromContainer.removeChild(spinner);
    }
    if (flagImage) {
        let img = document.createElement('img');
        img.src = flagImage;
        img.alt = currencyCode;
        fromContainer.appendChild(img);
        document.getElementById('submit').click();
    }
});



toOption.addEventListener('change', async () => {
    // Remove existing img if present
    const existingImg = toContainer.querySelector('img');
    if (existingImg) {
        toContainer.removeChild(existingImg);
    }
    let currencyCode = toOption.value;
    let existingSpinner = toContainer.querySelector('.spinner');
    if (existingSpinner) {
        toContainer.removeChild(existingSpinner);
    }
    // Show spinner
    let spinner = document.createElement('span');
    spinner.className = 'spinner';
    spinner.style.display = 'inline-block';
    spinner.style.width = '30px';
    spinner.style.height = '24px';
    spinner.style.border = '3px solid #ccc';
    spinner.style.borderTop = '3px solid #333';
    spinner.style.borderRadius = '50%';
    spinner.style.animation = 'spin 1s linear infinite';
    toContainer.appendChild(spinner);
    let flagImage = null;
    try {
        flagImage = await getFlagImage(currencyCode);
    } finally {
        toContainer.removeChild(spinner);
    }
    if (flagImage) {
        let img = document.createElement('img');
        img.src = flagImage;
        img.alt = currencyCode;
        toContainer.appendChild(img);
        document.getElementById('submit').click();
    }
});
// Add spinner animation CSS
const style = document.createElement('style');
style.innerHTML = `@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`;
document.head.appendChild(style);

// Get currency rate from currency code
let exchange = () => {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromOptions').value;
    let lowerFromCurrency = fromCurrency.toLowerCase();
    var toCurrency = document.getElementById('toOptions').value;
    let lowerToCurrency = toCurrency.toLowerCase();
    var result = document.getElementById('result');
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${lowerFromCurrency}.json`;
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            for (let key in data[lowerFromCurrency]) {
                if (key === lowerToCurrency) {
                    let toRate = data[lowerFromCurrency][key];
                    let convertedAmount = (amount * toRate);
                    result.setAttribute('value', `${convertedAmount}`);
                    console.log(`Converted Amount: ${convertedAmount} ${toCurrency}`);
                }
            }
        })
        .catch(error => {
            console.error('Error fetching currency data:', error);
        });
}
document.getElementById('submit').addEventListener('click', exchange);