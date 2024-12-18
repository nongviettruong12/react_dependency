import { Result } from 'antd';
import { BackBtn } from '../../components';

export const Error403Page = () => {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={<BackBtn type="primary" />}
    />
  );
};
