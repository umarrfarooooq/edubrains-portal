"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouter } from "next/navigation";
import { Check, Loader2 } from "lucide-react";
import {
  updateUser,
  clearError,
  fetchUserById,
} from "@/components/store/userSlice";
import InputField from "@/components/ui/Custom-Input";
import Select from "@/components/ui/Custom-Select";
import PhoneInput from "@/components/ui/Custom-Phone-Input";
import EmailIcon from "@/components/icons/EmailIcon";
import { Button } from "@/components/ui/button";
import InputError from "@/components/Input-Error/Input-Error";

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = useParams();
  const { loading, error, currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: null,
    countryCode: null,
  });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    dispatch(fetchUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (currentUser) {
      const user = currentUser;
      const phoneRegex = /^(\+\d{1,3}|00\d{1,3})?(\d+)$/;
      let countryCodeValue = "";
      let phoneNumberValue = "";

      if (user.phoneNumber) {
        const match = user.phoneNumber.match(phoneRegex);
        countryCodeValue = match ? match[1] : "";
        phoneNumberValue = match ? match[2] : user.phoneNumber;
      }

      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: phoneNumberValue,
        role: user.roles && user.roles.length > 0
          ? { value: user.roles[0], label: user.roles[0] }
          : null,
        countryCode: { value: countryCodeValue, label: countryCodeValue },
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (error) {
      console.error("Error:", error);
      setFormErrors({ server: error });
      if (error === "User not found") {
        router.push("/404");
      }
      setTimeout(() => {
        dispatch(clearError());
        setFormErrors({});
      }, 5000);
    }
  }, [error, dispatch, router]);

  const handleInputChange = (name) => (e) => {
    setFormData((prev) => ({ ...prev, [name]: e.target.value }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSelectChange = (name) => (selectedOption) => {
    setFormData((prev) => ({ ...prev, [name]: selectedOption }));
    setFormErrors((prev) => ({ ...prev, [name]: null }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.role) errors.role = "Role is required";
    if (!formData.phoneNumber) errors.phoneNumber = "Phone number is required";
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: `${formData.countryCode?.value || ""}${formData.phoneNumber}`,
      roles: [formData.role?.value],
    };
    const resultAction = await dispatch(updateUser({ id, userData }));

    if (updateUser.fulfilled.match(resultAction)) {
      router.back();
    } else {
      console.error(
        "Update failed:",
        resultAction.payload || resultAction.error
      );
      setFormErrors({
        server: resultAction.payload || resultAction.error || 'Update failed'
      });
    }
  };

  const roleOptions = [
    { value: "admin", label: "Admin" },
    { value: "user", label: "User" },
    { value: "manager", label: "Manager" },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <div className="p-12 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] lg:max-w-[30rem]">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div>
            <InputField
              label="First Name"
              placeholder="John"
              value={formData.firstName}
              onChange={handleInputChange("firstName")}
            />
            <InputError errorMessage={formErrors.firstName} />
          </div>
          <div>
            <InputField
              label="Last Name"
              placeholder="Smith"
              value={formData.lastName}
              onChange={handleInputChange("lastName")}
            />
            <InputError errorMessage={formErrors.lastName} />
          </div>
          <div>
            <Select
              label="Role"
              options={roleOptions}
              value={formData.role}
              onChange={handleSelectChange("role")}
              placeholder="Select a role"
            />
            <InputError errorMessage={formErrors.role} />
          </div>
          <div>
            <InputField
              label="Enter your email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange("email")}
              icon={<EmailIcon width={20} height={16} />}
            />
            <InputError errorMessage={formErrors.email} />
          </div>
          <div>
            <PhoneInput
              label="Phone Number"
              phoneValue={formData.phoneNumber}
              phoneOnChange={handleInputChange("phoneNumber")}
              codeValue={formData.countryCode}
              codeOnChange={handleSelectChange("countryCode")}
            />
            <InputError errorMessage={formErrors.phoneNumber} />
          </div>
          <InputError errorMessage={formErrors.server} />

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
            <span>Update User</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserForm;