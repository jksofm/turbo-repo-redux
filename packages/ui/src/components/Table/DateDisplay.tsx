import dayjs from "dayjs";
import S from "./Table.styled";

interface DateDisplayProps {
  createdAt: string;
  disabledTime?: boolean;
}
function DateDisplay({ createdAt, disabledTime }: DateDisplayProps) {
  return (
    <>
      <S.TextDayWrapper>
        {dayjs(createdAt).format("YYYY MMMM DD")}
      </S.TextDayWrapper>
      {!disabledTime && (
        <S.TextTimeWrapper>
          {dayjs(createdAt).format("hh:mm a")}
        </S.TextTimeWrapper>
      )}
    </>
  );
}

export default DateDisplay;
