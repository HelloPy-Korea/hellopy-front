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
    <div className="m-8 flex w-[1251px]">
      <div className="flex w-auto gap-10">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            className={`relative inline-flex items-center justify-center py-2 text-2xl font-semibold transition-all ${activeTab === tab.value ? "border-b-2 border-black text-black" : "text-[#696969]"} `}
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
