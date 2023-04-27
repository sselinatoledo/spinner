const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\ ', '\r|  \n'];
let time = 100;
for (const char of spinner) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 200;
}
process.stdout.write('hello from spinner1.js... \rheyyy\n');
