import { Injectable } from "@nestjs/common";
import axios from "axios";

@Injectable()
export class AuthService {
  async register(username: string) {
    try {
      const response = await axios.post("http://94.103.91.4:5000/auth/registration", { username });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }

  async getToken(username: string) {
    try {
      const response = await axios.post("http://94.103.91.4:5000/auth/login", { username });
      return response.data;
    } catch (error) {
      return error.response.data;
    }
  }
}
