import { AppResponse } from "../../Api/types";
import { IAddress } from "../../address/types";

interface IUser {
  id: string;
  name: string;
  email: string;
  telephone: string | null;
  birthDate: string;
  avatarUrl: string | null;
  coverUrl: string | null;
  bio: string | null;
  createdAt: string;
  address: IAddress[];
}

interface ICreateUserRequest {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  telephone?: string | null;
  birthDate: string;
}

interface ICreateUserResponse extends AppResponse {
  data?: {
    id: string;
    name: string;
    email: string;
    telephone: string | null;
    birthDate: string;
  };
}

interface IListUserByIdRequest {
  id: string;
}

interface IListUserByIdResponse extends AppResponse {
  data?: {
    user: IUser;
  };
}

interface IUpdateUserRequest {
  name?: string;
  telephone?: string;
  birthDate?: string;
  bio?: string;
}

type IUpdateUserResponse = AppResponse;

interface IUpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

type IUpdatePasswordResponse = AppResponse;

interface IUpdateAvatarRequest {
  avatarUrl: string;
}

type IUpdateAvatarResponse = AppResponse;

interface IUpdateCoverRequest {
  coverUrl: string;
}

type IUpdateCoverResponse = AppResponse;

export type {
  ICreateUserRequest,
  ICreateUserResponse,
  IListUserByIdRequest,
  IListUserByIdResponse,
  IUpdateAvatarRequest,
  IUpdateAvatarResponse,
  IUpdateCoverRequest,
  IUpdateCoverResponse,
  IUpdatePasswordRequest,
  IUpdatePasswordResponse,
  IUpdateUserRequest,
  IUpdateUserResponse,
  IUser,
};
