import React from "react";
import S from "./Table.styled";
import { TableSkeletonLoading } from "../TableSkeletonLoading";
import { TablePaginationConfig } from "antd";
import { Table as AntdTable } from "antd";
import { PagingRequest, PagingResponse } from "@repo/models";
import { useCustomSearchParams } from "@repo/utils/hooks";
import { ColumnsType, SorterResult } from "antd/es/table/interface";
import { AnyObject } from "antd/es/_util/type";
import { useAppSelector } from "@repo/data/store";

interface TableProps<T, K> {
  style?: React.CSSProperties;
  selectedIds?: string[] | React.Key[];
  RowSelectedActions?: () => JSX.Element;
  isFetching: boolean;
  pagination: PagingRequest;
  handleSelect?: (seletedIds: string[]) => void;
  data: PagingResponse<K>;
  columns: ColumnsType<T>;
  dataSource: T[];
  pageSizeOptions?: string[];
  nameItem?: string;
  hasRowSelect?: boolean;
  disablePageSize?: boolean;
  customRowSelection?: Record<string, unknown>;
  customPagination?: TablePaginationConfig;
  customHandleSorterChange?: (sorter: SorterResult<T>) => void;
  customHandlePaginationChange?: (
    paginationTable: TablePaginationConfig,
  ) => void;
  disableRowSelection?: boolean;
  disabledPaging?: boolean;
}
function Table<T, K>(props: TableProps<T, K>) {
  const isAdmin = useAppSelector((state) => state.user.isAdmin);
  const {
    style,
    selectedIds,
    hasRowSelect,
    RowSelectedActions,
    isFetching,
    pagination,
    handleSelect,
    data,
    columns,
    dataSource,
    pageSizeOptions,
    nameItem,
    customRowSelection,
    customHandlePaginationChange,
    customHandleSorterChange,
    customPagination,
    disablePageSize,
    disableRowSelection,
    disabledPaging,
  } = props;

  const defaultPageSizeOptions = ["10", "20", "50", "100"];
  const { parseSearchParams, updateSearchParams } = useCustomSearchParams();
  const params = parseSearchParams();

  const handlePaginationChange = (paginationTable: TablePaginationConfig) => {
    const { pageSize, current } = paginationTable;
    const newPageSize = pageSize ?? pagination.limit;
    const pageCurrent = current ?? 1;

    if (newPageSize != pagination.limit) {
      updateSearchParams({ ...params, page: 1, limit: newPageSize });
    }
    if (newPageSize == pagination.limit && pageCurrent !== pagination.page) {
      updateSearchParams({ ...params, page: pageCurrent, limit: newPageSize });
    }
  };
  const handleSorterChange = (sorter: SorterResult<T>) => {
    const getSortString = () => {
      if (sorter.order === "ascend") {
        return String(sorter.field);
      }

      if (sorter.order === "descend") {
        return `-${sorter.field}`;
      }
      return undefined;
    };
    if (getSortString()) {
      updateSearchParams({ ...params, sort: getSortString() });
    } else {
      const newParams = { ...params };
      delete newParams.sort;
      updateSearchParams(newParams);
    }
  };
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    const selectedIds = newSelectedRowKeys?.map((key) => String(key));
    handleSelect && handleSelect(selectedIds);
  };

  const rowSelection = {
    selectedRowKeys: selectedIds,
    onChange: onSelectChange,
    ...customRowSelection,
  };

  if (isFetching) return <TableSkeletonLoading />;

  const TableWrapperComponent = isAdmin ? S.TableWrapper : S.TableShopWrapper;

  return (
    <div>
      {hasRowSelect && !!selectedIds?.length && !!RowSelectedActions && (
        <RowSelectedActions />
      )}
      <TableWrapperComponent style={style}>
        <AntdTable
          rowSelection={disableRowSelection ? undefined : rowSelection}
          rowKey={(record) => record.key}
          pagination={
            disabledPaging
              ? false
              : {
                  current: Number(params.page),
                  pageSize: Number(params.limit),
                  total: data?.count,
                  showSizeChanger: !disablePageSize,
                  pageSizeOptions: pageSizeOptions ?? defaultPageSizeOptions,
                  showTotal: (total: number) => {
                    return (
                      <>
                        Total {total} {nameItem ? nameItem : "items"}
                      </>
                    );
                  },
                  ...customPagination,
                }
          }
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          columns={columns as any}
          dataSource={dataSource as AnyObject[]}
          onChange={(pagination, _, sorter, extra) => {
            switch (extra.action) {
              case "paginate":
                if (customHandlePaginationChange) {
                  return customHandlePaginationChange(pagination);
                } else {
                  return handlePaginationChange(pagination);
                }
              case "sort":
                if (customHandleSorterChange) {
                  return customHandleSorterChange(sorter as SorterResult<T>);
                } else {
                  return handleSorterChange(sorter as SorterResult<T>);
                }
            }
          }}
          bordered
          locale={{
            emptyText: isFetching ? (
              <TableSkeletonLoading />
            ) : (
              // <NoSearchResultIcon />
              <></>
            ),
          }}
        />
      </TableWrapperComponent>
    </div>
  );
}

export default Table;
