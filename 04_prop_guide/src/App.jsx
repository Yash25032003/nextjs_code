import "./App.css";
import BasicProps from "./components/BasicProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ThemeToggler from "./components/ThemeToggler.jsx";

const isDark = true;
function Navigation() {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Toggler", icon: "📦" },
  ];

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div className="flex justify-center ">
          {sections.map((section) => (
            <button
              className="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white ml-2 mt-2 hover:bg-blue-700"
              key={section.id}
            >
              <span> {section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-gray-800 text-white ">
      <Navigation />
      <div>
        <header className="text-center mt-10">
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            {" "}
            A comprehensive guide to understanding props in React
          </p>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ChildrenProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
