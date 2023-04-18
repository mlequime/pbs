import { Type } from "../models/type";
import { Pokemon } from "../models/pokemon";

const splitDelimiter = /(?=\[[A-Za-z]+\]\n)/;

export function parseTypeFile(path: string): Promise<Type[]> {
  return new Promise((resolve, reject) => {
    try {
      let types = [] as Type[];
      fetch(path)
        .then((res) => res.text())
        .then((fileContent) => {
          console.log(fileContent);
          // const fileContent = readFileSync(path, "utf-8");
          const typeBlocks = fileContent.split(splitDelimiter);

          console.log(typeBlocks);
          types = typeBlocks
            .map(parseTypeBlock)
            .filter((p) => p !== null) as Type[];
          console.log(types);
          resolve(types);
        });
    } catch (e) {
      console.log(e);
      resolve([]);
    }
  });
}

function parseTypeBlock(block: string): Type | null {
  const lines = block.trim().split("\n");
  const name = lines[0].match(/\[(.*?)\]/)?.[1];
  if (!name) return null;

  const valueSplitRegex = /,\s?/;

  const type: Type = {
    id: name,
    name: "",
    iconPosition: 0,
    weaknesses: [],
    resistances: [],
    immunities: [],
    isSpecialType: false,
  };

  const errors = [];

  for (const line of lines.slice(1)) {
    if (line.trim().startsWith("#")) {
      continue;
    }
    const [key, value] = line.split(" = ");
    switch (key) {
      case "Name":
        type.name = value.trim();
        break;
      case "IconPosition":
        type.iconPosition = parseInt(value.trim());
        break;
      case "Weaknesses":
        type.weaknesses = value.split(valueSplitRegex).map((v) => v.trim());
        break;
      case "Resistances":
        type.resistances = value.split(valueSplitRegex).map((v) => v.trim());
        break;
      case "Immunities":
        type.immunities = value.split(valueSplitRegex).map((v) => v.trim());
        break;
      case "IsSpecialType":
        type.isSpecialType = value.trim() === "true";
        break;
    }
  }

  return type;
}
