import React from 'react';
import { useForm } from 'react-hook-form';
import { Container } from '@/components/custom/Container';
import styled from 'styled-components';
import { colors, fontSizes} from '@/assets';
import img from '@/assets/images/skooly-logo.png';

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 0px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ItemTitle = styled.div`
font-size: ${fontSizes.medium};
font-weight: 700;
`

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  background-color: ${colors.white};
`;

const Img = styled.img`
  width: 80px;
  height: 50px;
`;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <Container style={{ backgroundColor: `${colors.quaternary}` }}>
      <InnerContainer>
        <Header>
          <Img src={img} />
        </Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <ItemTitle>Sign Up</ItemTitle>
          <input type="text" placeholder="First name" {...register('First name', { required: true, maxLength: 80 })} />
          <input type="text" placeholder="Last name" {...register('Last name', { required: true, maxLength: 100 })} />
          <input type="text" placeholder="Email" {...register('Email', { required: true, pattern: /^\S+@\S+$/i })} />
          <input
            type="tel"
            placeholder="Mobile number"
            {...register('Mobile number', { required: true, minLength: 6, maxLength: 12 })}
          />
          <input type="submit" />
        </Form>
      </InnerContainer>
    </Container>
  );
}
