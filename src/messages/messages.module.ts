import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesServices } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesServices, MessagesRepository],
})
export class MessagesModule {}
