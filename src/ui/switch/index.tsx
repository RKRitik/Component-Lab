type SwitchType = "primary" | "secondary";

type SwitchProps = {
  type: SwitchType;
  onChange: () => boolean;
  value: boolean;
};
export const Switch = ({ type, onChange, value }: SwitchProps) => {
  return <input checked={value} onChange={onChange} type="checkbox"></input>;
};
