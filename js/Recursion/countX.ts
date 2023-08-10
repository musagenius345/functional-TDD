
export function countX(string: string): number {
  if(string.length == 0){
    return 0
  }  
  if(string[0] == 'x'){
    return 1 + countX(string.slice(1))
  }
  return countX(string.slice(1))
}


// in-source test suites
if (import.meta.vitest) {
  const { it, expect } = import.meta.vitest
  it('countX', () => {
    expect(countX('')).toBe(0)
    expect(countX('x')).toBe(1)
    expect(countX('xabxcdx')).toBe(3)
    expect(countX('xabxxcdx')).toBe(4)
  })
}
