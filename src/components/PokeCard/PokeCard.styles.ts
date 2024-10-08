import styled from 'styled-components';

export const Character = styled.div`
  width: 29%;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  overflow: hidden;
  margin-bottom: 20px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const PokeName = styled.div`
  background-color: #ecd018;
  text-align: center;
  padding: 10px;
  p {
    text-transform: uppercase;
    font-weight: bold;
    color: white;
    letter-spacing: 4px;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
  }
`;

export const PokeImage = styled.div`
  padding: 20px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const PokeMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 10px;
  span {
    color: white;
    text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.4);
    background-color: #7bb7b7;
    font-weight: bold;
    margin: 0;
    padding: 5px 20px;
    border-radius: 5px;
    @media (max-width: 400px) {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;

export const PokeAttacks = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  justify-content: space-between;
  span {
    width: 30%;
    background-color: #f16820;
    border-radius: 3px;
    padding: 7px;
    font-weight: 700;
    color: #fff;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 12px;
    margin-bottom: 10px;
    word-wrap: break-word;
    text-align: center;
    line-height: 15px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
  @media (max-width: 400px) {
    flex-wrap: wrap;
  }
`;
