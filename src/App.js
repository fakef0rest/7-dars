import { Header, Modal, Input } from './components';
import { useTheme } from './hooks/useTheme';
import { useValue } from './hooks/useValue';
import './App.css';
import { useRef, useState } from 'react';

function App() {
  const { number } = useValue();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [add, setAdd] = useState(false);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleOk = () => {
    const data = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }

    console.log(data)
  }

  return (
    <>
      <main className={theme}>
        <Header/>
        <h1>Count: {number}</h1>
        <button onClick={() => setAdd(true)}>Info</button>
        <button onClick={() => setOpen(true)}>Open</button>
        {open && <Modal open={open} setOpen={setOpen}>
            <p>Lorem ipsum</p>
        </Modal>
        } { add && <Modal open={add} setOpen={setAdd} handleOk={handleOk} okText={'Submit'}>
            <Input ref={usernameRef} type='text' placeholder='username' />
            <Input ref={passwordRef} type='password' placeholder='password' />
        </Modal>
        }
      </main>
    </>
  );
}

export default App;
