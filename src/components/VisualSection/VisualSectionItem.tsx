import React from "react";

interface VisualItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const VisualSectionItem: React.FC<VisualItemProps> = ({icon, title, description}) => {
    return (
        <div className="flex flex-col items-center text-center p-4">
            <div className="text-4xl">{icon}</div>
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{description}</p>
        </div>
    );
}

export default VisualSectionItem;