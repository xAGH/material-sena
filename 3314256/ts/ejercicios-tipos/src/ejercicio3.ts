/*
3. Sistema de notificaciones
Define una unión de tipos para representar notificaciones por email, SMS y push.
Cada una debe tener propiedades distintas.
Implementa una función enviarNotificacion que reciba una notificación y ejecute
una lógica distinta dependiendo del tipo (usando type narrowing).
*/
interface Email {
  to: string;
  from: string;
  subject: string;
  body: string;
  notificationType: "email";
}

interface SMS {
  fromNumber: string;
  toNumber: string;
  message: string;
  notificationType: "sms";
}

interface Push {
  position: [number, number];
  message: string;
  type: string;
  notificationType: "push";
}

type Notificacion = Email | SMS | Push;

function enviarNotificacion(notificacion: Notificacion) {
  switch (notificacion.notificationType) {
    case "email":
      notificacion.from;
      notificacion.to;
      notificacion.subject;
      notificacion.body;
      break;
    case "push":
      notificacion.position;
      notificacion.type;
      notificacion.message;
      break;
    case "sms":
      notificacion.fromNumber;
      notificacion.toNumber;
      notificacion.message;
  }
}

const push: Push = {
  position: [200, 500],
  message: "Hola",
  type: "Error",
  notificationType: "push",
};

enviarNotificacion(push);
