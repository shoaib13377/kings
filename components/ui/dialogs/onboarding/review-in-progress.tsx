"use client";
import React from "react";
import Image from "next/image";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { DialogComp } from "../dialog";

export const ReviewInProgressDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  return (
    <DialogComp open={open} setOpen={setOpen}>
      <div className="flex flex-col gap-3">
        <h1 className="text-[18px] font-[600]">Review in progress</h1>
        <div className="flex flex-col gap-3 justify-center items-center py-3">
          <Image
            src="/assets/icons/done.svg"
            alt="done"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
        <p className="text-secondary text-[14px] py-2">
          Thank you for providing your company information. Your company’s
          business profile is under review. You will be notified shortly by
          email for the result.
        </p>
        <PrimaryBtn
          onClick={() => {
            setOpen(false);
          }}
          className="text-white py-3 bg-black"
        >
          Got it
        </PrimaryBtn>
      </div>
    </DialogComp>
  );
};
