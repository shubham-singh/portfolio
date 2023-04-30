async function getStockPrice(symbol) {
    try {
        const apiKey = 'dummyAPIKey';
        const response = await fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}.BSE&apikey=${apiKey}`)
        const data = await response.json()
        const currentPrice = data['Global Quote']['05. price']
        return currentPrice ? Number(currentPrice).toFixed(2) : undefined
    } catch (error) {
        console.error(error)
    }
}

function App() {
    const [stocks, setStocks] = React.useState([]);

    React.useEffect(async function () {
        try {
            const response = await fetch('./stocks.json')
            const data = await response.json()
            const promises = data.map((stock) => getStockPrice(stock.symbol))
            const currentPrices = await Promise.all(promises)
            data.forEach((stock, index) => {
                stock.currentPrice = currentPrices[index]
            })
            setStocks(data)
        } catch (error) {
            console.error(error)
        }
    }, [])

    const totalInvestedValue = Number(stocks.reduce((total, stock) => {
        total += Number(stock.averagePrice) * Number(stock.quantity)
        return total
    }, 0).toFixed(2))

    const totalPresentValue = Number(stocks.reduce((total, stock) => {
        total += Number(stock.currentPrice ?? stock.averagePrice) * Number(stock.quantity)
        return total
    }, 0).toFixed(2))

    let showCurrentWeightage = false

    stocks.forEach((stock) => {
        const investedStockValue = Number(stock.averagePrice) * Number(stock.quantity)
        const investedWeightagePercentage = Number((investedStockValue / totalInvestedValue) * 100).toFixed(2)
        stock['investedWeightage'] = investedWeightagePercentage
        if (stock.currentPrice !== undefined) {
            const currentWeightage = Number(stock.currentPrice) * Number(stock.quantity)
            const currentWeightagePercentage = Number((currentWeightage / totalPresentValue) * 100).toFixed(2)
            stock['currentWeightage'] = currentWeightagePercentage
            showCurrentWeightage = true
        } else {
            showCurrentWeightage = false
        }
    })

    return <>
        <table>
            <tr>
                <th>Symbol</th>
                <th>Average Price</th>
                <th>Weightage (Invested)</th>
                {showCurrentWeightage && <th>Weightage (Present)</th>}
            </tr>
            {stocks.map((stock) => {
                return <tr>
                    <td>{stock.symbol}</td>
                    <td>{stock.currency}{stock.averagePrice}</td>
                    <td>{stock.investedWeightage}%</td>
                    {showCurrentWeightage && <td>{stock.currentWeightage}%</td>}
                </tr>
            })}
        </table>
    </>
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);