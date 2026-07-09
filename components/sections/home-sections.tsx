export function HomeSections() {
  return (
    <div className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Welcome to DarulArqum</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Quran Classes</h3>
            <p>Learn the Quran with qualified instructors.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Islamic Education</h3>
            <p>Comprehensive Islamic knowledge programs.</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-lg">
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p>Join our growing community of learners.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
