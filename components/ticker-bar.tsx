import { ArrowDownRight, ArrowUpRight } from "lucide-react"

const tickers = [
  { symbol: "BTC/USD", price: "67.842", change: "+2.41%", up: true },
  { symbol: "S&P 500", price: "5.487", change: "+0.63%", up: true },
  { symbol: "EUR/USD", price: "1.0842", change: "-0.18%", up: false },
  { symbol: "ETH/USD", price: "3.512", change: "+3.07%", up: true },
  { symbol: "NASDAQ", price: "17.194", change: "+0.92%", up: true },
  { symbol: "GOLD", price: "2.334", change: "-0.41%", up: false },
  { symbol: "TSLA", price: "248.4", change: "+1.86%", up: true },
  { symbol: "OIL/WTI", price: "78.9", change: "-0.74%", up: false },
]

export function TickerBar() {
  const row = [...tickers, ...tickers]
  return (
    <div className="border-y border-border/60 bg-secondary/30 py-3">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-8 pr-8">
          {row.map((t, i) => (
            <div
              key={`${t.symbol}-${i}`}
              className="flex items-center gap-2 whitespace-nowrap text-sm"
            >
              <span className="font-medium text-foreground">{t.symbol}</span>
              <span className="text-muted-foreground">{t.price}</span>
              <span
                className={`inline-flex items-center gap-0.5 text-xs font-medium ${
                  t.up ? "text-primary" : "text-destructive"
                }`}
              >
                {t.up ? (
                  <ArrowUpRight className="size-3.5" />
                ) : (
                  <ArrowDownRight className="size-3.5" />
                )}
                {t.change}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
