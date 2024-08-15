"use client"

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  ReferenceLine,
  Label,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";

interface Product {
  issued_to: string;
  order_number: number;
  date: string;
  ticket_type: string;
}

export function Blocks() {
  const [IYD, setIYD] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get<Product[]>(
          "https://nu-com-0e51cf02b2c8.herokuapp.com/ticket"
        );
        setIYD(data);
      } catch (error) {
        console.error("Error fetching products:", error);
        // Optionally handle error state here
      }
    };

    fetchProducts();
  }, []);

  // Process data to count registrations by date
  const registrationData = IYD.reduce((acc: any[], product) => {
    const date = new Date(product.date).toLocaleDateString("en-US", {
      weekday: "short",
    });
    const existingEntry = acc.find((entry) => entry.date === date);
    if (existingEntry) {
      existingEntry.registrations += 1;
    } else {
      acc.push({ date, registrations: 1 });
    }
    return acc;
  }, []);

  return (
    <div className="chart-wrapper mx-auto flex max-w-6xl flex-col flex-wrap items-start justify-center gap-6 p-6 sm:flex-row sm:p-8">
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:max-w-[22rem] lg:grid-cols-1 xl:max-w-[25rem]">
        <Card className="lg:max-w-md" x-chunk="charts-01-chunk-0">
          <CardHeader className="space-y-0 pb-2">
            <CardDescription>Registrations</CardDescription>
            <CardTitle className="text-4xl tabular-nums">
              {IYD.length}{" "}
              <span className="font-sans text-sm font-normal tracking-normal text-muted-foreground">
                total
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                registrations: {
                  label: "Registrations",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <BarChart
                accessibilityLayer
                margin={{
                  left: -4,
                  right: -4,
                }}
                data={registrationData}
              >
                <Bar
                  dataKey="registrations"
                  fill="var(--color-steps)"
                  radius={5}
                  fillOpacity={0.6}
                  // activeBar={<Rectangle fillOpacity={0.8} />}
                />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={4}
                />
                <ChartTooltip
                  content={
                    <ChartTooltipContent
                      hideIndicator
                      labelFormatter={(value) => {
                        return value;
                      }}
                    />
                  }
                  cursor={false}
                />
                <ReferenceLine
                  y={registrationData.reduce((acc, { registrations }) => acc + registrations, 0) / registrationData.length}
                  stroke="hsl(var(--muted-foreground))"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                >
                  <Label
                    position="insideBottomLeft"
                    value="Average Registrations"
                    offset={10}
                    fill="hsl(var(--foreground))"
                  />
                </ReferenceLine>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-1">
            <CardDescription>
              Over the past {registrationData.length} days, you have received{" "}
              <span className="font-medium text-foreground">{IYD.length}</span>{" "}
              registrations.
            </CardDescription>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
