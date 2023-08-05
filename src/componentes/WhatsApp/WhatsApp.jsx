import React from "react";
import { FloatingWhatsApp } from 'react-floating-whatsapp';

/**
 * Repo: https://github.com/awran5/react-floating-whatsapp
 */

export function Whatsapp() {
    return (
        <div className="App">
            <FloatingWhatsApp
                phoneNumber="974009426"
                accountName="Victoria"
                allowEsc
                allowClickAway
                notification
                notificationSound={true}
                chatMessage='Hola, ¿Como estás? ¿En que puedo ayudarte?'
                placeholder="Escribe tu mensaje..."
                statusMessage="Respuesta tipica, 5 minutos."
                notificationDelay={3}
            />
        </div>
    );
}