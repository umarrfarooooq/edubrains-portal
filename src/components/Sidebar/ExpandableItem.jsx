import PlusIcon from "@/components/icons/PlusIcon";
import MinusIcon from "@/components/icons/MinusIcon";
import Link from "next/link";

const ExpandableItem = ({ name, icon, subItems, expandedItems, toggleItem, setActiveNav, activeNav, isMiniSidebar }) => {
    return (
      <>
        <li
          onClick={() => {
            setActiveNav(name);
            toggleItem(name);
          }}
          className="py-2 flex items-center justify-between"
        >
          <Link
            href="/"
            className={`flex items-center rounded-lg ${
              activeNav === name
                ? "text-[#151515] font-semibold"
                : "text-[#696969]"
            } group`}
          >
            {icon}
            {isMiniSidebar && <span className="ms-3 text-base">{name}</span>}
          </Link>
          {isMiniSidebar && <div className="flex items-center gap-2">
          <div className="text-[.685rem] w-4 h-4 text-[#FFFDFA] flex items-center justify-center bg-[#D94444] rounded-full">{subItems ? subItems.length : 0}</div>
          <div className="bg-[#FFFDFA] w-max active:bg-[#fffdf9] cursor-pointer transition-all p-[.38rem] rounded-full">{expandedItems[name] ? <MinusIcon width={12} height={12} /> : <PlusIcon width={12} height={12}/> }</div>
          </div>}
        </li>
        {expandedItems[name] && (
          <div className={`${name.toLowerCase()}SubItems pl-6`}>
            {subItems.map((subItem, index) => (
              <li
                key={index}
                onClick={() => setActiveNav(name)}
                className="py-2"
              >
                <Link
                  href="/"
                  className={`flex items-center rounded-lg ${
                    activeNav === name
                      ? "text-[#151515] font-semibold"
                      : "text-[#696969]"
                  } group`}
                >
                  <div className="p-2">
                    <div className="w-2 h-2 bg-[#151515] rounded-full"></div>
                  </div>
                  <span className="ms-3 text-base">{subItem}</span>
                </Link>
              </li>
            ))}
          </div>
        )}
      </>
    );
  };

export default ExpandableItem;