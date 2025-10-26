export type UserProfileProps = {
  userName: string; 
  protoUrl?: string | null;
  userDescription: string;
  openForWork?: boolean;

  contactInfo: {
    email: string;
    phone?: string;
  };

  location?: {
    city: string;
    country: string;
    address?: string;
  };

  interests?: string[];
};