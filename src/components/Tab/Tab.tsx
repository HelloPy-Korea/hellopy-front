
interface Tab {
    label: string;
    value: string;
}

interface TabProps {
    tabs: Tab[];
    activeTab: string;
    onTabChange: (value: string) => void;
}

export const Tab = ({ tabs, activeTab, onTabChange }: TabProps) => {
    return (
        <div className="w-[1251px] flex m-8">
            <div className="flex w-auto gap-10">
                {tabs.map((tab) => (
                    <button
                        key={tab.value}
                        className={`relative inline-flex items-center justify-center text-2xl font-semibold py-2 transition-all
              ${activeTab === tab.value ? "text-black border-b-2 border-black" : "text-[#696969]"}
            `}
                        onClick={() => onTabChange(tab.value)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
        </div>
    );
};
