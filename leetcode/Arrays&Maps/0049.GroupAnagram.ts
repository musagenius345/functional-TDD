
export function groupAnagrams(strs: string[]): string[][] {
    const anagramMap: Map<string, string[]> = new Map();

    // Sort string alphabetically
    function getSortedString(str: string): string {
        return str.split('').sort().join('');
    }
    
    // Loop through the items
    for (let str of strs) {
        // Get sorted string to use to compare
        const sortedStr = getSortedString(str);
        // Check if map has sorted string
        if (anagramMap.has(sortedStr)) {
            // Push values to the map value
            anagramMap.get(sortedStr)!.push(str);
        } else {
            // Set sortedString to Map
            anagramMap.set(sortedStr, [str]);
        }
    }

    return Array.from(anagramMap.values());
}

// const strArray = ["eat", "tea", "tan", "ate", "nat", "bat"];
// console.log(groupAnagrams(strArray));
//
