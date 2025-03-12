import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CreditCard, Download, Gift, Globe, Smartphone, Wallet, Zap } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Wallet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">PayEase</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Personal
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Business
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#" className="hidden md:block text-sm font-medium hover:text-primary">
              Sign In
            </Link>
            <Button>Get Started</Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Payments Made Simple, Fast & Secure
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Send money, pay bills, recharge, and shop - all in one app. Join millions of users who trust
                    PayEase.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Download App <Download className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                      <path d="M7 7h.01" />
                    </svg>
                    <span>Bank Grade Security</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4 text-primary"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <span>100M+ Happy Users</span>
                  </div>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center">
                <div className="relative h-[450px] w-[250px] overflow-hidden rounded-xl border bg-background shadow-xl md:h-[600px] md:w-[300px]">
                  <Image
                    src="/placeholder.svg?height=600&width=300"
                    width={300}
                    height={600}
                    alt="App Screenshot"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything you need in one app
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  From sending money to paying bills, our app has you covered with a seamless experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Mobile Recharge</h3>
                <p className="text-center text-muted-foreground">
                  Recharge any mobile number, pay postpaid bills, and get exclusive cashback offers.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Wallet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">UPI Payments</h3>
                <p className="text-center text-muted-foreground">
                  Send money instantly to anyone, anywhere with just a mobile number or QR code.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Bill Payments</h3>
                <p className="text-center text-muted-foreground">
                  Pay electricity, water, gas, and other utility bills without any hassle.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Gift className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rewards</h3>
                <p className="text-center text-muted-foreground">
                  Earn cashback and rewards on every transaction you make through our platform.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Online Shopping</h3>
                <p className="text-center text-muted-foreground">
                  Shop from thousands of merchants and get exclusive deals and discounts.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Fast Transfers</h3>
                <p className="text-center text-muted-foreground">
                  Transfer money to bank accounts instantly, 24/7, even on holidays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Simple, Fast & Secure</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started with PayEase in just a few simple steps and experience the future of payments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Step 1 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Download the App</h3>
                <p className="text-center text-muted-foreground">
                  Get our app from the App Store or Google Play Store and create your account.
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Link Your Bank</h3>
                <p className="text-center text-muted-foreground">
                  Securely connect your bank account or add a debit/credit card to get started.
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Start Transacting</h3>
                <p className="text-center text-muted-foreground">
                  Send money, pay bills, shop online, and enjoy a seamless payment experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 px-4 py-6 dark:border-gray-800">
                <div className="text-4xl font-bold">100M+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 px-4 py-6 dark:border-gray-800">
                <div className="text-4xl font-bold">₹10B+</div>
                <div className="text-sm text-muted-foreground">Daily Transactions</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 border-r border-gray-200 px-4 py-6 dark:border-gray-800">
                <div className="text-4xl font-bold">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 px-4 py-6">
                <div className="text-4xl font-bold">4.8/5</div>
                <div className="text-sm text-muted-foreground">App Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Testimonials</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What our users say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join millions of satisfied users who trust PayEase for their daily transactions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-bold">Rahul Sharma</h3>
                    <p className="text-xs text-muted-foreground">Business Owner</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "PayEase has transformed how I manage payments for my business. The instant transfers and low fees
                  have saved me both time and money."
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-bold">Priya Patel</h3>
                    <p className="text-xs text-muted-foreground">College Student</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "As a student, I love how easy it is to split bills with friends and pay for daily expenses. The
                  cashback offers are a great bonus!"
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="flex flex-col items-start space-y-4 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex items-center space-x-2">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    width={40}
                    height={40}
                    alt="User"
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="text-sm font-bold">Vikram Singh</h3>
                    <p className="text-xs text-muted-foreground">IT Professional</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The security features are what impressed me the most. I can make transactions with complete peace of
                  mind knowing my data is protected."
                </p>
                <div className="flex text-yellow-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="none"
                    className="h-4 w-4 opacity-50"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download App Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Download Our App Today</h2>
                  <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Experience the future of payments. Available on iOS and Android.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-14 items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2" fill="currentColor">
                      <path d="M17.5,2 C19.9853,2 22,4.01472 22,6.5 L22,17.5 C22,19.9853 19.9853,22 17.5,22 L6.5,22 C4.01472,22 2,19.9853 2,17.5 L2,6.5 C2,4.01472 4.01472,2 6.5,2 L17.5,2 Z M12.8,8.4 C12.7336,8.3337 12.6793,8.2581 12.6382,8.1761 C12.5971,8.0942 12.5697,8.0071 12.5571,7.9172 C12.5446,7.8274 12.5471,7.7361 12.5645,7.6472 C12.5819,7.5583 12.6139,7.4728 12.6591,7.3938 C12.7044,7.3148 12.7622,7.2438 12.8301,7.1839 C12.898,7.124 12.9749,7.0761 13.0576,7.0425 C13.1403,7.0088 13.2274,6.9899 13.3156,6.9866 C13.4038,6.9834 13.4919,6.9959 13.5763,7.0235 C13.6606,7.0512 13.7398,7.0935 13.81,7.148 L16.71,10.048 C16.8638,10.2016 16.95,10.4101 16.95,10.628 C16.95,10.8459 16.8638,11.0544 16.71,11.208 L13.83,14.088 C13.7582,14.1629 13.6733,14.2232 13.5797,14.2658 C13.4862,14.3084 13.3857,14.3324 13.2838,14.3365 C13.1819,14.3406 13.0799,14.3246 12.9834,14.2895 C12.8869,14.2544 12.7978,14.2009 12.7208,14.1318 C12.6438,14.0626 12.5806,13.9791 12.5346,13.8861 C12.4885,13.7931 12.4605,13.6924 12.4522,13.5894 C12.4438,13.4864 12.4553,13.3826 12.4859,13.2842 C12.5166,13.1858 12.5659,13.0947 12.631,13.016 L14.841,10.806 L14.841,10.448 L12.8,8.4 Z M7.369,10.448 L7.369,10.806 L9.579,13.016 C9.7328,13.1696 9.819,13.3781 9.819,13.596 C9.819,13.8139 9.7328,14.0224 9.579,14.176 C9.4254,14.3298 9.2169,14.416 8.999,14.416 C8.7811,14.416 8.5726,14.3298 8.419,14.176 L5.519,11.276 C5.3652,11.1224 5.279,10.9139 5.279,10.696 C5.279,10.4781 5.3652,10.2696 5.519,10.116 L8.399,7.236 C8.5526,7.0822 8.7611,6.996 8.979,6.996 C9.1969,6.996 9.4054,7.0822 9.559,7.236 C9.7128,7.3896 9.799,7.5981 9.799,7.816 C9.799,8.0339 9.7128,8.2424 9.559,8.396 L7.369,10.448 Z" />
                    </svg>
                    Download for Android
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-14 items-center justify-center rounded-md bg-primary-foreground px-6 py-3 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90"
                  >
                    <svg viewBox="0 0 24 24" className="h-6 w-6 mr-2" fill="currentColor">
                      <path d="M14.8,5.1 L9.2,5.1 C8.8,5.1 8.5,5.4 8.5,5.8 L8.5,18.2 C8.5,18.6 8.8,18.9 9.2,18.9 L14.8,18.9 C15.2,18.9 15.5,18.6 15.5,18.2 L15.5,5.8 C15.5,5.4 15.2,5.1 14.8,5.1 Z M12,18.2 C11.6,18.2 11.3,17.9 11.3,17.5 C11.3,17.1 11.6,16.8 12,16.8 C12.4,16.8 12.7,17.1 12.7,17.5 C12.7,17.9 12.4,18.2 12,18.2 Z M14.5,16.2 L9.5,16.2 L9.5,6.1 L14.5,6.1 L14.5,16.2 Z" />
                    </svg>
                    Download for iOS
                  </Link>
                </div>
              </div>
              <div className="mx-auto flex items-center justify-center lg:justify-end">
                <div className="relative h-[500px] w-[250px] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/placeholder.svg?height=500&width=250"
                    width={250}
                    height={500}
                    alt="App Screenshot"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">PayEase</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Making digital payments simple, fast, and secure for everyone.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Company</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Press
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Help</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Support
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Legal</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-muted-foreground hover:text-foreground">
                      Cookies
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} PayEase. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

