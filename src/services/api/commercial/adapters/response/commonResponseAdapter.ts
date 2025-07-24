import { GenericResult } from "@src/services/api/models";
import { GenericResponseDTO } from "../../dtos/CommonDTO";

export class GenericResponseAdapter {
  constructor() {}

  service(dto: GenericResponseDTO): GenericResult {
    return {
      data: dto.data,
    };
  }
}
