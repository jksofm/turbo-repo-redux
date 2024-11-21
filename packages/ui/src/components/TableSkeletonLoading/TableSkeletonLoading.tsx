import { Skeleton } from "antd";
import S from "./TableSkeletonLoading.styled";
function TableSkeletonLoading() {
  const arr = Array.from({ length: 7 }, (_, i) => i);

  return (
    <S.Container>
      {arr.map((i) => {
        return (
          <S.RowWrapper key={i}>
            <S.WrapperInput $isWidth="50px">
              <Skeleton.Input active />
            </S.WrapperInput>
            <S.WrapperInput $isWidth="55px" $isHeight="55px">
              <Skeleton.Input active />
            </S.WrapperInput>

            <S.WrapperInput $isWidth="90px">
              <Skeleton.Input active />
            </S.WrapperInput>

            <S.WrapperInput $isWidth="280px">
              <Skeleton.Input active />
            </S.WrapperInput>

            <S.WrapperInput $isWidth="90px">
              <Skeleton.Input active />
            </S.WrapperInput>

            <S.WrapperInput $isWidth="220px">
              <Skeleton.Input active />
            </S.WrapperInput>

            <S.LastInput>
              <Skeleton.Input active />
            </S.LastInput>
          </S.RowWrapper>
        );
      })}
    </S.Container>
  );
}

export default TableSkeletonLoading;
