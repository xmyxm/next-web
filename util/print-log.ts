const log = {
  info: (info: string) => {
    console.log("\x1B[32m%s\x1B[39m", info);
  },

  warn: (warn: string) => {
    console.log("\x1B[33m%s\x1b[0m:", warn);
  },

  error: (error: string) => {
    console.log("\x1B[31m%s\x1B[39m", error);
  },
};

export default log;
