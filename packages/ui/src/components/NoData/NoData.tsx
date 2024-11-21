import S from "./NoData.styled";
import { ReactNode } from "react";
import { NoDataIcon } from "@ui/icons";
import { useAppSelector } from "@repo/data/store";

interface NoDataProps {
  hasData?: boolean;
  description?: string;
  buttonText: string;
  path: string;
  children: ReactNode | ReactNode[];
}

export function NoData({
  hasData,
  description,
  buttonText,
  path,
  children,
}: NoDataProps) {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  if (hasData) {
    return children;
  }

  return (
    <S.NoDataWrapper justify="center" align="center" vertical>
      <NoDataIcon isAdmin={isAdmin} />
      {description && <S.NoDataDescription>{description}</S.NoDataDescription>}
      {/* <CreateButton path={path} text={buttonText} /> */}
    </S.NoDataWrapper>
  );
}
