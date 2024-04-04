import React, { useCallback, useState } from 'react';

type Props = { text: string };

const Card = ({ text }: Props) => {
  const [textValue, setTextValue] = useState(text);
  const cardStyle = {
    backgroundColor: '#333',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
    color: '#fff',
    padding: '20px',
    margin: '10px',
    lineHeight: '1.5',
  };

  const textOnChange = useCallback((e) => {
    setTextValue(e.target.value);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full" style={cardStyle}>
      <div className="flex">Hi</div>
      <div className="flex flex-col">
        Leave a comment
        <textarea
          value={textValue}
          onChange={textOnChange}
          className="text-black p-2 border border-gray-300 shadow-md resize-none"
          style={{ backgroundColor: '#fff' }}
        />
      </div>
    </div>
  );
};

export default Card;
