const markets = [
  "NASDAQ",
  "S&P 500",
  "GOLD",
  "EUR/USD",
  "BTC/USD",
  "OIL",
  "DOW JONES",
  "NQ",
]

export function TickerBar() {
  const row = [...markets, ...markets]

  return (
    <div className="border-y border-border/40 bg-background/40">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        
        <div className="flex shrink-0 animate-[marquee_38s_linear_infinite] items-center gap-7 py-3 pr-7">
          
          {row.map((market, i) => (
            <div
              key={`${market}-${i}`}
              className="flex items-center gap-7 whitespace-nowrap"
            >
              
              <span className="text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
                {market}
              </span>

              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-primary/50"
              />

            </div>
          ))}

        </div>

      </div>
    </div>
  )
}