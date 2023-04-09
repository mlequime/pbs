export interface Type {
    id: string;
    name: string;
    iconPosition: number;
    weaknesses: string[];
    resistances: string[];
    immunities: string[];
    isSpecialType: boolean;
}