import { PrimaryBtn } from "@/components/ui/buttons/primary-btn";
import { DestinationEditCardComp } from "@/components/ui/cards/edit-card";
import { VanCardComp } from "@/components/ui/cards/van-card";
import { MapStepWrapperComp } from "@/components/ui/wrappers/map-step-wrapper";
import { vansData } from "@/utils/van-data";
import { Info } from "lucide-react";
import React from "react";

interface SelectedVehicleProps {
  step: number;
  setStep: (val: number) => void;
  selectedVan: number;
  setSelectedVan: (val: number) => void;
  openConfirmDialog: boolean;
  setOpenConfirmDialog: (val: boolean) => void;
}
export const SelectedVehicleComp = ({
  step,
  setStep,
  selectedVan,
  setSelectedVan,
  openConfirmDialog,
  setOpenConfirmDialog,
}: SelectedVehicleProps) => {
  return (
    <MapStepWrapperComp
      title="Choose a vehicle"
      back={true}
      onClickBack={() => {
        setStep(0);
      }}
    >
      <div className="flex flex-col items-center gap-4 mt-4">
        <DestinationEditCardComp
          from="17 Hoi Wan St"
          to="Commercial Tower"
          desc="Pick up at 23 June 2024, 8:00 PM"
        />
        <div className="flex flex-row gap-2 items-center text-globalPrimary">
          <Info className="w-3 h-3" />
          <p className="text-p3">How to choose a vehicle?</p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          {vansData?.map((val, index) => {
            return (
              <>
                <VanCardComp
                  key={index}
                  item={val}
                  selectedItem={selectedVan}
                  setSelectedItem={setSelectedVan}
                  index={index}
                />
              </>
            );
          })}
          <PrimaryBtn
            onClick={() => {
              setOpenConfirmDialog(true);
            }}
          >
            Continue
          </PrimaryBtn>
        </div>
      </div>
    </MapStepWrapperComp>
  );
};