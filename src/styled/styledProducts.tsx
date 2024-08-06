import styled from 'styled-components';

export const StyledMain = styled.main`
  padding: 7rem 0;
  width: 90vw;
  max-width: 1540px;
  display: flex;
  gap: 20px;
  margin: 0 auto;

  & > section:first-child > h2 {
    width: 90vw;
    max-width: 1020px;
    font-size: 2.5rem;
    text-transform: capitalize;
    letter-spacing: 0.5px;
    margin: 0 auto 30px;
    width: 100%;
    color: hsl(14, 65%, 14%);
    font-weight: bold;
  }

  & h3.basket-title {
    text-transform: capitalize;
    letter-spacing: 0.5px;
    margin: 0 0 30px 20px;
    color: hsl(14, 86%, 42%);
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media screen and (max-width: 1400px) {
    flex-direction: column;
  }
`;

export const StyledContainer = styled.div`
  width: 90vw;
  max-width: 1020px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: auto;
  }
`;

export const StyledCard = styled.div`
  position: relative;

  & > img {
    width: 100%;
    object-fit: cover;
    display: block;
    border-radius: 10px;
  }

  & > h3 {
    font-size: 16px;
  }

  & > .btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 115px;
  }

  & > .card-footer {
    margin: 35px 0 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 7px;

    & > p:first-child {
      font-weight: 100;
      color: hsl(12, 20%, 44%);
    }

    & > h3 {
      color: hsl(14, 65%, 15%);
      letter-spacing: 0.7px;
    }

    & > p,
    & > h3 {
      margin: 0;
      padding: 0;
    }

    & > p:last-child {
      color: hsl(14, 65%, 40%);
      font-weight: 700;
      font-size: 18px;
    }
  }
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fffffe;
  border-radius: 25px;
  cursor: pointer;
  border: 2px solid hsl(14, 25%, 72%);
  color: hsl(14, 65%, 9%);
  font-weight: bold;
  transition: all 0.4s ease;
  font-size: 15px;
  width: 170px;

  &:hover {
    border: 2px solid hsl(14, 65%, 40%);
    color: hsl(25, 65%, 45%);
  }

  & > svg {
    display: inline-block;
    width: 16px;
    height: 16px;
    color: hsl(14, 65%, 40%);
  }
`;

export const AmountProductButton = styled.div`
  padding: 5.5px 20px 8px;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 25px;
  background-color: #c83b0e;
  color: #fff;
  font-weight: bold;
  transition: all 0.4s ease;
  font-size: 15px;
  width: 130px;

  & > button {
    border: none;
    outline: none;
    display: block;
    background-color: #c83b0e;
    border-radius: 50%;
    width: 27.5px;
    height: 27.5px;

    & > svg {
      display: block;
      width: 27.5px;
      height: 27.5px;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;

      &:hover {
        color: #c83b0e;
        background-color: #fff;
      }
    }
  }
`;

