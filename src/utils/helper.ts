export class HelperFunctions {
    static maxInArrayIndex(numArr: number[]) {
        let maxIndex = 0;
        let maxValue = numArr[0];

        for (let i = 1; i < numArr.length; i++) {
            if (numArr[i] > maxValue) {
                maxValue = numArr[i];
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}