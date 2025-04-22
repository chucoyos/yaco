export default function BenefitCard({
  icon = "🚀", // Default rocket emoji
  title = "Benefit Title", // Default title
  benefits = [], // Array of benefit strings
  className = "" // Additional CSS classes
}) {
  return (
    <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ${className}`}>
      <h3 className="text-xl font-semibold mb-3">
        <span className="mr-2">{icon}</span>
        {title}
      </h3>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2">✔️</span>
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}