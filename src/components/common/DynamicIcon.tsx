import React from 'react';
import * as Icons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({ name, className = 'w-5 h-5', size = 20 }) => {
  // Normalize icon names
  const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[name] || Icons.Folder;
  return <IconComponent className={className} size={size} />;
};
