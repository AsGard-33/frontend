export interface ProfileCardProps {
  profileData: {
    id: number;
    userName: string;
    email: string;
  };
  imgSrc: string;
  children?: React.ReactNode;
  onAddFriend: () => void;
}