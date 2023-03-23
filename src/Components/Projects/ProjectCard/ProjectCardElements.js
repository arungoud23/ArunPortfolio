import styled from "styled-components";

export const Card = styled.div`

  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-bottom: 1px solid black;
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;
 
export const CardLeft = styled.div`

// border: 5px solid #d24d57;
border: 5px solid black;
  background: #151418;
  border-radius: 5px;
  // padding: 5px;
  justify-self: center;
  background-color: white;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  
 border-radius:20px;
  
  img {
   
    border-radius:20px;
    height: 100%;
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 500;
    font-size: 17px;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
    margin-left: 5px;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  
    .btn:hover{
      transition:transform 1s;
    cursor:zoom-in;
    transform:scale(1.2);
    }
  
`;
