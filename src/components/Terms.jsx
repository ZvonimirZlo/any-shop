const Terms = () => {
  return (
   <div className="min-h-screen bg-black flex items-center justify-center p-6 font-sans">
    <div className="max-w-4xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-lg shadow-sm font-sans text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-4 text-gray-900">
        Terms of Service <span className="text-blue-600 text-lg font-medium">(Any Shop Demo)</span>
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="leading-relaxed text-gray-600">
            By using this site, you acknowledge that this is a <span className="font-medium text-gray-900">non-commercial, technical demonstration</span> created by ZvonimirZlo. No real-world contracts are formed by clicking "Purchase" or "Checkout."
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">2. Nature of Goods</h2>
          <p className="mb-3 text-gray-600">All products displayed are fetched from the <strong>FakeStore API</strong>:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-600">
            <li>Items are not for sale.</li>
            <li>Descriptions and prices are for UI/UX placement purposes only.</li>
            <li>No physical items will be shipped to any address entered.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">3. User Conduct</h2>
          <p className="leading-relaxed text-gray-600">
            While you are free to test the forms, please <span className="text-red-600 font-medium">do not enter real-world sensitive data</span> (such as actual credit card numbers or private home addresses). Use "dummy" data for testing (e.g., <code className="bg-gray-100 px-1 rounded">123 Main St</code> or <code className="bg-gray-100 px-1 rounded">test@example.com</code>).
          </p>
        </section>

        <section className="bg-gray-50 p-4 rounded-md italic border-l-4 border-gray-300">
          <h2 className="text-lg font-semibold mb-1 not-italic">4. Limitation of Liability</h2>
          <p className="text-gray-600">
            The developer is not responsible for any "disappointment" caused by the fact that the $1,000 diamond ring in the catalog isn't actually arriving at your door.
          </p>
        </section>
      </div>

      <div className="mt-10 pt-6 border-t text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Any Shop Project. Built for portfolio purposes.
      </div>
    </div>
    </div>
  );
};

export default Terms;