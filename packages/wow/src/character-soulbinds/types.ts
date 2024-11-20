import type { Character, NameIdKey, ResponseBase } from '../base';

export interface CharacterSoulbindsResponse extends ResponseBase {
  character: Character;
  chosen_covenant: NameIdKey;
  renown_level: number;
  soulbinds: Array<Soulbind>;
}

interface ConduitSocket {
  socket: Socket;
  type: TypeClass;
}

interface Socket {
  conduit: NameIdKey;
  rank: number;
}

interface Soulbind {
  is_active?: boolean;
  soulbind: NameIdKey;
  traits: Array<Trait>;
}

interface Trait {
  conduit_socket?: ConduitSocket;
  display_order: number;
  tier: number;
  trait?: NameIdKey;
}

interface TypeClass {
  name: 'Endurance Conduit Slot' | 'Finesse Conduit Slot' | 'Potency Conduit Slot';
  type: 'ENDURANCE' | 'FINESSE' | 'POTENCY';
}
