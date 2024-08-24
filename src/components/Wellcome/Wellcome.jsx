import React from "react";
import Search from "../ui/Search";
import Link from "next/link";

const Wellcome = ({
  name,
  search,
  shortcutAction1,
  shortcutAction2,
  counts,
  greeting,
  actionBtn,
  btnRedirect,
}) => {
  return (
    <div className="flex flex-col gap-4 p-6 rounded-3xl border border-[#F4F1EB] bg-[#FFFDFA]">
      <div className="flex items-center justify-between">
        <div className="text-[2rem] font-semibold">{name}</div>
        <div className="flex items-center gap-4">
          {search && (
            <div>
              <Search />
            </div>
          )}
          <div className="flex items-center gap-2">
            {shortcutAction1 && (
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#F4F1EB]">
                {shortcutAction1}
              </div>
            )}
            {shortcutAction2 && (
              <div className="w-12 relative h-12 rounded-full flex items-center justify-center bg-[#F4F1EB]">
                {shortcutAction2}
                {counts && (
                  <div className="absolute top-[0.375rem] right-[0.5rem] text-[.685rem] w-4 h-4 text-[#FFFDFA] flex items-center justify-center bg-[#D94444] rounded-full">
                    {counts}
                  </div>
                )}
              </div>
            )}
            {actionBtn && (
              <Link href={btnRedirect ? btnRedirect : "/"}>
                <div className="py-3 cursor-pointer px-6 rounded-lg bg-[#151515] text-[#FFFDFA] font-semibold">
                  {actionBtn}
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
      {greeting && (
        <div className="text-2xl">
          Hello👋,<span className="font-semibold"> Umar!</span> Welcome back
        </div>
      )}
    </div>
  );
};

export default Wellcome;
