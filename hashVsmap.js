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
    console.time('Insertion Time');
    const hashtable = {};

    data.forEach(({ patientID, ...attributes }) => {
        hashtable[patientID] = attributes;
    });
    console.timeEnd('Insertion Time');

}

function testMap(data) {
    console.time('Insertion Time');
    const map = new Map();

    data.forEach(({ patientID, ...attributes }) => {
        map.set(patientID, attributes);
    });
    console.timeEnd('Insertion Time');

}

const testData = generateTestData(5000000); 

console.log("Hashtable:");
testHashtable(testData);

console.log("\nMap:");
testMap(testData);
