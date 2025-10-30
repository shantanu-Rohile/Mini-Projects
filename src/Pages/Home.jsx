export default function Home() {
  const projects = [
    {
      title: "🎬 Movie Search App",
      link: "https://movie-app-umber-eta.vercel.app/",
      color: "from-blue-500 to-purple-500",
    },
    {
      title: "❌ Tic Tac Toe",
      link: "https://shantanu-rohile.github.io/Tic-Tac-Toe/",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "🎵 Simon Says",
      link: "https://shantanu-rohile.github.io/Simon-Say-s-Game/",
      color: "from-pink-500 to-red-500",
    },
    {
      title: "🌦️ Weather App",
      link: "https://your-weather-app.vercel.app",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-10">My Mini Projects 🚀</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-11/12 md:w-3/4">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-2xl p-8 text-center text-xl font-semibold 
                        bg-gradient-to-r ${project.color} shadow-lg hover:scale-105 
                        transition-transform duration-200`}
          >
            {project.title}
          </a>
        ))}
      </div>

      <footer className="mt-10 text-gray-400 text-sm">
        © {new Date().getFullYear()} | Built by Shantanu Rohile
      </footer>
    </div>
  );
}
