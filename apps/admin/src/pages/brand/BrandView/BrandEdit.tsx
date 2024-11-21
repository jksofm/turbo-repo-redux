import {
  PagingResponse,
  UpdateBrandForm,
  Vendor,
  VendorListForm,
} from "@repo/models";
import { brandService, productService } from "@repo/data/services";
import { Col, Flex, Form, Input, Typography, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { vendorService } from "@repo/data/services";

import S from "./BrandView.styled";

import PropertySelect from "./PropertySelect";
import { brandPath } from "../brand.path";

import { LazySelect, SaveButton, SpinLoading } from "@repo/ui/components";
import { formMessage, commonMessage, sizeValues } from "@repo/constants";
import { useAppSelector } from "@data/store";
import { vendorPath } from "@ui/pages";
import { useCustomSearchParams } from "@utils/hooks";

const BrandEdit = () => {
  const { brandId, vendorId } = useParams();
  const navigate = useNavigate();
  const { searchParams } = useCustomSearchParams();
  const shopId = useAppSelector((s) => s.user.selectedShop?.id);
  const [form] = Form.useForm<UpdateBrandForm>();
  const FormItem = Form.Item<UpdateBrandForm>;
  const [vendorListForm, setVendorListForm] = useState<VendorListForm>({
    page: 1,
    limit: 10,
  });
  const [messageApi, contextHolder] = message.useMessage();

  const [initialFormValues, setInitialFormValues] = useState<UpdateBrandForm>();
  const { data: brand, isLoading: isBrandFetching } = brandService.useGetById(
    brandId as string,
    {
      refetchOnMountOrArgChange: true,
    },
  );

  const { data: vendorData, isLoading: isVendorLoading } =
    vendorService.useGet(vendorListForm);
  const { data: vendorDetail } = vendorService.useGetById(
    vendorId ? vendorId : (brand?.vendorId as string),
  );
  const brandQuery = {
    create: brandService.useCreate(),
    update: brandService.useUpdate(),
  };

  const { data: defaultColors } = productService.useGetColors(shopId && shopId);

  const defaultColorOptions = defaultColors?.map((color) => ({
    label: color,
    value: color,
  }));

  const defaultSizeOptions = sizeValues?.map((size) => ({
    label: size,
    value: size,
  }));

  useEffect(() => {
    if (vendorId || brand) {
      setInitialFormValues({
        name: brand?.name as string,
        vendorId: vendorDetail?.id as string,
        defaultColors: brand?.defaultColors as string[],
        defaultSizes: brand?.defaultSizes as string[],
      });
    }
  }, [vendorDetail, vendorId, brand]);

  useEffect(() => {
    form.resetFields();
  }, [initialFormValues, form]);
  const onFinish = async (brandEditForm: UpdateBrandForm) => {
    if (brandId) {
      const dataResponse = await brandQuery.update.request({
        id: brandId,

        ...brandEditForm,
      });
      if ("error" in dataResponse) {
        return;
      }
    } else {
      const dataResponse = await brandQuery.create.request({
        ...brandEditForm,
      });
      if ("error" in dataResponse) {
        return;
      }
      if (vendorId) {
        navigate(vendorPath.brands(vendorId));
      }
      if (form.getFieldValue("vendorId") && !vendorId) {
        navigate(vendorPath.brands(form.getFieldValue("vendorId")));
      }
    }

    messageApi.success(commonMessage.updateSuccess);
  };

  const isLoading =
    isBrandFetching ||
    brandQuery.update.isLoading ||
    brandQuery.create.isLoading;

  const onCancle = () => {
    navigate(brandPath.list());
  };

  const canSave = () => {
    return (
      form?.isFieldsTouched() &&
      !form?.getFieldsError().filter(({ errors }) => errors.length).length
    );
  };
  if (isBrandFetching) return <SpinLoading />;
  return (
    <>
      {contextHolder}
      <S.Container vertical>
        <Typography.Title level={4}>
          {brandId ? "Edit" : "Add"} Brand
        </Typography.Title>
        <S.FormWrapper vertical gap={16}>
          <Form
            form={form}
            name="brand"
            layout="vertical"
            initialValues={initialFormValues}
            onFinish={onFinish}
          >
            <Col span={24}>
              <S.FormItems>
                <FormItem
                  label="Name of Brand"
                  name="name"
                  tooltip={formMessage.tooltipRequired}
                  rules={[{ required: true, message: formMessage.brandName }]}
                >
                  <Input disabled={isLoading} placeholder="Type brand name" />
                </FormItem>

                <LazySelect<UpdateBrandForm>
                  name="vendorId"
                  label="Vendor"
                  disabled={
                    !!vendorId ||
                    isLoading ||
                    (!!searchParams.get("vendorId") && !!vendorDetail)
                  }
                  loading={isVendorLoading}
                  placeholder="Select Vendor"
                  request={vendorListForm}
                  setRequest={setVendorListForm}
                  tooltip={formMessage.tooltipRequired}
                  optionalOption={{
                    value: vendorDetail?.id as string,
                    label: vendorDetail?.name as string,
                  }}
                  dataPaging={vendorData as PagingResponse<Vendor>}
                  rules={[
                    { required: true, message: formMessage.selectVendorName },
                  ]}
                />
              </S.FormItems>

              <PropertySelect
                label="Colors"
                name="defaultColors"
                disabled={isLoading}
                tooltip={formMessage.tooltipOptional}
                isLoading={isBrandFetching}
                options={defaultColorOptions}
                form={form}
              />
              <PropertySelect
                label="Sizes"
                name="defaultSizes"
                disabled={isLoading}
                tooltip={formMessage.tooltipOptional}
                isLoading={isBrandFetching}
                options={defaultSizeOptions}
                form={form}
              />
            </Col>
            <Flex gap={8}>
              <FormItem shouldUpdate>
                {() => (
                  <SaveButton
                    type="primary"
                    htmlType="submit"
                    disabled={!canSave()}
                    loading={
                      brandQuery.update.isLoading || brandQuery.create.isLoading
                    }
                    text={brandId ? "Save Changes" : "Add"}
                  />
                )}
              </FormItem>
              <S.CancelButton
                disabled={
                  brandQuery.update.isLoading || brandQuery.create.isLoading
                }
                type="text"
                onClick={onCancle}
              >
                Cancel
              </S.CancelButton>
            </Flex>
          </Form>
        </S.FormWrapper>
      </S.Container>
    </>
  );
};

export default BrandEdit;
