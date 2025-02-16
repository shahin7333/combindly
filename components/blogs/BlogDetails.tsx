
import Blog3 from "@/app/assets/blog-3.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function BlogDetails() {
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
                            <h1 className="text-3xl md:text-[45px] md:leading-[60px] font-bold">How to Increase ECommerce Conversion Rate: 50+ Proven Ways</h1>
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
                        <div>
                            <p>
                                In the fast-paced world of e-commerce, where competition is fierce and attention spans are short, having a high conversion rate is crucial for business success.
                            </p>
                            <br />
                            <p>
                                <span className="font-medium">Over 300 conversion optimization strategies</span> are out there. How many of them are you implementing right now?
                            </p>
                            <br />
                            <p>
                                It might be very few. It's obvious. Following 300+ conversion optimization strategies is impossible. However, focusing on a few significant strategies can make a noteworthy impact on your business.
                            </p>
                            <br />
                            <p>
                                Yes. Yes, that's why we are here to share 50 simple and effective conversion rate optimization methods that boost your conversion rate and increase sales.
                            </p>
                            <br />
                            <p>
                                So, what are you waiting for...?
                            </p>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">What is E-commerce Conversion Rate?</p>
                            </div>
                            <p className="mt-6">Before we dive into strategies, let's explore what exactly an e-commerce conversion rate is and why it matters..</p>
                            <br />
                            <p className="font-semibold">Ecommerce conversion rate is a mathematical term in an ecommerce business. It is a calculation of how many visitors have come to your website and how many of them have been purchased.</p>
                            <br />
                            <p>In a nutshell, it's the percentage of website visitors who complete a desired action, such as making a purchase.</p>
                            <br />
                            <p>A good e-commerce conversion rate can vary by industry, but it generally reflects the effectiveness of your website in turning visitors into customers.</p>
                            <br />
                            <p>However, the average ecommerce conversion rate is considered 2.5-3%.</p>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">50 Proven Ways to Increase Your Ecommerce Conversion Rate</p>
                            </div>
                            <div className="mt-6">
                                <p>Don’t get panicked seeing 50 proven ways. I bet these are very easy going strategies; some are already on your list. So, let’s read on the proven 50 ways to increase the ecommerce conversion rate of your online store and tick the boxes that you already have—</p>
                                <br />
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">1. Use High-Quality Images and Video</h3>
                                        <p className="mt-2">Visual appeal is paramount in e-commerce. High-quality images and engaging videos can significantly enhance the shopping experience, helping customers make informed decisions.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">1. Offer Free Shipping/Return Shipping</h3>
                                        <p className="mt-2">Consumers love freebies, and offering free shipping or return shipping can be a powerful incentive to encourage purchases and build trust.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">Top 10 Ecommerce Conversion Rate Optimization Strategies</p>
                            </div>
                            <p className="mt-6">Among them, we have separated 10 Ecommerce Conversion Rate Optimization Strategies that are in our top priority list that you must have to implement them.</p>
                            <br />
                            <p>So, let’s catch up which are they,</p>
                            <br />
                            <div>
                                <h3 className="text-lg font-semibold">1. Know Your Customer Behavior</h3>
                                <p className="mt-2">How people buy things is shaped by who they are, where they come from, and their daily moods. This is influenced by how they think (which changes each day) and what's trendy or expected in society, impacting what they choose to buy.</p>
                                <br />
                                <p>Knowing your customers' behaviors is key to tailoring your website and marketing to their likes. Use tools like analytics, polls, and user data analysis to discover what they prefer and how they usually do things.</p>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">5 Best Tools That Help Improve Ecommerce Conversion Rate</p>
                            </div>
                            <div className="mt-6">
                                <p>Employing CRO tools, suites, or agencies is necessary to understand why visitors aren't converting, identify potential changes to your site, and test changes that may lead to higher conversion rates. So, for your online store, we Have arranged the 5 best conversion booster apps to improve your conversion.</p>
                                <br />
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">1. Optimonk</h3>
                                        <p className="mt-2">OptiMonk is a powerful tool for creating and displaying targeted pop-ups, helping you capture leads and recover abandoned carts effectively.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">2. ReferralCandy</h3>
                                        <p className="mt-2">Leverage ReferralCandy to implement a referral program, turning satisfied customers into brand advocates and driving new sales through referrals.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">2. ReferralCandy</h3>
                                        <p className="mt-2">Leverage ReferralCandy to implement a referral program, turning satisfied customers into brand advocates and driving new sales through referrals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">FAQs on How to Increase Ecommerce Conversion Rate</p>
                            </div>
                            <div className="mt-6">
                                <p>You might still be more curious about increasing the conversion rate. Don't worry; here are more insights to help you clear your curiosity.</p>
                                <br />
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-semibold">1. How is Conversion Rate Calculated?</h3>
                                        <p className="mt-2">(Conversion/visitors)*100</p>
                                        <br />
                                        <p className="mt-2">Conversion rate is calculated by dividing the number of conversions by the total number of visitors and multiplying by 100 to get a percentage.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">2. What is Considered a Healthy E-commerce Conversion Rate?</h3>
                                        <p className="mt-2">A healthy e-commerce conversion rate can vary, but an average benchmark is around 2-5%. However, what's considered healthy depends on factors such as industry, product type, and target audience.</p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold">3. For What Length of Time is E-commerce Conversion Rate Measured?</h3>
                                        <p className="mt-2">E-commerce conversion rate is typically measured over a specific period, such as a month or quarter. The chosen timeframe should align with your business goals and the frequency of your website traffic.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="p-6 bg-green-100 mt-6 border-l-4 border-green-500">
                                <p className="text-lg font-bold">Turn Insights into Results</p>
                            </div>
                            <div className="mt-6">
                                <p>In conclusion, boosting your e-commerce conversion rate requires a strategic approach that combines user experience, marketing tactics and the right tools.</p>
                                <br />
                                <p>By implementing the proven strategies outlined above and utilizing effective tools, you can optimize your online store for higher conversions and ultimately, increased sales.</p>
                                <br />
                                <p>Remember, success lies in continuously analyzing data, adapting to trends, and delivering a seamless and personalized shopping experience to your customers. Simple steps lead to significant results.</p>
                            </div>
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
