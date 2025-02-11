
import Blog3 from "@/app/assets/blog-3.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function page() {
    return (
        <div>
            <div>
                <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-20">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>
                            <Image
                                src={Blog3}
                                alt="Chat interface"
                                width={1200}
                                height={800}
                                className="w-full h-auto md:h-[400px] object-cover rounded-r-md"
                            />
                        </div>
                        <div>
                            <p className="text-[#E455A9] uppercase text-xs font-semibold mb-2">Using ClickUp</p>
                            <h1 className="text-3xl md:text-[45px] md:leading-[60px] font-bold">How ClickUp’s Marketing Team Uses ClickUp</h1>
                            <div className="mt-4 lg:mt-8 space-y-4 md:space-y-0 md:flex gap-6 items-center">
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-10 w-10">
                                        <AvatarImage
                                            src="/placeholder.svg?height=40&width=40"
                                            alt="Author"
                                        />
                                        <AvatarFallback>SS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="text-sm font-bold">
                                            Shaparan Shahin
                                        </h3>
                                        <p className="text-xs text-muted-foreground">
                                            Senior content writer
                                        </p>
                                    </div>
                                </div>
                                <div className="border-l pl-6">
                                    <p className="text-sm font-medium">June 13, 2024</p>
                                </div>
                                <div className="border-l pl-6">
                                    <p className="text-sm font-medium"> 18min read</p>
                                </div>
                            </div>
                            <div className="flex gap-5 items-center text-3xl mt-8">
                                <FaTwitter /> <FaLinkedinIn /> <FaInstagram /> <FaFacebookF />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-[1440px] mx-auto px-4 lg:px-16 font-axiforma mt-[72px] mb-28">
                <div className="grid md:grid-cols-12 gap-8">
                    <div className="order-2 md:order-1 md:col-span-8">
                        <p className="text-lg">Imagine selling productivity software to a billion knowledge workers worldwide. Now, add in vastly different workflows, tools, and cultural nuances. Welcome to our daily grind at ClickUp. 👀

                            We’re not just battling scattered data or email chains; we’re wrestling with how to resonate with a product manager in San Francisco, inspire a designer in São Paulo, and help a founder in Berlin run a remote team like clockwork.

                            Our challenge? Not just growing our brand, but solving real, gnawing problems for these diverse personas.</p>
                        <p className="mt-6 tect-xl font-semibold">How do we make our marketing as universally effective as our product?</p>
                        <p className="text-lg mt-6">You’d think the 10,000+ martech solutions out there would help us do it. But as our team scaled from 2 to 20+ marketers dispersed worldwide and our budgets tripled, we found more tools meant more chaos.

                            Most marketing teams face similar issues: siloed channels, runaway campaigns, ROI question marks.

                            That’s why we built ClickUp. Born from our own global marketing headaches, it’s our answer to the universal need for a single source of truth. And no, we don’t just preach marketing efficiency; we live it.

                            The proof?</p>
                        <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                            <p className="text-lg">We bootstrapped ClickUp to nearly $20M ARR on free, organic users. That was four years ago. Today? Revenue’s up tenfold, and we’re saving 10M+ users a day every week! 💪</p>
                        </div>
                        <p className="text-lg mt-6">Imagine selling productivity software to a billion knowledge workers worldwide. Now, add in vastly different workflows, tools, and cultural nuances. Welcome to our daily grind at ClickUp. 👀

                            We’re not just battling scattered data or email chains; we’re wrestling with how to resonate with a product manager in San Francisco, inspire a designer in São Paulo, and help a founder in Berlin run a remote team like clockwork.

                            Our challenge? Not just growing our brand, but solving real, gnawing problems for these diverse personas.</p>
                        <p className="mt-6 tect-xl font-semibold">How do we make our marketing as universally effective as our product?</p>
                        <p className="text-lg mt-6">You’d think the 10,000+ martech solutions out there would help us do it. But as our team scaled from 2 to 20+ marketers dispersed worldwide and our budgets tripled, we found more tools meant more chaos.

                            Most marketing teams face similar issues: siloed channels, runaway campaigns, ROI question marks.

                            That’s why we built ClickUp. Born from our own global marketing headaches, it’s our answer to the universal need for a single source of truth. And no, we don’t just preach marketing efficiency; we live it.

                            The proof?</p>
                        <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                            <p className="text-lg">We bootstrapped ClickUp to nearly $20M ARR on free, organic users. That was four years ago. Today? Revenue’s up tenfold, and we’re saving 10M+ users a day every week! 💪</p>
                        </div>
                        <p className="text-lg mt-6">Imagine selling productivity software to a billion knowledge workers worldwide. Now, add in vastly different workflows, tools, and cultural nuances. Welcome to our daily grind at ClickUp. 👀

                            We’re not just battling scattered data or email chains; we’re wrestling with how to resonate with a product manager in San Francisco, inspire a designer in São Paulo, and help a founder in Berlin run a remote team like clockwork.

                            Our challenge? Not just growing our brand, but solving real, gnawing problems for these diverse personas.</p>
                        <p className="mt-6 tect-xl font-semibold">How do we make our marketing as universally effective as our product?</p>
                        <p className="text-lg mt-6">You’d think the 10,000+ martech solutions out there would help us do it. But as our team scaled from 2 to 20+ marketers dispersed worldwide and our budgets tripled, we found more tools meant more chaos.

                            Most marketing teams face similar issues: siloed channels, runaway campaigns, ROI question marks.

                            That’s why we built ClickUp. Born from our own global marketing headaches, it’s our answer to the universal need for a single source of truth. And no, we don’t just preach marketing efficiency; we live it.

                            The proof?</p>
                        <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                            <p className="text-lg mt-6">We bootstrapped ClickUp to nearly $20M ARR on free, organic users. That was four years ago. Today? Revenue’s up tenfold, and we’re saving 10M+ users a day every week! 💪</p>
                        </div>
                        <p className="text-lg mt-6">Imagine selling productivity software to a billion knowledge workers worldwide. Now, add in vastly different workflows, tools, and cultural nuances. Welcome to our daily grind at ClickUp. 👀

                            We’re not just battling scattered data or email chains; we’re wrestling with how to resonate with a product manager in San Francisco, inspire a designer in São Paulo, and help a founder in Berlin run a remote team like clockwork.

                            Our challenge? Not just growing our brand, but solving real, gnawing problems for these diverse personas.</p>
                        <p className="mt-6 tect-xl font-semibold">How do we make our marketing as universally effective as our product?</p>
                        <p className="text-lg mt-6">You’d think the 10,000+ martech solutions out there would help us do it. But as our team scaled from 2 to 20+ marketers dispersed worldwide and our budgets tripled, we found more tools meant more chaos.

                            Most marketing teams face similar issues: siloed channels, runaway campaigns, ROI question marks.

                            That’s why we built ClickUp. Born from our own global marketing headaches, it’s our answer to the universal need for a single source of truth. And no, we don’t just preach marketing efficiency; we live it.

                            The proof?</p>
                        <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                            <p className="text-lg">We bootstrapped ClickUp to nearly $20M ARR on free, organic users. That was four years ago. Today? Revenue’s up tenfold, and we’re saving 10M+ users a day every week! 💪</p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 md:col-span-4">
                        <div className="p-6 flex flex-col gap-4 bg-gray-100 sticky top-28">
                            <p>What is E-commerce Conversion Rate?</p>
                            <p>50 Proven Ways to Increase Conversion Rate
                            </p>
                            <p>Top 10 Ecommerce Conversion Rate Optimization Strategies</p>
                            <p>5 Best Tools That Help Improve Ecommerce Conversion Rate</p>
                            <p>FAQs on How to Increase Ecommerce Conversion Rate</p>
                            <p>Turn Insights into Results</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
