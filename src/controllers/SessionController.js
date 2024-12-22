import { PrismaClient } from "@prisma/client";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export default{
  async createSession(request, response) {
    const { email, password } = request.body;

    try{
      let user = await prisma.user.findUnique({ where: { email } });

      if(!user){
        return response.json({ message: "Usuário ou senha incorretos"})
      }

      const checkPassword = await compare(password, user.password)

      if(!checkPassword){
        return response.json({ message: "Usuário ou senha incorretos"})
      }

      const token = jwt.sign({ id: user.id }, "21bafda741ec6b6354bb10f150240c8d", {
        expiresIn: '1d'
      })

      delete user.password;

      return response.json({ user, token })

    }catch (error) {
      return response.json({ message: error.message })
    }
  }
}
