import { Button, ButtonProps } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import React from 'react'
type Props = {
  icon?: boolean;
} & ButtonProps;

export const RefreshBtn = ({ icon, ...others }: Props) => {
  return (
    <Button
      icon={icon ? <SyncOutlined /> : null}
      onClick={() => window.location.reload()}
      {...others}
    >
      Refresh page
    </Button>
  );
};
