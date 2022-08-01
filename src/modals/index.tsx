export interface userDetailsType {
  _id: string;
  dob: string;
  name: string;
  plan: string;
  mPin: boolean;
  token: string;
  email: string;
  gender: string;
  languages: any;
  childData: any;
  address: string;
  signType: number;
  timezone: string;
  location: object;
  userType: number;
  imageUrl: string;
  profileSteps: any;
  createdAt: string;
  planActive: boolean;
  emailVerify: boolean;
  isSubscribed: boolean;
  parentDetails: object;
  totalAddedBooks: number;
  subscriptionType: string;
  allowNotification: boolean;
  subscriptionEndDate: string;
  subscriptionPlatForm: string;
}

export interface LanguageCardItem {
  title: string;
  _id: string;
  onPress: Function;
  __v: number;
  imageUrl?: string;
}
export interface InterstedCardItem {
  name: string;
  imageUrl: string;
  _id: string;
}

export interface UserDetails {
  userDetails: userDetailsType;
}

export interface NodeProps {
  index: number;
  elements: number;
}
