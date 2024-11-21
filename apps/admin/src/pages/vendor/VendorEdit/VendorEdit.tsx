import { Vendor, VendorEditForm } from "@repo/models";
import { vendorService } from "@repo/data/services";
import {
  Col,
  Form,
  FormInstance,
  Input,
  Row,
  Select,
  Typography,
  message,
} from "antd";
import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { vendorPath } from "../vendor.route";
import S from "./VendorEdit.styled";
import { Country, State } from "country-state-city";
import { formMessage, commonMessage } from "@repo/constants";
import { SaveButton, SpinLoading } from "@ui/components";

interface VendorEditContextProps {
  isVendorFetching?: boolean;
  isVendorUpdating?: boolean;
  vendor?: Vendor;
  form?: FormInstance<VendorEditForm>;
}
const VendorEditContext = createContext<VendorEditContextProps>({});

const FormItem = Form.Item<VendorEditForm>;

const VendorEdit = () => {
  const { vendorId } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const [initialFormValues, setInitialFormValues] = useState<VendorEditForm>();

  const countries = useMemo(() => Country.getAllCountries(), []);
  const countryOptions = useMemo(
    () =>
      countries.map((country) => ({
        label: `${country.flag} ${country.name}`,
        value: country.isoCode,
      })),
    [countries],
  );
  const vendorQuery = {
    getById: vendorService.useGetById(vendorId as string, {
      refetchOnMountOrArgChange: true,
    }),
    update: vendorService.useUpdate(),
    create: vendorService.useCreate(),
  };

  const [selectedCountry, setSelectedCountry] = useState("");
  const provinceOptions = useMemo(
    () =>
      State.getStatesOfCountry(selectedCountry)?.map((state) => ({
        label: state.name,
        value: state.isoCode,
      })),
    [selectedCountry],
  );
  useEffect(() => {
    setSelectedCountry(vendorQuery.getById.data?.countryCode || "");
    setInitialFormValues(vendorQuery.getById.data);
  }, [vendorQuery.getById.data]);

  useEffect(() => {
    form.resetFields();
  }, [initialFormValues, form]);

  const onFinish = async (vendorEditForm: VendorEditForm) => {
    try {
      if (vendorId) {
        const dataResponse = await vendorQuery.update.request({
          id: vendorId,
          ...vendorEditForm,
        });
        if ("error" in dataResponse) {
          return;
        }
        message.success(commonMessage.updateSuccess);
      } else {
        const dataResponse = await vendorQuery.create.request({
          ...vendorEditForm,
        });
        if ("error" in dataResponse) {
          return;
        }
        message.success(commonMessage.createSuccess);
        navigate(vendorPath.list());
      }
    } catch (e) {
      message.error(commonMessage.error);
    }
  };

  const isLoading =
    vendorQuery.getById.isLoading ||
    vendorQuery.update.isLoading ||
    vendorQuery.create.isLoading;

  const onCountryChange = (countryCode: string) => {
    form.setFieldValue("provinceCode", undefined);
    setSelectedCountry(countryCode);
  };

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

  return (
    <VendorEditContext.Provider
      value={{
        vendor: vendorQuery.getById.data,
        form,
        isVendorFetching: vendorQuery.getById.isLoading,
        isVendorUpdating: vendorQuery.update.isLoading,
      }}
    >
      <Typography.Title level={4}>
        {vendorId ? "Edit" : "Add"} Vendor
      </Typography.Title>
      <S.Container vertical gap={16}>
        <Form
          form={form}
          name="vendor"
          layout="vertical"
          initialValues={initialFormValues}
          onFinish={onFinish}
        >
          <FormItem
            label="Name of Vendor"
            name="name"
            tooltip={formMessage.tooltipRequired}
            rules={[{ required: true, message: formMessage.vendorName }]}
          >
            <Input disabled={isLoading} placeholder="Type Name" />
          </FormItem>
          <FormItem
            label="Country"
            name="countryCode"
            tooltip={formMessage.tooltipOptional}
          >
            <Select
              options={countryOptions}
              loading={isLoading}
              showSearch
              allowClear
              filterOption={(input, option) =>
                !!option &&
                option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              onChange={onCountryChange}
              placeholder="Select"
            />
          </FormItem>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <FormItem
                label="City"
                name="city"
                tooltip={formMessage.tooltipOptional}
              >
                <Input disabled={isLoading} placeholder="Type name" />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem
                label="State"
                name="provinceCode"
                tooltip={formMessage.tooltipOptional}
              >
                <Select
                  options={provinceOptions}
                  loading={isLoading}
                  disabled={!provinceOptions.length}
                  allowClear
                  showSearch
                  filterOption={(input, option) =>
                    !!option &&
                    option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                  placeholder="Select state"
                />
              </FormItem>
            </Col>
          </Row>
          <FormItem
            label="Zip code"
            name="zip"
            tooltip={formMessage.tooltipOptional}
          >
            <Input disabled={isLoading} placeholder="e.g 1234 24532" />
          </FormItem>
          <FormItem
            label="Address 1"
            name="address1"
            tooltip={formMessage.tooltipOptional}
          >
            <Input disabled={isLoading} placeholder="Type address" />
          </FormItem>
          <FormItem
            tooltip={formMessage.tooltipOptional}
            label="Address 2 (optional)"
            name="address2"
          >
            <Input disabled={isLoading} placeholder="Type address" />
          </FormItem>
          <FormItem
            label="Phone number"
            name="phone"
            tooltip={formMessage.tooltipOptional}
          >
            <Input disabled={isLoading} placeholder="Input" />
          </FormItem>
          <FormItem
            label="Website"
            name="website"
            tooltip={formMessage.tooltipOptional}
          >
            <Input disabled={isLoading} placeholder="Type website" />
          </FormItem>
          <FormItem
            label="Email address"
            name="email"
            tooltip={formMessage.tooltipOptional}
          >
            <Input
              type="email"
              disabled={isLoading}
              placeholder="Type email address"
            />
          </FormItem>
          <S.FormButtons gap={8}>
            <FormItem shouldUpdate>
              {() => (
                <SaveButton
                  type="primary"
                  htmlType="submit"
                  loading={
                    vendorQuery.update.isLoading || vendorQuery.create.isLoading
                  }
                  disabled={!canSave()}
                  text={vendorId ? "Save Changes" : "Add"}
                />
              )}
            </FormItem>
            <S.CancelButton
              type="text"
              disabled={
                vendorQuery.update.isLoading || vendorQuery.create.isLoading
              }
              onClick={onCancle}
            >
              Cancel
            </S.CancelButton>
          </S.FormButtons>
        </Form>
      </S.Container>
    </VendorEditContext.Provider>
  );
};

export default VendorEdit;
