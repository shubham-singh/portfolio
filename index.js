const stocks = [
    {
        symbol: "ITC",
        currency: "₹",
        averagePrice: "328.58",
        quantity: 418
    },
    {
        symbol: "JCHAC",
        currency: "₹",
        averagePrice: "1184.62",
        quantity: 65
    },
    {
        symbol: "JSWENERGY",
        currency: "₹",
        averagePrice: "268.08",
        quantity: 50
    },
    {
        symbol: "KOTAKALPHA",
        currency: "₹",
        averagePrice: "29.24",
        quantity: 2700
    },
    {
        symbol: "KOTAKNV20",
        currency: "₹",
        averagePrice: "99.77",
        quantity: 781
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