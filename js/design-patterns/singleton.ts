export class Singleton {
  private static instance: Singleton | null = null;

  private constructor() {
    if (!Singleton.instance) {
      // console.log('This is the original');
      Singleton.instance = this;
    }
    // console.log('This is the redundant');
  }

  public static get Instance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}

