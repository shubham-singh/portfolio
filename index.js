const stocks = [
    {
        symbol: "ITC",
        currency: "₹",
        averagePrice: "308.69"
    },
    {
        symbol: "JCHAC",
        currency: "₹",
        averagePrice: "1700.00"
    },
    {
        symbol: "JSWENERGY",
        currency: "₹",
        averagePrice: "318.14"
    },
    {
        symbol: "KOTAKALPHA",
        currency: "₹",
        averagePrice: "30.73"
    },
    {
        symbol: "KOTAKNV20",
        currency: "₹",
        averagePrice: "95.84"
    },
    {
        symbol: "MAXHEALTH",
        currency: "₹",
        averagePrice: "261.00"
    },
    {
        symbol: "SBIETFIT",
        currency: "₹",
        averagePrice: "264.49"
    }
]

function App() {
    return <>
    <table>
        <tr>
            <th>Symbol</th>
            <th>Average Price</th>
        </tr>
        {stocks.map((stock) => {
            return <tr>
                <td>{stock.symbol}</td>
                <td>{stock.currency}{stock.averagePrice}</td>
            </tr>
        })}
    </table>
    </>
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);