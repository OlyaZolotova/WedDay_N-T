import "./style.scss";
import { useContactForm } from "../../hooks/useContactForm";
import { Fade, Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";
import { Modal } from "../Modal/Modal";

export const Form = () => {
  const {
    name,
    attendingWedding,
    isSending,
    success,
    error,
    sendError,
    onSubmissingForm,
    onChangeName,
    onChangeAttendingStatus,
  } = useContactForm();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Логика открытия модального окна при ошибке и при успешной отправке
  useEffect(() => {
    if (sendError) {
      setShowErrorModal(true);
    } else if (success) {
      setShowSuccessModal(true);
    }
  }, [sendError, success]);

  // Обработчики закрытия модального окна
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="form">
      <div className="container">
        <div className="form__wrapper">
          <Zoom triggerOnce={true} duration={3000}>
            <h3 className="form__title ">Form</h3>
          </Zoom>
          <Fade triggerOnce={true} duration={3000}>
            <div className="form__textwrap">
              <p className="form__text">Просьба заполнить анкету до 1 июля</p>
            </div>
            <form
              className="form__wrap"
              id="telegramForm"
              onSubmit={onSubmissingForm}
            >
              <div className="form__name">
                <p className="form__text form__text-subtitle">
                  Ваше Имя и Фамилия:
                </p>

                <input
                  className="form__input"
                  type="text"
                  value={name}
                  onChange={onChangeName}
                  name="user_name"
                  id="user-name-input"
                  placeholder="Введите свое Имя и Фамилию"
                  autoComplete="off"
                />
                <p className="form__text form__text-mini">
                  Если вы будете в компании своего спутника/спутницы, просим
                  дополнительно внести его/ее данные в графу.
                </p>
              </div>

              <div className="form__yes">
                <p className="form__text form__text-subtitle">
                  Планируете ли Вы присутствовать на свадьбе?
                </p>
                <div className="checkboxes__row">
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="yes">
                      <input
                        type="radio"
                        value="Да"
                        id="yes"
                        checked={attendingWedding === "Да"}
                        onChange={onChangeAttendingStatus}
                        name="attending"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">Да, буду на свадьбе</p>
                    </label>
                  </div>
                  <div className="checkboxes__item">
                    <label className="checkbox style-d" htmlFor="no">
                      <input
                        type="radio"
                        value="Нет"
                        id="no"
                        checked={attendingWedding === "Нет"}
                        onChange={onChangeAttendingStatus}
                        name="attending"
                      />
                      <div className="checkbox__checkmark"></div>
                      <p className="checkbox__body">
                        Нет, не смогу быть на свадьбе
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              {error && (
                <div className="form__error">
                  <p className="error__text">Заполните все поля анкеты!</p>
                </div>
              )}
              <div className="form__wrapbtn">
                <button className="form__btn" type="submit">
                  Отправить
                </button>
                {isSending && <div className="loader"></div>}
              </div>
            </form>
          </Fade>
        </div>
        {/* <Fade triggerOnce={true} duration={3000}> */}
          <div className="form__textwrap">
            <p className="form__text">
              Если Ваш ответ положительный, просьба, после отправки анкеты,
              перейти в телеграмм-чат по ссылке ниже, где будет дополнительная
              информация.
            </p>
            <a
              className="form__btn form__btn-telegram"
              href="https://t.me/+ZqPXlmRSU78yZDc6"
            >
              Telegram chat
            </a>
            <div className="form__imgwrap">
              <div className="form__linkimg">
                <img className="form__img" src="/Group 37.svg"></img>
              </div>
            </div>
          </div>
        {/* </Fade> */}
      </div>
      {showErrorModal && (
        <Modal
          isVisible={true}
          title="Произошла ошибка при отправке анкеты"
          onClose={handleCloseErrorModal}
        />
      )}

      {showSuccessModal && (
        <Modal
          isVisible={true}
          title="Анкета успешно отправлена"
          onClose={handleCloseSuccessModal}
        />
      )}
    </div>
  );
};
