import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class ClientService {
  async getClients(token: string, limit: number, offset: number) {
    try {
      const response = await axios.get("http://94.103.91.4:5000/clients", {
        headers: {
          Authorization: token
        },
        params: {
          limit,
          offset
        }
      });

      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getUserIds(token: string, userIds: [number]) {
    try {
      const response = await axios.post(
        "http://94.103.91.4:5000/clients",
        {
          userIds
        },
        {
          headers: {
            Authorization: token
          }
        }
      );
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
