import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

import { Dot } from "lucide-react";
const FinanceTable = () => {
  return (
    <Table>
      <TableHeader className="bg-[#15151529]">
        <TableRow className="hover:bg-[#CECECE]">
          <TableHead className="min-w-[10rem] w-[10rem] text-start text-[#151515] rounded-tl-xl">
            Record Id
          </TableHead>
          <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">
            Description
          </TableHead>
          <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">
            Type
          </TableHead>
          <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">
            Amount
          </TableHead>
          <TableHead className="min-w-[10rem] w-[10rem] text-[#151515]">
            Status
          </TableHead>
          <TableHead className="min-w-[10rem] w-[10rem] text-[#151515] rounded-tr-xl">
            Timestamp
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="relative">
          <TableCell className="font-medium flex items-center gap-2">
            <Checkbox id="record" />
            <label
              htmlFor="record"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              112
            </label>
          </TableCell>
          <TableCell className="text-sm">
            Tuition Fee ,Office swisaosososl
          </TableCell>
          <TableCell className="text-sm">Fee</TableCell>
          <TableCell className="text-sm">$500</TableCell>
          <TableCell className="flex items-center gap-2 text-sm">
            <Dot color="#4BC74B" />
            Approved
          </TableCell>
          <TableCell className="text-sm">01-Feb-2024 09:16 AM</TableCell>
        </TableRow>
        <hr />
      </TableBody>
      <TableBody>
        <TableRow className="relative">
          <TableCell className="font-medium flex items-center gap-2">
            <Checkbox id="record" />
            <label
              htmlFor="record"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              112
            </label>
          </TableCell>
          <TableCell className="text-sm">
            Tuition Fee ,Office swisaosososl
          </TableCell>
          <TableCell className="text-sm">Fee</TableCell>
          <TableCell className="text-sm">$500</TableCell>
          <TableCell className="flex items-center gap-2 text-sm">
            <Dot color="#4BC74B" />
            Pending
          </TableCell>
          <TableCell className="text-sm">01-Feb-2024 09:16 AM</TableCell>
        </TableRow>
        <hr />
      </TableBody>
      <TableBody>
        <TableRow className="relative">
          <TableCell className="font-medium flex items-center gap-2">
            <Checkbox id="record" />
            <label
              htmlFor="record"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              112
            </label>
          </TableCell>
          <TableCell className="text-sm">
            Tuition Fee ,Office swisaosososl
          </TableCell>
          <TableCell className="text-sm">Fee</TableCell>
          <TableCell className="text-sm">$500</TableCell>
          <TableCell className="flex items-center gap-2 text-sm">
            <Dot color="#4BC74B" />
            Declined
          </TableCell>
          <TableCell className="text-sm">01-Feb-2024 09:16 AM</TableCell>
        </TableRow>
        <hr />
      </TableBody>
      <TableBody>
        <TableRow className="relative">
          <TableCell className="font-medium flex items-center gap-2">
            <Checkbox id="record" />
            <label
              htmlFor="record"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              112
            </label>
          </TableCell>
          <TableCell className="text-sm">
            Tuition Fee ,Office swisaosososl
          </TableCell>
          <TableCell className="text-sm">Fee</TableCell>
          <TableCell className="text-sm">$500</TableCell>
          <TableCell className="flex items-center gap-2 text-sm">
            <Dot color="#4BC74B" />
            Approved
          </TableCell>
          <TableCell className="text-sm">01-Feb-2024 09:16 AM</TableCell>
        </TableRow>
        <hr />
      </TableBody>
      <TableBody>
        <TableRow className="relative">
          <TableCell className="font-medium flex items-center gap-2">
            <Checkbox id="record" />
            <label
              htmlFor="record"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              112
            </label>
          </TableCell>
          <TableCell className="text-sm">
            Tuition Fee ,Office swisaosososl
          </TableCell>
          <TableCell className="text-sm">Fee</TableCell>
          <TableCell className="text-sm">$500</TableCell>
          <TableCell className="flex items-center gap-2 text-sm">
            <Dot color="#4BC74B" />
            Approved
          </TableCell>
          <TableCell className="text-sm">01-Feb-2024 09:16 AM</TableCell>
        </TableRow>
        <hr />
      </TableBody>
    </Table>
  );
};

export default FinanceTable;
