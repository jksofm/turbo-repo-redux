import S from "./SpinLoading.styled";

interface SpinLoadingProps {
  size?: "small" | "default" | "large";
}
function SpinLoading({ size = "large" }: SpinLoadingProps) {
  return (
    <S.Container>
      <S.SpinWrapper size={size} />
    </S.Container>
  );
}

export default SpinLoading;
