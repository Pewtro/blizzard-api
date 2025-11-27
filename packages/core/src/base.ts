/**
 * Base record interface containing name and id properties that often appear together in Blizzard API responses.
 */
export interface NameId {
  id: number;
  name: string;
}
