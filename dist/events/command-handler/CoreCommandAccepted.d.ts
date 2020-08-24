import type { PieceContext } from '@sapphire/pieces';
import type { Message } from 'discord.js';
import type { Command } from '../../lib/structures/Command';
import { Event } from '../../lib/structures/Event';
export declare class CoreEvent extends Event {
    constructor(context: PieceContext);
    run(message: Message, command: Command, commandName: string, prefix: string): Promise<void>;
}
//# sourceMappingURL=CoreCommandAccepted.d.ts.map