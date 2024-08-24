"use client";
import React from "react";
import { Check, Loader2 } from "lucide-react";

import InputField from "@/components/ui/Custom-Input";
import Select from "@/components/ui/Custom-Select";
import { Button } from "@/components/ui/button";
import InputError from "@/components/Input-Error/Input-Error";
const AddFinanceForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit");
  };

  const typeOptions = [
    { value: "Fee", label: "Fee" },
    { value: "Expense", label: "Expense" },
    { value: "Invoice", label: "Invoice" },
  ];
  const loading = false;
  return (
    <div>
      <div className="p-12 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] lg:min-w-[30rem]">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div>
            <InputField label="Record ID" placeholder="121454" />
          </div>
          <div>
            <InputField label="Full Name" placeholder="Johny Smith" />
          </div>
          <div>
            <Select
              label="Type"
              options={typeOptions}
              placeholder="Select Type"
            />
          </div>
          <div>
            <InputField
              label="Description"
              type="text"
              placeholder="Description"
            />
          </div>
          <div>
            <InputField label="Amount" type="number" placeholder="$12451" />
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#151515] shadow-md flex items-center gap-2"
          >
            {loading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Check />
            )}
            <span>Add Record</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddFinanceForm;
