export function Hero() {
  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">Hero Section</h2>
    </div>
  );
}

export function PrayerFeature() {
  return (
    <div className="py-16 px-6">
      <h3 className="text-2xl font-bold mb-4">Prayer Times</h3>
      <p>Stay connected with daily prayer times and reminders.</p>
    </div>
  );
}

export function ProgramsSection() {
  return (
    <div className="py-16 px-6 bg-blue-50">
      <h3 className="text-2xl font-bold mb-4">Our Programs</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>Quran Classes</div>
        <div>Islamic Studies</div>
        <div>Community Events</div>
      </div>
    </div>
  );
}

export function GivingSection() {
  return (
    <div className="py-16 px-6">
      <h3 className="text-2xl font-bold mb-4">Support Our Mission</h3>
      <p>Help us continue our educational programs.</p>
    </div>
  );
}

export function StoryTeaser() {
  return (
    <div className="py-16 px-6 bg-gray-100">
      <h3 className="text-2xl font-bold mb-4">Our Story</h3>
      <p>Learn about DarulArqum's journey and mission.</p>
    </div>
  );
}

export function HomeSections() {
  return (
    <div>
      <Hero />
      <PrayerFeature />
      <ProgramsSection />
      <GivingSection />
      <StoryTeaser />
    </div>
  );
}
