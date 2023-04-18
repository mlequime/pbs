import parsePokemonFile from "./pokemon-parser";

// // Mock the fetch function so that it returns a fake file
// jest.mock("fetch", () => jest.fn());
// const mockFetch = jest.MockedFunction<typeof fetch>;

beforeEach(() => {
  jest.spyOn(global, "fetch").mockResolvedValue(
    new Promise<Response>((resolve) =>
      resolve({
        text: () =>
          new Promise<string>((resolve) =>
            resolve(`
        [Charmander]
      Name = Charmander
      Types = Fire
      BaseStats = 39,52,43,60,50,65`)
          ),
      } as Response)
    )
  );
});

// Write the tests
describe("parsePokemonFile", () => {
  it("should return an array of Pokemon", async () => {
    const pokemon = await parsePokemonFile("fake/path");
    expect(Array.isArray(pokemon)).toBe(true);
    expect(pokemon.length).toBe(1);
    expect(pokemon[0].id).toBe("Charmander");
    expect(pokemon[0].name).toBe("Charmander");
    expect(pokemon[0].types).toEqual(["Fire"]);
    expect(pokemon[0].baseStats.hp).toBe(39);
    expect(pokemon[0].baseStats.attack).toBe(52);
    expect(pokemon[0].baseStats.defense).toBe(43);
    expect(pokemon[0].baseStats.specialAttack).toBe(60);
    expect(pokemon[0].baseStats.specialDefense).toBe(50);
    expect(pokemon[0].baseStats.speed).toBe(65);
  });
});
