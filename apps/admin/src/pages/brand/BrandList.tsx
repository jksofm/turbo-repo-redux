import {
  BrandListContainer,
  BrandListTable,
  BrandListTopMenu,
} from "@repo/ui/pages/brand/BrandList";
import { Link, useNavigate, useParams } from "react-router-dom";
import { message } from "antd";
import { brandPath } from "./brand.path";
import S from "./BrandList.styled";
import { vendorPath } from "@ui/pages";
import { CreateButton, RenderTableActionButtons } from "@ui/components";
import { brandService } from "@data/services";
import { commonMessage } from "@constants/message.constant";

const BrandList = () => {
  const { vendorId: vendorIdParams } = useParams();
  const navigate = useNavigate();

  const { request, isLoading } = brandService.useDeleteById();

  const ActionButtons = (
    <>
      {vendorIdParams && (
        <Link to={vendorPath.syncHistory(vendorIdParams as string)}>
          <S.ButtonSyncHistory>
            Sync History
            <S.SyncIcon />
          </S.ButtonSyncHistory>
        </Link>
      )}
      <CreateButton path={brandPath.new(vendorIdParams)} text="New Brand" />
    </>
  );
  const renderActionButtons = (brandId: string, vendorId?: string) => {
    const onEdit = () => {
      if (vendorIdParams) {
        navigate(`${brandPath.detail(brandId)}?vendorId=${vendorIdParams}`);
      } else {
        navigate(brandPath.detail(brandId));
      }
    };
    const onDelete = async () => {
      const dataResponse = await request(brandId);

      if ("error" in dataResponse) {
        return;
      }
      message.success(commonMessage.deleteSuccess);
    };
    return (
      <RenderTableActionButtons
        actions={{
          onDelete,
          onEdit,
        }}
        isLoading={isLoading}
        titleDelete="Delete Brand"
        contentDelete="Are you sure you want to delete this brand"
        Components={{ ButtonView: <></> }}
        viewPath={`${vendorPath.brands(vendorId as string)}&brandId=${brandId}`}
      />
    );
  };

  const brandListComponents = {
    TopMenu: <BrandListTopMenu ActionButtons={ActionButtons} />,
    Table: <BrandListTable renderActionButtons={renderActionButtons} />,
  };
  return <BrandListContainer components={brandListComponents} />;
};

export default BrandList;
