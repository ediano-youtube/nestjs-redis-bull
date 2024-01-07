import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SendEmailService } from 'src/send-email/send-email.service';

@Injectable()
export class UsersService {
  constructor(private readonly sendEmailService: SendEmailService) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;

    /** Criação do usuário no banco de aqui */

    /** Enviando email em com redis aqui */
    await this.sendEmailService.handler({ name, email });

    return { name, email };
  }
}
