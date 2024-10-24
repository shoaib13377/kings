"use client";
import React, { useState } from "react";
import { DialogComp } from "../dialog";
import { PrimaryBtn } from "../../buttons/primary-btn";
import { SecondaryBtn } from "../../buttons/secondary-btn";
import { CreditOrDebitCardInput } from "../../common/credit-or-debit-card-inputs";
import { CircleX } from "lucide-react";
import { ConfirmationDialog } from "../confirmation-dialog";
import { DictionariesContext } from "@/context/dictionary-context";

export const AddCreditOrDebitDialog = ({
  open,
  setOpen,
  edit,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  edit: boolean;
}) => {
  const { dictionaries } = DictionariesContext();
  const { addCreditOrDebitCardText, addText, cancelText, removeCardText } =
    dictionaries;
  const [cardNo, setCardNo] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const handleDelete = () => {};
  return (
    <>
      <ConfirmationDialog
        onSubmit={handleDelete}
        open={openConfirm}
        setOpen={setOpenConfirm}
        title="Remove staff"
        desc="Are you sure you want to remove this staff member? It cannot be undone."
      />
      <DialogComp open={open} setOpen={setOpen}>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <h1 className="text-[18px] font-[600]">
              {addCreditOrDebitCardText}
            </h1>
          </div>
          <div className="flex flex-col gap-3 justify-start items-start py-3 w-full">
            <CreditOrDebitCardInput
              cardNo={cardNo}
              setCardNo={setCardNo}
              cvv={cvv}
              setCvv={setCvv}
              expiryDate={expiryDate}
              setExpiryDate={setExpiryDate}
            />
            {edit && (
              <div
                onClick={() => {
                  setOpenConfirm(true);
                }}
                className="flex items-center gap-2 cursor-pointer text-rose-600 text-p3 mt-4"
              >
                <CircleX className="w-4 h-4" />
                <p>{removeCardText}</p>
              </div>
            )}
            <div className="flex items-center justify-center gap-2 mt-4 w-full">
              <SecondaryBtn
                onClick={() => {
                  setOpen(false);
                }}
              >
                {cancelText}
              </SecondaryBtn>
              <PrimaryBtn
                onClick={() => {
                  setOpen(false);
                }}
                className="bg-black rounded-full"
              >
                {addText}
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </DialogComp>
    </>
  );
};
