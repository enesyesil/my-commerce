'use client';

const AboutSection: React.FC = () => {
  return (
    <main className="p-6 text-center">
      <div className="max-w-2xl mx-auto bg-yellow-300 border-2 border-black p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-black mb-4">About Us</h2>
        <p className="text-lg text-black">
          At <strong>My Store</strong>, we are dedicated to bringing you the best products at
          affordable prices. Browse through our diverse catalog of items, ranging from the latest
          electronics to everyday essentials.
        </p>
        <p className="text-lg text-black mt-4">
          Whether you're looking for gifts, gadgets, or groceries, we've got you covered!
        </p>
      </div>

      <button
        className="mt-6 bg-black text-white py-2 px-4 rounded shadow-sm font-bold transition-transform transform hover:scale-105"
        onClick={() => (window.location.href = '/List')}
      >
        Start Shopping
      </button>
    </main>
  );
};

export default AboutSection;
