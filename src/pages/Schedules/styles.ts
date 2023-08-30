import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 400;
  color: ${(props) => props.theme.colors.primary};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const FormWrapper = styled.div`
  width: 50%;
  margin: auto;
`;

export const ScheduleForm = styled.form``;

export const DateInputs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  align-items: center;
`;

export const HourWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const HourSelect = styled.select`
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 16px;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  align-items: center;
  height: fit-content;
`;

export const HourLabel = styled.label`
  color: ${(props) => props.theme.colors.primary};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

export const CancelButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.gray_50};
  }
`;

export const ConfirmButton = styled.button`
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;
  text-decoration: none;
  font-weight: 300px;
  border-radius: 16px;
  padding: 0.5rem 1.5rem;
  width: 30%;

  &&:hover {
    background: ${(props) => props.theme.colors.secondary_50};
  }
`;
