export interface User {
    id: number;
    username: string;
    email: string;
  }
  
  export interface FriendResponse {
    id: number;
    user: User;
    friend: User;
  }
  
  export interface FriendDTO {
    id: number;
    username: string;
    email: string;
  }
  