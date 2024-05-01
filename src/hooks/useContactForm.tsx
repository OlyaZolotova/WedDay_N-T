import { useState } from "react";
import React from "react";
import { postData } from "../services/sendDataForm";

const TOKEN = "7124107366:AAHhqdgB0PGV1RCInBt1BuY6PiBs54SN86k"; // токен от BotFather
const CHAT_ID = "-1002071660145"; // chat_id для телеграм

export const useContactForm = () => {
  const uriRequest = "https://api.telegram.org/bot" + TOKEN + "/sendMessage";
  const [formData, setFormData] = useState({
    user_name: "",
    attending_wedding: "",
  });
  const [isSending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [sendError, setSendError] = useState(false);

  const onSubmissingForm = function (e: any) {
    e.preventDefault();

    if (formData.user_name !== "" && formData.attending_wedding !== "") {
      setSending(true);

      postData(uriRequest, JSON.stringify(formData))
        .then((res) => {
          setSuccess(true);
          console.log(res);
          sendMsg(formData);
          setSendError(false); // Сбросить ошибку отправки
        })
        .catch((e) => {
          setError(true); // Ошибка заполнения всех полей
          setSendError(true); // Ошибка отправки формы
          console.error(e);
        })
        .finally(() => {
          setFormData({
            user_name: "",
            attending_wedding: "",
          });
          setSending(false);

          setTimeout(() => {
            setSuccess(false);
            setError(false);
            setSendError(false);
          }, 5000);
        });
    } else {
      setError(true);
      console.error("Ошибка: не все поля формы заполнены");
    }
  };

  const onChangeName = (e: any) =>
    setFormData({ ...formData, user_name: e.target.value });

  const onChangeAttendingStatus = (e: any) =>
    setFormData({ ...formData, attending_wedding: e.target.value });

  const sendMsg = (data: any) => {
    const body = {
      chat_id: CHAT_ID,
      parse_mode: "Markdown",
      text: `*Данные гостя:*\n${data.user_name}\n*Присутствие на свадьбе:*\n${data.attending_wedding}`,
    };

    fetch(uriRequest, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Сообщение успешно отправлено в телеграм");
          setSendError(false); // Сбросить ошибку отправки
        } else {
          setSendError(true); // Ошибка отправки формы
          console.error(
            "Ошибка отправки сообщения в телеграм:",
            response.statusText
          );
        }
      })
      .catch((error) => {
        console.error("Ошибка отправки сообщения в телеграм:", error);
      });
  };

  return {
    name: formData.user_name,
    attendingWedding: formData.attending_wedding,
    onSubmissingForm,
    onChangeName,
    onChangeAttendingStatus,
    isSending,
    success,
    error,
    sendError,
  };
};
