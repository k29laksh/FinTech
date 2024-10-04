import { Dispatch, SetStateAction } from "react";

interface FormComponentProps {
  isRegister: boolean;
  setIsRegister: Dispatch<SetStateAction<boolean>>;
  onSignInComplete: () => void;
  handleRegister?: () => void; // If this prop is optional
}
