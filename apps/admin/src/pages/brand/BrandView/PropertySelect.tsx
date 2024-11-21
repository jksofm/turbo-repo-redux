import { Form, FormInstance, Select } from "antd";
import { useParams } from "react-router-dom";
import { FormItem } from "./helpers";

import { UpdateBrandForm } from "@repo/models";

interface PropertySelectProps {
  label: string;
  name: "defaultColors" | "defaultSizes";
  isLoading: boolean;
  options?: {
    label: string;
    value: string;
  }[];
  form: FormInstance<UpdateBrandForm>;
  tooltip?: string;
  disabled?: boolean;
}
const PropertySelect = ({
  label,
  name,
  isLoading,
  options,
  form,
  tooltip,
  disabled,
}: PropertySelectProps) => {
  const { productId } = useParams();

  const FormList = () => {
    const selectedValues = form?.getFieldValue(name);
    return (
      <Form.List name={name}>
        {(_, { add, remove }) => {
          const onSelect = (value: string) => {
            add(value);
          };

          const onDeselect = (index: number) => {
            remove(selectedValues.indexOf(index));
          };
          return (
            <Select
              key={selectedValues}
              mode="tags"
              options={options}
              loading={isLoading}
              disabled={!!productId || disabled}
              defaultValue={selectedValues}
              onSelect={(v) => onSelect(v)}
              onDeselect={(i) => onDeselect(i)}
              placeholder={`Select ${name}`}
            />
          );
        }}
      </Form.List>
    );
  };
  return (
    <FormItem tooltip={tooltip} label={label} shouldUpdate>
      {() => <FormList />}
    </FormItem>
  );
};

export default PropertySelect;
