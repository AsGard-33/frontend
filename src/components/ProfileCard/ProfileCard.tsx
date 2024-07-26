import { ProfileCardProps } from "./type";
import { ProfileCardWraper, AvatarControl, ProfileAvatar, AvatarH2, AvatarP, AddFriendButton } from "./style";

function ProfileCard({
  profileData,
  imgSrc,
  children = <h1>User: {profileData.id}</h1>,
  onAddFriend,
}: ProfileCardProps) {
  const getUserName = () => {
    return `${profileData.userName}`;
  };

  return (
    <ProfileCardWraper>
      {children}
      <AvatarControl>
        <ProfileAvatar alt="Profile Avatar" src={imgSrc} />
      </AvatarControl>
      <AvatarH2>{getUserName()}</AvatarH2>
      <AvatarP>Email: {profileData.email}</AvatarP>
      <AddFriendButton onClick={onAddFriend}>Add Friend</AddFriendButton>
    </ProfileCardWraper>
  );
}

export default ProfileCard;
