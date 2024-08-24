"use client";
import React, { useEffect } from "react";
import NavigateBack from "@/components/Navigate-Back/NavigateBack";
import { ActionIconBtn, ActionTxtAndIconBtn } from "@/components/ui/ActionBtn";
import { CircleSlash, Pencil, Trash2 } from "lucide-react";
import { fetchUserById } from "@/components/store/userSlice";
import AvatarComponent from "@/components/ui/AvatarComponent";
import { useDispatch, useSelector } from "react-redux";

const UserDetail = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  useEffect(() => {
    if (id) {
      dispatch(fetchUserById(id));
    }
  }, [id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User Not Found</div>;
  return (
    <div className="w-full bg-[#FFF9EF] min-h-screen p-6 flex flex-col gap-4">
      <div>
        <NavigateBack
          prevPage={user ? `${user.firstName} ${user.lastName}` : "User"}
          actions={true}
          actionBtn1={
            <ActionTxtAndIconBtn
              actionBtnIcon={<CircleSlash />}
              actionBtnTxt="Block"
            />
          }
          actionBtn2={
            <ActionIconBtn
              actionBtnIcon={<Trash2 size={24} color="#DC3545" />}
            />
          }
        />
      </div>
      <div className="p-6 rounded-xl border border-[#F4F1EB] bg-[#FFFDFA] flex flex-col gap-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <AvatarComponent />
            <div className="text-[2rem] font-semibold">
              {user.firstName} {user.lastName}
            </div>
          </div>
          <div>
            <ActionIconBtn
              actionBtnIcon={<Pencil size={20} />}
              redirect={`/users/update-user/${user.id}`}
            />
          </div>
        </div>
        <div className="p-6 bg-[#F4F1EB] rounded-lg flex flex-col gap-4">
          <div className="grid lg:grid-cols-2  gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">Email</div>
              <div className="text-[#151515]">{user.email}</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">Contact #</div>
              <div className="text-[#151515]">{user.phoneNumber}</div>
            </div>
          </div>
          <hr />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">ID</div>
              <div className="text-[#151515]">{user.id}</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">Role</div>
              <div className="text-[#151515]">
                {user.roles.map((role) => {
                  return role;
                })}
              </div>
            </div>
          </div>
          <hr />
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">Email</div>
              <div className="text-[#151515]">meemail@gmail.com</div>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-[#696969]">Contact #</div>
              <div className="text-[#151515]">(555) 123-4567</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
