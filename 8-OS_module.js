/* 
Built-In Modules (OS Module)
OS Module Methods:-
1- userInfo() : returns info about the current user (uid , gid , username , homedir , shell)
2- uptime() : returns the amount of time that the system has been continuously running 
            since it was last booted (used as a measure of system stability and reliability)
3- type() : Returns a string identifying the name of the operating system 
            ('Linux' for Linux-based systems , 'Darwin' for macOS , 'Windows_NT' for Windows.)
4- release() : Returns a string representing the specific version or release of the operating system.
5- totalmem(): Returns the total amount of system memory (RAM) in bytes
6- freemem() : Returns the amount of free (unused) system memory in bytes
*/
const os = require('os')

// info about the current user
/*
Explanation of Fields:
  uid: User identifier, a [unique] number assigned to [each user] on the system.
  gid: Group identifier, the ID of the primary group associated with the user.
  username: The name used to identify the user on the system.
  homedir: The path to the home directory of the user where personal files and settings are stored.
  shell: The default shell for the user, typically used for terminal or command-line interaction
    (on Unix-like systems).
*/
const user = os.userInfo()
console.log(user);
/*
result :
{
  uid: -1, // because Windows does not have a uid in the same way Unix-like systems do
  gid: -1, // because Windows does not use gid in the same way that Unix-like systems do
  username: 'hp',
  homedir: 'C:\\Users\\hp',
  shell: null // because Windows does not have a concept of a default shell like Unix-like systems
    (which usually have /bin/bash, /bin/zsh, etc.)
}
*/

// method returns the system uptime in seconds
console.log(` the system uptime ${os.uptime()} seconds`);


const currentOS = {
  name : os.type(),
  release : os.release(),
  totalMem : os.totalmem(),
  freeMem : os.freemem()
}
console.log(currentOS);
/*
{
  name: 'Windows_NT',
  release: '10.0.19045',
  totalMem: 16940376064, <bytes>
  freeMem: 8575315968  <bytes>
}
*/