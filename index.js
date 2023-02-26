const stocks = [
    {
        symbol: "ITC",
        currency: "₹",
        averagePrice: "317.61",
        quantity: 355
    },
    {
        symbol: "JCHAC",
        currency: "₹",
        averagePrice: "1700.00",
        quantity: 15
    },
    {
        symbol: "JSWENERGY",
        currency: "₹",
        averagePrice: "278.65",
        quantity: 32
    },
    {
        symbol: "KOTAKALPHA",
        currency: "₹",
        averagePrice: "30.02",
        quantity: 2250
    },
    {
        symbol: "KOTAKNV20",
        currency: "₹",
        averagePrice: "98.98",
        quantity: 592
    },
    {
        symbol: "MAXHEALTH",
        currency: "₹",
        averagePrice: "261.00",
        quantity: 1
    },
    {
        symbol: "SBIETFIT",
        currency: "₹",
        averagePrice: "264.49",
        quantity: 5
    }
]

const totalInvestedValue = Number(stocks.reduce((total, stock) => {
    total += Number(stock.averagePrice) * Number(stock.quantity)
    return total
}, 0).toFixed(2))

stocks.forEach((stock) => {
    const stockValue =  Number(stock.averagePrice) * Number(stock.quantity)
    const investedWeightage = Number((stockValue / totalInvestedValue) * 100).toFixed(2)
    stock['investedWeightage'] = investedWeightage
})

function App() {
    return <>
    <table>
        <tr>
            <th>Symbol</th>
            <th>Average Price</th>
            <th>Weightage (Invested)</th>
            <th>Weightage (Present)</th>
        </tr>
        {stocks.map((stock) => {
            return <tr>
                <td>{stock.symbol}</td>
                <td>{stock.currency}{stock.averagePrice}</td>
                <td>{stock.investedWeightage}%</td>
                <td>coming soon</td>
            </tr>
        })}
    </table>
    </>
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);