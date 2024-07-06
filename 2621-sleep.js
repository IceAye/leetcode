// ❓ DESCRIPTION:
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds.
// It can resolve any value.
//
// ✅ SOLUTION:
async function sleep(millis) {
    await new Promise (resolve => setTimeout(resolve, millis))
}