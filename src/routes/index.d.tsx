import { AppStackProps } from 'src/routes/app/index.d';
import { AuthStackProps } from 'src/routes/auth/index.d';

export type RootStackParamList = AppStackProps.paramList & AuthStackProps.paramList;
