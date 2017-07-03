export class Article {
  title: string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link  = link;
    this.votes = votes || 0;
  }

  voteUp(): void {
    this.votes++;
  }

  voteDown(): void {
    this.votes--;
  }

  /**
   * domain()  is a utility function that extracts the domain from a URL, wicth  we'll
   * explain shortly
   * @returns {string}
   * @memberof Article
   */
  domain(): string {
    try {
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0];
    }catch (err) {
      return null;
    }
  }
}
