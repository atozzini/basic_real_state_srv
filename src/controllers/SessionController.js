import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";
cosnt prisma = new PrismaClient();

export default{
  async createSession(request, response) {
    try{
      const { email, password } = request.body;



    }catch (error) {
      return response.json({ message: error.message })
    }
  }
}
