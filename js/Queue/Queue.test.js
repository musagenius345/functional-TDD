import { Queue } from './Queue';
import { describe, it, expect} from '/data/data/com.termux/files/home/.local/share/pnpm/global/5/node_modules/vitest'


describe('Queue Intial Tests', () => {
  const myQueue = new Queue();

  myQueue.enqueue(10)
  myQueue.enqueue(20);
  myQueue.enqueue(30);
  it('front', async () => {
    const result = myQueue.front()
    expect(result).toBe(10)
  })
  it('size', async () => {
    const result = myQueue.size()
    expect(result).toBe(3)
  })
  it('isEmpty', async () => {
    const result = myQueue.isEmpty()
    expect(result).toBeFalsy()
  })
  it('front', async () => {
    const result = myQueue.front()
    expect(result).toBe(10)
  })
  it('dequeue', async () => {
    myQueue.dequeue()
    const result = myQueue.front()
    expect(result).toBe(20)
  })

  it('clear', async () => {
    myQueue.clear()
    const result = myQueue.isEmpty()
    expect(result).toBeTruthy()
  })


})
