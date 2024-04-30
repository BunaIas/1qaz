 # 1qaz  https://mt5webterminal.ftmo.com/terminal

 //@version=4
strategy("Momentum Strategy", overlay=true)

g= input(10)

float closex = close//security("KRAKEN:BTCUSD.P", "1", close-g, gaps = barmerge.gaps_off)
float openx  = open// security("KRAKEN:BTCUSD.P", "1", open-g, gaps = barmerge.gaps_off)
float highx = high//security("KRAKEN:BTCUSD.P", "1", high-g, gaps = barmerge.gaps_off)
float lowx = low//security("KRAKEN:BTCUSD.P", "1", low-g, gaps = barmerge.gaps_off)

//plot(closex)

length = input(12)
price = closex
momentum(seria, length) =>
    mom = seria - seria[length]
    mom
mom0 = momentum(price, length)
mom1 = momentum( mom0, 1)

length5 = input(20, minval=1)
mult = input(2.0, "Multiplier")
src = input(close)
exp = input(true, "Use Exponential MA")
BandsStyle = input("Average True Range", options = ["Average True Range", "True Range", "Range"], title="Bands Style")
atrlength = input(10, "ATR Length")
esma(source, length5)=>
    s = sma(source, length5)
    e = ema(source, length5)
    exp ? e : s
ma = esma(src, length5)
rangema = BandsStyle == "True Range" ? tr(true) : BandsStyle == "Average True Range" ? atr(atrlength) : rma(highx - lowx, length5)
upper = ma + rangema * mult
lower = ma - rangema * mult
crossUpper = crossover(src, upper)
crossLower = crossunder(src, lower)
bprice = 0.0
bprice := crossUpper ? close[0] +syminfo.mintick : nz(bprice[1])
sprice = 0.0
sprice := crossLower ? close[0] -syminfo.mintick : nz(sprice[1])
crossBcond = false
crossBcond := crossUpper ? true : na(crossBcond[1]) ? false : crossBcond[1]
crossScond = false
crossScond := crossLower ? true : na(crossScond[1]) ? false : crossScond[1]
cancelBcond = crossBcond and (src < ma or highx >= bprice )
cancelScond = crossScond and (src > ma or lowx <= sprice )



bgcolor(color.new(#000000,15), title="Dark Background")

var cPI = 2.0 * asin(1.0) // 3.1415926536 Constant

prng(Seed) => // Pseudo-Random Number Generator
    var PI = 2.0 * asin(1.0) // 3.1415926536 Constant
    var germinate = Seed * ohlc4 * timenow
    var pnrg = timenow * close
    pnrg := PI * nz(pnrg[1], germinate)
    pnrg := pnrg - int(pnrg)
    pnrg := bar_index%3==1 ? pnrg * -1.0 + 1.0 : pnrg
    pnrg

sprng(Seed) => // Simple Pseudo-Random Number Generator - Wichmann–Hill Inspired
    var germinate = Seed * hl2 * timenow
    float pseudoRandomNumber = na
    pseudoRandomNumber := 173.0 * nz(pseudoRandomNumber[1], germinate) % 30323.0
    pseudoRandomNumber / 30323.0

whprng(Seed) => // Wichmann–Hill Pseudo-Random Number Generator
    var germinate = Seed * hlc3 * timenow
    float s1 = na, s1 := 171.0 * nz(s1[1], germinate) % 30269.0
    float s2 = na, s2 := 172.0 * nz(s2[1], s1 * Seed) % 30307.0
    float s3 = na, s3 := 170.0 * nz(s3[1], s2 * Seed) % 30323.0
    (s1 / 30269.0 + s2 / 30307.0 + s3 / 30323.0) % 1.0

showPRNG   = input(true,        "Show Pseudo-Random Number Generator", input.bool)
showSPRNG  = input(true, "Show Simple Pseudo-Random Number Generator", input.bool)
showWHPRNG = input(true, "Show Wichmann–Hill Random Number Generator", input.bool)

PRNG   =   prng(cPI)
SPRNG  =  sprng(cPI)
WHPRNG = whprng(cPI)




//plot(PRNG)

d = input(0.5)
if crossUpper and  mom0 > 0 and mom1 > 0 and PRNG >= d
    strategy.entry("KltChLE", strategy.long, stop=bprice, comment="KltChLE")

if crossLower and (mom0 < 0 and mom1 <  0) and PRNG <= d
    strategy.entry("KltChSE", strategy.short, stop=sprice, comment="KltChSE")

//plot(bprice)
//plot(sprice)


dee =input(30000)
strategy.exit('KltChLE', profit = dee)
strategy.exit('KltChSE', profit = dee)
