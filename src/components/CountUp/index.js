import useCountUp from "../../hooks/useCountUp";

const CountUp = ({
  number: endNumber,
  duration = 2000,
  startNumber = 0,
  decimalPlaces = 0,
}) => {
  // eslint-disable-next-line no-console
  const { state } = useCountUp({
    endNumber,
    duration,
    startNumber,
    decimalPlaces,
  });
  return <>{state}</>;
};

export default CountUp;
