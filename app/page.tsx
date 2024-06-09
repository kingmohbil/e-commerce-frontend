import { Input, InputProps, Button } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <h1>Wazzan is a prof</h1>
      <Input isInvalid errorMessage="this is an error" label="Email" />
      <Button className='bg-danger-50'>Send</Button>
    </>
  );
}
