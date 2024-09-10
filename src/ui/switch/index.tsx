type SwitchType = "primary" | "secondary";

type SwitchProps = {
  type: SwitchType
};
export const Switch = ({ type }: SwitchProps) => {
  return <input type='checkbox'></input>
}