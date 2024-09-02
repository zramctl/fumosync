import chalk from "chalk";

const tags = {
  info: ` ${chalk.greenBright.bold("INFO")} `,
  error: ` ${chalk.redBright.bold("ERR")} `,
  warn: ` ${chalk.yellowBright.bold("WARN")} `,
};

const func = (tag: string) => {
  return (text: string) => {
    console.log(`${tag}${text}`);
  };
};

export const info = func(tags.info);
export const error = func(tags.error);
export const warn = func(tags.warn);
