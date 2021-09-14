import { Message } from 'node-nats-streaming';
import { Listener } from './base-listener';

import { Subjects } from './subjects';
import { TicketCreatedEvent } from './ticket-create-event';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;

  queueGroupName = 'payments-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message) {
    // business logic here
    console.log('Event data: ', data);

    // ack the event bus
    msg.ack();
  }
}
