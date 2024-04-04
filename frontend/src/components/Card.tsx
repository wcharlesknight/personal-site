import React, { useCallback, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { COLORS } from '../styles';
import Button from '@mui/material/Button';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
type Props = { text: string };

const Card = ({ text }: Props) => {
  const [textValue, setTextValue] = useState();
  const [data, setData] = useState<Document | null>(null);
  const cardStyle = {
    backgroundColor: '#333',
    borderRadius: '5px',
    boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.2)',
    color: '#fff',
    padding: '20px',
    margin: '10px',
    lineHeight: '1.5',
  };

  useEffect(() => {
    fetch('https://medium.com/me/stories/public')
      .then((response) => response.text())
      .then((data: any) => {
        // setData(data);
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'text/html');
        console.log(doc, 'data');
        setData(doc);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const textOnChange = useCallback((e) => {
    setTextValue(e.target.value);
  }, []);

  return (
    <div className="flex flex-col justify-between h-full" style={cardStyle}>
      <div className="flex flex-row w-full justify-center items-center">
        Link:
        <a
          href="https://medium.com/me/stories/public"
          style={{ textDecoration: 'underline' }}
        >
          Medium Stories
        </a>
      </div>
      <div className="flex w-full h-full"></div>
      <div className="flex flex-row w-full justify-center items-center">
        <TextField
          value={textValue}
          onChange={textOnChange}
          sx={{
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: COLORS.whiteShade2,
                color: COLORS.grayShade1,
              },
            },
            margin: 10,
          }}
          inputProps={{
            style: {
              color: COLORS.whiteShade3,
              borderColor: COLORS.whiteShade1,
              width: 200,
              height: 150,
            },
          }}
          InputLabelProps={{ style: { color: COLORS.blackShade2 } }}
          id="outlined-multiline-flexible"
          label="Comment"
          multiline
          maxRows={4}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{
            height: 60,
            display: 'flex',
            justifyContent: 'center',
            color: COLORS.blackShade2,
            backgroundColor: COLORS.whiteShade2,
            '&:hover': {
              backgroundColor: COLORS.grayShade1,
            },
          }}
        >
          Submit Comment
        </Button>
      </div>
    </div>
  );
};

export default Card;
