import { commonMessage, formMessage } from "@constants/message.constant";
import { vendorConfigService, vendorService } from "@data/services";
import { UpdateVendorSiteForm, VendorSiteConfig } from "@models/vendor.model";
import { vendorPath } from "@ui/pages";
import { Form, Input, message, Typography } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import S from "./vendor.styled";
import { SaveButton, SpinLoading } from "@ui/components";
import { useAppSelector } from "@data/store";

const FormItem = Form.Item<UpdateVendorSiteForm>;
const VendorEditSite = () => {
  const { vendorId } = useParams();
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const shopId = useAppSelector((s) => s.user.selectedShop?.id);

  const [initialFormValues, setInitialFormValues] =
    useState<VendorSiteConfig>();

  const vendorDetail = vendorService.useGetById(vendorId as string, {
    refetchOnMountOrArgChange: true,
  });

  const vendorQuery = {
    getSiteConfig: vendorConfigService.useGet(
      vendorDetail?.data?.shopVendorConfig?.id as string,
      {
        skip: !vendorDetail?.data?.shopVendorConfig?.id,
      },
    ),
    updateSiteConfig: vendorConfigService.useUpdate(),
    createSiteConfig: vendorConfigService.useCreate(),
  };
  const isHasShopVendorConfig = vendorQuery?.getSiteConfig?.data;

  useEffect(() => {
    setInitialFormValues({
      ...vendorQuery?.getSiteConfig?.data,
    });
  }, [vendorDetail?.data, vendorQuery?.getSiteConfig?.data]);

  useEffect(() => {
    form.resetFields();
  }, [initialFormValues, form]);

  const onFinish = async (vendorEditForm: UpdateVendorSiteForm) => {
    if (isHasShopVendorConfig) {
      const dataResponse = await vendorQuery.updateSiteConfig.request({
        ...vendorEditForm,
        id: vendorQuery?.getSiteConfig?.data?.id as string,
        vendorId,
        shopId,
      });
      vendorQuery.getSiteConfig.refetch();

      if ("error" in dataResponse) {
        return;
      }

      message.success(commonMessage.updateSuccess);
    } else {
      const dataResponse = await vendorQuery.createSiteConfig.request({
        ...vendorEditForm,
        vendorId,
        shopId,
      });
      navigate(vendorPath.list());
      if ("error" in dataResponse) {
        return;
      }
      message.success(commonMessage.updateSuccess);
    }
  };
  const isLoading =
    vendorDetail?.isLoading || vendorQuery.updateSiteConfig.isLoading;

  const onCancle = () => {
    navigate(vendorPath.list());
  };

  const canSave = () => {
    return (
      form?.isFieldsTouched() &&
      !form?.getFieldsError().filter(({ errors }) => errors.length).length
    );
  };

  if (isLoading) return <SpinLoading />;
  const title = `${isHasShopVendorConfig ? "Edit" : "Create"} Vendor Site Config - ${vendorDetail?.data?.name}`;

  return (
    <>
      <Typography.Title level={4}>{title}</Typography.Title>
      <S.Container vertical gap={16}>
        <Form
          form={form}
          name="vendor"
          layout="vertical"
          initialValues={initialFormValues}
          onFinish={onFinish}
        >
          <FormItem
            label="Website"
            name="adminUrl"
            tooltip={formMessage.tooltipRequired}
            rules={[{ required: true, message: formMessage.website }]}
          >
            <Input disabled={isLoading} placeholder="Type website" />
          </FormItem>
          <FormItem
            label="Username"
            name="username"
            tooltip={formMessage.tooltipRequired}
            rules={[{ required: true, message: formMessage.vendorName }]}
          >
            <Input disabled={isLoading} placeholder="Type Name" />
          </FormItem>
          <FormItem
            label="Password"
            name="password"
            tooltip={formMessage.tooltipRequired}
            rules={[{ required: true, message: formMessage.vendorName }]}
          >
            <Input.Password placeholder="Password" />
          </FormItem>

          <FormItem
            label="Account"
            name="account"
            tooltip={formMessage.tooltipOptional}
          >
            <Input disabled={isLoading} placeholder="Type account" />
          </FormItem>

          <S.FormButtons gap={8}>
            <FormItem shouldUpdate>
              {() => (
                <SaveButton
                  type="primary"
                  htmlType="submit"
                  loading={
                    vendorQuery.updateSiteConfig?.isLoading ||
                    vendorDetail?.isLoading
                  }
                  disabled={!canSave()}
                  text={"Save"}
                />
              )}
            </FormItem>
            <S.CancelButton
              type="text"
              disabled={
                vendorQuery.updateSiteConfig?.isLoading ||
                vendorDetail?.isLoading
              }
              onClick={onCancle}
            >
              Cancel
            </S.CancelButton>
          </S.FormButtons>
        </Form>
      </S.Container>
    </>
  );
};

export default VendorEditSite;