export const StyledBasket = styled.section`
  width: 90vw;
  max-width: 450px;
  height: min-content;
  padding: 25px 0;
  margin: 5px auto;
  background-color: #fff;
  border-radius: 10px;

  /* Empty Basket */
  & .empty-basket {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;

    & > img {
      margin: 0 auto;
    }

    & > p {
      color: hsl(14, 65%, 28%);
      opacity: 0.8;
    }
  }

  /* All Basket Items */
  & > .basket {
    display: grid;
    grid-template-columns: auto;
    align-items: center;
    padding: 0 20px;

    & .basket-item:first-child {
      padding-top: 0;
    }

    /* Basket Item */
    & .basket-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid hsl(13, 31%, 94%);
      padding: 25px 0;

      & > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      /* Basket Item Title */
      & h4 {
        margin: 0;
        color: hsl(14, 65%, 12%);
      }

      /* Basket Item Price */
      & p {
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 0;

        & > .item-amount {
          color: #c83b0e;
          font-weight: bold;
        }

        & > .item-price {
          color: hsl(7, 20%, 60%);
          font-weight: bold;
        }

        & > .total-item-price {
          color: hsl(12, 20%, 44%);
          font-weight: bold;
        }
      }

      & .item-delete-btn {
        border: none;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background: none;
        padding: 0;
        margin: 0;
        border-radius: 50%;
        width: 35px;

        & > svg {
          width: 100%;
          height: auto;
          display: block;
          transition: all 0.5s ease;
          border-radius: 50%;
          color: #a19596;
        }

        &:hover svg {
          color: hsl(14, 65%, 12%);
        }
      }
    }

    & > .order-total {
      padding: 25px 0 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > span:first-child {
        color: hsl(12, 20%, 44%);
        font-size: 1.1rem;
      }

      & > span:last-child {
        color: hsl(14, 65%, 12%);
        font-size: 1.8rem;
        font-weight: bold;
      }
    }

    & > .carbon-neutral {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: hsl(13, 31%, 96%);
      padding: 15px 10px;
      margin: 20px 0;
      border-radius: 6px;

      & > p {
        margin: 0;
        margin-left: 10px;
        color: hsl(12, 20%, 44%);

        & > span {
          color: hsl(14, 65%, 12%);
          font-weight: bold;
        }
      }
    }

    & > .confirm-order {
      & > .confirm-order-btn {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
        border-radius: 40px;
        border: none;
        outline: none;
        background-color: #c83b0e;
        font-size: 1rem;
        color: #fff;
        transition: all 0.4s ease;
        cursor: pointer;

        &:hover {
          background-color: hsl(14, 65%, 35%);
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    width: 90vw;
    max-width: 1020px;
    margin: 0 auto;
  }
`;

export const StyledModal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);

  & > .modal-container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & > .modal {
      display: grid;
      grid-template-columns: auto;
      grid-row-gap: 20px;
      width: 90vw;
      max-width: 650px;
      height: 550px;

      background: #fff;
      padding: 30px;
      border-radius: 14px;

      & > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      & > .order-confirm-title {
        & > h1 {
          font-size: 2.2rem;
          margin: 0;
          letter-spacing: 0.8px;
          color: hsl(14, 65%, 15%);
        }

        & > p {
          color: hsl(14, 25%, 72%);
          margin: 10px 0;
        }
      }

      & > .orders-confirm-list {
        background-color: hsl(13, 31%, 96%);
        padding: 20px;
        border-radius: 15px;

        & > .order-item {
          display: grid;
          grid-template-columns: auto auto 1fr;
          align-items: center;
          gap: 15px;
          border-bottom: 1px solid hsl(13, 31%, 93%);
          padding: 20px 0;

          &:first-child {
            padding-top: 0;
          }

          & > .order-image > img {
            width: 72px;
            height: 72px;
            border-radius: 6px;
          }

          & > .order-info {
            & > h4 {
              margin: 0;
              color: hsl(14, 65%, 12%);
            }

            & > p {
              margin: 10px 0 0 0;

              & > span:first-child {
                color: #c83b0e;
                font-weight: bold;
                margin-right: 20px;
              }

              & > span:last-child {
                color: hsl(7, 20%, 70%);
                font-weight: bold;
              }
            }
          }

          & > .order-item-total-price {
            text-align: right;
            color: hsl(14, 65%, 12%);
            font-weight: bold;
            font-size: 1.3rem;
          }
        }

        & > .order-total {
          padding: 25px 0 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & > span:first-child {
            color: hsl(12, 20%, 44%);
            font-size: 1.1rem;
          }

          & > span:last-child {
            color: hsl(14, 65%, 12%);
            font-size: 1.8rem;
            font-weight: bold;
          }
        }
      }

      & > .start-new-order {
        margin-top: 10px;

        & > .start-new-order-btn {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
          border-radius: 40px;
          border: none;
          outline: none;
          background-color: #c83b0e;
          font-size: 1rem;
          color: #fff;
          transition: all 0.4s ease;
          cursor: pointer;

          &:hover {
            background-color: hsl(14, 65%, 35%);
          }
        }
      }
    }
  }

  @media screen and (max-width: 576px) {
    & > .modal-container {
      align-items: end;
    }
  }
`;
