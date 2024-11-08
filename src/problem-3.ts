{
  /*
    
    Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

    Example:

    Input: "I love typescript", "typescript"
    Output: 1

    // Sample Input:
    countWordOccurrences("I love typescript", "typescript");

    // Sample Output:
    1;
    
 */

    const countWordOccurrences = (sentence : string, word : string) : number => {
        
        let count : number = 0;

        // splitting the sentence to words
        const splitWords : string[] = sentence.toLowerCase().split(" ");
        const match : string = word.toLowerCase();

        splitWords.filter(word => {
            if(word ===match) count = count + 1;
        })

        // console.log(splitWords,match,count)

        return count;
    };

    countWordOccurrences("I love typescript and typescript", "typescript");
}
