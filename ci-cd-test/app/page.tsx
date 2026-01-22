export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-black dark:text-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">MyStartup</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#features" className="hover:text-blue-500">Features</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Build smarter. <span className="text-blue-600">Grow faster.</span>
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          A simple platform to help you manage, scale, and launch your ideas
          without complexity.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-gray-50 dark:bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
          <div className="p-6 rounded-xl bg-white dark:bg-black shadow">
            <h3 className="text-xl font-semibold">Fast Setup</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Get started in minutes with minimal configuration.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-black shadow">
            <h3 className="text-xl font-semibold">Scalable</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Built to grow with your users and data.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white dark:bg-black shadow">
            <h3 className="text-xl font-semibold">Secure</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Industry-standard security baked in.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} MyStartup. All rights reserved.
      </footer>
    </div>
  );
}
