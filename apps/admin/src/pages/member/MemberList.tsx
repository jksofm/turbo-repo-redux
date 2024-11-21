import { MemberListContainer } from "@repo/ui/pages/member";
import { RenderTableActionButtons } from "@repo/ui/components";
import { Member, PagingResponse } from "@repo/models";
import { message } from "antd";
import { userService } from "@repo/data/services";
import { useAppSelector } from "@repo/data/store";
import { userListSelector } from "@repo/data/slices";
import { commonMessage } from "@repo/constants";

function MemberList() {
  const memberListForm = userListSelector(useAppSelector((s) => s.user));
  const { data: profile } = userService.useGetProfile();
  const { data: memberPaging, isFetching } = userService.useGetUsers(
    memberListForm,
    "admin",
  );
  const { request: deleteMember, isLoading } = userService.useDeleteUser();

  const renderActionButtons = (member: Member) => {
    const onDelete = async () => {
      const dataResponse = await deleteMember(String(member.id));
      if ("error" in dataResponse) return;
      message.success(commonMessage.deleteSuccess);
    };

    return (
      <RenderTableActionButtons
        Components={{ ButtonView: <></>, ButtonEdit: <></> }}
        isLoading={isLoading}
        disabledDelete={profile?.id === member?.id}
        titleDelete="Delete Member"
        contentDelete="Are you sure you want to delete this member"
        actions={{ onDelete }}
      />
    );
  };
  return (
    <MemberListContainer
      memberPaging={memberPaging as PagingResponse<Member>}
      isFetching={isFetching}
      renderActionButtons={renderActionButtons}
      disableRowSelection
    />
  );
}

export default MemberList;
