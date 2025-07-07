declare module 'react-world-flags' {
  interface FlagProps {
    code: string;
    style?: React.CSSProperties;
    className?: string;
  }
  
  const Flag: React.FC<FlagProps>;
  export default Flag;
}
