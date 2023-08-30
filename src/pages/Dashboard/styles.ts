import styled from 'styled-components';
import { DayPicker } from 'react-day-picker';

export const Container = styled.div`
  max-width: 1340px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 300;
  color: ${(props) => props.theme.colors.primary};
`;

export const Message = styled.p``;

export const Text = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1.3rem;
`;

export const Schedule = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardWrapper = styled.div`
  width: 50%;
  padding: 0 1rem;
  max-height: 60vh;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.gray_50};
  }

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 8px;
  }
`;

export const Picker = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

export const Calendar = styled(DayPicker)`
  background-color: ${(props) => props.theme.colors.primary};
  height: fit-content;
  padding: 1rem;
  border-radius: 10px;
  color: ${(props) => props.theme.colors.white};
  box-shadow: 4px 8px 4px rgb(0, 0, 0, 0.3);

  .day {
    background-color: ${(props) => props.theme.colors.white};
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.colors.black};
    margin: 0.15rem;
    border-radius: 5px;

    &:hover {
      color: ${(props) => props.theme.colors.black};
    }
  }

  .selected {
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
