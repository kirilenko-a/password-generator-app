export interface CharacterLengthProps {
  label: string;
  name: string;
  counter: number;
  id: string;
  min: number;
  max: number;
  handleChange: (input: React.ChangeEvent<HTMLInputElement>) => void;
}
