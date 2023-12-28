import {
 Singleton,
 Factory,
} from './index' // Assuming your Singleton class is in a separate file

describe('Singleton Pattern', () => {
  test('getInstance should return the same instance', () => {
    const instance1 = Singleton.Instance;
    const instance2 = Singleton.Instance;

    expect(instance1).toBe(instance2);
  }); 
});

