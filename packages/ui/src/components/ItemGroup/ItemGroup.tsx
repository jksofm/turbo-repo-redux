import { Tooltip } from "antd";
import S from "./ItemGroup.styled";
import { useEffect, useRef, useState } from "react";

interface ItemGroupProps {
  items: string[];
  CustomTag?: React.ElementType;
  maxWidth: number;
  overlayClassName?: string;
  renderTag: (items: string[], isLimitWidth?: boolean) => React.ReactNode;
}
function ItemGroup({
  items,
  maxWidth,
  renderTag,
  overlayClassName,
}: ItemGroupProps) {
  const [count, setCount] = useState(items.length);
  const displayedItems = items.slice(0, count);
  const refContainer = useRef<HTMLDivElement | null>(null);
  const refMinus = useRef<HTMLDivElement | null>(null);

  const remainingCount = items.length - count;

  useEffect(() => {
    if (refContainer.current && refMinus.current) {
      const minusTagWidth = refMinus.current.clientWidth;
      const containerWidth = refContainer.current.clientWidth;

      if (containerWidth + minusTagWidth > maxWidth && count > 1) {
        setCount(count - 1);
      }
    }
  }, [refContainer.current, refMinus.current, count]);
  if (!items?.length) return null;

  return (
    <>
      <S.Wrapper $maxWidth={maxWidth} align="center" justify="space-between">
        <S.Container ref={refContainer}>
          {renderTag(displayedItems, true)}
        </S.Container>

        <Tooltip
          arrow={true}
          overlayClassName={overlayClassName || "productTableTooltip"}
          title={remainingCount > 0 && renderTag(items.slice(count))}
        >
          <S.MinusTag $isVisible={remainingCount > 0} ref={refMinus}>
            +{remainingCount}
          </S.MinusTag>{" "}
        </Tooltip>
      </S.Wrapper>
    </>
  );
}

export default ItemGroup;
