import React, { useMemo, useState } from 'react';

import style from './Chat.module.css';
import { io } from 'socket.io-client';
const Home = () => {
  const socket = useMemo(() => io('http://localhost:3001'), []);

  /*--------------------------------------------------------------------------------------------------------- */

  const [messageinput, setMessageinput] = useState('');
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const handelmessage = (e) => {
    setMessageinput(e.target.value);
  };
  const handelname = (e) => {
    setName(e.target.value);
  };
  const sendmessage = (e) => {
    e.preventDefault();
    if (messageinput === '') return;
    console.log(messageinput);
    const data = {
      message: messageinput,
      name: name,
      dateTime:
        new Date(Date.now()).getHours() +
        ':' +
        new Date(Date.now()).getMinutes(),
      sender: 'user',
    };

    // Clear the input field

    socket.emit('message', data);
    data.sender = data.sender === 'user' ? 'receiver' : 'user';
    setMessages([...messages, data]);
    setMessageinput('');
  };

  socket.on('chat-message', (data) => {
    console.log(data);
    setMessages([...messages, data]);
  });

  const messagetyping = (e) => {
    socket.emit('feedback', {
      feedback: `${name} is typing..`,
    });
  };
  const messagenottyping = (e) => {
    socket.emit('feedback', {
      feedback: ``,
    });
  };
  const [receiverFeedback, setReceiverFeedback] = useState('');
  socket.on('feedback', (data) => {
    setReceiverFeedback(data.feedback);
  });

  // /*------------------------------------------------------------------------------------------------------------ */

  return (
    <div className={style.container}>
      <h1 className={style.title}>Chat app 💬 </h1>
      <div className={style.main}>
        <div className={style.header}>
          {' '}
          <span>
            {' '}
            <img
              src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png"
              alt=""
            />
          </span>
          <input
            type="text"
            value={name}
            onChange={handelname}
            maxLength={20}
            placeholder="Enter your name"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNgGAXUAv/RANUMhoFRC0YB5eD/aDId8CAaBQTB/9FkSgj8H02mDDQCANMDv0HN1j+vAAAAAElFTkSuQmCC"
            alt=""
          />
        </div>
        <ul className={style.message_container}>
          {messages.map((message, index) => (
            <li
              className={
                message.sender === 'receiver'
                  ? style.message_right
                  : style.message_left
              }
              key={index}
            >
              {' '}
              <p className={style.message}>
                {message.message}
                <span>
                  {' '}
                  {message.name},{message.dateTime}
                </span>
              </p>
            </li>
          ))}

          <li className={style.message_feedback}>
            <p className={style.feedback}> {receiverFeedback}</p>
          </li>
        </ul>
        <form action="" className={style.message_form}>
          <input
            type="text"
            className={style.message_input}
            placeholder="Send message ...."
            value={messageinput}
            onChange={handelmessage}
            onFocus={messagetyping}
            onKeyDown={messagetyping}
            onBlur={messagenottyping}
          />
          <div className={style.v_divider}></div>
          <button
            type="submit"
            className={style.send_button}
            onClick={sendmessage}
          >
            <span>
              {' '}
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABMUlEQVR4nO3UzypFURTH8Y90BwZKKQM8gDKRl2BoYsyMmRE3KblznoIXkIxkZGJigiFFYSYKUVxHp/bN6Xb+3XvPRPnWGuy1d7/fOWvttfnnlyns4AaHKmIMqzhHlIjbXkQHMI8DfLYJt2K7U9F+zGAXrymC3/hIrONylWISW6GuUUa8Yz+YxOvLItFRrOAsR7QV91jCWyIX9ySVWRyhWUI4wimmcZfINUPjU3kqKRyFXgwFk2Q+/sBMNksIN1FHXzBp318oqn8jR/wFc+FcPWU/7sNgkUGWyXW4Ua1efaWc2SsjnmZygpGQn8Bzxh/Gc9IRi1hHLayHcZUh/hCGsWtqOM7pT/zI9cRGwe0q/TRksZwjfqEiGhkGa1UZpJnEgzeuYhpln4Ze2MRjN3f/7/EDz12xqRgiakMAAAAASUVORK5CYII="
                alt=""
              />
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
