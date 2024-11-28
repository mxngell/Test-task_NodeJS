import { Body, Controller, Get, Headers, Post, Query } from "@nestjs/common";
import { ClientService } from "./client.service";

@Controller("clients")
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getClients(@Headers("authorization") token: string, @Query("limit") limit: number, @Query("offset") offset: number) {
    return this.clientService.getClients(token, limit, offset);
  }

  @Post()
  async getUserIds(@Headers("authorization") token: string, @Body("userIds") userIds: [number]) {
    return this.clientService.getUserIds(token, userIds);
  }
}
