# Assignment:
Write a program to test the performance of Hashtable vs Map

## What is the assignment do:

**Summary**:

We are testing the performance between the two important data structures Hashtable and Map.
Our goal is to compare their performance in terms of insertion and deletion operations using a JavaScript code.

**Overview**:

**Test Data Generation**: 
- We generate test data representing patients, including patient ID, age, and blood group. Patient IDs are sequentially generated, ages are random integers between 1 and 100, and blood groups are randomly selected from a predefined list.

**Hashtable Testing**: 
- We measure the time taken for insertion and deletion operations using Hashtable data structure. This involves iterating through the provided data, inserting each entry into the Hashtable, and measuring the time taken for deletion of all entries.

**Map Testing**: 
- Similarly, we measure the time taken for insertion and deletion operations using a Map data structure. This involves iterating through the provided data, inserting each entry into the Map, and measuring the time taken for deletion of all entries.

**Execution and Results**: 
We execute the tests using a large dataset (1 million and 5 million) and log the time taken for insertion and deletion operations for both Hashtable and Map data structures. Below are the results,

1. **For 1 million rows data**:

a) Hashtable:

- Insertion Time: 1366.724ms
- Deletion Time: 563.385ms

b) Map:

- Insertion Time: 1150.958ms
- Deletion Time: 308.731ms

2. **For 5 million rows data**:

a) Hashtable:

 - Insertion Time: 8966.886ms
 - Deletion Time: 2910.710ms

b) Map:
 - Insertion Time: 6675.251ms
 - Deletion Time: 2265.787ms

**Conclusion**:

We observed that Map performed better than Hashtable in both insertion and deletion operations for datasets of 1 million and 5 million entries.


 ## Step to run code:
  - Download the script from github.
  - open script using VS Code
  - run the code using terminal.
  - node hashVsmap.js

