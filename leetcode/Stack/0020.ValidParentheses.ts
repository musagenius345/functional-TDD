class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

export function isValid(s: string): boolean {
    if (typeof s !== 'string') {
        return false; // Invalid input type
    }

    const parenMap: Map<string, string> = new Map();
    parenMap.set('(', ')');
    parenMap.set('{', '}');
    parenMap.set('[', ']');

    const parenStack: Stack<string> = new Stack();

    for (const char of s) {
        if (parenMap.has(char)) {
            parenStack.push(char); // Push opening parentheses onto the stack
        } else {
            const top = parenStack.pop();
            if (!top || parenMap.get(top) !== char) {
                return false; // Mismatched closing parenthesis or empty stack
            }
        }
    }

    return parenStack.isEmpty(); // Check if there are unmatched opening parentheses
}
