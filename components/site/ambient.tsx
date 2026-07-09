interface AmbientProps {
  dark?: boolean;
  grain?: boolean;
}

export function Ambient({ dark = false, grain = false }: AmbientProps) {
  return (
    <div 
      className={`fixed inset-0 -z-10 ${
        dark 
          ? 'bg-gradient-to-br from-gray-900 to-black' 
          : 'bg-gradient-to-br from-blue-50 to-indigo-100'
      }`}
      style={{
        backgroundImage: grain 
          ? 'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" /%3E%3C/filter%3E%3Crect width="400" height="400" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")'
          : undefined,
      }}
    ></div>
  );
}
