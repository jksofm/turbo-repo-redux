import { PagingRequest, PagingResponse } from "@repo/models";
// import { debounce } from "@repo/utils/helpers";
import { Form, Select } from "antd";
import { FormItemProps, Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import {  useEffect, useMemo, useState } from "react";

interface SelectItem {
  label: string;
  value: string;
}
interface SelectOption {
  id: string;
  name?: string;
}

interface LazySelectProps<T> {
  loading: boolean;
  placeholder: string;
  disabled?: boolean;
  name?: NamePath<T>;
  label?: string;
  request: PagingRequest;
  setRequest: React.Dispatch<React.SetStateAction<PagingRequest>>;
  handleChange?: (value: string) => void;
  dataPaging: PagingResponse<SelectOption>;
  rules?: Rule[];
  optionalFormRequest?: { vendorId?: string; hasShop?: boolean };
  optionalOption?: SelectItem;
  onClear?: () => void;
  formItemProps?: FormItemProps<T>;
  customOptions?: SelectItem[];
  disabledAllowClear?: boolean;
  tooltip?: string;
}

export function LazySelect<T>({
  loading,
  placeholder,
  disabled,
  name,
  label,
  request,
  setRequest,
  dataPaging,
  customOptions,
  optionalFormRequest,
  handleChange,
  optionalOption,
  rules,
  onClear,
  formItemProps,
  disabledAllowClear,
  tooltip,
}: LazySelectProps<T>) {
  const [optionsData, setOptionsData] = useState<SelectItem[]>([]);
  const totalCount = dataPaging?.count;
  const [customLoading, setCustomLoading] = useState(true);

  const pageCurrent = dataPaging?.page;
  const pageCount = dataPaging?.pageCount;

  const options: SelectItem[] = customOptions
    ? customOptions
    : dataPaging?.items?.map((item) => ({
        label: item.name as string,
        value: item.id as string,
      }));

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const { target } = e;
    const scrollTop = (target as HTMLElement).scrollTop;
    const scrollHeight = (target as HTMLElement).scrollHeight;
    const clientHeight = (target as HTMLElement).clientHeight;
    const isEndOfList = scrollHeight - scrollTop == clientHeight;

    if (isEndOfList && optionsData.length < totalCount) {
      if (pageCurrent <= pageCount) {
        (target as HTMLElement).scrollTo(0, clientHeight);

        const nextPage = pageCurrent + 1;
        const formRequest = {
          ...request,
          page: nextPage,
          limit: request.limit,
        };

        setRequest(formRequest);
      }
    }
  };

  // const handleSearch = useCallback(
  //   debounce((value) => {
  //     if (!optionalFormRequest) {
  //       if (value) {
  //         const formRequest = {
  //           page: 1,
  //           limit: 10,
  //           searchKeyword: value,
  //         };
  //         setRequest(formRequest);
  //       }
  //       if (value === "") {
  //         setRequest({
  //           page: 1,
  //           limit: 10,
  //         });
  //       }
  //     } else {
  //       if (value) {
  //         const formRequest = {
  //           page: 1,
  //           limit: 10,
  //           searchKeyword: value,
  //           ...optionalFormRequest,
  //         };
  //         setRequest(formRequest);
  //       }
  //       if (value === "") {
  //         setRequest({
  //           page: 1,
  //           limit: 10,
  //           ...optionalFormRequest,
  //         });
  //       }
  //     }
  //   }, 500),
  //   [optionalFormRequest],
  // );

  useEffect(() => {
    if (pageCurrent === 1) {
      setOptionsData(options);
    }
    if (
      pageCurrent > 1 &&
      optionsData.length < totalCount &&
      pageCurrent <= pageCount
    ) {
      setOptionsData((prev) => [...prev, ...options]);
    }
  }, [pageCurrent, dataPaging]);

  const filterOptions = useMemo(() => {
    return optionalOption
      ? [...optionsData, optionalOption]
          .filter(
            (a, i) =>
              [...optionsData, optionalOption].findIndex(
                (b) => b?.value === a?.value,
              ) === i,
          )
          .filter((item) => item.value)
      : optionsData;
  }, [optionalOption, optionsData]);

  useEffect(() => {
    setTimeout(() => {
      setCustomLoading(false);
    }, 300);
  }, [optionalOption, optionsData]);
  if (customLoading) return null;
  return (
    <Form.Item
      name={name}
      {...formItemProps}
      rules={rules}
      shouldUpdate
      label={label}
      tooltip={tooltip}
    >
      <Select
        onPopupScroll={handleScroll}
        onClear={onClear}
        onChange={handleChange}
        loading={loading}
        defaultActiveFirstOption={true}
        allowClear={!disabledAllowClear}
        showSearch
        defaultValue={optionalOption?.label}
        filterOption={false}
        // onSearch={handleSearch}
        placeholder={placeholder}
        disabled={disabled}
        options={filterOptions}
      />
    </Form.Item>
  );
}

export default LazySelect;
