import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registration")
  async registration(@Body("username") username: string) {
    return this.authService.register(username);
  }

  @Post("login")
  async login(@Body("username") username: string) {
    return this.authService.getToken(username);
  }
}
