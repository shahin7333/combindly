"use client";
import { BadgePercent } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function Pricing() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-20">
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-3 text-center">
          Plans and Pricing
        </h1>
        <p className="text-center font-light">
          Receive unlimited credits when you pay yearly, and save on your plan.
        </p>
      </div>
      <Tabs defaultValue="monthly">
        <div className="flex justify-center items-center gap-4 mb-10">
          <TabsList className="flex justify-center items-center gap-4 bg-transparent max-w-max">
            <TabsTrigger className="uppercase" value="monthly">
              Monthly
            </TabsTrigger>
            <TabsTrigger className="uppercase" value="yearly">
              Yearly
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="monthly">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[0, 1, 2, 4].map((item) => (
              <Card key={item} className="hover:border-primary hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Organizations
                  </CardTitle>
                  <CardDescription>
                    <div className="mt-4">
                      <p className="text-2xl font-semibold">$100</p>
                      <p className="text-xs text-gray-500">Per Month/user</p>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Great for large businesses
                    </p>
                    <div className="space-y-3 mt-4 text-gray-700 font-light">
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        15 second checks
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Single-user account
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        50 monitors
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Up to 10 seats
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-4">
                  <Button className="w-full">Get started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="yearly">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[0, 1, 2, 4].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle className="text-lg font-medium">
                    Organizations
                  </CardTitle>
                  <CardDescription>
                    <div className="mt-4">
                      <p className="text-2xl font-semibold">$100</p>
                      <p className="text-xs text-gray-500">Per Month/user</p>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6">
                  <div>
                    <p className="text-sm font-medium">
                      Great for large businesses
                    </p>
                    <div className="space-y-3 mt-4">
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                      <p className="text-sm flex items-center gap-1.5">
                        <BadgePercent className="h-5 w-5" />
                        Great for large businesses
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="mt-4">
                  <Button className="w-full">Get started</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
