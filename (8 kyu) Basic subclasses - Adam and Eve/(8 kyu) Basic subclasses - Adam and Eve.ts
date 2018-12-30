export class God {
  /**
   * @returns Human[]
   */
  static create(): Human[] {
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}

export class Human {}
export class Woman extends Human {}
export class Man extends Human {}
