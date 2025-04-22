
import React from "react";

interface Reference {
  name: string;
  url: string;
  citation: string;
  logoUrl?: string;
}

interface ReferenceSectionProps {
  references: Reference[];
}

const ReferenceSection: React.FC<ReferenceSectionProps> = ({ references }) => {
  return (
    <div className="mt-8 p-4">
      <div className="rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4 text-charcoalGray">
          References
        </h3>
        <ul className="list-disc list-inside space-y-2">
          {references.map((ref, index) => (
            <li key={index} className="flex items-center gap-3">
              {ref.logoUrl && (
                <img
                  src={ref.logoUrl}
                  alt={`${ref.name} logo`}
                  className="h-6 w-auto object-contain"
                  loading="lazy"
                />
              )}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary hover:text-primary/80"
              >
                {ref.citation}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReferenceSection;

