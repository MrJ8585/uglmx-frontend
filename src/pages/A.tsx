import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';
import type { ResizeCallbackData } from 'react-resizable';
import { Resizable } from 'react-resizable';
import maincolumns, { maincolumnsType } from '../utils/MainColumn';
import { exampleMainEntries } from '../utils/MainColumnsTestData';
import { ColumnsType } from 'antd/es/table';


const ResizableTitle = (
  props: React.HTMLAttributes<any> & {
    onResize: (e: React.SyntheticEvent<Element>, data: ResizeCallbackData) => void;
    width: number;
  },
) => {
  const { onResize, width, ...restProps } = props;

  if (!width) {
    return <th {...restProps} />;
  }

  return (
    <Resizable
    className='relative shadow-md'
      width={width}
      height={0}
      handle={
        <span
        className="absolute -right-1 bottom-0 z-10 w-3 h-[100%] cursor-col-resize"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      }
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
  );
};

const App: React.FC = () => {
const [columns, setColumns] = useState<ColumnsType<maincolumnsType>>(maincolumns || []);
const data = exampleMainEntries;

const handleResize: Function =
    (index: number) =>
    (_: React.SyntheticEvent<Element>, { size }: ResizeCallbackData) => {
        const newColumns = [...columns];
        newColumns[index] = {
            ...newColumns[index],
            width: size.width,
        };
        console.log(newColumns);
        setColumns(newColumns);
    };

  const mergedColumns = columns.map<ColumnsType<maincolumnsType>[number]>((col, index) => ({
    ...col,
    onHeaderCell: (column: ColumnsType<maincolumnsType>[number]) => ({
      width: column.width,
      onResize: handleResize(index) as React.ReactEventHandler<any>,
    }),
  }));

return (
    <Table
        bordered
        components={{
            header: {
                cell: ResizableTitle,
            },
        }}
        columns={mergedColumns}
        dataSource={data}
    />
);
};

export default App;