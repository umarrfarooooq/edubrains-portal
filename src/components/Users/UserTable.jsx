import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Avatar from "@public/avatar.png";
import ThreeDotsIcon from "../icons/ThreeDotsIcon";
import { Dot } from "lucide-react";

const UserTable = ({tabName, users}) => {
  return (
    <>
      <Table>
        <TableHeader className="bg-[#15151529]">
          <TableRow className="hover:bg-[#CECECE]">
            <TableHead className="min-w-[10rem] w-[10rem] text-center text-[#151515] rounded-tl-xl">{tabName} Pic</TableHead>
            <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">{tabName} Name</TableHead>
            <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">System ID</TableHead>
            <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">Role</TableHead>
            <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">Status</TableHead>
            <TableHead className="min-w-[10rem] w-[10rem] text-[#151515] rounded-tr-xl">Last Login</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user._id || index} className="relative">
              <TableCell className="font-medium flex items-center justify-center">
                <Image src={user.profilePic || Avatar} alt="avatar" className="w-8 h-8" />
              </TableCell>
              <TableCell className="text-sm">{`${user.firstName} ${user.lastName}`}</TableCell>
              <TableCell className="text-sm">{user.email.slice(0, 5)}</TableCell>
              <TableCell className="text-sm">{user.roles ? user.roles[0] : tabName}</TableCell>
              <TableCell className="flex items-center gap-2 text-sm">
                <Dot color={user.isActive ? "#4BC74B" : "#D94444"}/>
                {user.isActive ? "Online" : "Deactivated"}
              </TableCell>
              <TableCell className="text-sm">
                {user.lastLogin ? new Date(user.lastLogin).toLocaleString('en-US', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                }) : 'N/A'}
                <div className="absolute right-0 top-5 -mx-4 lg:-mx-0">
                  <ThreeDotsIcon />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default UserTable;