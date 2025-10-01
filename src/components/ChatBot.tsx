import { useState, useRef, useEffect } from "react";
import {
  Send,
  Calendar,
  Clock,
  Star,
  ExternalLink,
  Bot,
  User,
} from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "calendar" | "reminder" | "rating";
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Appointment {
  date: string;
  time: string;
  service: string;
  customerName: string;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy el asistente virtual de Peluquería Bella Vista 💇‍♂️ ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [currentStep, setCurrentStep] = useState<
    | "initial"
    | "service"
    | "calendar"
    | "booking"
    | "confirmed"
    | "reminder"
    | "completed"
  >("initial");
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [_customerName, setCustomerName] = useState("");
  const [_appointment, setAppointment] = useState<Appointment | null>(null);
  const [_showReminder, setShowReminder] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  const services = [
    { name: "Corte de Cabello", duration: "30 min", price: "€20" },
    { name: "Corte + Barba", duration: "45 min", price: "€30" },
    { name: "Tinte", duration: "90 min", price: "€50" },
    { name: "Peinado Especial", duration: "60 min", price: "€35" },
  ];

  const timeSlots: TimeSlot[] = [
    { time: "09:00", available: true },
    { time: "09:30", available: false },
    { time: "10:00", available: true },
    { time: "10:30", available: true },
    { time: "11:00", available: false },
    { time: "11:30", available: true },
    { time: "12:00", available: true },
    { time: "14:00", available: true },
    { time: "14:30", available: false },
    { time: "15:00", available: true },
    { time: "15:30", available: true },
    { time: "16:00", available: true },
    { time: "16:30", available: true },
    { time: "17:00", available: false },
    { time: "17:30", available: true },
  ];

  // Scroll solo dentro del contenedor del chat
  const scrollToBottom = () => {
    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    if (!firstRender.current) {
      scrollToBottom();
    } else {
      firstRender.current = false;
    }
  }, [messages]);

  const addMessage = (
    text: string,
    sender: "user" | "bot",
    type: "text" | "calendar" | "reminder" | "rating" = "text"
  ) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      type,
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    addMessage(inputText, "user");
    const userMessage = inputText.toLowerCase();
    setInputText("");

    setTimeout(() => {
      handleBotResponse(userMessage);
    }, 1000);
  };

  const handleBotResponse = (userMessage: string) => {
    switch (currentStep) {
      case "initial":
        if (
          userMessage.includes("reservar") ||
          userMessage.includes("cita") ||
          userMessage.includes("hora") ||
          userMessage.includes("cortar")
        ) {
          addMessage(
            "¡Perfecto! Te ayudo a reservar una cita. ¿Qué servicio te interesa?",
            "bot"
          );
          setTimeout(() => {
            const servicesList = services
              .map(
                (service) =>
                  `• ${service.name} (${service.duration}) - ${service.price}`
              )
              .join("\n");
            addMessage(
              `Estos son nuestros servicios disponibles:\n\n${servicesList}\n\nEscribe el nombre del servicio que prefieres.`,
              "bot"
            );
          }, 1500);
          setCurrentStep("service");
        } else {
          addMessage(
            '¡Hola! Puedo ayudarte a reservar una cita. Solo dime "quiero reservar una cita" y te guío en el proceso.',
            "bot"
          );
        }
        break;

      case "service":
        const foundService = services.find(
          (service) =>
            userMessage.includes(service.name.toLowerCase()) ||
            (userMessage.includes("corte") && service.name.includes("Corte"))
        );

        if (foundService) {
          setSelectedService(foundService.name);
          addMessage(
            `Excelente elección: ${foundService.name} (${foundService.duration}) - ${foundService.price}`,
            "bot"
          );
          setTimeout(() => {
            addMessage(
              "Ahora, selecciona la fecha y hora que prefieras:",
              "bot",
              "calendar"
            );
          }, 1000);
          setCurrentStep("calendar");
        } else {
          addMessage(
            "No he podido identificar el servicio. Por favor, escribe uno de los servicios de la lista anterior.",
            "bot"
          );
        }
        break;

      case "calendar":
        addMessage(
          "Para completar tu reserva, necesito tu nombre completo:",
          "bot"
        );
        setCurrentStep("booking");
        break;

      case "booking":
        const name = inputText.trim();
        if (name) {
          setCustomerName(name);
          const newAppointment = {
            date: selectedDate,
            time: selectedTime,
            service: selectedService,
            customerName: name,
          };
          setAppointment(newAppointment);

          addMessage(`¡Perfecto, ${name}! Tu cita ha sido reservada:`, "bot");
          setTimeout(() => {
            addMessage(
              `📅 Servicio: ${selectedService}\n📍 Fecha: ${selectedDate}\n⏰ Hora: ${selectedTime}\n👤 Cliente: ${name}\n\nRecibirás un recordatorio 1 hora antes de tu cita. ¡Te esperamos!`,
              "bot"
            );
          }, 1000);
          setCurrentStep("confirmed");

          setTimeout(() => {
            setShowReminder(true);
            addMessage(
              "🔔 RECORDATORIO: Tu cita en Peluquería Bella Vista es en 1 hora. Te esperamos a las " +
                selectedTime +
                ". ¡Hasta pronto!",
              "bot",
              "reminder"
            );
          }, 8000);

          setTimeout(() => {
            addMessage(
              `¡Gracias por visitarnos, ${name}! Esperamos que estés contento con tu ${selectedService.toLowerCase()}. 🌟`,
              "bot"
            );
            setTimeout(() => {
              addMessage(
                "Nos encantaría conocer tu opinión. ¿Podrías valorar nuestro servicio?",
                "bot",
                "rating"
              );
            }, 2000);
            setCurrentStep("completed");
          }, 15000);
        }
        break;

      case "completed":
        addMessage(
          "¡Muchas gracias por tu valoración! Tu opinión es muy importante para nosotros. ¡Te esperamos pronto de nuevo! 💇‍♂️✨",
          "bot"
        );
        break;
    }
  };

  const handleDateTimeSelect = (date: string, time: string) => {
    setSelectedDate(date);
    setSelectedTime(time);
    addMessage(`He seleccionado: ${date} a las ${time}`, "user");
    handleBotResponse("fecha seleccionada");
  };

  const CalendarComponent = () => {
    const today = new Date();
    const dates = [];

    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        date: date.toISOString().split("T")[0],
        display: date.toLocaleDateString("es-ES", {
          weekday: "short",
          month: "short",
          day: "numeric",
        }),
      });
    }

    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 my-4 border border-blue-200">
        <div className="flex items-center mb-4">
          <Calendar className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-gray-800">
            Selecciona fecha y hora
          </h3>
        </div>

        <div className="grid gap-4">
          {dates.slice(0, 3).map((dateObj) => (
            <div
              key={dateObj.date}
              className="bg-white rounded-lg p-4 shadow-sm"
            >
              <h4 className="font-medium text-gray-700 mb-3 capitalize">
                {dateObj.display}
              </h4>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() =>
                      slot.available &&
                      handleDateTimeSelect(dateObj.display, slot.time)
                    }
                    className={`px-3 py-2 rounded-md text-sm transition-all ${
                      slot.available
                        ? "bg-green-100 hover:bg-green-200 text-green-800 cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!slot.available}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const ReminderComponent = () => (
    <div className="bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl p-4 my-4 border-l-4 border-orange-400">
      <div className="flex items-center">
        <Clock className="w-5 h-5 text-orange-600 mr-2" />
        <span className="font-semibold text-orange-800">
          Recordatorio Automático
        </span>
      </div>
    </div>
  );

  const RatingComponent = () => {
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const handleRatingSubmit = () => {
      setSubmitted(true);
      setTimeout(() => {
        addMessage(`He valorado el servicio con ${rating} estrellas`, "user");
        handleBotResponse("valoracion enviada");
      }, 500);
    };

    if (submitted) {
      return (
        <div className="bg-green-50 rounded-xl p-4 my-4 border border-green-200">
          <div className="text-center">
            <div className="text-green-600 font-semibold">
              ¡Valoración enviada!
            </div>
            <div className="text-sm text-green-700 mt-1">
              Gracias por tu feedback
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 my-4 border border-purple-200">
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-4">
            ¿Cómo calificarías nuestro servicio?
          </h3>
          <div className="flex justify-center mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="mx-1"
              >
                <Star
                  className={`w-8 h-8 ${
                    star <= rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  } transition-colors hover:text-yellow-400`}
                />
              </button>
            ))}
          </div>
          <div className="space-y-3">
            <button
              onClick={handleRatingSubmit}
              disabled={rating === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                rating > 0
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Enviar Valoración
            </button>
            <div className="flex items-center justify-center text-sm text-gray-600">
              <ExternalLink className="w-4 h-4 mr-1" />
              <span>También disponible en Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="md:max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-4">
        <div className="flex items-center">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mr-3">
            <Bot className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-white font-semibold">Peluquería Bella Vista</h2>
            <p className="text-blue-100 text-sm">
              Asistente Virtual • En línea
            </p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-xs">
              {message.sender === "bot" && (
                <div className="flex items-center mb-1">
                  <Bot className="w-4 h-4 text-blue-600 mr-1" />
                  <span className="text-xs text-gray-500">Asistente</span>
                </div>
              )}
              {message.sender === "user" && (
                <div className="flex items-center justify-end mb-1">
                  <span className="text-xs text-gray-500">Tú</span>
                  <User className="w-4 h-4 text-green-600 ml-1" />
                </div>
              )}

              <div
                className={`rounded-2xl px-4 py-2 ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                    : "bg-white text-gray-800 shadow-sm border"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.text}</p>
              </div>

              {message.type === "calendar" && <CalendarComponent />}
              {message.type === "reminder" && <ReminderComponent />}
              {message.type === "rating" && <RatingComponent />}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder="Escribe tu mensaje..."
            className="flex-1 px-4 py-2 border text-black border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent min-w-0"
          />
          <button
            onClick={handleSendMessage}
            className="flex-shrink-0 min-w-[44px] h-[44px] flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform cursor-pointer hover:scale-105"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Demo Instructions */}
      <div className="bg-gray-100 p-3 text-xs text-gray-600 text-center">
        💡 <strong>Demo:</strong> Escribe "quiero reservar una cita" para
        comenzar
      </div>
    </div>
  );
}
