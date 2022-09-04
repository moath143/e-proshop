import styled from "styled-components";

export const CloseButton = styled.button`
  border: none;
  background: #dc3545;
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SectionUpload = styled.section`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  gap: 4%;
`;

export const Upload = styled.button`
  width: 200px;
  height: 200px;
  border: 5px dashed #b6b6b6;
  border-radius: 4px;
  font-size: 100px;
  cursor: pointer;
  color: #b6b6b6;
`;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
`;


export const ProcessUpload = styled.button`
  background: #fcdd06;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 13px 35px;
  font-size: 20px;
  cursor: pointer;
  text-transform: capitalize;
  margin-top: 50px;
`;
