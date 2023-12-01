import api from "../Api/api";
import {
  ICreateAddressRequest,
  ICreateAddressResponse,
  IUpdateAddressRequest,
  IUpdateAddressResponse,
} from "./types";

const createAddress = async ({
  cep,
  city,
  country,
  province,
  street,
}: ICreateAddressRequest): Promise<ICreateAddressResponse> => {
  const response = await api
    .post("/address", {
      cep,
      city,
      country,
      province,
      street,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};

const updateAddress = async ({
  id,
  cep,
  country,
  province,
  city,
  street,
}: IUpdateAddressRequest): Promise<IUpdateAddressResponse> => {
  const response = await api
    .put(`/address/${id}`, {
      id,
      cep,
      country,
      province,
      city,
      street,
    })
    .then((res) => res)
    .catch((err) => err);

  return response.data;
};
export { createAddress, updateAddress };
