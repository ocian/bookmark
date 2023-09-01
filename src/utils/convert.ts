const REG_START = /^((\d\.)|\+|-|\*)/;
const REG_LINK = /\[.*\]\(.*\)/g;

const markdownLineToNode = (text: string) => {
  return text
    .trim()
    .replace(REG_START, "")
    .replace(REG_LINK, (match) => {
      const [title, url] = match?.split(/[\[\]\(\)]/)?.filter(Boolean);
      // console.log("title", title);
      // console.log("url", url);
      return url
        ? `<a href="${url}" target="_blank" class="icon-link">${title}</a>`
        : title;
    });
};

export const markdownToJSON = (
  text: string
): {
  [key: string]: { title: string; list: string[] };
} => {
  const list = text.split("\n")?.filter(Boolean);
  // console.log(list);
  const group = {};
  let index = 1;

  list.forEach((i) => {
    const _i = markdownLineToNode(i);

    if (i.startsWith(" ") && !Object.keys(group).length)
      group[index] = {
        [index]: {
          title: _i,
          list: [],
        },
      };
    else if (i.startsWith(" ")) group[index]?.list?.push?.(_i);
    else if (REG_START.test(i)) {
      index += 1;
      group[index] = {
        title: _i,
        list: [],
      };
    }
  });

  // console.log("group", group);

  return group;
};
