export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-10 px-6">

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="flex items-center gap-4">

          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-14 rounded-full"
          />

          <div>

            <h3 className="text-white font-black text-xl">
              SANGAM IMPEX
            </h3>

            <p className="text-gray-500">
              Trusted China Sourcing Partner
            </p>

          </div>

        </div>

        <p className="text-gray-500 text-center">
          © 2026 Sangam Impex. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}