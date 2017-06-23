



    1.Name and describe the two main operations of a stack (to add and remove data).
     push : used to insert a new element to end of the stack.
     pop  : used to remove the first element of the stack.  


    2.Name and describe the two main operations of a queue (to add and remove data).
    enqueue : used to add elements in the queue. For example you can use the method  push() in a array. Enqueue insert a new element in the end of the queue.
    dequeue : used to remove elements in the queue. For example you can use the method shift() in the array. Dequeue take out the first element of the queue.




    8.What are the four main steps of mergesort?
    function mergeSort(arr) {
    //// step 1 check if the array is greater than 1
    if(arr.length<=1) return arr;
    ///  step 2 storage in two arrays the main one.
    var left = arr.slice(0, Math.floor( arr.length/2))
    var rigth = arr.slice (Math.floor( arr.length/2))
    /// step 3  Storage in two variables the result of split both arrays until the length = 1
    var leftSorted = mergeSort(left)
    var rigthSorted = mergeSort(rigth)
    /// step 4 merge both results whit an aditional function
    return merge(leftSorted, rigthSorted)
    }


    9.Say you have a program which handles the login queue to a game server. The game server is able to log in one person every one second. Assume that one second must elapse after a person logs in with an empty queue before they are removed from the queue. Draw the state of the queue at 12:00:06, considering the following sequence of events:
        At 12:00:00 Hades logs in
        At 12:00:00 Ares logs in
        At 12:00:00 Zeus logs in
        At 12:00:00 Buzz Light Year logs in
        At 12:00:02 Kanye West logs in
        At 12:00:03 Taylor Swift logs in
        At 12:00:03 Darkwing Duck logs in
        At 12:00:04 Evil Mickey logs in.

Answer  At 12:00:06 Darkwing Duck logs in
