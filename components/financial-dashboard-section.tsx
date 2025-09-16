"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Area, AreaChart, Bar, BarChart, Line, LineChart, Pie, PieChart, Cell, ResponsiveContainer } from "recharts"
import { TrendingUp, DollarSign, Users, Target, ArrowUpRight, ArrowDownRight } from "lucide-react"

const savingsGrowthData = [
  { month: "Jan", amount: 15000, members: 45 },
  { month: "Feb", amount: 28000, members: 52 },
  { month: "Mar", amount: 42000, members: 67 },
  { month: "Apr", amount: 58000, members: 78 },
  { month: "May", amount: 75000, members: 89 },
  { month: "Jun", amount: 94000, members: 102 },
]

const organizationTypes = [
  { name: "Sports Teams", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Tech Companies", value: 28, color: "hsl(var(--chart-2))" },
  { name: "Non-Profits", value: 20, color: "hsl(var(--chart-3))" },
  { name: "Educational", value: 17, color: "hsl(var(--chart-4))" },
]

const monthlyVolume = [
  { month: "Jan", volume: 125000 },
  { month: "Feb", volume: 185000 },
  { month: "Mar", volume: 250000 },
  { month: "Apr", volume: 320000 },
  { month: "May", volume: 425000 },
  { month: "Jun", volume: 580000 },
]

const savingsConfig = {
  amount: {
    label: "Total Saved",
    color: "hsl(var(--chart-1))",
  },
  members: {
    label: "Active Members",
    color: "hsl(var(--chart-2))",
  },
}

const volumeConfig = {
  volume: {
    label: "Monthly Volume",
    color: "hsl(var(--chart-1))",
  },
}

export function FinancialDashboardSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl mb-4">
            Real-Time Financial Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent performance metrics and live data from our growing ecosystem of collaborative savings circles.
          </p>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Volume</CardTitle>
              <DollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">$2.1M</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1 text-accent" />
                +12.5% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Circles</CardTitle>
              <Target className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-accent">127</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1 text-accent" />
                +8.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Members</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">1,847</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1 text-accent" />
                +15.3% from last month
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border-emerald-500/20">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">98.7%</div>
              <p className="text-xs text-muted-foreground flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1 text-accent" />
                +0.3% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Savings Growth Chart */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Savings Growth Over Time
              </CardTitle>
              <CardDescription>
                Total amount saved and member growth across all circles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={savingsConfig} className="h-[300px]">
                <AreaChart data={savingsGrowthData}>
                  <defs>
                    <linearGradient id="fillAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <Area
                    type="monotone"
                    dataKey="amount"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    fill="url(#fillAmount)"
                  />
                  <ChartTooltip
                    content={<ChartTooltipContent formatter={(value, name) => [
                      `$${Number(value).toLocaleString()}`, name
                    ]} />}
                  />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Organization Types Pie Chart */}
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Organization Distribution
              </CardTitle>
              <CardDescription>
                Breakdown of organizations using Bloompay by sector
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer config={{}} className="h-[300px]">
                <PieChart>
                  <Pie
                    data={organizationTypes}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {organizationTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip
                    content={<ChartTooltipContent formatter={(value, name) => [
                      `${value}%`, name
                    ]} />}
                  />
                </PieChart>
              </ChartContainer>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                {organizationTypes.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Monthly Volume Chart */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Monthly Transaction Volume
            </CardTitle>
            <CardDescription>
              Total value of funds moved through the Bloompay platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={volumeConfig} className="h-[400px]">
              <BarChart data={monthlyVolume}>
                <Bar
                  dataKey="volume"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <ChartTooltip
                  content={<ChartTooltipContent formatter={(value, name) => [
                    `$${Number(value).toLocaleString()}`, "Volume"
                  ]} />}
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-6">Trust & Security Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">$0</div>
                <div className="text-sm text-muted-foreground">Lost to fraud or theft</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Uptime guarantee</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Security monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}