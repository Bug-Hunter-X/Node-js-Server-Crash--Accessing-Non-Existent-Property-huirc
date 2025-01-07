# Node.js Server Crash: Accessing Non-Existent Property

This repository demonstrates a common error in Node.js where attempting to access a non-existent property of a server object can lead to a server crash.  The `server.js` file contains the problematic code, while `serverSolution.js` provides a corrected version.

## Problem

The original code attempts to access the `nonExistentProperty` of the `server` object.  Since this property doesn't exist, this results in an error and the server crashes.

## Solution

The solution involves carefully checking the existence of properties before accessing them.  This can be done using the `in` operator or optional chaining. The example uses optional chaining, which is a cleaner and more modern approach.