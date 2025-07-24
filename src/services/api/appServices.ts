import { API_METHODS } from "./appServices.type";
import { ServicesEndPoints } from "./appServicesEndpoints";
import { LoginResponseDTO, LoginResponseAdapter  } from "./commercial";
import { LoginParams, LoginResult } from "./models";
import serviceAdapter from "./serviceAdapter";

export class AppServices {
  constructor() {}

  loginUser = async (loginParams: LoginParams): Promise<LoginResult> => {
    return new Promise((resolve, reject) => {
      serviceAdapter<LoginResponseDTO, LoginParams>(
        API_METHODS.POST,
        ServicesEndPoints.LOGIN,
        loginParams
      )
        .then((res) => {
          resolve(new LoginResponseAdapter().service(res));
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
}

export const appServices = new AppServices();
