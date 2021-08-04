import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesServices } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messageService: MessagesServices) {}

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  /**
   * Nest with TS use CreateMessageDto to validate the data under the hood
   * Possible thanks to the "emitDecoratorMetadata" in the tsconfig.json
   */
  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
