"use client";
import React, { useEffect, useState } from "react";
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
import InputError from "@/components/Input-Error/Input-Error";
const AddUserForm = () => {
  const dispatch = useDispatch();
  const { firstName, lastName, email, phoneNumber } = useSelector(
    (state) => state.form.inputs
  );
  const { role, countryCode } = useSelector((state) => state.form.selects);
  const { loading, error, invitedUser } = useSelector((state) => state.user);
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (invitedUser) {
      console.log("User invited successfully:", invitedUser);
      dispatch(clearInvitedUser());
      dispatch(resetForm());
      setFormErrors({});
    }
  }, [invitedUser, dispatch]);

  useEffect(() => {
    if (error) {
      console.error("Error inviting user:", error);
      setFormErrors({ server: error });
      setTimeout(() => {
        dispatch(clearError());
        setFormErrors({});
      }, 5000);
    }
  }, [error, dispatch]);

  const handleInputChange = (name) => (e) => {
    dispatch(setInputValue({ name, value: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSelectChange = (name) => (selectedOption) => {
    dispatch(setSelectValue({ name, value: selectedOption }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!firstName) errors.firstName = "First name is required";
    if (!lastName) errors.lastName = "Last name is required";
    if (!email) errors.email = "Email is required";
    if (!role) errors.role = "Role is required";
    if (!phoneNumber) errors.phoneNumber = "Phone number is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setFormErrors(formErrors);
      return;
    }
    const userData = {
      firstName,
      lastName,
      email,
      phoneNumber: `${countryCode?.value || ""}${phoneNumber}`,
      roles: [role?.value],
    };
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
          <div>
            <InputField
              label="First Name"
              placeholder="John"
              value={firstName || ""}
              onChange={handleInputChange("firstName")}
            />
            <InputError errorMessage={formErrors.firstName} />
          </div>
          <div>
            <InputField
              label="Last Name"
              placeholder="Smith"
              value={lastName || ""}
              onChange={handleInputChange("lastName")}
            />
            <InputError errorMessage={formErrors.lastName} />
          </div>
          <div>
            <Select
              label="Role"
              options={roleOptions}
              value={role || ""}
              onChange={(selectedOption) =>
                handleSelectChange("role")(selectedOption)
              }
              placeholder="Select a role"
            />
            <InputError errorMessage={formErrors.role} />
          </div>
          <div>
            <InputField
              label="Enter your email"
              type="email"
              placeholder="Enter your email"
              value={email || ""}
              onChange={handleInputChange("email")}
              icon={<EmailIcon width={20} height={16} />}
            />
            <InputError errorMessage={formErrors.email} />
          </div>
          <div>
            <PhoneInput
              label="Phone Number"
              phoneValue={phoneNumber || ""}
              phoneOnChange={handleInputChange("phoneNumber")}
              codeValue={countryCode || ""}
              codeOnChange={(selectedOption) =>
                handleSelectChange("countryCode")(selectedOption)
              }
            />
            <InputError errorMessage={formErrors.phoneNumber} />
          </div>
          <div>
            {formErrors.server && (
              <InputError errorMessage={formErrors.server} />
            )}
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
            <span>Invite New User</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddUserForm;
