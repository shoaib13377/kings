"use client";
import { Briefcase, Building, Check, EyeIcon, EyeOff } from "lucide-react";
import { PrimaryBtn } from "../../ui/buttons/primary-btn";
import { TextInput } from "../../ui/inputs/text-input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { SignInWrapper } from "../../ui/wrappers/signin-wrapper";
import { ReviewInProgressDialog } from "../../ui/dialogs/onboarding/review-in-progress";
import { cn } from "@/lib/utils";

export const BusinessAccount = ({
  isBusiness,
  pageNo,
  nextPageNo,
  prevPageNo,
}: {
  isBusiness: boolean;
  pageNo: number;
  nextPageNo: () => void;
  prevPageNo: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  //company details
  const [openReviewInProgress, setOpenReviewInProgress] = useState(false);

  const [ownerFName, setOwnerFName] = useState("");
  const [ownerLName, setOwnerLName] = useState("");
  const [ownerRole, setOwnerRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const handleConfirmReview = () => {
    setOpenReviewInProgress(true);
  };
  function checkString() {
    const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;

    return {
      hasTenCharacters: password.length >= 10,
      hasSpecialCharacter: specialCharacters.test(password),
    };
  }
  return (
    <>
      <ReviewInProgressDialog
        open={openReviewInProgress}
        setOpen={setOpenReviewInProgress}
      />

      <section>
        {pageNo === 1 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
                subTitle="Enter business email"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor."
              >
                <div className="mt-10 flex flex-col items-center gap-6">
                  <TextInput
                    value={email}
                    setValue={setEmail}
                    type="email"
                    title="Business email"
                    placeholder=""
                    inputStyle="input"
                  />
                  <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                    Continue
                  </PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 2 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
                subTitle="Verify your business email"
                desc="Enter the verification code sent to"
                showOtpEmail={true}
              >
                <div className="mt-10 flex flex-col items-center gap-6">
                  <div className="flex flex-col items-start gap-1">
                    <p className="font-[500] text-[14px]">Verification code</p>
                    <InputOTP
                      maxLength={6}
                      value={code}
                      onChange={(value) => {
                        setCode(value);
                      }}
                    >
                      <InputOTPGroup className="flex items-center justify-center gap-2">
                        {[0, 1, 2, 3, 4, 5].map((val) => {
                          return (
                            <InputOTPSlot
                              key={val}
                              index={val}
                              className=" bg-white border-[1px] border-gray-400/40 h-[64px] w-[55px] text-[20px] font-[400]"
                            />
                          );
                        })}
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <p className="text-[12px] text-secondary">
                      Didn't receive the code?
                    </p>
                    <p className="text-[12px] text-main-primary cursor-pointer">
                      Resend code in 60s
                    </p>
                  </div>
                  <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                    Verify
                  </PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 3 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
                subTitle="Reset password"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor."
              >
                <div className="mt-7 flex flex-col items-center gap-4">
                  <div className="relative w-full">
                    <TextInput
                      value={password}
                      setValue={setPassword}
                      type={show ? "text" : "password"}
                      title="Password"
                      placeholder=""
                      inputClassName="relative w-full"
                      inputStyle="input"
                    />
                    {show ? (
                      <EyeIcon
                        onClick={() => {
                          setShow(!show);
                        }}
                        className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() => {
                          setShow(!show);
                        }}
                        className="absolute right-[10px] top-[34px] text-gray-400 cursor-pointer"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-2 items-start w-full">
                    {[
                      "At least 10 characters",
                      "Contains a special character",
                    ].map((val, index) => {
                      return (
                        <div
                          key={val}
                          className="flex items-center gap-2 text-[12px] text-[#818181] justify-start"
                        >
                          <div
                            className={cn(
                              "text-white rounded-full ",
                              (checkString()?.hasSpecialCharacter &&
                                index === 1) ||
                                (checkString()?.hasTenCharacters && index === 0)
                                ? "bg-green-400"
                                : "bg-[#818181]"
                            )}
                          >
                            <Check className="w-4 h-4" />
                          </div>
                          <p>{val}</p>
                        </div>
                      );
                    })}
                  </div>
                  <PrimaryBtn onClick={nextPageNo} className="text-white py-3">
                    Continue
                  </PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
        {pageNo === 4 && (
          <>
            <div>
              <SignInWrapper
                prevPageNo={prevPageNo}
                pageNo={pageNo}
                title="Create business profile"
                subTitle="Enter company info"
                desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor."
              >
                <div className="mt-7 flex flex-col items-center gap-4 w-full">
                  <TextInput
                    value={companyName}
                    setValue={setCompanyName}
                    type="text"
                    title="Company name"
                    placeholder="Company Name"
                    inputStyle="input"
                  />
                  <TextInput
                    value={ownerRole}
                    setValue={setOwnerRole}
                    type="text"
                    title="Role"
                    placeholder="Role"
                    inputStyle="input"
                  />

                  <TextInput
                    value={ownerFName}
                    setValue={setOwnerFName}
                    type="text"
                    title="First Name"
                    placeholder=""
                    inputStyle="input"
                  />

                  <TextInput
                    value={ownerLName}
                    setValue={setOwnerLName}
                    type="text"
                    title="Last Name"
                    placeholder=""
                    inputStyle="input"
                  />
                  <TextInput
                    value={phone}
                    setValue={setPhone}
                    type="tel"
                    title="Mobile number"
                    placeholder=""
                    inputStyle="tel"
                  />

                  <PrimaryBtn
                    onClick={handleConfirmReview}
                    className="text-white py-3"
                  >
                    Complete
                  </PrimaryBtn>
                </div>
              </SignInWrapper>
            </div>
          </>
        )}
      </section>
    </>
  );
};