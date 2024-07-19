"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Check, Loader2 } from "lucide-react";
import {
  setInputValue,
  setSelectValue,
  resetForm,
} from "@/components/store/formSlice";
import {
  inviteUser,
  clearError,
  clearInvitedUser,
} from "@/components/store/userSlice";
import InputField from "@/components/ui/Custom-Input";
import Select from "@/components/ui/Custom-Select";
import PhoneInput from "@/components/ui/Custom-Phone-Input";
import EmailIcon from "@/components/icons/EmailIcon";
import { Button } from "@/components/ui/button";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.form.inputs
  );
  const { role, countryCode } = useSelector((state) => state.form.selects);
  const { loading, error, invitedUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (invitedUser) {
      console.log("User invited successfully:", invitedUser);
      dispatch(clearInvitedUser());
      dispatch(resetForm());
    }
  }, [invitedUser, dispatch]);

  useEffect(() => {
    if (error) {
      console.error("Error inviting user:", error);
      setTimeout(() => dispatch(clearError()), 5000);
    }
  }, [error, dispatch]);

  const handleInputChange = (name) => (e) => {
    dispatch(setInputValue({ name, value: e.target.value }));
  };

  const handleSelectChange = (name) => (selectedOption) => {
    dispatch(setSelectValue({ name, value: selectedOption }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber: `${countryCode?.value || ''}${phoneNumber}`,
      roles: [role?.value],
    };
    console.log(userData);
    dispatch(inviteUser(userData));
  };
  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "manager", label: "Manager" },
  ];

  return (
    <div>
      <div className="p-12 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] lg:max-w-[30rem]">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <InputField
            label="First Name"
            placeholder="John"
            value={firstName || ""}
            onChange={handleInputChange("firstName")}
          />
          <InputField
            label="Last Name"
            placeholder="Smith"
            value={lastName || ""}
            onChange={handleInputChange("lastName")}
          />
          <Select
            label="Role"
            options={roleOptions}
            value={role || ""}
            onChange={(selectedOption) => handleSelectChange("role")(selectedOption)}
            placeholder="Select a role"
          />
          <InputField
            label="Enter your email"
            type="email"
            placeholder="Enter your email"
            value={email || ""}
            onChange={handleInputChange("email")}
            icon={<EmailIcon width={20} height={16} />}
          />
          <PhoneInput
            label="Phone Number"
            phoneValue={phoneNumber || ""}
            phoneOnChange={handleInputChange("phoneNumber")}
            codeValue={countryCode || ""}
            codeOnChange={(selectedOption) => handleSelectChange("countryCode")(selectedOption)}
          />
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
            <span>Invite New User</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;

