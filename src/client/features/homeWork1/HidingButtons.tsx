import HidingButton from './HidingButton';

export default function HidingButtons() {
  return (
    <div>
      {[...Array(10)].map((_, idx) => (
        <HidingButton title={idx.toString()} key={idx} />
      ))}
    </div>
  );
}
