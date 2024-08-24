import { User } from "lucide-react";
import Link from "next/link";
import React from "react";

const MoreItems = ({ redirection, show }) => {
  return (
    <div className="z-50">
      <Link href={redirection ? redirection : ""}>
        <div
          className={`${show ? "flex" : "hidden"} items-center gap-1 py-2 px-4 rounded bg-[#FFFDFA] z-10 hover:bg-[#F4F1EB] cursor-pointer`}
          style={{ boxShadow: "0px 6px 12px 0px rgba(73, 73, 73, 0.24)" }}
        >
          <div>
            <User />
          </div>
          <div className="w-max">See Profile</div>
        </div>
      </Link>
    </div>
  );
};

export default MoreItems;
