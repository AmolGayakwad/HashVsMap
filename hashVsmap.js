function generateTestData(numRows) {
    const testData = [];

    for (let i = 0; i < numRows; i++) {
        const patientID = `patient${i}`;
        const age = Math.floor(Math.random() * 100) + 1; 
        const bloodGroup = ['A', 'B', 'AB', 'O'][Math.floor(Math.random() * 4)]; 

        testData.push({ patientID, age, bloodGroup });
    }

    return testData;
}

function testHashtable(data) {
    console.time('Hashtable Insertion');
    const hashtable = {};

    data.forEach(({ patientID, ...attributes }) => {
        hashtable[patientID] = attributes;
    });
    console.timeEnd('Hashtable Insertion');

}

function testMap(data) {
    console.time('Map Insertion');
    const map = new Map();

    data.forEach(({ patientID, ...attributes }) => {
        map.set(patientID, attributes);
    });
    console.timeEnd('Map Insertion');

}

const testData = generateTestData(5000000); 

console.log("Testing Hashtable:");
testHashtable(testData);

console.log("\nTesting Map:");
testMap(testData);
