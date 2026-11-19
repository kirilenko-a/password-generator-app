export interface CharacterLengthProps {
  label: string;
  name: string;
  counter: number;
  id: string;
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
