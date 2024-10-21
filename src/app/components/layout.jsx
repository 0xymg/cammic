const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">My Web Project</h1>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} My Web Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
