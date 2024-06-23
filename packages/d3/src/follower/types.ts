export interface FollowerResponse {
  name: string;
  portrait: string;
  realName: string;
  skills: Array<Skill>;
  slug: string;
}

interface Skill {
  description: string;
  descriptionHtml: string;
  icon: string;
  level: number;
  name: string;
  slug: string;
  tooltipUrl: string;
}
