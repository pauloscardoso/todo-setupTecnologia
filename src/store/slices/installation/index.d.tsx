import { PayloadAction } from '@reduxjs/toolkit';

export namespace _ {
  export type state = InstallationProps.installation;

  export type actionInstallation = PayloadAction<{
    id: string;
    fullName?: string;
    email: string;
  }>;
}

export default _;

export namespace InstallationProps {
  export type installation = {
    id: string;
    fullName?: string;
    email: string;
  };
}
