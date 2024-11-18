import { create } from "zustand";

interface iUseSetup {
  declareUnemploymentLink: string;
  helpLink: string;
  helpText: string; // Corrected typo here
  signupConsentText: string;
  signupSuccessText: string;
  welcomeText: string;
  updateSetup: (updates: Partial<iUseSetup>) => void;
}

const useSetup = create<iUseSetup>((set) => ({
  declareUnemploymentLink: "",
  helpLink: "",
  helpText: "", // Corrected typo here
  signupConsentText: "",
  signupSuccessText: "",
  welcomeText: "",
  updateSetup: (updates) => set((state) => ({ ...state, ...updates }))
}));

export default useSetup;
