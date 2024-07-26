export interface UserDTO {
  id: number;
  username: string;
  email: string;
  avatarUrl?: string;
}

export interface FriendDTO {
  id: number;
  user: UserDTO;
  friend: UserDTO;
}
