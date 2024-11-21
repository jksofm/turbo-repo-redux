import { EditOutlined } from "@ant-design/icons";
import { VendorListContainer } from "@repo/ui/pages/vendor/VendorList";
import { VendorTopMenu, VendorTable } from "@repo/ui/pages/vendor/VendorList";
import { Button } from "antd";
import { vendorPath } from "./vendor.route";
import { useNavigate } from "react-router-dom";
import { CreateButton } from "@ui/components";

const VendorList = () => {
  const navigate = useNavigate();
  const AddVendorButton = (
    <CreateButton path={vendorPath.new()} text="New Vendor" />
  );

  const renderTableActionButtons = (vendorId: string) => {
    const handleEdit = () => {
      navigate(vendorPath.detail(vendorId));
    };
    return (
      <>
        <Button type="text" icon={<EditOutlined />} onClick={handleEdit} />
      </>
    );
  };

  const vendorListComponents = {
    VendorTopMenu: <VendorTopMenu ActionButtons={AddVendorButton} />,
    VendorTable: <VendorTable renderActionButtons={renderTableActionButtons} />,
  };

  return <VendorListContainer components={vendorListComponents} />;
};

export default VendorList;
