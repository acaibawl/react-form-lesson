import { Dispatch } from "redux";
import profileActions from "./actions";
import { Address } from "../../domain/entity/address";
import { isCompletePostalcode, sanitizePostalCode } from "../../domain/services/address";
import dotenv from 'dotenv';

dotenv.config();

export const searchAddressFromPostalCode = (code: string) => async (
  dispatch: Dispatch
) => {
  if(!isCompletePostalcode(code)) return;

  const res = await fetch(
    `https://apis.postcode-jp.com/api/v3/postcodes?apikey=${process.env.API_KEY}&postcode=${sanitizePostalCode(code)}`
  );
  const result = await res.json();
  if(!result.data[0]) return;

  const address: Partial<Address> = {
    prefecture: result.data[0].pref,
    city: result.data[0].city + result.data[0].town
  };

  dispatch(profileActions.searchAddress.done({ result: address, params: {} }));
};
