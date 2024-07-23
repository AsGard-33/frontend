export interface ProfileData {
  firstName: string;
  lastName: string;
  career: string;
  hairColor: string;
  hobby: string;
}

export interface ProfileCardProps {
  profileData: ProfileData;
  imgSrc: string;
  children?: React.ReactNode;
  onAddFriend?: () => void;
}
