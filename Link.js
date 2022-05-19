/**
 * Link Class
 */
 export class Link {
  /**
   *
   * @param {string} name The Link Name
   * @param {string} url The Link Url
   * @param {string} tag The Link Tag
   * @param {string} color The Link Color
   */
  constructor(name, url, tag, color) {
    this.name = name;
    this.url = url;
    this.tag = tag;
    this.color = color;
  }
}
